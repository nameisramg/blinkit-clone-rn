module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@features': './src/features',
          '@navigations': './src/navigations',
          '@states': './src/states',
          '@utils': './src/utils',
          '@types': './src/types',
          '@services': './src/services',
          '@styles': './src/styles'
        }
      }
    ]
  ]
};
