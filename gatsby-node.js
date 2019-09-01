const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  onCreateWebpackConfig({ actions }) {
    actions.setWebpackConfig({
      resolve: {
        plugins: [new TsconfigPathsWebpackPlugin({ extensions: ['.ts', '.tsx'] })],
      },
    });
  },
};
