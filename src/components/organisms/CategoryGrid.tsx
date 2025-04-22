import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';
import CategoryCard, {Category} from '../molecules/CategoryCard';

interface CategoryGridProps {
  categories: Category[];
  style?: StyleProp<ViewStyle>;
  onCategoryPress?: (category: Category) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  style,
  onCategoryPress,
}) => {
  const renderItem = ({item}: ListRenderItemInfo<Category>) => (
    <CategoryCard
      category={item}
      onPress={() => onCategoryPress?.(item)}
      style={styles.categoryCard}
    />
  );

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
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
  contentContainer: {
    padding: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    marginBottom: 16,
  },
});

export default CategoryGrid;
