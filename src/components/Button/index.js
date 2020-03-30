import React, { memo } from 'react';
import { ButtonShape } from './styles';

const Button = ({ children, type }) => {
  return (
    <ButtonShape type={type}>
      {children}
    </ButtonShape>
  );
};

export default memo(Button);
