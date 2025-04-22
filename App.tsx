import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  Text as RNText,
} from 'react-native';
import Home from './src/components/pages/home';
import Search from './src/components/pages/search';
import Cart from './src/components/pages/cart';
import ProductDetail from './src/components/pages/ProductDetail';
import OrderSummary from './src/components/pages/OrderSummary';
import OrderConfirmation from './src/components/pages/OrderConfirmation';
import {icons} from './src/assets/icons';
import {colors} from './src/assets/theme/colors';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import {useSelector} from 'react-redux';
import {RootState} from './src/store';

// Type definitions for our navigation
type RootStackParamList = {
  MainTabs: undefined;
  ProductDetail: {productId: string};
  OrderSummary: undefined;
  OrderConfirmation: undefined;
};

type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Cart: undefined;
};

// Create the navigators
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

/**
 * Creates a tab bar icon component
 * @param source The image source for the icon
 * @param focused Whether the tab is focused
 * @returns An Image component for the tab bar icon
 */
const createTabBarIcon = (source: ImageSourcePropType, focused: boolean) => {
  return (
    <Image
      source={source}
      style={focused ? styles.activeIcon : styles.inactiveIcon}
    />
  );
};

// Tab icon renderers
const renderHomeIcon = ({focused}: {focused: boolean}) =>
  createTabBarIcon(icons.home, focused);
const renderSearchIcon = ({focused}: {focused: boolean}) =>
  createTabBarIcon(icons.search, focused);

// Cart icon with badge
const CartIconWithBadge = ({focused}: {focused: boolean}) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <View style={{width: 24, height: 24}}>
      {createTabBarIcon(icons.cart, focused)}

      {itemCount > 0 && (
        <View style={styles.badge}>
          <RNText style={styles.badgeText}>
            {itemCount > 99 ? '99+' : itemCount}
          </RNText>
        </View>
      )}
    </View>
  );
};

// Main tab navigator
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: renderSearchIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: CartIconWithBadge,
        }}
      />
    </Tab.Navigator>
  );
};

// Main app with stack navigator
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainTabs" component={MainTabNavigator} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="OrderSummary" component={OrderSummary} />
            <Stack.Screen
              name="OrderConfirmation"
              component={OrderConfirmation}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  activeIcon: {
    width: 24,
    height: 24,
    tintColor: colors.primary,
  },
  inactiveIcon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
