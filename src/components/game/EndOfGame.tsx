import React, { FunctionComponent, ReactElement } from 'react';
import { EndOfGameProps } from '../../interfaces/game';

const EndOfGame: FunctionComponent<EndOfGameProps> = ({
  score,
}: EndOfGameProps): ReactElement => {
  return (
    <div id="end-of-game">
      <h1>Fin du jeu !</h1>
      <h3>Votre score : {score}</h3>
    </div>
  );
};

export default EndOfGame;
