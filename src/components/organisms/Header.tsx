import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import {colors} from '../../assets/theme/colors';

export interface HeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  onCartPress?: () => void;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  style,
  showBackButton = false,
  onBackPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Icon name="back" size={24} />
          </TouchableOpacity>
        )}
        <Text variant="header" style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  title: {
    fontWeight: '700',
  },
  cartButton: {
    padding: 8,
  },
  cartIcon: {
    width: 24,
    height: 24,
    tintColor: colors.primary,
  },
});

export default Header;
