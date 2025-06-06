const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const config = {
    transformer: {
        babelTransformerPath: require.resolve(
          "react-native-svg-transformer/react-native"
        )
      },
      resolver: {
        assetExts: assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"]
      }
};

const configWrap =   wrapWithReanimatedMetroConfig(config)

module.exports = mergeConfig(getDefaultConfig(__dirname), configWrap);
