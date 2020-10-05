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
        <Trans i18nKey="more.p.1">
          This project is inspired by the psychotechnical tests to be performed
          to become a pilot at Air France.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="more.p.2">
          The fabulous site <a href="https://pilotest.com">Pilotest</a> has
          developed excellent tests of this nature, must see!
        </Trans>
      </p>

      <p>
        <Trans i18nKey="more.p.3">
          This game uses these technologies: React.js, TypeScript, Reach Router,
          Shards React, react-i18next.
        </Trans>
      </p>

      <a href="https://github.com/tobudim/2n">
        <Button theme="primary" pill block className="mx-auto">
          <Trans i18nKey="more.sourceCode">
            Source code available on GitHub
          </Trans>
        </Button>
      </a>
    </div>
  );
};

export default More;
