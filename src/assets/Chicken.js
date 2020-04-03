import React from 'react';
import PropTypes from 'prop-types';
import { black, red, yellow, green, blue } from 'constants/colors';

const Chicken = ({ width='2em' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} id="Layer_1" data-name="Layer 1" viewBox="0 0 500 500">
    <defs>
      <linearGradient y2="0.31901" x2="1" y1="0" x1="0.23828" id="svg_colors">
        <stop offset="0.2" stop-color={red} />
        <stop offset="0.2" stop-color={yellow} />
        <stop offset="0.5" stop-color={yellow} />
        <stop offset="0.5" stop-color={green} />
        <stop offset="0.8" stop-color={green} />
        <stop offset="0.8" stop-color={blue} />
      </linearGradient>
    </defs>
    <title>chicken_1</title>
    <path fill={red} d="M65.66,132.88l-55.22,21,39.65,21.72A236.19,236.19,0,0,1,65.66,132.88Z" />
    <path fill="url(#svg_colors)" d="M489.56,264.78S418.33,487.27,176.48,427.21C-30.45,375.83,21.31,41,195.7,41,373.18,41,317.92,314.79,489.56,264.78Z" />
    <path fill="none" stroke={black} stroke-linecap="round" stroke-linejoin="round" stroke-width="15px" d="M489.56,264.78S418.33,487.27,176.48,427.21C-30.45,375.83,21.31,41,195.7,41,373.18,41,317.92,314.79,489.56,264.78Z" />
    <line fill="none" stroke={black} stroke-linecap="round" stroke-linejoin="round" stroke-width="15px" x1="130.06" y1="133.89" x2="151.76" y2="133.89" />
    <line fill="none" stroke={black} stroke-linecap="round" stroke-linejoin="round" stroke-width="15px" x1="195.7" y1="40.95" x2="175.76" y2="20.69" />
    <line fill="none" stroke={black} stroke-linecap="round" stroke-linejoin="round" stroke-width="15px" x1="195.7" y1="40.95" x2="215.64" y2="20.69" />
    <path fill="none" stroke={black} stroke-linecap="round" stroke-linejoin="round" stroke-width="15px" d="M179.29,280.82s28.23,99.25,163.89,35.51l-43.32-42.79" />
    <path fill="none" stroke={black} stroke-linecap="round" stroke-linejoin="round" stroke-width="15px" d="M65.66,132.88l-55.22,21,39.65,21.72A236.19,236.19,0,0,1,65.66,132.88Z" />
    <line fill="none" stroke={black} stroke-linecap="round" stroke-linejoin="round" stroke-width="15px" x1="269.91" y1="437.5" x2="269.91" y2="479.31" />
    <line fill="none" stroke={black} stroke-linecap="round" stroke-linejoin="round" stroke-width="15px" x1="195.7" y1="431.46" x2="195.7" y2="479.31" />
    <line fill="none" stroke={black} stroke-linecap="round" stroke-linejoin="round" stroke-width="15px" x1="151.76" y1="479.31" x2="298.48" y2="479.31" />
  </svg>
);

Chicken.propTypes = {
  width: PropTypes.string
};

export default Chicken;
