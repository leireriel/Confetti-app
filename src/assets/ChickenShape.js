import React from 'react';
import PropTypes from 'prop-types';
import { black } from 'constants/colors';

const ChickenShape = ({ color=black, width='2em' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width={width} viewBox="0 0 700.000000 700.000000" preserveAspectRatio="xMidYMid meet">
    <metadata>Created by potrace 1.11, written by Peter Selinger 2001-2013</metadata>
    <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
      <path d="M2424 6805 c-42 -18 -64 -51 -64 -98 0 -35 8 -47 71 -113 46 -47 67 -75 58 -77 -8 -2 -66 -14 -129 -26 -588 -112 -1106 -524 -1461 -1162 -59 -105 -62 -109 -112 -128 -52 -19 -383 -145 -589 -223 -60 -23 -117 -51 -130 -65 -29 -31 -32 -101 -5 -131 11 -11 128 -80 260 -152 133 -73 245 -135 249 -139 3 -3 -2 -46 -13 -96 -125 -590 -96 -1238 81 -1775 104 -316 226 -555 413 -803 287 -382 696 -674 1164 -832 108 -36 367 -105 397 -105 14 0 16 -26 16 -245 l0 -245 -271 0 c-166 0 -278 -4 -290 -10 -23 -13 -49 -61 -49 -92 0 -41 36 -86 77 -97 49 -14 2040 -15 2098 -1 81 18 113 107 61 167 l-24 28 -174 5 -173 5 -3 192 -2 192 42 5 c476 60 748 132 1093 289 547 247 1053 680 1433 1224 207 297 397 655 489 921 27 79 27 81 10 116 -10 22 -30 43 -51 53 -33 15 -39 15 -138 -10 -574 -146 -975 -37 -1303 354 -170 203 -290 411 -570 989 -204 420 -310 620 -425 801 -196 309 -423 553 -659 710 -96 63 -290 159 -401 197 -75 26 -267 70 -384 87 l-38 6 71 74 c63 65 71 77 71 112 0 21 -7 49 -16 62 -21 29 -74 52 -105 44 -13 -3 -77 -58 -141 -122 l-118 -116 -117 116 c-65 65 -129 119 -143 122 -14 3 -39 0 -56 -8z m660 -514 c428 -75 767 -294 1064 -690 167 -222 277 -417 541 -961 269 -555 373 -740 533 -954 228 -305 499 -489 818 -557 133 -28 393 -31 540 -6 52 9 95 15 97 13 1 -1 -30 -70 -71 -153 -513 -1047 -1342 -1731 -2346 -1933 -453 -92 -915 -90 -1450 6 -457 83 -780 202 -1070 397 -248 167 -476 403 -638 664 -472 755 -541 1842 -175 2768 325 822 910 1340 1613 1425 121 14 408 4 544 -19z m-2377 -1363 c-3 -7 -20 -59 -38 -115 -19 -57 -37 -103 -40 -103 -3 0 -54 26 -113 59 l-108 59 98 37 c55 21 119 46 144 56 55 22 63 23 57 7z m2343 -4123 c154 -20 370 -35 508 -35 l112 0 0 -190 0 -190 -412 2 -413 3 -3 219 -2 219 47 -7 c27 -3 100 -13 163 -21z" />
      <path d="M1773 5220 c-47 -19 -71 -98 -44 -149 24 -44 58 -51 252 -51 l181 0 34 34 c26 26 34 42 34 71 0 29 -8 45 -34 71 l-34 34 -183 -1 c-101 0 -194 -4 -206 -9z" />
      <path d="M4152 3265 c-40 -17 -66 -72 -57 -117 5 -22 78 -100 268 -287 l260 -257 -134 -51 c-339 -129 -607 -181 -878 -170 -235 9 -427 69 -602 188 -149 100 -301 292 -375 471 -42 100 -69 128 -123 128 -46 0 -79 -23 -97 -66 -13 -31 -12 -40 6 -95 78 -232 271 -479 486 -622 221 -147 412 -205 709 -214 350 -10 675 62 1100 243 178 77 200 96 191 168 -4 35 -21 55 -138 173 -73 74 -221 219 -328 322 -208 201 -227 213 -288 186z" />
    </g>
  </svg>
);

ChickenShape.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string
};

export default ChickenShape;
