import React, { memo, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { RippleContainer } from './styles';

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = ({ rippleColor }) => {
  const [rippleArray, setRippleArray] = useState([]);
  const duration = 850;

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const handleAddRipple = event => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height
      ? rippleContainer.width
      : rippleContainer.height;
    
    const x = event.pageX - rippleContainer.x - rippleContainer.width / 2;
    const y = event.pageY - rippleContainer.y - rippleContainer.width / 2;
    const newRipple = {
      x,
      y,
      size
    };

    setRippleArray(prevState => [...prevState, newRipple]);
  };

  return (
    <RippleContainer rippleColor={rippleColor} duration={duration} onMouseDown={handleAddRipple}>
      {
        rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => (
          <span
            key={`ripple_${index}`}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size
            }}
          />
        ))
      }
    </RippleContainer>
  );
};

Ripple.propTypes = {
  rippleColor: PropTypes.string
};

export default memo(Ripple);
