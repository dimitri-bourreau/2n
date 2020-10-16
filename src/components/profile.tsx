import React, { FunctionComponent, ReactElement } from 'react';
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
  const myScores = [12, 123, 44, 26, 43].sort((a, b) => b - a);

  return (
    <ProfileWrapper>
      <h1>Mon compte</h1>

      <ProfileData>
        <h3>Mes informations</h3>
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

      <ProfileScores>
        <h3>Mes scores</h3>

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
          Supprimer mon compte
        </button>
      </ProfileDangerZone>
    </ProfileWrapper>
  );
};

export default ProfilePage;
