import React, { FunctionComponent, ReactElement } from 'react';
import { Alert, Button } from 'shards-react';
import { GameDisplayProps } from '../../interfaces/game';
import EndOfGame from './EndOfGame';

import Digit from './Digit';

const GameDisplay: FunctionComponent<GameDisplayProps> = ({
  allDigits,
  digit,
  score,
  gameOver,
  newTurn,
  checkAnswer,
}: GameDisplayProps): ReactElement => {
  if (gameOver) return <EndOfGame score={score} />;

  return (
    <div id="game" className="text-center pt-2">
      <Digit digit={digit} />

      {allDigits.length <= 1 ? (
        <>
          <Alert theme="info" className="text-center mt-4">
            <p className="mb-0">
              Souvenez-vous bien de ce chiffre !{' '}
              <span role="img" aria-label="think">
                🧐
              </span>
            </p>
          </Alert>
          <Button theme="success" onClick={(): void => newTurn()}>
            Suivant{' '}
            <span role="img" aria-label="fist">
              🤜
            </span>
          </Button>
        </>
      ) : (
        <>
          <Alert theme="light" className="text-center mt-4">
            <p className="mb-0">
              Ce chiffre était-il affiché il y a deux tours ?{' '}
              <span role="img" aria-label="think">
                🤔
              </span>{' '}
              {allDigits[allDigits.length - 2]}
            </p>
          </Alert>
          <Button
            theme="success"
            className="mr-1"
            onClick={(): void => checkAnswer(true)}
          >
            Oui
          </Button>
          <Button
            theme="danger"
            className="ml-1"
            onClick={(): void => checkAnswer(false)}
          >
            Non
          </Button>
        </>
      )}

      <p className="mb-0 mt-3">
        Tour {allDigits.length} - Score {score}
      </p>
    </div>
  );
};

export default GameDisplay;
