import { RouteComponentProps } from '@reach/router';

export interface GameProps extends RouteComponentProps {
  handlePlayGame: (game: boolean) => null;
}

export interface DigitProps {
  digit: number;
}

export interface EndOfGameProps {
  score: number;
}
