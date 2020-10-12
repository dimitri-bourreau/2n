import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

import { RouteComponentProps } from '@reach/router';

const RulesWrapper = style.div`
  img {
    margin: 0 0 0 40%;
    display: block;

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
  }
`;

const RulesBuble = style.section`
  clip-path: polygon(0% 0%, 100% 0%, 100% 88%, 75% 88%, 75% 100%, 50% 88%, 0 88%);
  background-color: purple;
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

const Rules: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <RulesWrapper>
      <RulesBuble>
        <p>Ce jeu est vraiment simple !</p>
        <p>À chaque tour vous devez mémoriser le chiffre présenté.</p>
        <p>
          Quand on vous demande si le chiffre affiché est apparu il y a deux
          tours, vous devez donner la bonne réponse !
        </p>
      </RulesBuble>
      <img src="/img/kirk.jpg" alt="Captain Kirk" />
    </RulesWrapper>
  );
};

export default Rules;
