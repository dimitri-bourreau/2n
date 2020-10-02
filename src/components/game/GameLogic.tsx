import React, { FunctionComponent, ReactElement, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import GameDisplay from './GameDisplay';

const GameLogic: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  const getRandomDigit = (): number => Math.floor(Math.random() * 9);
  const [allDigits, setAllDigits] = useState<number[]>([]);
  const [digit, setDigit] = useState(getRandomDigit());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const checkAnswer = (answer: boolean): void | ReactElement => {
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
    const digits = turn > 5 ? allDigits.slice(turn - 5) : [...allDigits];
    const hasMatchHappened = digits.map((passedDigit, index) => {
      if (allDigits[index - 2] === passedDigit) return true;
      return false;
    });
    setDigit(getRandomDigit());
    setScore(score + 1);
    if (!hasMatchHappened.includes(true)) setDigit(allDigits[turn - 2]);
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
