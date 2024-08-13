module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
      }],
      ['module-resolver', {
        root: ['.'],
        alias: {
          '@root': './src',
          '@svg': './assets/svg',
          '@image': './assets/image',
        },
      }],
      'react-native-reanimated/plugin'
    ],
  };
};
