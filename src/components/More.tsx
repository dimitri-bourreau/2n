import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';
import { Trans } from 'react-i18next';

const MoreWrapper = style.section`
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

  ul {
    background-color: #f7ecec;
    padding: 20px 0;
    border-radius: 10px;
  }

  button {
    background-color: #3c65da;
  }

  button:hover {
    background-color: #1a46c3;
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

const More: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <MoreWrapper>
      <h1>
        <Trans i18nKey="More.more">À propos</Trans>
      </h1>

      <p>
        <Trans i18nKey="More.airFrance">
          This project is inspired by the psychotechnical tests to be performed
          to become a pilot at Air France.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="More.aboutPilotest">The fabulous site</Trans>{' '}
        <a href="https://pilotest.com">Pilotest</a>{' '}
        <Trans i18nKey="More.excellentPilotest">
          has developed excellent tests of this nature, must see!
        </Trans>
      </p>

      <p>
        <Trans i18nKey="More.technologies">
          This game uses these technologies:
        </Trans>
      </p>

      <ul>
        <li>React.js</li>
        <li>TypeScript</li>
        <li>Reach Router</li>
        <li>react-i18next</li>
        <li>Canvas</li>
        <li>Jest</li>
        <li>Firebase</li>
      </ul>

      <a href="https://github.com/tobudim/2n">
        <button type="button" className="btn">
          <Trans i18nKey="More.code">Source code available on GitHub</Trans>
        </button>
      </a>
    </MoreWrapper>
  );
};

export default More;
