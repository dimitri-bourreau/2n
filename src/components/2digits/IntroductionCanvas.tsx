import React, { FunctionComponent, ReactElement, useEffect } from 'react';

const IntroductionCanvas: FunctionComponent = (): ReactElement => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/2-digits-canvas/main.mjs';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <canvas
      id="2-digits-canvas"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

IntroductionCanvas.defaultProps = {
  handlePlayGame: () => null,
};

export default IntroductionCanvas;
