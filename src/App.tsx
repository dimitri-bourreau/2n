import React, { FunctionComponent, ReactElement, Suspense } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import { useCookies } from 'react-cookie';
import style from 'styled-components';
import { config } from './firebase.js';
import 'firebase/auth';

import Layout from './components/Layout';
import Loader from './components/Loader';
import SoftTheme from './components/themes/SoftTheme';

import User from './interfaces/user';

const firebaseApp = firebase.initializeApp(config);

const DarkTheme = style(SoftTheme)`
  background-color: #292727;

  header {
    background: #292727;
  }

  section {
    background-color: #955656;
  }
`;

interface AppProps {
  user: User;
  signOut: unknown;
  signInWithGoogle: unknown;
}

const App: FunctionComponent<AppProps | any> = ({
  user,
  signOut,
  signInWithGoogle,
}: AppProps): ReactElement => {
  const [cookies] = useCookies();

  const DisplayApp: FunctionComponent = (): ReactElement => (
    <Suspense fallback={<Loader />}>
      <Layout user={user} sign={{ signOut, signInWithGoogle }} />
    </Suspense>
  );

  if (typeof cookies.theme !== 'undefined') {
    if (cookies.theme === 'soft') {
      return (
        <SoftTheme>
          <DisplayApp />
        </SoftTheme>
      );
    }
    if (cookies.theme === 'dark') {
      return (
        <DarkTheme>
          <DisplayApp />
        </DarkTheme>
      );
    }
  }

  return <DisplayApp />;
};
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
