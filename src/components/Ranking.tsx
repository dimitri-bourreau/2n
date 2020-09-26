import React, { FunctionComponent, ReactElement, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Trans } from 'react-i18next';
import { Alert, Badge } from 'shards-react';

const Ranking: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  // temp ranking var, leter TODO server to store
  const [ranking] = useState([
    { name: 'SORA', score: 32 },
    { name: 'TOBU', score: 10 },
  ]);

  return (
    <div id="ranking">
      <h1 className="my-5 mx-auto text-center">
        <Trans i18nKey="ranking.title">Ranking</Trans>
      </h1>

      {ranking.map((user, index) => (
        <Alert
          key={`${user.name}${user.score}`}
          theme="light"
          className="mb-1"
          block
          square
        >
          <Badge theme="info" className="mr-2" pill>
            {index + 1}
          </Badge>{' '}
          {user.name} - {user.score}
        </Alert>
      ))}
    </div>
  );
};

export default Ranking;
