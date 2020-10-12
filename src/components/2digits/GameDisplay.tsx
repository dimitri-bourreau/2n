import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

import { GameDisplayProps } from '../../interfaces/game';
import GameOver from './GameOver';
import Digit from './Digit';

const GameWrapper = style.section`
  text-align: center;
  margin: 50px auto;

  p {
    font-size: 1.3em;
  }

  button {
    background-color: #1dad1c;
  }
  button:hover {
    background-color: #19c219;
  }
`;

const Score = style.section`
  font-size: 1em;
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
            Remember this digit!{' '}
            <span role="img" aria-label="think">
              🧐
            </span>
          </p>
          <button type="button" className="btn" onClick={() => newTurn()}>
            Next{' '}
            <span role="img" aria-label="fist">
              🤜
            </span>
          </button>
        </>
      ) : (
        <>
          <div className="text-center mt-4">
            <p className="mb-0">
              What this digit displayed two turns ago?{' '}
              <span role="img" aria-label="think">
                🤔
              </span>
            </p>
          </div>
          <div className="mr-1">Yes</div>
          <div className="ml-1">No</div>
        </>
      )}

      <Score>
        Turn {allDigits.length} - Score {score}
      </Score>
    </GameWrapper>
  );
};

export default GameDisplay;
