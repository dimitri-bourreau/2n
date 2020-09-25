import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Trans } from 'react-i18next';
import { Alert } from 'shards-react';

const Ranking: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <div id="ranking">
      <h1 className="my-5 mx-auto text-center">
        <Trans i18nKey="ranking.title">Ranking</Trans>
      </h1>

      <Alert theme="warning" block square className="text-center">
        1 - TOBU - 3345
      </Alert>
      <Alert theme="success" block square className="text-center">
        2 - ZFEZ - 234
      </Alert>
      <Alert theme="success" block square className="text-center">
        3 - FDVS - 221
      </Alert>
      <Alert theme="info" block square className="text-center">
        4 - GUFF - 193
      </Alert>
      <Alert theme="info" block square className="text-center">
        5 - FFSE - 154
      </Alert>
      <Alert theme="info" block square className="text-center">
        6 - HTRH - 123
      </Alert>
      <Alert theme="light" block square className="text-center">
        7 - FEZH - 112
      </Alert>
      <Alert theme="light" block square className="text-center">
        8 - JIYG - 111
      </Alert>
      <Alert theme="light" block square className="text-center">
        9 - YUYV - 111
      </Alert>
      <Alert theme="light" block square className="text-center">
        10 - TYHD - 110
      </Alert>
    </div>
  );
};

export default Ranking;
