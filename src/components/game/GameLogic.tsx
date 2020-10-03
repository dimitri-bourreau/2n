import React, { FunctionComponent, ReactElement, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import GameDisplay from './GameDisplay';

const GameLogic: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  const getRandomDigit = (): number => Math.floor(Math.random() * 7);
  const getRandomBool = (): boolean => Math.random() >= 0.1;
  const [allDigits, setAllDigits] = useState<number[]>([]);
  const [digit, setDigit] = useState(getRandomDigit());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const checkAnswer = (answer: boolean): void => {
    const { length: turn } = allDigits;
    if (turn <= 1) newTurn();
    if (digit === allDigits[turn - 2]) {
      if (answer === true) return newTurn();
      return setGameOver(true);
    }
    if (answer === false) return newTurn();
    return setGameOver(true);
  };

  const newTurn = (): void => {
    const { length: turn } = allDigits;
    const digits = turn > 10 ? allDigits.slice(turn - 5) : [0];
    const hasMatchHappened =
      turn > 10 && turn % 5 === 0
        ? digits.map((passedDigit, index) => {
            if (index >= 2 && passedDigit === digits[index - 2]) return true;
            return false;
          })
        : [true];
    if (turn >= 2) setScore(score + 1);
    const doMatch =
      !hasMatchHappened.includes(true) || (turn > 5 && getRandomBool());
    console.log(doMatch, allDigits[turn - 1]);
    setDigit(doMatch ? allDigits[turn - 1] : getRandomDigit());
    setAllDigits([...allDigits, digit]);
  };

  return (
    <GameDisplay
      allDigits={allDigits}
      digit={digit}
      score={score}
      gameOver={gameOver}
      checkAnswer={checkAnswer}
      newTurn={newTurn}
    />
  );
};

export default GameLogic;
