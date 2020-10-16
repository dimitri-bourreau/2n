import React, { FunctionComponent, ReactElement } from 'react';

interface ProfilePageProps {
  user: unknown;
  signOut: unknown;
}

const ProfilePage: FunctionComponent<ProfilePageProps> = ({
  user,
  signOut,
}: ProfilePageProps): ReactElement => {
  return <h1>Connecté</h1>;
};

export default ProfilePage;
