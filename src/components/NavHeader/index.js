import React, { memo, useState } from 'react';
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
  const [showHeader, setShowHeader] = useState(true);

  const HideShowHeader = prevScrollPos => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    return prevScrollPos = currentScrollPos;
  }

  let prevScrollPos = window.pageYOffset;
  window.onscroll = HideShowHeader(prevScrollPos);

  return (
    <>
      <Header show={showHeader}>
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
