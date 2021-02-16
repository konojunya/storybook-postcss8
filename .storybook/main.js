const path = require('path');

const APP_ROOT = path.resolve(__dirname, '../');

module.exports = {
  stories: [path.join(APP_ROOT, '**/*.stories.tsx')],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
};
