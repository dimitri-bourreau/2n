import React, { FunctionComponent, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';

const Layout: FunctionComponent = (): ReactElement => {
  useTranslation();
  return (
    <>
      <Header />
    </>
  );
};

export default Layout;
