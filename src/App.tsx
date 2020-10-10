import React, { FunctionComponent, ReactElement, Suspense } from 'react';
import Layout from './components/Layout';
import Loader from './components/Loader';

const App: FunctionComponent = (): ReactElement => {
  return (
    <Suspense fallback={<Loader />}>
      <div id="app">
        <Layout />
      </div>
    </Suspense>
  );
};

export default App;
