import React from 'react';
import PropTypes from 'prop-types';
import { red } from 'constants/colors';

const ChickenFill = ({ color=red, width='2em' }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={width}>
  <path
    d="M 10,30
      A 20,20 0,0,1 50,30
      A 20,20 0,0,1 90,30
      Q 90,60 50,90
      Q 10,60 10,30 z"
    fill={color}
  />
  </svg>
);

ChickenFill.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string
};

export default ChickenFill;
