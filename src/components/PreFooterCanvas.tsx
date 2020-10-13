import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

import Canvas from './Canvas';

const CanvasWrapper = style.div`
  background: rgb(41,39,39);
  background: linear-gradient(0deg, rgba(41,39,39,1) 23%, rgba(152,87,87,1) 100%);
`;

const PreFooterCanvas: FunctionComponent = (): ReactElement => {
  return (
    <CanvasWrapper>
      <Canvas height={500} />
    </CanvasWrapper>
  );
};

export default PreFooterCanvas;
