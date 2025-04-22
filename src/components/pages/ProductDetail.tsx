import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/slices/cartSlice';
import ProductDetailTemplate from '../templates/ProductDetailTemplate';
import {getProductById, ProductData} from '../../data/mock/products';

const ProductDetail = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const dispatch = useDispatch();

  // Extract the product ID from route params with debug logging
  console.log('ProductDetail screen - route params:', route.params);
  const productId = route.params?.productId || '1'; // Default to first product if no ID
  console.log('Using productId:', productId);

  // State for the product
  const [product, setProduct] = useState<ProductData | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined,
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined,
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the product data when component mounts or productId changes
  useEffect(() => {
    console.log('Fetching product data for id:', productId);
    const productData = getProductById(productId);

    if (productData) {
      console.log('Product data found:', productData.title);
      setProduct(productData);

      // Set default selections if available
      if (productData.colors && productData.colors.length > 0) {
        setSelectedColor(productData.colors[0]);
      }

      if (productData.sizes && productData.sizes.length > 0) {
        setSelectedSize(productData.sizes[0]);
      }

      setLoading(false);
    } else {
      console.error('Product not found for id:', productId);
      setError(`Product with ID ${productId} not found`);
      setLoading(false);
    }
  }, [productId]);

  // Show notification toast/alert
  const showAddedToCartNotification = (productName: string) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(`${productName} added to cart!`, ToastAndroid.SHORT);
    } else {
      // For iOS
      Alert.alert(
        'Added to Cart',
        `${productName} has been added to your cart.`,
      );
    }
  };

  // Handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Handle add to cart press
  const handleAddToCartPress = () => {
    if (!product) return;

    console.log('Added to cart:', {
      product: product.title,
      color: selectedColor,
      size: selectedSize,
    });

    // Dispatch add to cart action to Redux store
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        brand: product.category || 'Brand',
        size: selectedSize || 'Standard',
        color: selectedColor,
        price: product.price,
        quantity: 1,
        image: product.image,
      }),
    );

    // Show notification
    showAddedToCartNotification(product.title);
  };

  // Handle favorite press
  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  // Handle color selection
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  // Handle size selection
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  // Loading state
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading product details...</Text>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.linkText} onPress={handleBackPress}>
          Go back to Home
        </Text>
      </View>
    );
  }

  // No product found
  if (!product) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Product not found</Text>
        <Text style={styles.linkText} onPress={handleBackPress}>
          Go back to Home
        </Text>
      </View>
    );
  }

  return (
    <ProductDetailTemplate
      product={product}
      onBackPress={handleBackPress}
      onAddToCartPress={handleAddToCartPress}
      onFavoritePress={handleFavoritePress}
      onColorSelect={handleColorSelect}
      onSizeSelect={handleSizeSelect}
      selectedColor={selectedColor}
      selectedSize={selectedSize}
      isFavorite={isFavorite}
    />
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 16,
  },
  linkText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ProductDetail;
