import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';

const ContactWrapper = style.section`
  min-height: 80vh;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
`;

const Contact: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <ContactWrapper>
      <h1>Contact En cours...</h1>
    </ContactWrapper>
  );
};

export default Contact;
