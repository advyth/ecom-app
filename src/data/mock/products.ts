import { Product } from '../../components/molecules/ProductCard';

// Product categories
export enum ProductCategory {
  CLOTHING = 'clothing',
  ACCESSORIES = 'accessories',
  SHOES = 'shoes',
  BAGS = 'bags',
}

// Extended product interface with additional fields for flexibility
export interface ProductData extends Product {
  description?: string;
  category?: ProductCategory;
  discountPrice?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  rating?: number;
  colors?: string[];
  sizes?: string[];
}

// Trending products
export const trendingProducts: ProductData[] = [
  {
    id: '1',
    title: 'Dress',
    price: 45,
    description: 'Elegant summer dress perfect for casual outings',
    category: ProductCategory.CLOTHING,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=783&q=80',
    isNew: true,
    rating: 4.5,
    colors: ['Black', 'White', 'Red'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: '2',
    title: 'Coat',
    price: 79,
    description: 'Warm winter coat with premium insulation',
    category: ProductCategory.CLOTHING,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    isFeatured: true,
    rating: 4.8,
    colors: ['Beige', 'Black', 'Navy'],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: '3',
    title: 'Shirt',
    price: 29,
    description: 'Classic cotton shirt for everyday wear',
    category: ProductCategory.CLOTHING,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    discountPrice: 24,
    rating: 4.2,
    colors: ['White', 'Blue', 'Pink'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '4',
    title: 'Jeans',
    price: 39,
    description: 'Comfortable slim-fit jeans with stretch',
    category: ProductCategory.CLOTHING,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 4.0,
    colors: ['Blue', 'Black', 'Grey'],
    sizes: ['28', '30', '32', '34'],
  },
];

// Featured products
export const featuredProducts: ProductData[] = [
  {
    id: '5',
    title: 'Leather Bag',
    price: 120,
    description: 'Genuine leather handbag with multiple compartments',
    category: ProductCategory.BAGS,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df41c136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    isFeatured: true,
    rating: 4.9,
    colors: ['Brown', 'Black'],
  },
  {
    id: '6',
    title: 'Running Shoes',
    price: 95,
    description: 'Lightweight running shoes with advanced cushioning',
    category: ProductCategory.SHOES,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    discountPrice: 79,
    rating: 4.7,
    colors: ['Black', 'White', 'Red'],
    sizes: ['38', '39', '40', '41', '42'],
  },
];

// New arrivals
export const newArrivals: ProductData[] = [
  {
    id: '7',
    title: 'Sunglasses',
    price: 59,
    description: 'UV protected stylish sunglasses',
    category: ProductCategory.ACCESSORIES,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    isNew: true,
    rating: 4.3,
    colors: ['Black', 'Brown', 'Blue'],
  },
  {
    id: '8',
    title: 'Watch',
    price: 149,
    description: 'Elegant analog watch with leather strap',
    category: ProductCategory.ACCESSORIES,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    isNew: true,
    rating: 4.6,
    colors: ['Black', 'Brown'],
  },
];

// Function to get products by category
export const getProductsByCategory = (category: ProductCategory): ProductData[] => {
  return [...trendingProducts, ...featuredProducts, ...newArrivals]
    .filter(product => product.category === category);
};

// Function to get product by ID
export const getProductById = (id: string): ProductData | undefined => {
  return [...trendingProducts, ...featuredProducts, ...newArrivals]
    .find(product => product.id === id);
};

// Export all products in a single array
export const allProducts: ProductData[] = [
  ...trendingProducts,
  ...featuredProducts,
  ...newArrivals,
]; 