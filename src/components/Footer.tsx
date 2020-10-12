import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

const FooterWrapper = style.footer`
  background-color: #292727;
  color: white;
  margin: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

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
      width: 45%;
    }
  }
`;

const Footer: FunctionComponent = (): ReactElement => {
  return (
    <FooterWrapper>
      <p>
        Mais pourquoi ce site ?{' '}
        <span>
          J&apos;ai réalisé ce petit site pour m&apos;amuser et montrer mes
          compétences : je suis un développeur disponible sur Bordeaux et Paris,
          voici mon{' '}
          <a href="https://www.linkedin.com/in/dimitri-bourreau-94a4b3151/">
            LinkedIn
          </a>{' '}
          !
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
