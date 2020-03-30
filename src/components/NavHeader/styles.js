import styled from 'styled-components';
import { yellow } from 'constants/colors';
import { device } from 'constants/device';
import userIcon from 'assets/user.svg';

export const Header = styled.header`
  background-color: ${yellow};
  display: flex;
  align-items: center;
  padding: 0 1em;
  height: 3em;
  position: fixed;
  top: ${props => props.show ? '0' : '-3em'};
  transition: top 0.3s;
  width: 100%;
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 0 2em;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
`;

export const List = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UserIcon = styled.img.attrs({
  src: userIcon,
  alt: 'Ajustes de usuaria/o y cerrar sesión',
})`
  width: 2em;
`;

export const HeaderSeparator = styled.div`
  margin-top: 3em;
`;
