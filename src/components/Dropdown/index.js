import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Link } from 'components/fonts';
import { blue, white } from 'constants/colors';
// import Ripple from 'components/Effects/Ripple';
import Chevron from 'assets/Chevron';
import { Button, NavOptions, List, Li } from './styles';

const colors = {
  main: blue,
  secondary: white
};

const Dropdown = ({ title, options }) => {
  const [hover, setHover] = useState(false);

  const { main, secondary } = colors;

  return (
    <>
      <Button
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        colorMain={main}
        colorSecondary={secondary}
        hover={hover}
      >
        <Paragraph>{title}</Paragraph>
        <Chevron color={hover ? secondary : main} />

        {/* <Ripple rippleColor={opaqueWhite} /> */}
      
      </Button>

      {hover && (
        <NavOptions
          colorMain={main}
          colorSecondary={secondary}
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
