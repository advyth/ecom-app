import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Header from '../organisms/Header';
import FeaturedBanners from '../organisms/FeaturedBanners';
import ProductList from '../organisms/ProductList';
import {BannerItem} from '../organisms/Banner';
import {Product} from '../molecules/ProductCard';

interface HomeTemplateProps {
  storeName: string;
  featuredBanners: BannerItem[];
  trendingProducts: Product[];
  newArrivals?: Product[];
  featuredProducts?: Product[];
  shoesProducts?: Product[];
  onBannerPress?: (banner: BannerItem) => void;
  onProductPress?: (product: Product) => void;
  onCartPress?: () => void;
  onViewAllPress?: () => void;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({
  storeName,
  featuredBanners,
  trendingProducts,
  newArrivals = [],
  featuredProducts = [],
  shoesProducts = [],
  onBannerPress,
  onProductPress,
  onCartPress,
  onViewAllPress,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <Header title={storeName} onCartPress={onCartPress} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FeaturedBanners
            banners={featuredBanners}
            onBannerPress={onBannerPress}
            style={styles.featuredBanners}
          />

          {/* Trending Products */}
          {trendingProducts.length > 0 && (
            <ProductList
              title="Trending Now"
              products={trendingProducts}
              onProductPress={onProductPress}
              onViewAllPress={onViewAllPress}
              style={styles.productSection}
            />
          )}

          {/* New Arrivals */}
          {newArrivals.length > 0 && (
            <ProductList
              title="New Arrivals"
              products={newArrivals}
              onProductPress={onProductPress}
              onViewAllPress={onViewAllPress}
              style={styles.productSection}
            />
          )}

          {/* Featured Products */}
          {featuredProducts.length > 0 && (
            <ProductList
              title="Featured Products"
              products={featuredProducts}
              onProductPress={onProductPress}
              onViewAllPress={onViewAllPress}
              style={styles.productSection}
            />
          )}

          {/* Shoes Collection */}
          {shoesProducts.length > 0 && (
            <ProductList
              title="Shoes Collection"
              products={shoesProducts}
              onProductPress={onProductPress}
              onViewAllPress={onViewAllPress}
              style={styles.productSection}
            />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  featuredBanners: {
    marginTop: 8,
  },
  productSection: {
    marginTop: 24,
  },
});

export default HomeTemplate;
