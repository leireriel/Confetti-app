import React, { memo } from 'react';
import PropTypes from 'prop-types';
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

Logo.propTypes = {
  text: PropTypes.bool,
  img: PropTypes.bool,
  imgWidth: PropTypes.string,
  columnDirection: PropTypes.bool
}

Logo.defaultProps = {
  text: true,
  img: true,
  imgWidth: '2em',
  columnDirection: true
};

export default memo(Logo);
