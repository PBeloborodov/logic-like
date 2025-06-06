import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const Loader = () => {
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {duration: 1000, easing: Easing.linear}),
      -1,
      false,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Svg width={50} height={50} viewBox="0 0 50 50">
          <Circle
            cx="25"
            cy="25"
            r="20"
            stroke="#4A90E2"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset="75"
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
