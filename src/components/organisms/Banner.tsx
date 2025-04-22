import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Dimensions,
} from 'react-native';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

const {width} = Dimensions.get('window');
const BANNER_HEIGHT = width * 0.6; // Maintain aspect ratio

export interface BannerItem {
  id: string;
  title: string;
  image: string;
}

interface BannerProps {
  item: BannerItem;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const Banner: React.FC<BannerProps> = ({item, style, onPress}) => {
  console.log('Banner item:', item);
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.9}>
      <Image source={{uri: item.image}} containerStyle={styles.image} />
      <View style={styles.overlay}>
        <Text variant="title" style={styles.title} color="#fff">
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: BANNER_HEIGHT,
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Banner;
