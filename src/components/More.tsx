import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Trans } from 'react-i18next';

const More: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <div id="more">
      <h1 className="mt-5 mx-auto text-center">
        <Trans i18nKey="more.title">More</Trans>
      </h1>
    </div>
  );
};

export default More;
