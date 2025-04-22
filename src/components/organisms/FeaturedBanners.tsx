import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  ScrollView,
  Dimensions,
} from 'react-native';
import Banner, {BannerItem} from './Banner';

const {width} = Dimensions.get('window');
const BANNER_WIDTH = (width - 40) / 2; // 2 columns with margins

interface FeaturedBannersProps {
  banners: BannerItem[];
  style?: StyleProp<ViewStyle>;
  onBannerPress?: (banner: BannerItem) => void;
}

const FeaturedBanners: React.FC<FeaturedBannersProps> = ({
  banners,
  style,
  onBannerPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {banners.map(banner => (
          <Banner
            key={banner.id}
            item={banner}
            style={styles.banner}
            onPress={() => onBannerPress?.(banner)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  banner: {
    width: BANNER_WIDTH,
    marginHorizontal: 8,
  },
});

export default FeaturedBanners;
