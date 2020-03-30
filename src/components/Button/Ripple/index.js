import React, { memo, useState } from 'react';
import { RippleContainer } from './styles';

const Ripple = () => {
  const [ripples, setRipples] = useState([]);

  const AddRiple = event => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    console.log(rippleContainer);
  };

  return (
    <RippleContainer>
      <span></span>
    </RippleContainer>
  )
};

export default memo(Ripple);
