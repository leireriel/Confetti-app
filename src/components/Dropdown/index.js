import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Link } from 'components/fonts';
import { blue, white } from 'constants/colors';
import Chevron from 'assets/Chevron';
import { Button, NavOptions, List, Li } from './styles';

const colors = {
  main: blue,
  secondary: white
};

const Dropdown = ({ title, options }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [sizeButton, setSizeButton] = useState({height: 0, width: 0})

  const handleClick = (event) => {
    setDropdownVisible(!dropdownVisible);

    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const { height, width } = rippleContainer;
    setSizeButton({height, width});
  };

  const { main, secondary } = colors;

  return (
    <div style={{position: 'relative'}}>
      <Button
        onClick={(event) => handleClick(event)}
        colorMain={main}
        colorSecondary={secondary}
        dropdownVisible={dropdownVisible}
      >
        <Paragraph>{title}</Paragraph>
        <Chevron color={dropdownVisible ? secondary : main} />
      </Button>

      {dropdownVisible && (
        <NavOptions
          colorMain={main}
          colorSecondary={secondary}
          positionTop={sizeButton.height}
        >
          <List>
            {options.map((option, index) => (
              <Li key={index}>
                <Link href='#fd'>{option}</Link>
              </Li>
            ))}
          </List>
        </NavOptions>
      )}
    </div>
  );
};

// https://react-bootstrap.github.io/components/Dropdowns/
// https://cabify.com/es

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default memo(Dropdown);
