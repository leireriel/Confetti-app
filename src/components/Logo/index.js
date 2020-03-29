import React, { memo } from 'react';
import { LogoWrapper, LogoText, LogoImg } from './styles';

const Logo = ({ 
  text,
  img,
  imgWidth,
  columnDirection
}) => (
  <LogoWrapper columnDirection={columnDirection} >
    {img && (
      <LogoImg imgWidth={imgWidth} />
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
