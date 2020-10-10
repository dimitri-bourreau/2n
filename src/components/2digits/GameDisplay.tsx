import React, { FunctionComponent, ReactElement } from 'react';
import { Trans } from 'react-i18next';

import { GameDisplayProps } from '../../interfaces/game';
import GameOver from './GameOver';

import Digit from './Digit';

const GameDisplay: FunctionComponent<GameDisplayProps> = ({
  allDigits,
  digit,
  score,
  gameOver,
  newTurn,
  checkAnswer,
}: GameDisplayProps): ReactElement => {
  if (gameOver) return <GameOver score={score} />;

  return (
    <div id="game" className="text-center pt-2">
      <Digit digit={digit} />

      {allDigits.length <= 1 ? (
        <>
          <div className="text-center mt-4">
            <p className="mb-0">
              <Trans i18nKey="gameDisplay.intro.remember">
                Remember this digit!
              </Trans>{' '}
              <span role="img" aria-label="think">
                🧐
              </span>
            </p>
          </div>
          <div>
            <Trans i18nKey="gameDisplay.intro.next">Next</Trans>{' '}
            <span role="img" aria-label="fist">
              🤜
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="text-center mt-4">
            <p className="mb-0">
              <Trans i18nKey="gameDisplay.inGame.question">
                What this digit displayed two turns ago?
              </Trans>{' '}
              <span role="img" aria-label="think">
                🤔
              </span>
            </p>
          </div>
          <div className="mr-1">
            <Trans i18nKey="gameDisplay.inGame.yes">Yes</Trans>
          </div>
          <div className="ml-1">
            <Trans i18nKey="gameDisplay.inGame.no">No</Trans>
          </div>
        </>
      )}

      <p className="mb-0 mt-3">
        <Trans i18nKey="gameDisplay.inGame.turn">Turn</Trans> {allDigits.length}{' '}
        - <Trans i18nKey="gameDisplay.inGame.score">Score</Trans> {score}
      </p>
    </div>
  );
};

export default GameDisplay;
