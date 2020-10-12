import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

import { EndOfGameProps } from '../../interfaces/game';

const GameOverWrapper = style.div`
  margin: 30px auto;
  width: 80%;
  text-align: center;
  min-height: 80vh;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    margin-bottom: 50px;
  }

  button {
    margin-top: 50px;
  }

  @media all and (min-width: 576px) {
    width: 70%;
  }
  @media all and (min-width: 768px) {
    width: 60%;
  }
  @media all and (min-width: 992px) {
    width: 50%;
  }
  @media all and (min-width: 1200px) {
    width: 30%;
  }
`;

const GameOver: FunctionComponent<EndOfGameProps> = ({
  score,
}: EndOfGameProps): ReactElement => {
  return (
    <GameOverWrapper>
      <h1>Game over!</h1>
      <h2>Your score : {score}</h2>
      <a href="/game">
        <button type="button" className="btn btn-success">
          Play again
        </button>
      </a>
    </GameOverWrapper>
  );
};

export default GameOver;
