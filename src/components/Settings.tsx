import React, { FunctionComponent, ReactElement, useState } from 'react';
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    margin-bottom: 50px;
  }

  @media all and (min-width: 576px) {
    width: 70%;
  }
  @media all and (min-width: 768px) {
    width: 50%;
  }
  @media all and (min-width: 992px) {
    width: 40%;
  }
  @media all and (min-width: 1200px) {
    width: 30%;
  }
`;
const Setting = style.section`
  background-color: #e7e8fb;
  padding: 25px;
  box-sizing: border-box;
  margin-bottom: 30px;
  width: 100%;
  border-radius: 10px;

  h2 {
    font-size: 1.6em;
    margin: 20px auto;
  }

  p {
    margin-bottom: 30px;
  }

`;
const SelectButtons = style.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  button {
    display: inline-block;
    margin: 0 auto;
  }
`;

const Settings: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  const [storedCookies, setStoredCookies] = useState([]);

  return (
    <>
      <SettingsWrapper>
        <h1>
          <Trans i18nKey="Settings.settings">Paramètres</Trans>
        </h1>

        <Setting>
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

          <p className="cookie">
            lg: <span>en</span>
          </p>

          <SelectButtons>
            <button type="button" className="btn btn-light">
              English
            </button>
            <button type="button" className="btn btn-selected">
              Français
            </button>
          </SelectButtons>
        </Setting>

        <Setting>
          <h2>Thème</h2>

          <p>
            Si vous sélectionnez un thème, ce cookie sera déposé sur votre
            machine :
          </p>

          <p className="cookie">
            theme:{' '}
            <span>
              {'<'}nom du thème sélectionné{'>'}
            </span>{' '}
          </p>
          <SelectButtons>
            <button type="button" className="btn btn-light">
              Clair
            </button>
            <button type="button" className="btn btn-dark">
              Sombre
            </button>
          </SelectButtons>
        </Setting>

        <Setting>
          <h2>Gestion des cookies</h2>

          <p>
            Voici la liste des cookies stockés sur votre machine depuis ce site
            :
          </p>

          {storedCookies.length === 0 ? (
            <p className="cookie">Aucun cookie</p>
          ) : (
            storedCookies.map(cookie => (
              <p key={cookie} className="cookie">
                {cookie}
              </p>
            ))
          )}
        </Setting>
      </SettingsWrapper>
      <PreFooterCanvas />
    </>
  );
};

export default Settings;
