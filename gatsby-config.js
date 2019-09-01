module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        importer: require('node-sass-glob-importer')(),
        sassOptions: {
          fiber: require('fibers'),
        },
      },
    },
  ],
};
