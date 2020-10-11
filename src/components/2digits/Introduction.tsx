import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';

import IntroductionCanvas from './IntroductionCanvas';

// import { Trans } from 'react-i18next';

interface IntroductionProps extends RouteComponentProps {
  handlePlayGame?: (game: boolean) => null;
}

const IntroductionWrapper = style.div`
  width: 100%;
  height: 95vh;
  background: linear-gradient(221deg, #2b3ba7, #b38737, #3eaba5, #bc6f55);
  background-size: 800% 800%;
  position: relative;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;

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
  min-height: 200px;
  margin: auto;
  background-color: rgba(255,255,255,1); 
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
`;

const Introduction: FunctionComponent<IntroductionProps> = ({
  handlePlayGame,
}: IntroductionProps): ReactElement => {
  return (
    <IntroductionWrapper>
      <IntroductionCanvas />
      <IntroductionCard>
        <h1>Bienvenue sur 2n !</h1>
      </IntroductionCard>
    </IntroductionWrapper>
  );
};

Introduction.defaultProps = {
  handlePlayGame: () => null,
};

export default Introduction;
