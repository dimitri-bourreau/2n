import React, { Component, createContext, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase.js';

interface UserInterface {
  user: {
    exists: boolean;
    photoURL?: string;
    displayName?: string;
    email?: string;
  };
}

export const UserContext = createContext({
  user: { exists: false },
} as UserInterface);

class UserProvider extends Component<unknown, UserInterface> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      user: {
        exists: false,
      },
    };
  }

  componentDidMount = (): void => {
    auth.onAuthStateChanged(userAuth => {
      this.setState({
        user: {
          exists: true,
          ...userAuth,
        },
      });
    });
  };

  render(): ReactElement {
    const { user } = this.state;
    const { children } = this.props;
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}

// UserProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default UserProvider;
