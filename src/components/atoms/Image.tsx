import React from 'react';
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  StyleSheet,
  View,
  StyleProp,
  ImageStyle,
} from 'react-native';

interface ImageProps extends RNImageProps {
  containerStyle?: StyleProp<ImageStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  showLoader?: boolean;
}

const Image: React.FC<ImageProps> = ({
  source,
  containerStyle,
  imageStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RNImage source={source} style={[styles.image, imageStyle]} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default Image;
