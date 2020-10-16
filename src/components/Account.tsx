import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';
// import { State } from 'react-powerplug';
import 'firebase/auth';
// import { Trans } from 'react-i18next';

import PreFooterCanvas from './PreFooterCanvas';

const LoginWrapper = style.div`
  margin: 30px auto;
  width: 80%;
  text-align: center;
  min-height: 50vh;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    margin-bottom: 50px;
  }

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
  }

  ul {
    background-color: #f7ecec;
    padding: 20px 0;
    border-radius: 10px;
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

// const Logger = style.form`
//   width: 100%;

//   label, label input {
//     display: block;
//     margin: 10px auto;
//   }

//   label input {
//     padding: 10px 20px;
//     border: 1px solid lightgrey;
//   }

//   button {
//     background-color: #920292;
//   }

//   button:hover {
//     background-color: #a53ea5;
//   }
// `;

// const Details = style.div`
//   width: 100%;
//   margin-top: 40px;

//   p {
//     color: grey;
//     font-style: italic;
//   }
// `;

const Account: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <>
      <LoginWrapper>
        {/* <State initial={{ isLoading: false }}>
          {({ state, setState }) => (
            <>
              {state.isLoading ? (
                <h1>Chargement...</h1>
              ) : (
                <>
                  <IfFirebaseAuthed>
                    {({ firebase }) => (
                      <>
                        <h1>Mon compte</h1>
                        <button
                          type="button"
                          onClick={async () => {
                            setState({ isLoading: true });
                            await firebase.app().auth().signOut();
                            setState({ isLoading: false });
                          }}
                        >
                          Se déconnecter
                        </button>
                      </>
                    )}
                  </IfFirebaseAuthed>
                  <IfFirebaseUnAuthed>
                    {({ firebase }) => (
                      <>
                        <h1>Se connecter</h1>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={async () => {
                            setState({ isLoading: true });
                            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                            firebase.auth().signInWithPopup(googleAuthProvider);
                            setState({ isLoading: false });
                          }}
                        >
                          Sign in with Google
                        </button>
                      </>
                    )}
                  </IfFirebaseUnAuthed>
                </>
              )}
            </>
          )}
        </State> */}
      </LoginWrapper>
      <PreFooterCanvas />
    </>
  );
};

export default Account;
