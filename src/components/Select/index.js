import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from 'components/fonts';
import { blue } from 'constants/colors';
// import Ripple from 'components/Effects/Ripple';
import Chevron from 'assets/Chevron';
import { Button } from './styles';

const Select = ({ title, options, changeTitle }) => {
  const [titleButton, setTitleButton] = useState(title);

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

// https://react-bootstrap.github.io/components/Selects/
// https://cabify.com/es

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  changeTitle: PropTypes.bool
};

Select.defaultProps = {
  changeTitle: true
};

export default memo(Select);
