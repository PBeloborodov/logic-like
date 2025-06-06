module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@types': './src/types',
          '@services': './src/services',
          '@store': './src/store'
        }
      }
    ],
    'react-native-reanimated/plugin',
  ]
};
