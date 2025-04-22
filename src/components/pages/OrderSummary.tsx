import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Modal,
  ScrollView,
  Platform,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import {clearCart} from '../../store/slices/cartSlice';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {colors} from '../../assets/theme/colors';
import { icons } from '../../assets/icons';

// Define the navigation param list type
type RootStackParamList = {
  MainTabs: undefined;
  ProductDetail: {productId: string};
  OrderSummary: undefined;
  OrderConfirmation: undefined;
};

// Define the navigation prop type
type OrderSummaryNavigationProp = StackNavigationProp<RootStackParamList>;

// PaymentOption interface
interface PaymentOption {
  id: string;
  type: string;
  lastFour: string;
  billingAddress: string;
}

// PaymentModal Component
const PaymentModal = ({
  visible,
  onClose,
  onSelect,
  selectedPayment,
}: {
  visible: boolean;
  onClose: () => void;
  onSelect: (payment: PaymentOption) => void;
  selectedPayment: PaymentOption | null;
}) => {
  // Mock payment options
  const paymentOptions: PaymentOption[] = [
    {
      id: '1',
      type: 'Visa',
      lastFour: '2319',
      billingAddress: '511 Grant Avenue, Flat 23B, San Francisco',
    },
    {
      id: '2',
      type: 'Mastercard',
      lastFour: '4532',
      billingAddress: '511 Grant Avenue, Flat 23B, San Francisco',
    },
    {
      id: '3',
      type: 'American Express',
      lastFour: '7654',
      billingAddress: '511 Grant Avenue, Flat 23B, San Francisco',
    },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Payment Method</Text>

          {paymentOptions.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.paymentOption,
                selectedPayment?.id === option.id && styles.selectedPayment,
              ]}
              onPress={() => onSelect(option)}>
              <View style={styles.paymentDetails}>
                <Text style={styles.paymentType}>
                  {option.type} (**** {option.lastFour})
                </Text>
                <Text style={styles.paymentAddress}>
                  {option.billingAddress}
                </Text>
              </View>
              {selectedPayment?.id === option.id && (
                <View style={styles.checkmark}>
                  <Text style={styles.checkmarkText}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// OrderSummary Component
const OrderSummary = () => {
  const navigation = useNavigation<OrderSummaryNavigationProp>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption>({
    id: '1',
    type: 'Visa',
    lastFour: '2319',
    billingAddress: '511 Grant Avenue, Flat 23B, San Francisco',
  });

  // Hardcoded address
  const address = {
    city: 'San Francisco',
    zipCode: '94107',
    street: '511 Grant Avenue',
    unit: 'Flat 23B',
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity,
    0,
  );
  const delivery = 0; // Free delivery
  const taxRate = 0.0863; // 8.63% tax rate
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes + delivery;

  // Format number to display correct decimal places
  const formatPrice = (price: number) => {
    return price.toFixed(price % 1 === 0 ? 0 : 2);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const handlePlaceOrder = () => {
    // Here you would implement the order placement
    console.log('Order placed');

    // Clear the cart
    dispatch(clearCart());

    // Navigate to order confirmation screen
    navigation.navigate('OrderConfirmation');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Image source={icons.back} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Order Summary</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Delivery Address */}
        <TouchableOpacity style={styles.sectionContainer}>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Delivery address</Text>
            <View style={styles.addressContainer}>
              <Text style={styles.addressText}>
                {address.city}, {address.zipCode}
              </Text>
              <Text style={styles.addressText}>
                {address.street}, {address.unit}
              </Text>
            </View>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        {/* Payment Method */}
        <TouchableOpacity
          style={styles.sectionContainer}
          onPress={() => setPaymentModalVisible(true)}>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Payment</Text>
            <View style={styles.paymentContainer}>
              <Text style={styles.addressText}>
                {address.street}, {address.unit}, {address.city}
              </Text>
              <Text style={styles.paymentText}>
                {selectedPayment.type} (****{selectedPayment.lastFour})
              </Text>
            </View>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        {/* Order Details */}
        <View style={styles.orderDetailsContainer}>
          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>
              Items ({cartItems.length})
            </Text>
            <Text style={styles.orderDetailValue}>
              ${formatPrice(subtotal)}
            </Text>
          </View>
          <View style={styles.subtotalRow}>
            <Text style={styles.orderDetailText}>${formatPrice(subtotal)}</Text>
            <Text style={styles.orderDetailText}>Total</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Subtotal</Text>
            <Text style={styles.orderDetailValue}>
              ${formatPrice(subtotal)}
            </Text>
          </View>

          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Delivery</Text>
            <Text style={styles.orderDetailValue}>
              ${formatPrice(delivery)}
            </Text>
          </View>

          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Taxes</Text>
            <Text style={styles.orderDetailValue}>${formatPrice(taxes)}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${formatPrice(total)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Place Order Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={handlePlaceOrder}>
          <Text style={styles.placeOrderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Modal */}
      <PaymentModal
        visible={paymentModalVisible}
        onClose={() => setPaymentModalVisible(false)}
        onSelect={payment => {
          setSelectedPayment(payment);
          setPaymentModalVisible(false);
        }}
        selectedPayment={selectedPayment}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: '400',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionContent: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  addressContainer: {
    marginTop: 4,
  },
  addressText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 2,
  },
  paymentContainer: {
    marginTop: 4,
  },
  paymentText: {
    fontSize: 16,
    color: '#666',
    marginTop: 2,
  },
  chevron: {
    fontSize: 24,
    color: '#999',
  },
  orderDetailsContainer: {
    padding: 16,
  },
  orderDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  subtotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  orderDetailLabel: {
    fontSize: 16,
    color: '#333',
  },
  orderDetailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.text,
  },
  orderDetailText: {
    fontSize: 16,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  placeOrderButton: {
    backgroundColor: colors.primary || '#4A80F0',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 36,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedPayment: {
    backgroundColor: '#f8f8f8',
  },
  paymentDetails: {
    flex: 1,
  },
  paymentType: {
    fontSize: 16,
    fontWeight: '500',
  },
  paymentAddress: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary || '#4A80F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: colors.primary || '#4A80F0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OrderSummary;
