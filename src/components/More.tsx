import React, { FunctionComponent, ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import style from 'styled-components';

const MoreWrapper = style.section`
  margin: 30px auto;
  text-align: center;
`;

const More: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <MoreWrapper>
      <h1 className="mt-5 mb-5 mx-auto text-center">À propos</h1>

      <p>
        This project is inspired by the psychotechnical tests to be performed to
        become a pilot at Air France.
      </p>

      <p>
        The fabulous site <a href="https://pilotest.com">Pilotest</a> has
        developed excellent tests of this nature, must see!
      </p>

      <p>
        This game uses these technologies: React.js, TypeScript, Reach Router,
        Shards React, react-i18next.
      </p>

      <a href="https://github.com/tobudim/2n">
        <button type="button">Source code available on GitHub</button>
      </a>
    </MoreWrapper>
  );
};

export default More;
