import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
import { Trans } from 'react-i18next';

import Digit from './Digit';
import { GameDisplayProps } from '../../interfaces/game';
import GameOver from './GameOver';

const GameWrapper = style.section`
  text-align: center;
  margin: 50px auto;

  p {
    font-size: 1.3em;
  }
`;
const Score = style.section`
  font-size: 1em;
`;
const Answers = style.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
`;

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
    <GameWrapper>
      <Digit digit={digit} />

      {allDigits.length <= 1 ? (
        <>
          <p>
            <Trans i18nKey="GameDisplay.remember">Remember this digit!</Trans>{' '}
            <span role="img" aria-label="think">
              🧐
            </span>
          </p>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => newTurn()}
          >
            <Trans i18nKey="GameDisplay.next">Next</Trans>{' '}
            <span role="img" aria-label="fist">
              🤜
            </span>
          </button>
        </>
      ) : (
        <>
          <p>
            <Trans i18nKey="GameDisplay.question">
              Whas this digit displayed two turns ago?
            </Trans>{' '}
            <span role="img" aria-label="think">
              🤔
            </span>
          </p>
          <Answers>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => checkAnswer(true)}
            >
              <Trans i18nKey="GameDisplay.yes">Yes</Trans>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => checkAnswer(false)}
            >
              <Trans i18nKey="GameDisplay.no">No</Trans>
            </button>
          </Answers>
        </>
      )}

      <Score>
        Turn {allDigits.length} - Score {score}
      </Score>
    </GameWrapper>
  );
};

export default GameDisplay;
