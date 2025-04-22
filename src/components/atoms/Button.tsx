import React from 'react';
import { 
  TouchableOpacity, 
  StyleSheet, 
  ViewStyle, 
  TextStyle,
  TouchableOpacityProps,
  StyleProp
} from 'react-native';
import Text from './Text';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  variant = 'primary', 
  containerStyle, 
  textStyle,
  ...rest 
}) => {
  const getTextStyle = () => {
    switch(variant) {
      case 'primary': return styles.primaryText;
      case 'secondary': return styles.secondaryText;
      case 'outline': return styles.outlineText;
      default: return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.container, styles[variant], containerStyle]}
      activeOpacity={0.8}
      {...rest}
    >
      <Text 
        variant="body" 
        style={[
          styles.text, 
          getTextStyle(), 
          textStyle
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#000',
  },
  secondary: {
    backgroundColor: '#e6e6e6',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    fontWeight: '500',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#000',
  },
  outlineText: {
    color: '#000',
  },
});

export default Button; 