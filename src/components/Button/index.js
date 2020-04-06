import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { green, gray, red, white, opaqueWhite } from 'constants/colors';
import Ripple from 'components/Effects/Ripple';
import { ButtonBase } from './styles';

const types = {
  primary: green,
  disabled: gray,
  warning: red
};

const Button = ({ children, type, margin }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    selectType();
  });

  const selectType = () => {
    const typeSelected = types[type];
    if (typeSelected) {
      setColor(typeSelected);
    } else {
      setColor(types.primary);
    }
  };

  return (
    <ButtonBase 
      color={color}
      background={white}
      disabled={type === 'disabled'}
      margin={margin}
    >
      {children}
      {type !== 'disabled' && (
        <Ripple rippleColor={opaqueWhite} />
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
