import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';

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
      <h1>Mentions légales</h1>
      <DetailsBlock>
        <h2>Hébergement</h2>

        <p>VPS loué chez OVH.</p>

        <ul>
          <li>SAS au capital de 10 069 020 €</li>
          <li>RCS Lille Métropole 424 761 419 00045</li>
          <li>Code APE 2620Z</li>
          <li>N° TVA : FR 22 424 761 419</li>
          <li>Siège social : 2 rue Kellermann - 59100 Roubaix - France</li>
        </ul>

        <a href="https://www.ovhcloud.com/fr/contact/">Contacter OVH</a>
      </DetailsBlock>

      <DetailsBlock>
        <h2 className="source-code">Code source</h2>

        <a href="https://github.com/tobudim/2n">
          <button type="button" className="btn">
            Voir le code source de ce site sur GitHub
          </button>
        </a>
      </DetailsBlock>

      <DetailsBlock>
        <h2>Cookies</h2>

        <p>
          Vous pouvez voir les cookies stockés sur votre machine pour ce site
          depuis <a href="/settings">les paramètres</a>.
        </p>

        <p>
          Les cookies qui, après votre consentement, peuvent être déposés sur
          votre navigateur Internet sont ceux-ci :
        </p>

        <ul>
          <li>&quot;theme&quot; : Gestion du thème global du site.</li>
          <li>
            &quot;session&quot; : Si vous vous connectez, cela permet au site de
            vous renconnaître au gré de votre navigation.
          </li>
        </ul>
      </DetailsBlock>

      <DetailsBlock>
        <h2>Utilisation des données personnelles</h2>

        <p>
          Avant toute chose : pour ce sujet vous pouvez me contacter{' '}
          <a href="/contact">ici</a>.
        </p>

        <p>
          Lorsque vous créez un compte, je vous demande deux données
          personnelles :
        </p>

        <ul>
          <li>Votre adresse email</li>
          <li>Un mot de passe</li>
        </ul>

        <p>
          L&apos;adresse email est alors enregistrée et conservée par Google au
          sein de son service Firebase.
        </p>

        <p>
          Le mot de passe ne quitte pas votre machine. Je confie aux serveurs de
          Google, au sein de son service Firebase, un <i>hash</i> de votre mot
          de passe : ce hash est une sorte de clé qui permet plus tard de
          vérifier votre mot de passe, mais il ne permet pas de le deviner.
        </p>

        <p>
          Vous pouvez modifier votre mot de passe, votre email, et supprimer
          votre compte depuis <a href="/me">Mon compte</a>. Vous pouvez me
          demander les données vous concernant en ma possession depuis{' '}
          <a href="/contact">cette page</a>.
        </p>

        <p>
          En supprimant votre compte, je supprime toutes les données vous
          concernant sur les serveurs de Google.
        </p>

        <p>
          <a href="https://firebase.google.com/support/privacy/">
            Confidentialité et sécurité dans Firebase
          </a>
        </p>

        <p>
          Vous pouvez réaliser une réclamation depuis{' '}
          <a href="https://www.cnil.fr/">le site de la CNIL</a>.
        </p>
      </DetailsBlock>
    </LegalWrapper>
  );
};

export default Legal;
