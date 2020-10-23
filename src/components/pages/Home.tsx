import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import Introduction from '../2digits/Introduction';
import Rules from '../2digits/Rules';

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <>
      <Introduction />
      <Rules />
    </>
  );
};

export default Home;
