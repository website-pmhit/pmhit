import React from 'react';

import { Header, Navbar, Footer } from '.';

const Layout = props => {
  const { children, location } = props;
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar location={location} />
      <div className="bg-gray-100 flex-grow-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
