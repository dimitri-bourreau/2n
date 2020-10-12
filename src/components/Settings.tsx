import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';

const SettingsWrapper = style.section`
  margin: 30px auto;
  width: 80%;
  text-align: center;
  min-height: 80vh;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    margin-bottom: 50px;
  }

  h2 {
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
    <SettingsWrapper>
      <h1>Paramètres</h1>

      <p>
        Bientôt : vous pourrez modifier le thème, changer de langue, administrer
        les cookies installés sur votre machine.
      </p>

      <h2>Cookies que j&apos;ai installé sur votre machine :</h2>

      <ul>
        <li>Aucun</li>
      </ul>
    </SettingsWrapper>
  );
};

export default Settings;
