import React, { FunctionComponent, ReactElement, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Introduction from './2digits/Introduction';
// import GameLogic from './2digits/GameLogic';

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  // const [gameIsOn, setGameIsOn] = useState(false);

  // const handlePlayGame = (game: boolean): null => {
  //   setGameIsOn(game);
  //   return null;
  // };

  return (
    <Introduction />
    // <div id="home">
    //   {gameIsOn ? (
    //     <GameLogic />
    //   ) : (
    //     <Introduction handlePlayGame={handlePlayGame} />
    //   )}
    // </div>
  );
};

export default Home;
