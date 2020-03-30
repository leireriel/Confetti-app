import React, { memo } from 'react';
import { ButtonShape, RippleContainer, Ripple } from './styles';

const Button = ({ children, type }) => {
  return (
    <ButtonShape type={type}>
      <RippleContainer>
        <Ripple />
        {children}
      </RippleContainer>
    </ButtonShape>
  );
};

export default memo(Button);
