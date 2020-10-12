import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';

const MeWrapper = style.section`
  margin: 30px auto;
  width: 80%;
  text-align: center;
  min-height: 80vh;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    margin-bottom: 50px;
  }

  p {
    margin-bottom: 30px;
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

const Me: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <MeWrapper>
      <h1>Profil connecté</h1>

      <p>À venir</p>
    </MeWrapper>
  );
};

export default Me;
