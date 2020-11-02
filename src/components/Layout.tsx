import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
import { Router } from '@reach/router';
import { useTranslation } from 'react-i18next';

import Footer from './partials/Footer';
import Header from './partials/Header';

import Game from './pages/Game';
import Home from './pages/Home';
import More from './pages/More';
import Settings from './pages/Settings';

const LayoutWrapper = style.div`
  min-height: 100vh;
`;

const Layout: FunctionComponent = (): ReactElement => {
  useTranslation();
  return (
    <LayoutWrapper>
      <Header />
      <Router>
        <Home path="/" />
        <Game path="/game" />
        <More path="/more" />
        <Settings path="/settings" />
      </Router>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
