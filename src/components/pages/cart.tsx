import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  CartItem as CartItemType,
} from '../../store/slices/cartSlice';
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
type CartNavigationProp = StackNavigationProp<RootStackParamList>;

// Cart Item Component
const CartItem = ({item}: {item: CartItemType}) => {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
    } else {
      // If quantity is 1, remove the item from cart completely
      dispatch(removeFromCart(item.id));
    }
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  return (
    <View style={styles.cartItem}>
      <Image source={{uri: item.image}} style={styles.productImage} />

      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.variantText}>
          {item.color ? `${item.color}, ` : ''}Size: {item.size}
        </Text>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>

      <View style={styles.quantityControls}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={handleDecrease}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityValue}>{item.quantity}</Text>

        <TouchableOpacity
          style={styles.quantityButton}
          onPress={handleIncrease}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Main Cart Component
const Cart = () => {
  const navigation = useNavigation<CartNavigationProp>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const hasItems = cartItems.length > 0;

  const subtotal = cartItems.reduce(
    (sum: number, item: CartItemType) => sum + item.price * item.quantity,
    0,
  );

  // Format number to display correct decimal places
  const formatPrice = (price: number) => {
    return price.toFixed(0);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const handleCheckout = () => {
    // Navigate to the OrderSummary screen
    navigation.navigate('OrderSummary');
  };

  const renderEmptyCart = () => {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your shopping bag is empty</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Image source={icons.back} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Shopping Bag ({cartItems.length})</Text>
      </View>

      {/* Cart Items */}
      {hasItems ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CartItem item={item} />}
          contentContainerStyle={styles.cartList}
        />
      ) : (
        renderEmptyCart()
      )}

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${formatPrice(subtotal)}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total</Text>
          <Text style={styles.summaryTotalValue}>${formatPrice(subtotal)}</Text>
        </View>

        {hasItems && (
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={handleCheckout}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.text,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  cartList: {
    paddingHorizontal: 16,
  },
  cartItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  productImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  variantText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  quantityValue: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 12,
  },
  summaryContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  summaryTotalValue: {
    fontSize: 20,
    fontWeight: '600',
  },
  checkoutButton: {
    backgroundColor: colors.primary || '#4A80F0',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
  },
});

export default Cart;
