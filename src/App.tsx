import React, { FunctionComponent, ReactElement, Suspense } from 'react';
import Layout from './components/Layout';
import Loader from './components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

const App: FunctionComponent = (): ReactElement => {
  return (
    <Suspense fallback={<Loader />}>
      <Layout />
    </Suspense>
  );
};

export default App;
