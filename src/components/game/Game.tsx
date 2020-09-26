import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Alert, Button } from 'shards-react';
import { GameProps } from '../../interfaces/game';
import Digit from './Digit';
import EndOfGame from './EndOfGame';

const Game: FunctionComponent<GameProps> = (): ReactElement => {
  const getRandomDigit: number = Math.floor(Math.random() * 9);
  const [passedDigits, setPassedDigits] = useState<number[]>([]);
  const [turn, setTurn] = useState(1);
  const [digit, setDigit] = useState(getRandomDigit);
  const [success, setSuccess] = useState(true);
  const [score, setScore] = useState(0);

  const checkAnswer = (answer: boolean): void => {
    const rightAnswer = digit === passedDigits[passedDigits.length - 2];
    if (answer !== rightAnswer) {
      setSuccess(false);
    } else {
      nextTurn();
    }
  };

  const nextTurn = (): void => {
    if (turn > 2) setScore(score + 1);
    setPassedDigits([...passedDigits, digit]);
    setDigit(getRandomDigit);
    setTurn(turn + 1);
  };

  if (!success) return <EndOfGame score={score} />;

  return (
    <div id="game" className="text-center pt-2">
      <Digit digit={digit} />

      {turn === 1 || turn === 2 ? (
        <>
          <Alert theme="info" className="text-center mt-4">
            <p className="mb-0">
              Souvenez-vous bien de ce chiffre !{' '}
              <span role="img" aria-label="think">
                🧐
              </span>
            </p>
          </Alert>
          <Button theme="success" onClick={(): void => nextTurn()}>
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
              {passedDigits[passedDigits.length - 2]}
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
        Tour {turn} - Score {score}
      </p>
    </div>
  );
};

export default Game;
