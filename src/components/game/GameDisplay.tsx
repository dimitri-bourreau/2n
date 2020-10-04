import React, { FunctionComponent, ReactElement } from 'react';
import { Alert, Button } from 'shards-react';
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
          <Alert theme="info" className="text-center mt-4">
            <p className="mb-0">
              <Trans i18nKey="gameDisplay.intro.remember">
                Remember this digit!
              </Trans>{' '}
              <span role="img" aria-label="think">
                🧐
              </span>
            </p>
          </Alert>
          <Button theme="success" onClick={newTurn}>
            <Trans i18nKey="gameDisplay.intro.next">Next</Trans>{' '}
            <span role="img" aria-label="fist">
              🤜
            </span>
          </Button>
        </>
      ) : (
        <>
          <Alert theme="light" className="text-center mt-4">
            <p className="mb-0">
              <Trans i18nKey="gameDisplay.inGame.question">
                What this digit displayed two turns ago?
              </Trans>{' '}
              <span role="img" aria-label="think">
                🤔
              </span>
              {allDigits.map(e => e)}
            </p>
          </Alert>
          <Button
            theme="success"
            className="mr-1"
            onClick={(): void => checkAnswer(true)}
          >
            <Trans i18nKey="gameDisplay.inGame.yes">Yes</Trans>
          </Button>
          <Button
            theme="danger"
            className="ml-1"
            onClick={(): void => checkAnswer(false)}
          >
            <Trans i18nKey="gameDisplay.inGame.no">No</Trans>
          </Button>
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
