import React, { FunctionComponent, ReactElement } from 'react';
import { Alert } from 'shards-react';

const Loader: FunctionComponent = (): ReactElement => {
  return <Alert theme="info">Loading...</Alert>;
};

export default Loader;
