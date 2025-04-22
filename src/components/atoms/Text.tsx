import React from 'react';
import {
  Text as RNText,
  TextStyle,
  StyleSheet,
  StyleProp,
  TextProps as RNTextProps,
} from 'react-native';

export type TextVariant =
  | 'header'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'price'
  | 'sectionTitle'
  | 'button';

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color,
  style,
  ...rest
}) => {
  return (
    <RNText
      style={[styles.base, styles[variant], color && {color}, style]}
      {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: 'System',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
  },
  caption: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Text;
