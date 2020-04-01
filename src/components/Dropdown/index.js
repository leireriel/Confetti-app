import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from 'components/fonts';
import { pink } from 'constants/colors';
// import Ripple from 'components/Effects/Ripple';
import Chevron from 'assets/ChevronSVG';
import { Button } from './styles';

const Dropdown = ({ title, options, changeTitle }) => {
  const [titleButton, setTitleButton] = useState(title);

  return (
    <Button
      color={pink}
    >
      <Paragraph>{titleButton}</Paragraph>
      <Chevron ariaLabel='Abrir menú desplegable' color={pink} />
      {/* <Ripple rippleColor={lightPink} /> */}
    </Button>
  );
};

// https://react-bootstrap.github.io/components/dropdowns/
// https://cabify.com/es
// pintar svg de rosa
// texto de dropdown sustituya al principal

// export const ChevronIcon = styled.img.attrs({
//   src: chevronIcon,
//   alt: 'Abrir menú desplegable',
// })`
//   width: 1em;
//   padding-left: 0.5em;
// `;

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  changeTitle: PropTypes.bool.isRequired
};

export default memo(Dropdown);
