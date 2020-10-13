import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
import { Trans } from 'react-i18next';

import { EndOfGameProps } from '../../interfaces/game';
import Rules from './Rules';

const GameOverWrapper = style.div`
  margin: 60px auto;
  width: 80%;
  text-align: center;
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
    <>
      <GameOverWrapper>
        <h1>
          <Trans i18nKey="GameOver.gameOver">Game over!</Trans>
        </h1>
        <h2>
          <Trans i18nKey="GameOver.score">Your score</Trans> : {score}
        </h2>
        <a href="/game">
          <button type="button" className="btn btn-success">
            <Trans i18nKey="GameOver.playAgain">Play again</Trans>
          </button>
        </a>
      </GameOverWrapper>

      <Rules inGame="gameOver" />
    </>
  );
};

export default GameOver;
