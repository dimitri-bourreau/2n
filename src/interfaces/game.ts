import { RouteComponentProps } from '@reach/router';

export interface GameDisplayProps extends RouteComponentProps {
  allDigits: number[];
  digit: number;
  score: number;
  gameOver: boolean;
  newTurn: () => void;
  checkAnswer: (answer: boolean) => void;
}

export interface DigitProps {
  digit: number;
}

export interface EndOfGameProps {
  score: number;
}
