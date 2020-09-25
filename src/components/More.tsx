import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Trans } from 'react-i18next';
import { Button } from 'shards-react';

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
        d&apos;excellents tests de cette nature, à voir !
      </p>

      <p>
        Ce jeu utilise ces technologies : React.js, TypeScript, Reach Router,
        Shards React, react-i18next et Cypress.
      </p>

      <a href="https://github.com/tobudim/2n">
        <Button theme="primary" pill block className="mx-auto">
          Code source disponible sur GitHub
        </Button>
      </a>
    </div>
  );
};

export default More;
