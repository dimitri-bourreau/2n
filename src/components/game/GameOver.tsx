import React, { FunctionComponent, ReactElement } from 'react';
import { Alert, Badge, Button } from 'shards-react';
import { EndOfGameProps } from '../../interfaces/game';

const GameOver: FunctionComponent<EndOfGameProps> = ({
  score,
}: EndOfGameProps): ReactElement => {
  return (
    <div id="end-of-game" className="text-center mb-4">
      <Alert theme="danger" className="mt-5 text-light">
        <h1 className="text-light">Fin du jeu !</h1>
        <h3 className="text-light">
          Votre score : <Badge theme="warning">{score}</Badge>
        </h3>
      </Alert>
      <a href="/">
        <Button theme="light" className="mt-4">
          Rejouer
        </Button>
      </a>
    </div>
  );
};

export default GameOver;
