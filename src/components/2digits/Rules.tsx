import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
import { Trans } from 'react-i18next';

import { RouteComponentProps } from '@reach/router';

const RulesWrapper = style.div`
  img {
  }
`;
const RulesBuble = style.section`
  clip-path: polygon(0% 0%, 100% 0%, 100% 88%, 75% 88%, 75% 100%, 50% 88%, 0 88%);
  background-color: #920292;
  margin: 50px auto;
  width: 70%;
  color: white;
  padding: 30px 30px 50px 30px;
  box-sizing: border-box;

  animation-duration: 3s;
  animation-name: fly;
  animation-iteration-count: infinite;

  @keyframes fly {
    from {
      margin-top: 45px;
      margin-bottom: 5px;
    }

    50% {
      margin-top: 50px;
      margin-bottom: 0;
    }

    to {
      margin-top: 45px;
      margin-bottom: 5px;
    }
  }

  @media all and (min-width: 576px) {
    width: 50%;
  }
  @media all and (min-width: 768px) {
    width: 40%;
  }
  @media all and (min-width: 992px) {
    width: 30%;
  }
  @media all and (min-width: 1200px) {
    width: 26%;
  }
`;
const Kirk = style.div`
  background-image: url('/img/kirk.jpg');
    margin: 0 0 0 40%;
    display: block;
    width: 220px;
    height: 200px;

    @media all and (min-width: 576px) {
      margin: 0 0 0 45%;
    }
    @media all and (min-width: 768px) {
      margin: 0 0 0 45%;
    }
    @media all and (min-width: 992px) {
      margin: 0 0 0 45%;
    }
    @media all and (min-width: 1200px) {
      margin: 0 0 0 50%;
    }
`;

const Rules: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <RulesWrapper>
      <RulesBuble>
        <p>
          <Trans i18nKey="Rules.easy">This game is easy!</Trans>
        </p>
        <p>
          <Trans i18nKey="Rules.remember">
            At every turn remember the displayed digit.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="Rules.answer">
            When we ask you if the displayed digit was shown two turns ago, you
            must answer correctly!
          </Trans>
        </p>
      </RulesBuble>
      <Kirk />
    </RulesWrapper>
  );
};

export default Rules;
