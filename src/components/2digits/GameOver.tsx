import React, { FunctionComponent, ReactElement } from 'react';

import { EndOfGameProps } from '../../interfaces/game';

const GameOver: FunctionComponent<EndOfGameProps> = ({
  score,
}: EndOfGameProps): ReactElement => {
  return (
    <div id="end-of-game" className="text-center mb-4">
      <div className="mt-5 text-light">
        <h1 className="text-light">Game over!</h1>
        <h3 className="text-light">Your score</h3>
      </div>
      <a href="/">
        <div className="mt-4">Play again</div>
      </a>
    </div>
  );
};

export default GameOver;
