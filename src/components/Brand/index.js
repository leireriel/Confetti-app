import React from 'react';
import ConfettiColor from 'assets/confetti-color.png';

const style = {
  width: '4em',
  verticalAlign: 'middle'
};

const Brand = () => (
  <img src={ConfettiColor} alt='Confetti' style={style}></img>
);

export default Brand;
