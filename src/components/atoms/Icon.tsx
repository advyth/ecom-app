import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native';
import {icons} from '../../assets/icons';

// Define common icon names used in our application
export type IconName =
  | 'heart'
  | 'heart-outline'
  | 'star'
  | 'cart'
  | 'back'
  | 'search'
  | 'plus'
  | 'minus'
  | 'close'
  | 'home';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = '#000',
  style,
}) => {
  // Use the icons from our central icon registry
  return (
    <View style={[styles.container, style]}>
      <Image
        source={icons[name]}
        style={[
          styles.icon as ImageStyle,
          {width: size, height: size, tintColor: color},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
});

export default Icon;
