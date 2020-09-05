import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

const Blog = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              image {
                childImageSharp {
                  fixed(height: 50, jpegQuality: 25) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      {allMarkdownRemark.edges.map(edge => (
        <div key={edge.node.id} className="m-4 bg-cyan-100">
          <h1>{edge.node.frontmatter.title}</h1>
          <Img fixed={edge.node.frontmatter.image.childImageSharp.fixed} />
        </div>
      ))}
    </Layout>
  );
};

export default Blog;
