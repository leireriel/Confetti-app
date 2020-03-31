import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  pink
} from 'constants/colors';
// import Ripple from 'components/Effects/Ripple';
import { Button, ChevronIcon } from './styles';

const Dropdown = ({ children }) => (
  <Button
    color={pink}
  >
    {children}
    <ChevronIcon />
    {/* <Ripple rippleColor={lightPink} /> */}
  </Button>
);

// https://react-bootstrap.github.io/components/dropdowns/
// https://cabify.com/es

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default memo(Dropdown);
