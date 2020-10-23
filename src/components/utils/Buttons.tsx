import React, { FunctionComponent, ReactElement } from 'react';
import style from 'styled-components';

import ButtonProps from '../../interfaces/buttons';

const SuccessButton = style.button`
  background-color: #1cae1c;

  &:hover {
    background-color: #19c219;
  }
`;

const Button: FunctionComponent<ButtonProps> = ({
  type,
  handler,
  label,
  children,
}: ButtonProps): ReactElement => {
  switch (type) {
    case 'success':
      return <SuccessButton>{children}</SuccessButton>;
      break;
    default:
      return (
        <button type="button" onClick={handler} aria-label={label}>
          {children}
        </button>
      );
  }
};

export default Button;
