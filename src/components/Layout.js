import React from 'react';

import { Header, Footer } from '.';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <div className="bg-gray-100"> {children} </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
