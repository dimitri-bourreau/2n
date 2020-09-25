import React, { FunctionComponent, ReactElement } from 'react';
import { Trans } from 'react-i18next';
import { RouteComponentProps } from '@reach/router';

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <div id="home">
      <h1 className="mt-5 mx-auto text-center">2n</h1>
      <h6 className="text-center">
        <Trans i18nKey="home.subtitle">Will you remember 2 numbers ago?</Trans>{' '}
        <span role="img" aria-label="emoji-hand-mouth">
          🤭
        </span>
      </h6>
    </div>
  );
};

export default Home;