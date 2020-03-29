import React, { memo } from 'react';
import { Micro, Link } from 'components/fonts';
import Logo from 'components/Logo';
import {
  Header,
  NavBar,
  List,
  El,
  ElWrapper,
  IconWrapper,
  CalendarIcon,
  GearIcon,
  ElLogOut,
} from './styles';

const NavHeader = () => {
  const selected = 'calendar';

  return (
    <Header>
      <Logo columnDirection={false} />
      <NavBar>
        <List>
          <El>
            <ElWrapper selected={selected === 'calendar'}>
              <a href='#g'>
                <IconWrapper>
                  <CalendarIcon />
                </IconWrapper>
              </a>
            </ElWrapper>
          </El>
          <El>
            <ElWrapper selected={selected === 'settings'}>
              <a href='#g'>
                <IconWrapper>
                  <GearIcon />
                </IconWrapper>
              </a>
            </ElWrapper>
          </El>
          <ElLogOut>
            <Micro>Antonia José Mercuria</Micro>
            <Link href='#g'>
              <Micro>Cerrar sesión</Micro>
            </Link>
          </ElLogOut>
        </List>
      </NavBar>
    </Header>
  );
};

export default memo(NavHeader);
