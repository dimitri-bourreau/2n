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
`;

const Legal: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <LegalWrapper>
      <h1>
        <Trans i18nKey="Legal.legal">Mentions légales</Trans>
      </h1>
      <DetailsBlock>
        <h2>
          <Trans i18nKey="Legal.hosting">Hébergement</Trans>
        </h2>

        <p>
          <Trans i18nKey="Legal.vps">VPS loué chez OVH.</Trans>
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
          <Trans i18nKey="Legal.contactOvh">Contacter OVH</Trans>
        </a>
      </DetailsBlock>

      <DetailsBlock>
        <h2 className="source-code">
          <Trans i18nKey="Legal.source">Code source</Trans>
        </h2>

        <a href="https://github.com/tobudim/2n">
          <button type="button" className="btn">
            <Trans i18nKey="Legal.seeSource">
              Voir le code source de ce site sur GitHub
            </Trans>
          </button>
        </a>
      </DetailsBlock>

      <DetailsBlock>
        <h2>
          <Trans i18nKey="Legal.cookies">Cookies</Trans>
        </h2>

        <p>
          <Trans i18nKey="Legal.seeCookies">
            Vous pouvez voir les cookies stockés sur votre machine pour ce site
            depuis
          </Trans>{' '}
          <a href="/settings">
            {' '}
            <Trans i18nKey="Legal.fromSettings">les paramètres</Trans>
          </a>
          .
        </p>

        <p>
          <Trans i18nKey="Legal.allCookies">
            Les cookies qui, après votre consentement, peuvent être déposés sur
            votre navigateur Internet sont ceux-ci :
          </Trans>
        </p>

        <ul>
          <li>
            <Trans i18nKey="Legal.cookiesList.theme">
              &quot;theme&quot; : Gestion du thème global du site.
            </Trans>
          </li>
          <li>
            <Trans i18nKey="Legal.cookiesList.session">
              &quot;session&quot; : Si vous vous connectez, cela permet au site
              de vous renconnaître au gré de votre navigation.
            </Trans>
          </li>
        </ul>
      </DetailsBlock>

      <DetailsBlock>
        <h2>
          <Trans i18nKey="Legal.privacy">
            Utilisation des données personnelles
          </Trans>
        </h2>

        <p>
          <Trans i18nKey="Legal.privacyContact">
            Avant toute chose : pour ce sujet vous pouvez me contacter
          </Trans>{' '}
          <a href="/contact">
            <Trans i18nKey="Legal.privacyContactHere">ici</Trans>
          </a>
          .
        </p>

        <p>
          <Trans i18nKey="Legal.whenCreatingAccount">
            Lorsque vous créez un compte, je vous demande deux données
            personnelles :
          </Trans>
        </p>

        <ul>
          <li>
            <Trans i18nKey="Legal.privacyList.email">Votre adresse email</Trans>
          </li>
          <li>
            <Trans i18nKey="Legal.privacyList.pass">Votre mot de passe</Trans>
          </li>
        </ul>

        <p>
          <Trans i18nKey="Legal.emailToFirebase">
            L&apos;adresse email est alors enregistrée et conservée par Google
            au sein de son service Firebase.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="Legal.passHash">
            Le mot de passe ne quitte pas votre machine. Je confie aux serveurs
            de Google, au sein de son service Firebase, un <i>hash</i> de votre
            mot de passe : ce hash est une sorte de clé qui permet plus tard de
            vérifier votre mot de passe, mais il ne permet pas de le deviner.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="Legal.update">
            Vous pouvez modifier votre mot de passe, votre email, et supprimer
            votre compte depuis
          </Trans>{' '}
          <a href="/me">
            <Trans i18nKey="Legal.accountPage">Mon compte</Trans>
          </a>
          .{' '}
          <Trans i18nKey="Legal.askYourData">
            Vous pouvez me demander les données vous concernant en ma possession
            depuis
          </Trans>{' '}
          <a href="/contact">
            <Trans i18nKey="Legal.askDataPage">cette page</Trans>
          </a>
          .
        </p>

        <p>
          <Trans i18nKey="Legal.deleteAccount">
            En supprimant votre compte, je supprime toutes les données vous
            concernant sur les serveurs de Google : adresse email, hash du mot
            de passe, scores.
          </Trans>
        </p>

        <p>
          <a href="https://firebase.google.com/support/privacy/">
            <Trans i18nKey="Legal.firebasePrivacy">
              Confidentialité et sécurité dans Firebase
            </Trans>
          </a>
        </p>

        <p>
          <Trans i18nKey="Legal.complain">
            Vous pouvez réaliser une réclamation depuis
          </Trans>{' '}
          <a href="https://www.cnil.fr/">
            <Trans i18nKey="Legal.cnil">le site de la CNIL</Trans>
          </a>
          .
        </p>
      </DetailsBlock>
    </LegalWrapper>
  );
};

export default Legal;
