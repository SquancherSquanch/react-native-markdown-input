module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'react-native-markdown-input': '../src/index',
          },
        },
      ],
    ],
  };
};
