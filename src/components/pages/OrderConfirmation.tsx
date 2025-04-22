import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {colors} from '../../assets/theme/colors';
import Image from '../atoms/Image';

// Define the navigation param list type
type RootStackParamList = {
  MainTabs: {screen?: string};
  ProductDetail: {productId: string};
  OrderSummary: undefined;
  OrderConfirmation: undefined;
};

// Define the navigation prop type
type OrderConfirmationNavigationProp = StackNavigationProp<RootStackParamList>;

const OrderConfirmation = () => {
  const navigation = useNavigation<OrderConfirmationNavigationProp>();

  const goToHome = () => {
    // Use popToTop to get the backward animation, but specify Home tab
    navigation.dispatch(StackActions.popToTop());

    // Then immediately navigate to the Home tab within MainTabs
    navigation.navigate('MainTabs', {screen: 'Home'});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goToHome} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Order Confirmation</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Check Mark Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=500&auto=format&fit=crop',
            }}
            containerStyle={styles.checkImageContainer}
            imageStyle={styles.checkImage}
          />
        </View>

        {/* Confirmation Message */}
        <View style={styles.messageContainer}>
          <Text style={styles.thankYouText}>Thank you for your order!</Text>
          <Text style={styles.confirmationText}>
            Your order is confirmed and will be delivered soon.
          </Text>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.homeButton} onPress={goToHome}>
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  backButtonText: {
    fontSize: 24,
    color: colors.text,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
    textAlign: 'center',
    marginRight: 24, // To center the title correctly accounting for the back button
  },
  content: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkImageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#f7f7f7',
  },
  checkImage: {
    resizeMode: 'cover',
  },
  messageContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  confirmationText: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: 24,
  },
  homeButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  homeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OrderConfirmation;
