import React, { FunctionComponent, ReactElement } from 'react';
import { Card, CardBody, CardTitle } from 'shards-react';
import { DigitProps } from '../../interfaces/game';

const Digit: FunctionComponent<DigitProps> = ({
  digit,
}: DigitProps): ReactElement => {
  return (
    <Card className="mt-5 mx-auto col-sm-4 text-center">
      <CardBody>
        <CardTitle className="mb-0">{digit}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default Digit;
