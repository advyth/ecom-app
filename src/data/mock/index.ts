// Re-export everything from the mock data files
export * from './products';
export * from './banners';

// Import specific types and data
import {
  trendingProducts,
  featuredProducts,
  newArrivals,
  allProducts,
  ProductCategory,
  getProductById,
  getProductsByCategory,
  shoesProducts,
  searchProducts,
} from './products';

import {
  featuredBanners,
  categoryBanners,
  promotionalBanners,
  allBanners,
  BannerType,
  getBannerById,
  getBannersByType,
} from './banners';

// Export mock data object for convenient access
export const mockData = {
  products: {
    all: allProducts,
    trending: trendingProducts,
    featured: featuredProducts,
    new: newArrivals,
    shoes: shoesProducts,
    getById: getProductById,
    getByCategory: getProductsByCategory,
    categories: ProductCategory,
  },
  banners: {
    all: allBanners,
    featured: featuredBanners,
    categories: categoryBanners,
    promotional: promotionalBanners,
    getById: getBannerById,
    getByType: getBannersByType,
    types: BannerType,
  },
  search: {
    searchProducts,
  },
};
