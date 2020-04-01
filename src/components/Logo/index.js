import React, { memo } from 'react';
import Chicken from 'assets/Chicken';
import { LogoWrapper, LogoText } from './styles';

const Logo = ({ 
  text,
  img,
  imgWidth,
  columnDirection
}) => (
  <LogoWrapper columnDirection={columnDirection}>
    {img && (
      <Chicken width={imgWidth} />
    )}
    {text && (
      <LogoText>Confetti</LogoText>
    )}
  </LogoWrapper>
);

Logo.defaultProps = {
  text: true,
  img: true,
  imgWidth: '2em',
  columnDirection: true,
};

export default memo(Logo);
