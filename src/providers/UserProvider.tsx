import React, {
  FunctionComponent,
  createContext,
  ReactElement,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { auth } from '../firebase.js';

interface UserInterface {
  children: ReactNode;
  user: {
    exists: boolean;
    photoURL?: string;
    displayName?: string;
    email?: string;
  };
}

export const UserContext = createContext<UserInterface>({
  user: { exists: false },
} as UserInterface);

export const UserProvider: FunctionComponent = (
  props: UserInterface,
): ReactElement => {
  const { children } = props;
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setUser({
        ...userAuth,
      });
    });
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
