import React, { FunctionComponent, ReactElement } from 'react';
import { Trans } from 'react-i18next';
import { Nav, NavItem, NavLink } from 'shards-react';
import LangDropDown from './LangDrowDown';

const Header: FunctionComponent = (): ReactElement => {
  const activePath = window.location.pathname.split('').splice(1).join('');

  return (
    <div id="header">
      <Nav tabs>
        <NavItem>
          <NavLink active={activePath === ''} href="/">
            <Trans i18nKey="header.game">Game</Trans>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activePath === 'ranking'} href="ranking">
            <Trans i18nKey="header.ranking">Ranking</Trans>
          </NavLink>
        </NavItem>
        <NavItem href="more">
          <NavLink active={activePath === 'more'} href="more">
            <Trans i18nKey="header.more">More</Trans>
          </NavLink>
        </NavItem>

        <NavItem>
          <LangDropDown />
        </NavItem>
      </Nav>
    </div>
  );
};

export default Header;
