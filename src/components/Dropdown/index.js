import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from 'components/fonts';
import { blue } from 'constants/colors';
// import Ripple from 'components/Effects/Ripple';
import Chevron from 'assets/Chevron';
import { Button, ButtonTitle, NavOptions, List } from './styles';

const Dropdown = ({ title, options }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <Button
        color={blue}
        onMouseOver={() => setShowOptions(true)}
        onMouseOut={() => setShowOptions(false)}
      >
        <ButtonTitle>
          <Paragraph>{title}</Paragraph>
          <Chevron color={blue} />
        </ButtonTitle>
        {/* <Ripple rippleColor={lightBlue} /> */}
      
        {showOptions === showOptions && (
          <NavOptions>
            <List>
              {options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </List>
          </NavOptions>
        )}
      </Button>
    </>
  );
};

// https://react-bootstrap.github.io/components/Dropdowns/
// https://cabify.com/es

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default memo(Dropdown);
