import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Trans } from 'react-i18next';

const Ranking: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <div id="ranking">
      <h1 className="mt-5 mx-auto text-center">
        <Trans i18nKey="ranking.title">Ranking</Trans>
      </h1>
    </div>
  );
};

export default Ranking;
