import React, { FunctionComponent, ReactElement } from 'react';
import { Router } from '@reach/router';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Home from './Home';
import More from './More';

const Layout: FunctionComponent = (): ReactElement => {
  useTranslation();
  return (
    <div id="layout" className="col-sm-10 col-md-8 col-lg-5 mx-auto mt-2">
      <Header />
      <div id="router-wrapper" className="px-4">
        <Router>
          <Home path="/" />
          <More path="more" />
        </Router>
      </div>
    </div>
  );
};

export default Layout;
