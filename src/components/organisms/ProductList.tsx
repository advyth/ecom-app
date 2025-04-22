import React from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList, 
  ListRenderItemInfo, 
  StyleProp, 
  ViewStyle 
} from 'react-native';
import ProductCard, { Product } from '../molecules/ProductCard';
import SectionHeader from '../molecules/SectionHeader';

interface ProductListProps {
  title: string;
  products: Product[];
  style?: StyleProp<ViewStyle>;
  showViewAll?: boolean;
  onProductPress?: (product: Product) => void;
  onViewAllPress?: () => void;
}

const ProductList: React.FC<ProductListProps> = ({ 
  title,
  products, 
  style, 
  showViewAll = true,
  onProductPress,
  onViewAllPress,
}) => {
  const renderItem = ({ item }: ListRenderItemInfo<Product>) => (
    <ProductCard 
      product={item} 
      onPress={() => onProductPress?.(item)} 
      style={styles.productCard}
    />
  );

  return (
    <View style={[styles.container, style]}>
      <SectionHeader 
        title={title} 
        onActionPress={showViewAll ? onViewAllPress : undefined}
      />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  productCard: {
    marginBottom: 16,
  }
});

export default ProductList; 