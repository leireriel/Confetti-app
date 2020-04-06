import React, { memo, useState, useEffect } from 'react';
import Logo from 'components/Logo';
import Select from 'components/Select';
import {
  Header,
  NavBar,
  List,
  Li,
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
    <Header show={show}>
      <NavBar>
        <List>
          <Li>
            <Logo columnDirection={false}/>
          </Li>
          <Li>
            <Select
              title='Silvinho'
              options={['Ajustes', 'Cerrar sesión']}
              changeTitle={false}
            />
          </Li>
        </List>
      </NavBar>
    </Header>
  );
};

export default memo(NavHeader);
