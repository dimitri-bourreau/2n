import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Trans } from 'react-i18next';
import { Alert } from 'shards-react';

const More: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <div id="more">
      <h1 className="mt-5 mb-5 mx-auto text-center">
        <Trans i18nKey="more.title">More</Trans>
      </h1>

      <p>
        Ce projet est inspiré par des tests psychotechniques à réaliser pour
        devenir pilote chez Air France.
      </p>

      <p>
        Le fabuleux site <a href="https://pilotest.com">Pilotest</a> a développé
        d'excellents tests de cette nature, à voir !
      </p>

      <p>
        Ce jeu utilise ces technologies : React.js, TypeScript, Reach Router,
        Shards React, react-i18next et Cypress.
      </p>

      <Alert theme="primary" className="text-center">
        Code source disponible sur{' '}
        <a className="alert-link" href="https://github.com/tobudim/2n">
          GitHub
        </a>
      </Alert>
    </div>
  );
};

export default More;
