import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';
import { Trans } from 'react-i18next';

import PreFooterCanvas from './PreFooterCanvas';

const SettingsWrapper = style.section`
  margin: 30px auto;
  width: 80%;
  min-height: 50vh;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    margin-bottom: 50px;
  }

  p {
    margin-bottom: 30px;
  }

  ul {
    background-color: #f7ecec;
    padding: 20px 0;
    border-radius: 10px;
  }

  @media all and (min-width: 576px) {
    width: 70%;
  }
  @media all and (min-width: 768px) {
    width: 60%;
  }
  @media all and (min-width: 992px) {
    width: 50%;
  }
  @media all and (min-width: 1200px) {
    width: 30%;
  }
`;

const Settings: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <>
      <SettingsWrapper>
        <h1>
          <Trans i18nKey="Settings.settings">Paramètres</Trans>
        </h1>

        <p>
          <Trans i18nKey="Settings.soon">
            Bientôt : vous pourrez modifier le thème, changer de langue,
            administrer les cookies installés sur votre machine.
          </Trans>
        </p>
      </SettingsWrapper>
      <PreFooterCanvas />
    </>
  );
};

export default Settings;
