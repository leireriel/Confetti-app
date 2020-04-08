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
  const [sizeButton, setSizeButton] = useState({width: 0, height: 0});
  const [posYDropdown, setPosYDropdown] = useState('');

  const handleClick = (event) => {
    setDropdownVisible(!dropdownVisible);

    const buttonPos = event.currentTarget.getBoundingClientRect();
    const { width, height, left, right, top, bottom } = buttonPos;

    setSizeButton({width, height});

    const viewportHeight = window.innerHeight;
    const bottomTotal = viewportHeight - bottom;

    if (top > bottomTotal) {
      setPosYDropdown('bottom');
    } else {
      setPosYDropdown('top');
    }
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
          heightButton={sizeButton.height}
          posYDropdown={posYDropdown}
          // positionLeft={sizeButton.width}
          // positionRight={sizeButton.width}
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
