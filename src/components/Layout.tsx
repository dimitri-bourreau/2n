import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
import { Router } from '@reach/router';
import { useTranslation } from 'react-i18next';

import Footer from './Footer';
import Header from './Header';
import Home from './Home';
// import More from './More';

const LayoutWrapper = style.div`
  // padding: 20px 5vw;
  min-height: 100vh;
`;

const Layout: FunctionComponent = (): ReactElement => {
  useTranslation();
  return (
    <LayoutWrapper>
      <Header />
      <div id="router-wrapper" className="px-4">
        <Router>
          <Home path="/" />
          {/* <More path="more" /> */}
        </Router>
      </div>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
