import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import Home from './src/components/pages/home';
import Search from './src/components/pages/search';
import Cart from './src/components/pages/cart';
import { icons } from './src/assets/icons';
import {colors} from './src/assets/theme/colors';

type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

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
const renderHomeIcon = ({ focused }: { focused: boolean }) => createTabBarIcon(icons.home, focused);
const renderSearchIcon = ({ focused }: { focused: boolean }) => createTabBarIcon(icons.search, focused);
const renderCartIcon = ({ focused }: { focused: boolean }) => createTabBarIcon(icons.cart, focused);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      >
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
            tabBarIcon: renderCartIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
});
