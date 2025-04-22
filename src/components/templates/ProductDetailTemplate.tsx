import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ProductData} from '../../data/mock/products';
import Header from '../organisms/Header';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import Icon from '../atoms/Icon';

const {width} = Dimensions.get('window');
const IMAGE_HEIGHT = width * 1.2;

interface ProductDetailTemplateProps {
  product: ProductData;
  onBackPress?: () => void;
  onAddToCartPress?: () => void;
  onBuyNowPress?: () => void;
  onFavoritePress?: () => void;
  onColorSelect?: (color: string) => void;
  onSizeSelect?: (size: string) => void;
  selectedColor?: string;
  selectedSize?: string;
  isFavorite?: boolean;
}

const ProductDetailTemplate: React.FC<ProductDetailTemplateProps> = ({
  product,
  onBackPress,
  onAddToCartPress,
  onFavoritePress,
  onColorSelect,
  onSizeSelect,
  selectedColor,
  selectedSize,
  isFavorite = false,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <Header
          title="Product Detail"
          showBackButton
          onBackPress={onBackPress}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: product.image}}
              containerStyle={styles.image}
            />
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={onFavoritePress}>
              <Icon
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={24}
                color={isFavorite ? '#ff4757' : '#333'}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.titleRow}>
              <View style={styles.titleContainer}>
                <Text variant="title" style={styles.title}>
                  {product.title}
                </Text>
                {product.rating && (
                  <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#FFD700" />
                    <Text variant="body" style={styles.ratingText}>
                      {product.rating}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.priceContainer}>
                {product.discountPrice ? (
                  <>
                    <Text variant="price" style={styles.price}>
                      ${product.discountPrice}
                    </Text>
                    <Text variant="body" style={styles.originalPrice}>
                      ${product.price}
                    </Text>
                  </>
                ) : (
                  <Text variant="price" style={styles.price}>
                    ${product.price}
                  </Text>
                )}
              </View>
            </View>

            {product.description && (
              <View style={styles.section}>
                <Text variant="sectionTitle">Description</Text>
                <Text variant="body" style={styles.description}>
                  {product.description}
                </Text>
              </View>
            )}

            {product.colors && product.colors.length > 0 && (
              <View style={styles.section}>
                <Text variant="sectionTitle">Colors</Text>
                <View style={styles.optionsRow}>
                  {product.colors.map(color => (
                    <TouchableOpacity
                      key={color}
                      style={[
                        styles.colorOption,
                        selectedColor === color ? styles.selectedColorBorder : styles.transparentBorder,
                      ]}
                      onPress={() => onColorSelect?.(color)}>
                      <Text
                        variant="body"
                        style={
                          selectedColor === color
                            ? styles.selectedOptionText
                            : styles.optionText
                        }>
                        {color}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <View style={styles.section}>
                <Text variant="sectionTitle">Sizes</Text>
                <View style={styles.optionsRow}>
                  {product.sizes.map(size => (
                    <TouchableOpacity
                      key={size}
                      style={[
                        styles.sizeOption,
                          selectedSize === size ? styles.selectedSizeBorder : styles.defaultSizeBorder,
                      ]}
                      onPress={() => onSizeSelect?.(size)}>
                      <Text
                        variant="body"
                        style={
                          selectedSize === size
                            ? styles.selectedOptionText
                            : styles.optionText
                        }>
                        {size}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={[styles.button, styles.buyNowButton]}
            onPress={onAddToCartPress}>
            <Text variant="button" color="#fff">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: IMAGE_HEIGHT,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  titleContainer: {
    flex: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    color: '#666',
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e88e5',
  },
  originalPrice: {
    fontSize: 16,
    color: '#666',
    textDecorationLine: 'line-through',
    marginTop: 4,
  },
  section: {
    marginBottom: 20,
  },
  description: {
    lineHeight: 22,
    color: '#666',
    marginTop: 8,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  colorOption: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginRight: 12,
    marginBottom: 8,
    borderWidth: 2,
    backgroundColor: '#f5f5f5',
  },
  selectedColorBorder: {
    borderColor: '#1e88e5',
  },
  transparentBorder: {
    borderColor: 'transparent',
  },
  sizeOption: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 12,
    marginBottom: 8,
    borderWidth: 1,
  },
  selectedSizeBorder: {
    borderColor: '#1e88e5',
  },
  defaultSizeBorder: {
    borderColor: '#e0e0e0',
  },
  optionText: {
    color: '#666',
  },
  selectedOptionText: {
    color: '#1e88e5',
    fontWeight: '600',
  },
  bottomBar: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#1e88e5',
    backgroundColor: '#fff',
  },
  buyNowButton: {
    backgroundColor: '#1e88e5',
  },
});

export default ProductDetailTemplate;
