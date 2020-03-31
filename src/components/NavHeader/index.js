import React, { memo, useState, useEffect } from 'react';
import { Micro } from 'components/fonts';
import Logo from 'components/Logo';
import Button from 'components/Button';
import {
  Header,
  NavBar,
  List,
  Li,
  UserIcon,
  HeaderSeparator,
} from './styles';

const NavHeader = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShow(prevScrollpos > currentScrollPos);
    setPrevScrollpos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  });

  return (
    <>
      <Header show={show}>
        <NavBar>
          <List>
            <Li>
              <Logo columnDirection={false}/>
            </Li>
            <Li>
              <Button type='primary'>
                <UserIcon />
                <Micro margin={false}>Silvinho</Micro>
              </Button>
            </Li>
          </List>
        </NavBar>
      </Header>
      <HeaderSeparator />
    </>
  );
};

export default memo(NavHeader);
