import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';
import { Trans } from 'react-i18next';

import IntroductionCanvas from './IntroductionCanvas';

const IntroductionWrapper = style.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(221deg, #2b3ba7, #b38737, #3eaba5, #bc6f55);
  background-size: 800% 800%;
  position: relative;

  -webkit-animation: AnimationName 15s ease infinite;
  -moz-animation: AnimationName 15s ease infinite;
  animation: AnimationName 15s ease infinite;

  @-webkit-keyframes AnimationName {
      0%{background-position:0% 88%}
      50%{background-position:100% 13%}
      100%{background-position:0% 88%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:0% 88%}
      50%{background-position:100% 13%}
      100%{background-position:0% 88%}
  }
  @keyframes AnimationName {
      0%{background-position:0% 88%}
      50%{background-position:100% 13%}
      100%{background-position:0% 88%}
  }
`;
const IntroductionCard = style.section`
  width: 80%;
  margin: auto;
  background-color: rgba(255,255,255,1); 
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;

  h2 {
    margin-top: 30px;
  }

  @media all and (min-width: 576px) {
    width: 60%;
  }
  @media all and (min-width: 768px) {
    width: 40%;
  }
  @media all and (min-width: 992px) {
    width: 30%;
  }
  @media all and (min-width: 1200px) {
    width: 30%;
  }
`;

const Introduction: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <IntroductionWrapper>
      <IntroductionCanvas />
      <IntroductionCard>
        <h1>2n</h1>
        <h2>
          <Trans i18nKey="Introduction.remember">
            Will you remember two digits ago?
          </Trans>{' '}
          <span role="img" aria-label="think">
            🤔
          </span>
        </h2>
        <a href="/game">
          <button className="btn btn-success" type="button">
            <Trans i18nKey="Introduction.play">Play</Trans>
          </button>
        </a>
      </IntroductionCard>
    </IntroductionWrapper>
  );
};

export default Introduction;
