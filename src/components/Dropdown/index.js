import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  pink
} from 'constants/colors';
// import Ripple from 'components/Effects/Ripple';
import { ClickableEl } from './styles';

const Dropdown = ({ children }) => (
  <ClickableEl
    color={pink}
  >
    {children}
    {/* <Ripple rippleColor={lightPink} /> */}
  </ClickableEl>
);

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default memo(Dropdown);
