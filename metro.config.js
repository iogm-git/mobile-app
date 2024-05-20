const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

module.exports = (async () => {
    const defaultConfig = await getDefaultConfig(__dirname);
    const { assetExts, sourceExts } = defaultConfig.resolver;

    return mergeConfig(defaultConfig, {
        transformer: {
            babelTransformerPath: require.resolve("react-native-svg-transformer")
        },
        resolver: {
            extraNodeModules: {
                '@root': path.resolve(__dirname, 'src'),
                '@svg': path.resolve(__dirname, 'assets/svg'),
            },
            alias: {
                '@root': './src',
                '@svg': './assets/svg',
                '@image': './assets/image',
            },
            assetExts: assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...sourceExts, "svg"]
        },
    });
})();


