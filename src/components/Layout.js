import React from 'react';

import { Header, Navbar, Footer } from '.';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <div className="pt-17 flex-grow-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
