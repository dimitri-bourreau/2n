import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Trans } from 'react-i18next';
import { Nav, NavItem, NavLink } from 'shards-react';
import LangDropDown from './LangDrowDown';

const Header: FunctionComponent = (): ReactElement => {
  return (
    <div id="header">
      <Nav tabs>
        <NavItem>
          <NavLink active href="#">
            <Trans i18nKey="header.game">Game</Trans>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Trans i18nKey="header.ranking">Ranking</Trans>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Trans i18nKey="header.more">More</Trans>
          </NavLink>
        </NavItem>

        <NavItem>
          <LangDropDown />
        </NavItem>
      </Nav>
      <h1 className="mt-5 mx-auto text-center">2n</h1>
      <h6 className="text-center">
        <Trans i18nKey="header.subtitle">
          Will you remember 2 numbers ago?
        </Trans>{' '}
        <span role="img" aria-label="emoji-hand-mouth">
          🤭
        </span>
      </h6>
    </div>
  );
};

export default Header;
