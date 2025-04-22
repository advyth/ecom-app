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
const CARD_WIDTH = (width - 48) / 2; // 2 columns with 16px padding on sides and 16px between

// Import the ProductTag enum from the products file
import { ProductTag } from '../../data/mock/products';

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  tags?: ProductTag[]; // Add tags to Product interface
}

interface ProductCardProps {
  product: Product;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

// Helper function to get tag display text
const getTagDisplayText = (tag: ProductTag): string => {
  switch (tag) {
    case ProductTag.FAST_SELLING:
      return 'Fast Selling';
    case ProductTag.DISCOUNTED:
      return 'Discounted';
    case ProductTag.NEW_ARRIVAL:
      return 'New Arrival';
    case ProductTag.LIMITED_EDITION:
      return 'Limited Edition';
    case ProductTag.BEST_SELLER:
      return 'Best Seller';
    default:
      return '';
  }
};

// Helper function to get tag color
const getTagColor = (tag: ProductTag): string => {
  switch (tag) {
    case ProductTag.FAST_SELLING:
      return '#FF7A00'; // Orange
    case ProductTag.DISCOUNTED:
      return '#FF3B30'; // Red
    case ProductTag.NEW_ARRIVAL:
      return '#34C759'; // Green
    case ProductTag.LIMITED_EDITION:
      return '#AF52DE'; // Purple
    case ProductTag.BEST_SELLER:
      return '#007AFF'; // Blue
    default:
      return '#8E8E93'; // Gray
  }
};

const ProductCard: React.FC<ProductCardProps> = ({product, style, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.image}} containerStyle={styles.image} />
        
        {/* Display tags if available */}
        {product.tags && product.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {product.tags.map((tag, index) => (
              <View 
                key={index} 
                style={[
                  styles.tagBadge, 
                  { backgroundColor: getTagColor(tag) }
                ]}
              >
                <Text style={styles.tagText}>
                  {getTagDisplayText(tag)}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text variant="body" style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text variant="price" style={styles.price}>
          ${product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  imageContainer: {
    width: '100%',
    height: CARD_WIDTH * 1.2, // Maintain aspect ratio
    position: 'relative', // Added for absolute positioning of tags
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    marginBottom: 4,
  },
  price: {
    marginTop: 4,
  },
  tagsContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    flexDirection: 'column',
  },
  tagBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 4,
  },
  tagText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default ProductCard;
