import React, { memo } from 'react';
import ChickenShapeBlack from 'assets/ChickenShapeBlack';
import { LogoWrapper, LogoText } from './styles';

const Logo = ({ 
  text,
  img,
  imgWidth,
  columnDirection
}) => (
  <LogoWrapper columnDirection={columnDirection}>
    {img && (
      <ChickenShapeBlack width={imgWidth} />
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
