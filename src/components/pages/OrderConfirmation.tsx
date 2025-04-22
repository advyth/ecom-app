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

// Define the navigation param list type
type RootStackParamList = {
  MainTabs: {screen?: string};
  ProductDetail: {productId: string};
  OrderSummary: undefined;
  OrderConfirmation: undefined;
};

// Define the navigation prop type
type OrderConfirmationNavigationProp = StackNavigationProp<RootStackParamList>;

// Food Illustration Component - Simple collage style like in the screenshot
const FoodIllustration = () => {
  return (
    <View style={illustrationStyles.container}>
      <View style={illustrationStyles.row}>
        <View
          style={[
            illustrationStyles.item,
            illustrationStyles.largeItem,
            illustrationStyles.greenItem,
          ]}
        />
        <View style={illustrationStyles.column}>
          <View
            style={[illustrationStyles.item, illustrationStyles.sandItem]}
          />
          <View style={[illustrationStyles.item, illustrationStyles.tanItem]} />
        </View>
      </View>
      <View style={illustrationStyles.row}>
        <View style={illustrationStyles.column}>
          <View
            style={[illustrationStyles.item, illustrationStyles.pinkItem]}
          />
          <View
            style={[illustrationStyles.item, illustrationStyles.mintItem]}
          />
        </View>
        <View
          style={[
            illustrationStyles.item,
            illustrationStyles.largeItem,
            illustrationStyles.blueItem,
          ]}
        />
      </View>
      <View style={illustrationStyles.row}>
        <View
          style={[
            illustrationStyles.item,
            illustrationStyles.wideItem,
            illustrationStyles.peachItem,
          ]}
        />
        <View style={[illustrationStyles.item, illustrationStyles.skyItem]} />
        <View style={[illustrationStyles.item, illustrationStyles.beigeItem]} />
      </View>
    </View>
  );
};

const illustrationStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 5,
  },
  item: {
    flex: 1,
    borderRadius: 4,
    marginBottom: 5,
  },
  largeItem: {
    flex: 2,
    marginRight: 5,
  },
  wideItem: {
    flex: 2,
  },
  greenItem: {
    backgroundColor: '#B8D4C8',
  },
  sandItem: {
    backgroundColor: '#F2D0A7',
  },
  tanItem: {
    backgroundColor: '#EACEB4',
  },
  pinkItem: {
    backgroundColor: '#E5D1D0',
  },
  mintItem: {
    backgroundColor: '#C7D8C6',
  },
  blueItem: {
    backgroundColor: '#D5E2E3',
  },
  peachItem: {
    backgroundColor: '#EFD9CE',
  },
  skyItem: {
    backgroundColor: '#C9D7DD',
  },
  beigeItem: {
    backgroundColor: '#F2D7BD',
  },
});

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
        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <FoodIllustration />
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
  illustrationContainer: {
    marginVertical: 24,
    height: 300, // Fixed height for the illustration
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    overflow: 'hidden',
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
