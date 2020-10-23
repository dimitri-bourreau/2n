import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
import { useCookies } from 'react-cookie';

import Canvas from './Canvas';

const LightCanvas = style.div`
  background: rgb(41,39,39);
  background: linear-gradient(0deg, rgba(41,39,39,1) 23%, rgba(152,87,87,1) 100%);
`;
const SoftCanvas = style(LightCanvas)`
  background: #955656;
`;
const DarkCanvas = style(LightCanvas)`
  background: #292727;
`;

const ThemedCanvas: FunctionComponent = (): ReactElement => {
  return <Canvas height={500} />;
};

const PreFooterCanvas: FunctionComponent = (): ReactElement => {
  const [cookies] = useCookies();
  if (typeof cookies.theme !== 'undefined') {
    if (cookies.theme === 'soft')
      return (
        <SoftCanvas>
          <ThemedCanvas />
        </SoftCanvas>
      );
    if (cookies.theme === 'dark')
      return (
        <DarkCanvas>
          <ThemedCanvas />
        </DarkCanvas>
      );
  }
  return (
    <LightCanvas>
      <ThemedCanvas />
    </LightCanvas>
  );
};

export default PreFooterCanvas;
