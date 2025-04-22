import {BannerItem} from '../../components/organisms/Banner';

// Banner types
export enum BannerType {
  FEATURED = 'featured',
  CATEGORY = 'category',
  SEASONAL = 'seasonal',
  PROMOTION = 'promotion',
}

// Extended banner interface with additional fields
export interface BannerData extends BannerItem {
  description?: string;
  type: BannerType;
  linkTo?: string;
  ctaText?: string;
  backgroundColor?: string;
  startDate?: Date;
  endDate?: Date;
}

// Featured banners
export const featuredBanners: BannerData[] = [
  {
    id: '1',
    title: 'New In',
    description: 'Check out our latest arrivals',
    type: BannerType.FEATURED,
    image:
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    ctaText: 'Shop Now',
    linkTo: '/category/new-arrivals',
  },
  {
    id: '2',
    title: 'Winter Sale',
    description: 'Up to 50% off on winter collection',
    type: BannerType.SEASONAL,
    image:
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    ctaText: 'View Deals',
    linkTo: '/sale/winter',
    backgroundColor: '#f5f5f5',
    startDate: new Date('2023-11-01'),
    endDate: new Date('2024-02-28'),
  },
];

// Category banners
export const categoryBanners: BannerData[] = [
  {
    id: '3',
    title: "Women's Fashion",
    description: "Discover the latest trends in women's fashion",
    type: BannerType.CATEGORY,
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    ctaText: 'Explore',
    linkTo: '/category/women',
  },
  {
    id: '4',
    title: "Men's Fashion",
    description: "Elevate your style with our men's collection",
    type: BannerType.CATEGORY,
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    ctaText: 'Shop Collection',
    linkTo: '/category/men',
  },
];

// Promotional banners
export const promotionalBanners: BannerData[] = [
  {
    id: '5',
    title: 'Free Shipping',
    description: 'On all orders over $50',
    type: BannerType.PROMOTION,
    image:
      'https://images.unsplash.com/photo-1576224120508-f04b0bec5919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    backgroundColor: '#e6f7ff',
  },
  {
    id: '6',
    title: 'Refer a Friend',
    description: 'Get $20 off your next purchase',
    type: BannerType.PROMOTION,
    image:
      'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
    ctaText: 'Learn More',
    linkTo: '/referral',
    backgroundColor: '#fff0f6',
  },
];

// Function to get banners by type
export const getBannersByType = (type: BannerType): BannerData[] => {
  return [...featuredBanners, ...categoryBanners, ...promotionalBanners].filter(
    banner => banner.type === type,
  );
};

// Function to get banner by ID
export const getBannerById = (id: string): BannerData | undefined => {
  return [...featuredBanners, ...categoryBanners, ...promotionalBanners].find(
    banner => banner.id === id,
  );
};

// Export all banners in a single array
export const allBanners: BannerData[] = [
  ...featuredBanners,
  ...categoryBanners,
  ...promotionalBanners,
];
