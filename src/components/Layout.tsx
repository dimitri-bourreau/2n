import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
import { Router } from '@reach/router';
import { useTranslation } from 'react-i18next';

import Footer from './partials/Footer';
import Header from './partials/Header';

import Account from './pages/Account';
import Contact from './pages/Contact';
import Game from './pages/Game';
import Home from './pages/Home';
import Legal from './pages/Legal';
import More from './pages/More';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';

import User from '../interfaces/user';

const LayoutWrapper = style.div`
  min-height: 100vh;
`;

interface LayoutProps {
  user: User;
  sign: {
    signOut: unknown;
    signInWithGoogle: unknown;
  };
}

const Layout: FunctionComponent<LayoutProps> = ({
  user,
  sign,
}: LayoutProps): ReactElement => {
  useTranslation();
  return (
    <LayoutWrapper>
      <Header user={user} />
      <Router>
        <Home path="/" />
        <Game path="/game" />
        <Account path="/login" user={user} sign={sign} />
        <Account path="/me" user={user} sign={sign} />
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
