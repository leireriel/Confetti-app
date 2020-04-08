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
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [posYDropdown, setPosYDropdown] = useState([]);
  const [posXDropdown, setPosXDropdown] = useState([]);

  const handleClick = (event) => {
    setIsDropdownVisible(!isDropdownVisible);

    const buttonPos = event.currentTarget.getBoundingClientRect();
    const { height, left, right, top, bottom } = buttonPos;
    const viewportHeight = window.innerHeight;
    const bottomTotal = viewportHeight - bottom;
    const viewportWidth = window.innerWidth;
    const rightTotal = viewportWidth - right;

    if (top > bottomTotal) {
      setPosYDropdown(['bottom', height]);
    } else {
      setPosYDropdown(['top', height]);
    }

    if (left > rightTotal) {
      setPosXDropdown(['right', rightTotal]);
    } else {
      setPosXDropdown(['left', left]);
    }
  };

  const { main, secondary } = colors;

  return (
    <div style={{position: 'relative'}}>
      <Button
        onClick={(event) => handleClick(event)}
        colorMain={main}
        colorSecondary={secondary}
        dropdownVisible={isDropdownVisible}
      >
        <Paragraph>{title}</Paragraph>
        <Chevron color={isDropdownVisible ? secondary : main} />
      </Button>

      {isDropdownVisible && (
        <NavOptions
          colorMain={main}
          colorSecondary={secondary}
          posYDropdown={posYDropdown[0]}
          y={posYDropdown[1]}
          posXDropdown={posXDropdown[0]}
          x={posXDropdown[1]}
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

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default memo(Dropdown);
