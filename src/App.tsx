import React, { FunctionComponent, ReactElement, Suspense } from 'react';
import { useCookies } from 'react-cookie';

import Layout from './components/Layout';
import Loader from './components/Loader';
import SoftTheme from './components/themes/SoftTheme';
import DarkTheme from './components/themes/DarkTheme';

const App: FunctionComponent = (): ReactElement => {
  const [cookies] = useCookies();

  const DisplayApp: FunctionComponent = (): ReactElement => {
    if (typeof cookies.theme !== 'undefined') {
      const { theme } = cookies;
      if (theme === 'soft')
        return (
          <SoftTheme>
            <Layout />
          </SoftTheme>
        );
      if (theme === 'dark') {
        return (
          <DarkTheme>
            <Layout />
          </DarkTheme>
        );
      }
    }
    return <Layout />;
  };

  return (
    <Suspense fallback={<Loader />}>
      <DisplayApp />
    </Suspense>
  );
};

export default App;
