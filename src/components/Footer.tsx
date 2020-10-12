import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

const FooterWrapper = style.footer`
  background-color: #292727;
  color: white;
  margin: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 0.8em;
  }

  span {
    color: #d2cccc;
  }

  a {
    color: white;
    text-decoration: underline;
    border: none;
    transition: font-weight 0s ease-in;
  }

  a:hover {
    border: none;
    font-weight: 600;
  }

  @media all and (min-width: 768px) {
    flex-direction: row;
    p, ul {
      width: 30%;
    }
  }
`;

const Footer: FunctionComponent = (): ReactElement => {
  return (
    <FooterWrapper>
      <p>
        Concernant la gestion des cookies :{' '}
        <span>
          sur ce site vous pouvez créer un compte et vous connecter. Tant que
          vous ne vous connectez pas, aucun cookie n&apos;est déposé sur votre
          navigateur internet. Si je dépose un cookie sur votre machine, vous
          serez prévenu, vous aurez le choix, et tout sera facilement visible et
          compréhensible... bref, ce qui est censé être normal !
        </span>
      </p>
      <p>
        Mais pourquoi ce site ?{' '}
        <span>
          J&apos;ai réalisé ce petit site pour m&apos;amuser et montrer mes
          compétences : je suis un développeur disponible sur Bordeaux et Paris,
          voici mon <a href="/">LinkedIn</a> !
        </span>
      </p>
      <ul>
        <li>
          <a href="/legal">Mentions légales</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </FooterWrapper>
  );
};

export default Footer;
