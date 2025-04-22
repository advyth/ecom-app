import {Product} from '../../components/molecules/ProductCard';

// Product categories
export enum ProductCategory {
  CLOTHING = 'clothing',
  ACCESSORIES = 'accessories',
  SHOES = 'shoes',
  BAGS = 'bags',
}

// Product tag types
export enum ProductTag {
  FAST_SELLING = 'fast-selling',
  DISCOUNTED = 'discounted',
  NEW_ARRIVAL = 'new-arrival',
  LIMITED_EDITION = 'limited-edition',
  BEST_SELLER = 'best-seller',
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
  tags?: ProductTag[]; // Array of product tags
}

// Trending products
export const trendingProducts: ProductData[] = [
  {
    id: '1',
    title: 'Dress',
    price: 45,
    description: 'Elegant summer dress perfect for casual outings',
    category: ProductCategory.CLOTHING,
    image:
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=783&q=80',
    isNew: true,
    rating: 4.5,
    colors: ['Black', 'White', 'Red'],
    sizes: ['S', 'M', 'L'],
    tags: [ProductTag.NEW_ARRIVAL, ProductTag.FAST_SELLING],
  },
  {
    id: '2',
    title: 'Coat',
    price: 79,
    description: 'Warm winter coat with premium insulation',
    category: ProductCategory.CLOTHING,
    image:
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    isFeatured: true,
    rating: 4.8,
    colors: ['Beige', 'Black', 'Navy'],
    sizes: ['M', 'L', 'XL'],
    tags: [ProductTag.BEST_SELLER],
  },
  {
    id: '3',
    title: 'Shirt',
    price: 29,
    description: 'Classic cotton shirt for everyday wear',
    category: ProductCategory.CLOTHING,
    image:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    discountPrice: 24,
    rating: 4.2,
    colors: ['White', 'Blue', 'Pink'],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: [ProductTag.DISCOUNTED],
  },
  {
    id: '4',
    title: 'Jeans',
    price: 39,
    description: 'Comfortable slim-fit jeans with stretch',
    category: ProductCategory.CLOTHING,
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 4.0,
    colors: ['Blue', 'Black', 'Grey'],
    sizes: ['28', '30', '32', '34'],
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
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    isNew: true,
    rating: 4.3,
    colors: ['Black', 'Brown', 'Blue'],
    tags: [ProductTag.NEW_ARRIVAL],
  },
  {
    id: '8',
    title: 'Watch',
    price: 149,
    description: 'Elegant analog watch with leather strap',
    category: ProductCategory.ACCESSORIES,
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    isNew: true,
    rating: 4.6,
    colors: ['Black', 'Brown'],
    tags: [ProductTag.NEW_ARRIVAL, ProductTag.LIMITED_EDITION],
  },
  {
    id: '9',
    title: 'Leather Backpack',
    price: 120,
    description: 'Premium leather backpack with multiple compartments',
    category: ProductCategory.BAGS,
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
    isNew: true,
    rating: 4.4,
    colors: ['Brown', 'Black'],
    tags: [ProductTag.NEW_ARRIVAL],
  },
  {
    id: '10',
    title: 'Denim Jacket',
    price: 85,
    description: 'Classic denim jacket with modern fit',
    category: ProductCategory.CLOTHING,
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
    isNew: true,
    rating: 4.2,
    colors: ['Blue', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: [ProductTag.NEW_ARRIVAL],
  },
];

// Featured products
export const featuredProducts: ProductData[] = [
  {
    id: '6',
    title: 'Running Shoes',
    price: 95,
    description: 'Lightweight running shoes with advanced cushioning',
    category: ProductCategory.SHOES,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    discountPrice: 79,
    rating: 4.7,
    colors: ['Black', 'White', 'Red'],
    sizes: ['38', '39', '40', '41', '42'],
    tags: [ProductTag.DISCOUNTED, ProductTag.FAST_SELLING],
  },
  {
    id: '11',
    title: 'Designer Handbag',
    price: 240,
    description: 'Luxury designer handbag with signature details',
    category: ProductCategory.BAGS,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
    isFeatured: true,
    rating: 4.9,
    colors: ['Black', 'Beige', 'Red'],
    tags: [ProductTag.BEST_SELLER],
  },
  {
    id: '12',
    title: 'Cashmere Sweater',
    price: 189,
    description: 'Soft cashmere sweater perfect for cold weather',
    category: ProductCategory.CLOTHING,
    image:
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    isFeatured: true,
    rating: 4.8,
    colors: ['Beige', 'Gray', 'Navy'],
    sizes: ['S', 'M', 'L'],
    tags: [ProductTag.FAST_SELLING],
  },
  {
    id: '13',
    title: 'Leather Belt',
    price: 45,
    description: 'Premium leather belt with classic buckle',
    category: ProductCategory.ACCESSORIES,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    isFeatured: true,
    rating: 4.5,
    colors: ['Brown', 'Black'],
    sizes: ['S', 'M', 'L'],
    tags: [ProductTag.BEST_SELLER],
  },
];

// Air Jordan shoes collection
export const shoesProducts: ProductData[] = [
  {
    id: 'aj1-bred',
    title: "Air Jordan 1 Retro High OG 'Bred'",
    price: 2000,
    category: ProductCategory.SHOES,
    image:
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    colors: ['Red', 'Black', 'White'],
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    description:
      'The Air Jordan 1 Retro High OG "Bred" features the iconic colorway that started it all. Premium leather upper with classic Nike Air branding.',
    tags: [ProductTag.LIMITED_EDITION, ProductTag.BEST_SELLER],
  },
  {
    id: 'aj1-union',
    title: 'Air Jordan 1 Mid SE Union Los',
    price: 400,
    category: ProductCategory.SHOES,
    image:
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    colors: ['White', 'Blue', 'Red'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description:
      'The Air Jordan 1 Mid SE Union Los Angeles features a unique design inspired by the Union LA collaboration.',
    tags: [ProductTag.NEW_ARRIVAL],
  },
  {
    id: 'aj1-pine',
    title: "Air Jordan 1 Retro High OG 'Pine Green'",
    price: 900,
    category: ProductCategory.SHOES,
    image:
      'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    colors: ['Green', 'Black', 'White'],
    sizes: ['8', '9', '10', '11', '12'],
    description:
      'The Air Jordan 1 Retro High OG "Pine Green" features a premium leather upper with bold color blocking inspired by the "Bred" colorway.',
    tags: [ProductTag.FAST_SELLING],
  },
  {
    id: 'aj-low',
    title: 'Air Jordan 1 Low',
    price: 320,
    category: ProductCategory.SHOES,
    image: 
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
    colors: ['Black', 'White', 'Red'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 
      'The Air Jordan 1 Low offers a clean, classic look that\'s familiar but always fresh. With an iconic design that pairs perfectly with any outfit, these kicks ensure style is always on point.',
    tags: [ProductTag.DISCOUNTED],
  },
];

// Function to search products by query
export const searchProducts = (query: string): ProductData[] => {
  if (!query || query.trim() === '') return [];

  const lowercaseQuery = query.toLowerCase().trim();

  return allProducts.filter(
    product =>
      product.title.toLowerCase().includes(lowercaseQuery) ||
      (product.description &&
        product.description.toLowerCase().includes(lowercaseQuery)),
  );
};

// Function to get products by category
export const getProductsByCategory = (
  category: ProductCategory,
): ProductData[] => {
  return allProducts.filter(product => product.category === category);
};

// Function to get product by ID
export const getProductById = (id: string): ProductData | undefined => {
  return allProducts.find(product => product.id === id);
};

// Export all products in a single array
export const allProducts: ProductData[] = [
  ...trendingProducts,
  ...featuredProducts,
  ...newArrivals,
  ...shoesProducts,
];
