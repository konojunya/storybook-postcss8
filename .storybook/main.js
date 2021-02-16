const path = require('path');

const APP_ROOT = path.resolve(__dirname, '../');

module.exports = {
  stories: [path.join(APP_ROOT, '**/*.stories.tsx')],
  addons: [{
     name: '@storybook/addon-postcss',
     options: {
       postcssLoaderOptions: {
         implementation: require('postcss'),
       },
     },
   }],
  webpackFinal: async (config) => {
    config.module.rules.forEach(rule => {
      if (rule.test?.toString() === /\.css$/.toString()) {
        rule.use.forEach(using => {
          if(using.loader.match(/\/css-loader/) != null) {
            using.options = {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              }
            }
          }
        })
        console.log(JSON.stringify(rule, null, 2));
      }
    })

    return config;
  }
};
