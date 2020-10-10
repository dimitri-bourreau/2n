import React, { FunctionComponent, ReactElement } from 'react';
import { DigitProps } from '../../interfaces/game';

const Digit: FunctionComponent<DigitProps> = ({
  digit,
}: DigitProps): ReactElement => {
  return (
    <div className="mt-5 mx-auto col-sm-4 text-center">
      <div>
        <div className="mb-0">{digit}</div>
      </div>
    </div>
  );
};

export default Digit;
