import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Link } from 'components/fonts';
import { blue } from 'constants/colors';
// import Ripple from 'components/Effects/Ripple';
import Chevron from 'assets/Chevron';
import { Button, NavOptions, List, Li } from './styles';

const Dropdown = ({ title, options }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <Button
        color={blue}
        onMouseOver={() => setShowOptions(true)}
        onMouseOut={() => setShowOptions(false)}
      >
        <Paragraph>{title}</Paragraph>
        <Chevron color={blue} />

        {/* <Ripple rippleColor={lightBlue} /> */}
      
      </Button>

      {showOptions && (
        <NavOptions>
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
