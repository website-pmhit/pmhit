import React from 'react';

import { Layout, Hero, HeroIndex, ContentIndex } from '../components';

const Home = ({ location }) => {
  console.log(location);
  return (
    <Layout>
      <Hero>
        <HeroIndex />
      </Hero>
      <ContentIndex />
    </Layout>
  );
};

export default Home;
