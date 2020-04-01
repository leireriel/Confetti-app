import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  green,
  lightGreen,
  gray,
  lightGray,
  red,
  lightRed,
  white
} from 'constants/colors';
import Ripple from 'components/Effects/Ripple';
import { ButtonBase } from './styles';

const types = {
  primary: [green, lightGreen],
  disabled: [gray, lightGray],
  warning: [red, lightRed]
};

const Button = ({ children, type, margin }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    selectType();
  });

  const selectType = () => {
    const typeSelected = types[type];
    if (typeSelected) {
      setColors(typeSelected);
    } else {
      setColors(types.primary);
    }
  };

  return (
    <ButtonBase 
      color={colors[0]}
      contrast={type === 'disabled' ? colors[1] : white}
      disabled={type === 'disabled'}
      margin={margin}
    >
      {children}
      {type !== 'disabled' && (
        <Ripple rippleColor={colors[1]} />
      )}
    </ButtonBase>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.string.isRequired,
  margin: PropTypes.string
};

Button.defaultProps = {
  type: 'primary'
};

export default memo(Button);
