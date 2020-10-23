import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';
import { Trans } from 'react-i18next';

const FooterWrapper = style.footer`
  background-color: #292727;
  color: white;
  margin: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-top: auto;

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
        <Trans i18nKey="Footer.why">Why this website?</Trans>{' '}
        <span>
          <Trans i18nKey="Footer.site">
            I realised this website just for fun and showing my knowledges: I am
            a French developer available for Bordeaux and Paris, here is my
          </Trans>{' '}
          <a href="https://www.linkedin.com/in/dimitri-bourreau-94a4b3151/">
            LinkedIn
          </a>{' '}
          !
        </span>
      </p>
      <ul>
        <li>
          <a href="/legal">
            <Trans i18nKey="Footer.legal">Legal notice</Trans>
          </a>
        </li>
        <li>
          <a href="/contact">
            <Trans i18nKey="Footer.contact">Contact</Trans>
          </a>
        </li>
      </ul>
    </FooterWrapper>
  );
};

export default Footer;
