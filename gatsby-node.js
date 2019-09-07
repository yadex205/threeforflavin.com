const { resolve } = require('path');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

const BUILTAT_ISOSTR = new Date().toISOString();

module.exports = {
  onCreateWebpackConfig({ actions }) {
    actions.setWebpackConfig({
      resolve: {
        plugins: [new TsconfigPathsWebpackPlugin({ extensions: ['.ts', '.tsx'] })],
      },
    });
  },

  onCreatePage({ page, actions: { createPage } }) {
    createPage({
      ...page,
      context: {
        ...page.context,
        builtat: BUILTAT_ISOSTR,
      },
    });
  },

  createPages({ actions: { createPage }, graphql }) {
    return Promise.all([
      graphql(`
        {
          allContentfulLive(filter: { form: { eq: "threeforflavin" } }, sort: { fields: date, order: DESC }) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors);
        }
        const template = resolve('src/templates/live-entry.tsx');

        result.data.allContentfulLive.edges.forEach(({ node }) => {
          createPage({ path: `/live/${node.slug}`, component: template, context: { id: node.id } });
        });
        return Promise.resolve();
      }),
    ]);
  },
};
