import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';
import { Trans } from 'react-i18next';

const LoginWrapper = style.section`
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

const Logger = style.form`
  width: 100%;

  label, label input {
    display: block;
    margin: 10px auto;
  }

  label input {
    padding: 10px 20px;
    border: 1px solid lightgrey;
  }

  button {
    background-color: #920292;
  }

  button:hover {
    background-color: #a53ea5;
  }
`;

const Details = style.div`
  width: 100%;
  margin-top: 40px;

  p {
    color: grey;
    font-style: italic;
  }
`;

const Login: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <LoginWrapper>
      <h1>
        <Trans i18nKey="Login.login">Se connecter</Trans>
      </h1>

      <Logger>
        <label htmlFor="email">
          <Trans i18nKey="Login.email">Email</Trans>
          <input id="email" type="email" />
        </label>
        <label htmlFor="password">
          <Trans i18nKey="Login.password">Mot de passe</Trans>
          <input id="password" type="password" />
        </label>
        <button type="button" className="btn">
          <Trans i18nKey="Login.loginButton">Se connecter</Trans>
        </button>
      </Logger>

      <Details>
        <p>
          <Trans i18nKey="Login.forgotPass">Mot de passe oublié ?</Trans>
        </p>
      </Details>
    </LoginWrapper>
  );
};

export default Login;
