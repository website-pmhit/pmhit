const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type == 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              type
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const data = result.data.allMarkdownRemark.edges;

    data.forEach(edge => {
      const id = edge.node.id;
      if (edge.node.frontmatter.type == 'blog')
        createPage({
          path: `/blog${edge.node.fields.slug}`,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            id,
          },
        });
    });
  });
};
