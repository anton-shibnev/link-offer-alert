const path = require('path');

module.exports = {
  css: {
    sourceMap: true,
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/style/includes/mixins/*.scss'),
        path.resolve(__dirname, 'src/style/includes/variables/*.scss'),
        path.resolve(__dirname, 'src/style/includes/fonts/*.scss'),
        path.resolve(__dirname, 'src/style/includes/normalize.scss'),
        path.resolve(__dirname, 'src/style/includes/helpers/*.scss'),
        path.resolve(__dirname, 'src/style/global.scss'),
      ],
    },
  },
};
