const path = require('path');

const APP_ROOT = path.resolve(__dirname, '../');

module.exports = {
  stories: [path.join(APP_ROOT, '**/*.stories.tsx')],
  addons: [],
  webpackFinal: async (config) => {
    config.module.rules.forEach(rule => {
      if (rule.test.toString() === /\.css$/.toString()) {
        rule.use.forEach(using => {
          if(using.loader && using.loader.match(/\/css-loader/) != null) {
            using.options = {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              }
            }
          }
        })
      }
    })

    return config;
  }
};
