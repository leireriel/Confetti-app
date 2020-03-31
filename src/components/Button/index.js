import React, { memo } from 'react';
import {
  green,
  lightGreen,
  gray,
  lightGray,
  red,
  lightRed
} from 'constants/colors';
import Ripple from './Ripple';
import { ButtonEl } from './styles';

const Button = ({ children, type }) => {
  const types = {
    primary: [green, lightGreen],
    disabled: [gray, lightGray],
    warning: [red, lightRed]
  };

  return (
    <ButtonEl type={type}>
      {children}
      <Ripple />
    </ButtonEl>
  );
};

export default memo(Button);
