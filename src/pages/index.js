import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout, Hero, HeroIndex, ContentIndex } from '../components';

const Home = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { path: { eq: "index" } }) {
        frontmatter {
          mainMessage
          subMessage
        }
      }
    }
  `);
  return (
    <Layout>
      <Hero>
        <HeroIndex
          mainMessage={markdownRemark.frontmatter.mainMessage}
          subMessage={markdownRemark.frontmatter.subMessage}
        />
      </Hero>
      <ContentIndex />
    </Layout>
  );
};

export default Home;
