import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import 'firebase/auth';

import Profile from './Profile';
import LogIn from './LogIn';

import User from '../../interfaces/user';

interface AccountProps extends RouteComponentProps {
  user: User;
  sign: {
    signOut: unknown;
    signInWithGoogle: unknown;
  };
}

const Account: FunctionComponent<AccountProps> = ({
  user,
  sign,
}: AccountProps): ReactElement => {
  if (user) return <Profile user={user} signOut={sign.signOut} />;
  return <LogIn signIn={sign.signInWithGoogle} />;
};

export default Account;
