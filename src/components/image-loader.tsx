import React, {FC, useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Loader from './loader';

type Props = {
  imgStyle: StyleProp<ViewStyle>;
  url: string;
};

export const ImageLoader: FC<Props> = ({url, imgStyle}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  console.log('hasError', hasError);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = error => {
    console.log('handleImageError', error);
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <ImageBackground
      resizeMethod={'resize'}
      source={{uri: url}}
      style={[styles.backgroundImage, imgStyle]}
      onLoad={handleImageLoad}
      onError={handleImageError}>
      {isLoading && <Loader />}
      {hasError && <Image source={require('@assets/img/no-image.png')} />}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
