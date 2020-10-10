import React, { FunctionComponent, ReactElement } from 'react';
import { Trans } from 'react-i18next';

import { EndOfGameProps } from '../../interfaces/game';

const GameOver: FunctionComponent<EndOfGameProps> = ({
  score,
}: EndOfGameProps): ReactElement => {
  return (
    <div id="end-of-game" className="text-center mb-4">
      <div className="mt-5 text-light">
        <h1 className="text-light">
          <Trans i18nKey="gameDisplay.gameOver.gameOver">Game over!</Trans>
        </h1>
        <h3 className="text-light">
          <Trans i18nKey="gameDisplay.gameOver.score">Your score</Trans> :{' '}
          <div></div>
        </h3>
      </div>
      <a href="/">
        <div className="mt-4">
          <Trans i18nKey="gameDisplay.gameOver.playAgain">Play again</Trans>
        </div>
      </a>
    </div>
  );
};

export default GameOver;
