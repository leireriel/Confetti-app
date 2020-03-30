import React, { memo, useState, useEffect } from 'react';
import { Micro } from 'components/fonts';
import Logo from 'components/Logo';
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

  const HandleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShow(prevScrollpos > currentScrollPos);
    setPrevScrollpos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll)
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
              {/* <Button> */}
                <UserIcon />
                <Micro>Cerrar sesión</Micro>
              {/* </Button> */}
            </Li>
          </List>
        </NavBar>
      </Header>
      <HeaderSeparator />
    </>
  );
};

export default memo(NavHeader);
