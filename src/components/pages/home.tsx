import React from 'react';
import { useNavigation } from '@react-navigation/native';
import HomeTemplate from '../templates/HomeTemplate';
import { BannerItem } from '../organisms/Banner';
import { Product } from '../molecules/ProductCard';
import { mockData } from '../../data/mock';

const Home = () => {
  // Cast the navigation to include our route types
  const navigation = useNavigation<any>();

  const handleBannerPress = (banner: BannerItem) => {
    // Navigate to category page
    console.log('Banner pressed:', banner.title);
  };

  const handleProductPress = (product: Product) => {
    // Navigate to product details page
    console.log('Product pressed, attempting to navigate to ProductDetail with id:', product.id);
    
    try {
      navigation.navigate('ProductDetail', { productId: product.id });
      console.log('Navigation call completed');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleCartPress = () => {
    // Navigate to cart
    navigation.navigate('Cart');
  };

  const handleViewAllPress = () => {
    // Navigate to all products
    console.log('View all pressed');
  };

  return (
    <HomeTemplate
      storeName="E-Commerce"
      featuredBanners={mockData.banners.featured}
      trendingProducts={mockData.products.trending}
      newArrivals={mockData.products.new}
      featuredProducts={mockData.products.featured}
      shoesProducts={mockData.products.shoes}
      onBannerPress={handleBannerPress}
      onProductPress={handleProductPress}
      onCartPress={handleCartPress}
      onViewAllPress={handleViewAllPress}
    />
  );
};

export default Home;
