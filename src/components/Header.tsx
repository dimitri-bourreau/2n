import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
// import { Trans } from 'react-i18next';
// import { Nav, NavItem, NavLink } from 'shards-react';
// import LangDropDown from './LangDropDown';

const HeaderWrapper = style.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = style.div`
  flex-basis: 10%;
  img {
    max-width: 100%;
  }
`;

const List = style.ul`
  list-style: none;
  padding: 0;
`;

const ListElt = style.li`
  a {
    color: black;
  }
`;

interface HeaderProps {
  userIsConnected?: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({
  userIsConnected = false,
}: HeaderProps): ReactElement => {
  // const activePath = window.location.pathname.split('').splice(1).join('');

  return (
    <HeaderWrapper>
      <Logo>
        <img src="/favicons/android-chrome-512x512.png" alt="logo" />
      </Logo>
      <nav>
        <List>
          <ListElt>
            <a href="/">Accueil</a>
          </ListElt>
          <ListElt>
            <a href="/classements">Classements</a>
          </ListElt>
          <ListElt>
            <a href="/apropos">À propos</a>
          </ListElt>
          <ListElt>
            <a href={userIsConnected ? '/me' : '/login'}>
              {userIsConnected ? 'Mon compte' : 'Se connecter'}
            </a>
          </ListElt>
        </List>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
