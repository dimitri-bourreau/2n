import React, { FunctionComponent, ReactElement } from 'react';
import Header from './components/Header';

const App: FunctionComponent = (): ReactElement => {
  return (
    <div id="app">
      <Header />
    </div>
  );
};

export default App;
