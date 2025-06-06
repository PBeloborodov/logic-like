import React, {FC, useState} from 'react';
import {View, ImageBackground, StyleSheet, Image} from 'react-native';
import Loader from './loader';

export const ImageLoader: FC<{url: string}> = ({url}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: url}}
        style={styles.backgroundImage}
        onLoad={handleImageLoad}
        onError={handleImageError}>
        {isLoading && <Loader />}
        {hasError && <Image source={require('@assets/img/no-image.png')} />}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
