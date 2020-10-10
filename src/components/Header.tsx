import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
// import { Trans } from 'react-i18next';
// import LangDropDown from './LangDropDown';

const HeaderWrapper = style.header`
  padding: 10px 5vw 20px 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(309deg, #90baf3, #80e1c4);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 10s ease infinite;
  -moz-animation: AnimationName 10s ease infinite;
  animation: AnimationName 10s ease infinite;

  @-webkit-keyframes AnimationName {
      0%{background-position:83% 0%}
      50%{background-position:18% 100%}
      100%{background-position:83% 0%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:83% 0%}
      50%{background-position:18% 100%}
      100%{background-position:83% 0%}
  }
  @keyframes AnimationName {
      0%{background-position:83% 0%}
      50%{background-position:18% 100%}
      100%{background-position:83% 0%}
  }

  @media all and (min-width: 768px) {
    flex-direction: row;
    padding: 10px 5vw;
  }
`;

const Logo = style.div`
  flex-basis: 7%;
  margin: 10px auto;
  img {
    max-width: 50px;
  }

  @media all and (min-width: 768px) {
    margin: 0;
  }
`;

const Nav = style.nav`
  flex-basis: 50%;

  @media all and (min-width: 576px) {
    flex-basis: 80%;
  }
  @media all and (min-width: 992px) {
    flex-basis: 60%;
  }
  @media all and (min-width: 1200px) {
    flex-basis: 50%;
  }
`;

const List = style.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ListElt = style.li`
  margin-bottom: 4px;
  a {
    color: white;
    text-transform: uppercase;
    font-weight: 400;
  }
`;

interface HeaderProps {
  userIsConnected?: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({
  userIsConnected,
}: HeaderProps): ReactElement => {
  // const activePath = window.location.pathname.split('').splice(1).join('');

  return (
    <HeaderWrapper>
      <Logo>
        <a href="/" className="img-link">
          <img src="/favicons/android-chrome-512x512.png" alt="logo" />
        </a>
      </Logo>
      <Nav>
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
      </Nav>
    </HeaderWrapper>
  );
};

Header.defaultProps = {
  userIsConnected: false,
};

export default Header;
