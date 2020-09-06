import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout, Hero, HeroIndex, ContentIndex } from '../components';

const Home = () => {
  const { heroData } = useStaticQuery(graphql`
    query {
      heroData: markdownRemark(frontmatter: { path: { eq: "index" } }) {
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
          mainMessage={heroData.frontmatter.mainMessage}
          subMessage={heroData.frontmatter.subMessage}
        />
      </Hero>
      <ContentIndex />
    </Layout>
  );
};

export default Home;
