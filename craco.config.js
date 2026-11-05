const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find sass-loader and configure it to use Dart Sass (sass package)
      const sassLoaderRule = webpackConfig.module.rules.find(
        rule => rule.oneOf && rule.oneOf.some(r => r.test && r.test.toString().includes('scss'))
      );
      
      if (sassLoaderRule && sassLoaderRule.oneOf) {
        sassLoaderRule.oneOf.forEach(rule => {
          if (rule.test && rule.test.toString().includes('scss')) {
            rule.use.forEach(loader => {
              if (loader.loader && loader.loader.includes('sass-loader')) {
                loader.options = {
                  ...loader.options,
                  implementation: require('sass'),
                  sassOptions: {
                    fiber: false, // Disable fibers for better compatibility
                  },
                };
              }
            });
          }
        });
      }
      
      return webpackConfig;
    },
  },
};