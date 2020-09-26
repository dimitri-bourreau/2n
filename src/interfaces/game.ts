import { RouteComponentProps } from '@reach/router';

export interface GameProps extends RouteComponentProps {
  handlePlayGame: (game: boolean) => null;
}
