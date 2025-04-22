import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image as RNImage,
} from 'react-native';
import Text from '../atoms/Text';

export interface SearchResultItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  title,
  price,
  image,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <RNImage
          source={typeof image === 'string' ? {uri: image} : image}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text variant="body" style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text variant="price" style={styles.price}>
          ${price.toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});

export default SearchResultItem;
