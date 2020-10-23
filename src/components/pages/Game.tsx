import React, { ReactElement, FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

import GameLogic from '../2digits/GameLogic';

const Game: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return <GameLogic />;
};

export default Game;
