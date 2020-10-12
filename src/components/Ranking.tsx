import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';

const RankingWrapper = style.section`
  min-height: 80vh;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
`;

const Ranking: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <RankingWrapper>
      <h1>Ranking En cours...</h1>
    </RankingWrapper>
  );
};

export default Ranking;
