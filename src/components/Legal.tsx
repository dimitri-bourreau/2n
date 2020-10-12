import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';

const LegalWrapper = style.section`
  min-height: 80vh;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
`;

const Legal: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <LegalWrapper>
      <h1>Legal En cours...</h1>
    </LegalWrapper>
  );
};

export default Legal;
