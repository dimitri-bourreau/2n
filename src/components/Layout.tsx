import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
import { Router } from '@reach/router';
import { useTranslation } from 'react-i18next';

import Footer from './Footer';
import Header from './Header';

import Contact from './Contact';
import Game from './Game';
import Home from './Home';
import Legal from './Legal';
import Login from './Login';
import More from './More';
import Ranking from './Ranking';
import Settings from './Settings';

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
        <Login path="/login" />
        <More path="/more" />
        <Ranking path="/ranking" />
        <Settings path="/settings" />

        <Legal path="/legal" />
        <Contact path="/contact" />
      </Router>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
