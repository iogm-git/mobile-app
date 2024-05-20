module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@root': './src',
          '@svg': './assets/svg',
          '@image': './assets/image',
        },
      },
    ],
  ],
};
