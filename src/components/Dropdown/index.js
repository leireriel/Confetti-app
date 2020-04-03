import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from 'components/fonts';
import { blue } from 'constants/colors';
// import Ripple from 'components/Effects/Ripple';
import Chevron from 'assets/Chevron';
import { Button } from './styles';

const Dropdown = ({ title, options, changeTitle }) => {
  const [titleButton, setTitleButton] = useState(title);

  // esto tiene que ser un select LOOOL
  return (
    <Button
      color={blue}
    >
      <Paragraph>{titleButton}</Paragraph>
      <Chevron color={blue} />
      {/* <Ripple rippleColor={lightBlue} /> */}
    </Button>
  );
};

// https://react-bootstrap.github.io/components/dropdowns/
// https://cabify.com/es
// texto de dropdown sustituya al principal

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  changeTitle: PropTypes.bool.isRequired
};

export default memo(Dropdown);
