import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
  Dimensions,
} from 'react-native';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - 32) / 2; // 2 columns with 16px padding on sides

export interface Category {
  id: string;
  name: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image source={{uri: category.image}} containerStyle={styles.image} />
        <View style={styles.overlay}>
          <Text variant="subtitle" style={styles.name} color="#fff">
            {category.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {
    borderRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  name: {
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default CategoryCard;
