import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

import { DigitProps } from '../../interfaces/game';
import getNiceColorPalette from '../../nice-color-palettes';

const BlockWidthPropagationOnRotate = style.div`
  display: block;
  box-size: border-box;
  width: 200px;
  margin: 150px auto;
`;

const Digit: FunctionComponent<DigitProps> = ({
  digit,
}: DigitProps): ReactElement => {
  const colors = getNiceColorPalette();
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const DigitWrapper = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${randomColor};
  text-shadow: 0 0 10px #292727;
  color: white;
  font-size: 8em;
  border-radius: ${Math.floor(Math.random() * 100)}px;

  // animation-duration: ${Math.floor(Math.random() * 10)}s;
  // animation-name: rotateitup;
  // animation-iteration-count: infinite;

  // @keyframes rotateitup {
  //   from {
  //     transform: rotate(0turn);
  //   }

  //   50% {
  //     transform: rotate(${Math.random()}turn);
  //   }

  //   to {
  //     transform: rotate(0turn);
  //   }
  // }
`;

  const DigitUnderliner = style.div`
    text-decoration: ${digit === 6 || digit === 9 ? 'underline' : 'none'};
  `;

  return (
    <BlockWidthPropagationOnRotate>
      <DigitWrapper>
        <DigitUnderliner>{digit}</DigitUnderliner>
      </DigitWrapper>
    </BlockWidthPropagationOnRotate>
  );
};

export default Digit;
