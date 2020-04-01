import React from 'react';
import { black } from 'constants/colors';

const ChevronSVG = ({ color=black }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 40 20">
    <title>chevron-down@1x</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Arrows">
          <g id="Down_Arrow_2_2x.png" data-name="Down Arrow 2@2x.png">
            <path d="M39,0a1,1,0,0,0-.71.29L20,17.62,1.71.29A1,1,0,1,0,.29,1.71l19,18a1,1,0,0,0,1.41,0l19-18A1,1,0,0,0,39,0Z" />
          </g>
        </g>
      </g>
  </svg>
);

export default ChevronSVG;
