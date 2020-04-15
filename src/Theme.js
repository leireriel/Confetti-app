import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    // palette
    red: '#EF476F',
    lightRed: '#FACCD7',
    yellow: '#FFD166',
    lightYellow: '#FFF2D5',
    green: '#06D6A0',
    lightGreen: '#BBF3E5',
    blue: '#118AB2',
    lightBlue: '#BEDFEA',

    // grayscale
    black: '#073B4C',
    gray: '#BBC9CE',
    lightGra: '#E8F8FF',
    white: '#FFFFFF',

    // opacity
    opaqueWhite: 'rgba(255, 255, 255, 0.8)'
  },
  fonts : {
    base: ['Roboto', 'sans-serif'],
    brand: ['Pacifico', 'cursive']
  },
  fontSizes: {
    small: '0.8em',
    medium: '1em',
    large: '1.5em',
    extraLarge: '2em'
  },
  device : {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)'
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;
