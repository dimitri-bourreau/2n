import React, { FunctionComponent, ReactElement, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Introduction from './game/Introduction';
import GameLogic from './game/GameLogic';

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  const [gameIsOn, setGameIsOn] = useState(false);

  const handlePlayGame = (game: boolean): null => {
    setGameIsOn(game);
    return null;
  };

  return (
    <div id="home">
      {gameIsOn ? (
        <GameLogic />
      ) : (
        <Introduction handlePlayGame={handlePlayGame} />
      )}
    </div>
  );
};

export default Home;
