import styled from 'styled-components';
import { white, lightGray } from 'constants/colors';
import { device } from 'constants/device';

export const Header = styled.header`
  background-color: ${white};
  display: flex;
  align-items: center;
  padding: 0 1em;
  height: 3em;
  position: fixed;
  top: ${({ show }) => show ? '0' : '-3em'};
  transition: top 0.3s;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 10px 1px ${lightGray};
  user-select: none;

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
