import React, { FunctionComponent, ReactElement, Suspense } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import { useCookies } from 'react-cookie';
import style from 'styled-components';
import { config } from './firebase.js';
import 'firebase/auth';

import Layout from './components/Layout';
import Loader from './components/Loader';

const firebaseApp = firebase.initializeApp(config);

const SoftTheme = style.div`
  background-color: #955656;
  color: white;

  h1, h2 {
    color: white;
  }

  a {
    color: white;
    text-decoration: underline;
    border: none;
    transition: font-weight 0s ease-in;
  }
  a:hover {
    border: none;
    font-weight: bold:
  }
  
  section, ul {
    background-color: #523434;
  }

  header {
    background: #955656;
  }
  header a {
    text-decoration: none;
    border-bottom: 2px solid transparent;
  }
  header a:hover {
    border-bottom: 2px solid white;
  }
  header ul {
    background-color: transparent;
  }

  footer ul {
    background-color: transparent;
  }

  .cookie {
    color: black;
  }
`;
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
  user: unknown;
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
