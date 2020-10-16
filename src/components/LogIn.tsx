import React, { FunctionComponent, ReactElement } from 'react';

interface LogInProps {
  signIn: any;
}

const LogIn: FunctionComponent<LogInProps> = ({
  signIn,
}: LogInProps): ReactElement => {
  return (
    <>
      <h1>Se connecter</h1>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => signIn()}
      >
        Se connecter avec Google
      </button>
    </>
  );
};

export default LogIn;
