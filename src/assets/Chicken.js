import React from 'react';
import PropTypes from 'prop-types';
import { black } from 'constants/colors';

const Chicken = ({ width='2em' }) => (
  // <?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width={width} data-name="Layer 1" viewBox="0 0 500 500">
     <defs>
        <style>.cls-1{fill:#f36d21;}.cls-2{fill:#ffd72e;}.cls-3{fill:#ffbf0b;}.cls-4{fill:none;stroke:#232323;stroke-linecap:round;stroke-linejoin:round;stroke-width:15px;}</style>
     </defs>
     <title>chicken_1</title>
     <path class="cls-1" d="M65.66,132.88l-55.22,21,39.65,21.72A236.19,236.19,0,0,1,65.66,132.88Z" />
     <path class="cls-2" d="M489.56,264.78S418.33,487.27,176.48,427.21C-30.45,375.83,21.31,41,195.7,41,373.18,41,317.92,314.79,489.56,264.78Z" />
     <path class="cls-3" d="M176.48,391.21c-87.15-21.64-128.41-93.56-134-169.57-6.29,88.14,33.1,180.53,134,205.57,241.85,60.06,313.08-162.43,313.08-162.43a163.87,163.87,0,0,1-18.4,4.29C437.19,330.14,351.52,434.68,176.48,391.21Z" />
     <path class="cls-4" d="M489.56,264.78S418.33,487.27,176.48,427.21C-30.45,375.83,21.31,41,195.7,41,373.18,41,317.92,314.79,489.56,264.78Z" />
     <line class="cls-4" x1="130.06" y1="133.89" x2="151.76" y2="133.89" />
     <line class="cls-4" x1="195.7" y1="40.95" x2="175.76" y2="20.69" />
     <line class="cls-4" x1="195.7" y1="40.95" x2="215.64" y2="20.69" />
     <path class="cls-4" d="M179.29,280.82s28.23,99.25,163.89,35.51l-43.32-42.79" />
     <path class="cls-4" d="M65.66,132.88l-55.22,21,39.65,21.72A236.19,236.19,0,0,1,65.66,132.88Z" />
     <line class="cls-4" x1="269.91" y1="437.5" x2="269.91" y2="479.31" />
     <line class="cls-4" x1="195.7" y1="431.46" x2="195.7" y2="479.31" />
     <line class="cls-4" x1="151.76" y1="479.31" x2="298.48" y2="479.31" />
  </svg>
);

Chicken.propTypes = {
  width: PropTypes.string
};

export default Chicken;
