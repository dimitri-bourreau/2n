import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

import { GameDisplayProps } from '../../interfaces/game';
import GameOver from './GameOver';
import Digit from './Digit';

const GameWrapper = style.section`
  text-align: center;
  margin: 50px auto;
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
          <div className="text-center mt-4">
            <p className="mb-0">
              Remember this digit!{' '}
              <span role="img" aria-label="think">
                🧐
              </span>
            </p>
          </div>
          <div>
            Next{' '}
            <span role="img" aria-label="fist">
              🤜
            </span>
          </div>
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

      <p className="mb-0 mt-3">
        Turn {allDigits.length} - Score {score}
      </p>
    </GameWrapper>
  );
};

export default GameDisplay;
