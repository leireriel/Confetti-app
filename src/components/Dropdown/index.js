import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { P, A } from 'components/fonts';
import { blue, white } from 'constants/colors';
import Chevron from 'assets/Chevron';
import { Button, NavOptions, List, Li } from './styles';

const colors = {
  main: blue,
  secondary: white
};

const Dropdown = ({ title, options }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [heightButton, setHeightButton] = useState('');
  const [posYDropdown, setPosYDropdown] = useState('');
  const [posXDropdown, setPosXDropdown] = useState('');

  const handleClick = (event) => {
    setIsDropdownVisible(!isDropdownVisible);

    const buttonPos = event.currentTarget.getBoundingClientRect();
    const { height, left, right, top, bottom } = buttonPos;

    setHeightButton(height);

    const viewportHeight = window.innerHeight;
    const bottomTotal = viewportHeight - bottom;
    const viewportWidth = window.innerWidth;
    const rightTotal = viewportWidth - right;

    if (top > bottomTotal) {
      setPosYDropdown('bottom');
    } else {
      setPosYDropdown('top');
    }

    if (left > rightTotal) {
      setPosXDropdown('right');
    } else {
      setPosXDropdown('left');
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
        <P>{title}</P>
        <Chevron color={isDropdownVisible ? secondary : main} />
      </Button>

      {isDropdownVisible && (
        <NavOptions
          colorMain={main}
          colorSecondary={secondary}
          posYDropdown={posYDropdown}
          y={heightButton}
          posXDropdown={posXDropdown}
        >
          <List>
            {options.map((option, index) => (
              <Li key={index}>
                <P>
                  <A href='#fd'>
                    {option}
                  </A>
                </P>
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
