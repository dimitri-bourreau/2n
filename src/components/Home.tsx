import React, { FunctionComponent, ReactElement, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Introduction from './game/Introduction';
import Game from './game/Game';

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  const [gameIsOn, setGameIsOn] = useState(false);

  const handlePlayGame = (game: boolean): null => {
    setGameIsOn(game);
    return null;
  };

  return (
    <div id="home">
      {gameIsOn ? (
        <Game handlePlayGame={handlePlayGame} />
      ) : (
        <Introduction handlePlayGame={handlePlayGame} />
      )}
    </div>
  );
};

export default Home;
