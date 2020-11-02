import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

import ThemeProps from '../../interfaces/themes';

const DarkCss = style.div`
  background-color: #292727;  
  color: white;

  h1, h2 {
    color: white;
  }

  a {
    color: white;
    text-decoration: underline;
    border: none;
    transition: font-weight 0s ease-in;
  }
  a:hover {
    border: none;
    font-weight: bold:
  }
  
  ul {
    background-color: #523434;
  }
  section {
    background-color: #955656;
  }

  header {
    background: #292727;
  }
  header a {
    text-decoration: none;
    border-bottom: 2px solid transparent;
  }
  header a:hover {
    border-bottom: 2px solid white;
  }
  header ul {
    background-color: transparent;
  }

  footer ul {
    background-color: transparent;
  }

  .cookie {
    color: black;
  }
`;

const DarkTheme: FunctionComponent<ThemeProps> = ({
  children,
}: ThemeProps): ReactElement => {
  return <DarkCss>{children}</DarkCss>;
};

export default DarkTheme;
