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

  h2 {
    font-size: 1.6em;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
  }

  ul {
    background-color: #f7ecec;
    padding: 20px 0;
    border-radius: 10px;
  }

  button {
    display: block;
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

        <h2>
          Language{' '}
          <span role="img" aria-label="change-language">
            🌐
          </span>
        </h2>

        <p>
          If you select english, this specific cookie will be stored on your
          machine :
        </p>

        <p className="cookie">lg: en</p>

        <h2>Thème</h2>

        <p>
          Si vous sélectionnez un thème, un cookie sera déposé sur votre machine
          contenant exactement cette donnée :
        </p>

        <p className="cookie">
          theme:{' '}
          <span>
            {'<'}nom du thème sélectionné{'>'}
          </span>{' '}
        </p>

        <button type="button" className="btn btn-light">
          Clair
        </button>
        <button type="button" className="btn btn-dark">
          Sombre
        </button>
      </SettingsWrapper>
      <PreFooterCanvas />
    </>
  );
};

export default Settings;
