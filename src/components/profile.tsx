import React, { FunctionComponent, ReactElement, useState } from 'react';
import style from 'styled-components';

import User from '../interfaces/user';

const ProfileWrapper = style.div`
  margin: 30px auto 60px auto;
  width: 80%;
  min-height: 50vh;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    margin-bottom: 20px;
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

const ProfileData = style.div`
  padding: 0 30px;

  h3 {
    margin: 20px auto;
  }
`;

const ProfilePicture = style.div`
  img {
    border-radius: 100%;
    margin: auto;
  }
`;

const ProfileScores = style.div`
  margin-top: 40px;

  h3 {
    margin-bottom: 20px;
  }
`;

const PseudoUpdated = style.div`
  color: green;
  font-size: 0.8em;
`;

const ProfileDangerZone = style.div`
  border-left: 1px solid red;
  padding: 10px 0;
  margin-top: 40px;

  h3 {
    color: red;
    font-weight: bold;
  }

  button {
    margin-bottom: 0;
  }
`;

interface ProfilePageProps {
  user: User;
  signOut: any;
}

const ProfilePage: FunctionComponent<ProfilePageProps> = ({
  user,
  signOut,
}: ProfilePageProps): ReactElement => {
  const [pseudoUpdate, setPseudoUpdate] = useState('');
  const [myPseudo, setMyPseudo] = useState('Dimitri');
  const myScores = [12, 123, 44, 26, 43].sort((a, b) => b - a);

  const updatePseudo = (value: string): void => {
    setPseudoUpdate('Mis à jour');
    setMyPseudo(value);
  };

  return (
    <ProfileWrapper>
      <h1>Mon compte</h1>

      <ProfileData>
        <h3>Mes informations privées</h3>
        <ProfilePicture>
          <img src={user.photoURL} alt="Profile" />
        </ProfilePicture>
        <p>{user.displayName}</p>
        <p>{user.email}</p>

        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => signOut()}
        >
          Se déconnecter
        </button>
      </ProfileData>

      <ProfileData>
        <h3>Mes informations publiques</h3>

        <label htmlFor="pseudo">
          Pseudo affiché dans le classement des scores
          <input
            id="pseudo"
            type="text"
            value={myPseudo}
            onChange={e => updatePseudo(e.target.value)}
          />
        </label>
        <PseudoUpdated>{pseudoUpdate}</PseudoUpdated>
      </ProfileData>

      <ProfileScores>
        <h3>Mes meilleurs scores</h3>

        {myScores.map(score => (
          <p key={`${score}${Math.random()}`}>{score}</p>
        ))}
      </ProfileScores>

      <ProfileDangerZone>
        <h3>Zone de danger</h3>
        <button type="button" className="btn btn-danger">
          Supprimer mes scores
        </button>
        <button type="button" className="btn btn-danger">
          Supprimer mon compte et mes scores
        </button>
      </ProfileDangerZone>
    </ProfileWrapper>
  );
};

export default ProfilePage;
