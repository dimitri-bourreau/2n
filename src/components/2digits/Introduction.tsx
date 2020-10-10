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
  background: linear-gradient(270deg, #0eb288, #dba317, #d191df);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;

  @-webkit-keyframes AnimationName {
      0%{background-position:0% 87%}
      50%{background-position:100% 14%}
      100%{background-position:0% 87%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:0% 87%}
      50%{background-position:100% 14%}
      100%{background-position:0% 87%}
  }
  @keyframes AnimationName {
      0%{background-position:0% 87%}
      50%{background-position:100% 14%}
      100%{background-position:0% 87%}
  }
`;

const Introduction: FunctionComponent<IntroductionProps> = ({
  handlePlayGame,
}: IntroductionProps): ReactElement => {
  return (
    <IntroductionWrapper>
      <IntroductionCanvas />
    </IntroductionWrapper>
  );
};

Introduction.defaultProps = {
  handlePlayGame: () => null,
};

export default Introduction;
