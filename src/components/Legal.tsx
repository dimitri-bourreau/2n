import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';
import { Trans } from 'react-i18next';

const LegalWrapper = style.section`
  margin: 30px auto;
  width: 80%;
  text-align: center;
  min-height: 80vh;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    margin-bottom: 0px;
  }

  p {
    margin-bottom: 10px;
  }

  a {
    text-decoration: underline;
  }

  ul {
    background-color: #f7ecec;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  ul li {
    font-size: 0.8em;
  }

  button {
    background-color: #3c65da;
  }

  button:hover {
    background-color: #1a46c3;
  }

  .source-code {
  }

  @media all and (min-width: 576px) {
    width: 70%;
  }
  @media all and (min-width: 768px) {
    width: 60%;
  }
  @media all and (min-width: 992px) {
    width: 50%;
  }
  @media all and (min-width: 1200px) {
    width: 30%;
  }
`;
const DetailsBlock = style.section`
  margin: 40px auto;

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    margin: 0 auto;
  }

  .privacy-intro {
    border-left: 5px solid lightgrey;
  }
`;

const Legal: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <LegalWrapper>
      <h1>
        <Trans i18nKey="Legal.legal">Legal notice</Trans>
      </h1>
      <DetailsBlock>
        <h2>
          <Trans i18nKey="Legal.hosting">Hosting</Trans>
        </h2>

        <p>
          <Trans i18nKey="Legal.vps">VPS rented to OVH.</Trans>
        </p>

        <ul>
          <li>
            <Trans i18nKey="Legal.ovhDetails.1">
              SAS au capital de 10 069 020 €
            </Trans>
          </li>
          <li>
            <Trans i18nKey="Legal.ovhDetails.2">
              RCS Lille Métropole 424 761 419 00045
            </Trans>
          </li>
          <li>
            <Trans i18nKey="Legal.ovhDetails.3">Code APE 2620Z</Trans>
          </li>
          <li>
            <Trans i18nKey="Legal.ovhDetails.4">
              N° TVA : FR 22 424 761 419
            </Trans>
          </li>
          <li>
            <Trans i18nKey="Legal.ovhDetails.5">
              Siège social : 2 rue Kellermann - 59100 Roubaix - France
            </Trans>
          </li>
        </ul>

        <a href="https://www.ovhcloud.com/fr/contact/">
          <Trans i18nKey="Legal.contactOvh">Contact OVH</Trans>
        </a>
      </DetailsBlock>

      <DetailsBlock>
        <h2 className="source-code">
          <Trans i18nKey="Legal.source">Source code</Trans>
        </h2>

        <a href="https://github.com/tobudim/2n">
          <button type="button" className="btn">
            <Trans i18nKey="Legal.seeSource">See source code on GitHub</Trans>
          </button>
        </a>
      </DetailsBlock>

      <DetailsBlock>
        <h2>
          <Trans i18nKey="Legal.cookies">Cookies</Trans>
        </h2>

        <p>
          <Trans i18nKey="Legal.seeCookies">
            You can watch the cookies this website stored on your machine at
          </Trans>{' '}
          <a href="/settings">
            {' '}
            <Trans i18nKey="Legal.fromSettings">the settings page</Trans>
          </a>
          .
        </p>

        <p>
          <Trans i18nKey="Legal.allCookies">
            All the cookies this website can store on your machine, after your
            consent, are these:
          </Trans>
        </p>

        <ul>
          <li>
            <p className="cookie">
              <Trans i18nKey="Legal.cookiesList.theme">
                theme: <span>website style theme details if modified.</span>
              </Trans>
            </p>
          </li>
          <li>
            <p className="cookie">
              <Trans i18nKey="Legal.cookiesList.session">
                session:{' '}
                <span>if you logged in, the website can then remember it.</span>
              </Trans>
            </p>
          </li>
        </ul>
      </DetailsBlock>

      <DetailsBlock>
        <h2>
          <Trans i18nKey="Legal.privacy">Privacy</Trans>
        </h2>

        <p className="privacy-intro">
          <Trans i18nKey="Legal.privacyIntro">
            I do not share nor resell any of your personnal data. Everything is
            detailed bellow, I use Google&apos;s servers to store your email and
            scores, and full control is yours. You will not receive emails from
            me.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="Legal.privacyContact">You can contact me</Trans>{' '}
          <a href="/contact">
            <Trans i18nKey="Legal.privacyContactHere">here</Trans>
          </a>
          .
        </p>

        <p>
          <Trans i18nKey="Legal.whenCreatingAccount">
            When you create an account, I ask several private data:
          </Trans>
        </p>

        <ul>
          <li>
            <Trans i18nKey="Legal.privacyList.email">Your email adress</Trans>
          </li>
          <li>
            <Trans i18nKey="Legal.privacyList.pass">Your password</Trans>
          </li>
        </ul>

        <p>
          <Trans i18nKey="Legal.emailToFirebase">
            Your email adress is stored inside Google&apos;s databases via its
            service Firebase.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="Legal.passHash">
            Your password does not leave your machine. I send Google&apos;s
            databases only a hash of your password. A hash is some sort of a key
            that allows to confirm your password without being able to guess it.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="Legal.update">
            You can update your password and your email, or delete your account
            from the
          </Trans>{' '}
          <a href="/me">
            <Trans i18nKey="Legal.accountPage">this page</Trans>
          </a>
          .{' '}
          <Trans i18nKey="Legal.askYourData">
            You can ask all the data I have about you from
          </Trans>{' '}
          <a href="/contact">
            <Trans i18nKey="Legal.askDataPage">this page</Trans>
          </a>
          .
        </p>

        <p>
          <Trans i18nKey="Legal.deleteAccount">
            By deleting your account, I erase all data about you on
            Google&apos;s servers: Email, password&apos;s hash, scores.
          </Trans>
        </p>

        <p>
          <a href="https://firebase.google.com/support/privacy/">
            <Trans i18nKey="Legal.firebasePrivacy">
              Firebase&apos;s privacy
            </Trans>
          </a>
        </p>

        <p>
          <Trans i18nKey="Legal.complain">You can complain from</Trans>{' '}
          <a href="https://www.cnil.fr/">
            <Trans i18nKey="Legal.cnil">the CNIL website</Trans>
          </a>
          .
        </p>
      </DetailsBlock>
    </LegalWrapper>
  );
};

export default Legal;
