import React, { FunctionComponent, ReactElement, Suspense } from 'react';
import { useCookies } from 'react-cookie';
import style from 'styled-components';

import Layout from './components/Layout';
import Loader from './components/Loader';
import SoftTheme from './components/themes/SoftTheme';

const DarkTheme = style(SoftTheme)`
  background-color: #292727;

  header {
    background: #292727;
  }

  section {
    background-color: #955656;
  }
`;

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
