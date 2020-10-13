import React, { FunctionComponent, ReactElement, useEffect } from 'react';

interface IntroductionCanvasProps {
  height?: number | null;
}

const Canvas: FunctionComponent<IntroductionCanvasProps> = ({
  height,
}: IntroductionCanvasProps): ReactElement => {
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
        height: height ? `${height}px` : '100%',
      }}
    />
  );
};

Canvas.defaultProps = {
  height: null,
};

export default Canvas;
