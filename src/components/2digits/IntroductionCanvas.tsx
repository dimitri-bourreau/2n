import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

const Canvas: FunctionComponent = (): ReactElement => (
  <canvas id="2digits-canvas" />
);

const StyledCanvas = style(Canvas)`
  canvas {
  width: 100%;
  height: 100%;
  background-color: red;
  }
`;

const Introduction: FunctionComponent = (): ReactElement => {
  return <StyledCanvas />;
};

Introduction.defaultProps = {
  handlePlayGame: () => null,
};

export default Introduction;
