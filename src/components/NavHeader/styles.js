import styled from 'styled-components';
import { yellow, white, black } from 'constants/colors';
import { device } from 'constants/device';
import calendarIcon from 'assets/calendar.svg';
import gearIcon from 'assets/gear.svg';

export const Header = styled.header`
  background-color: ${yellow};
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 0 1em;

  @media ${device.tablet} {
    padding: 0 2em;
    flex-direction: row;
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
  justify-content: center;
`;

export const El = styled.li`
  height: 3em;
  display: flex;
  flex-grow: 1;
  cursor: pointer;

  &:hover {
    background-color: ${black};
  }
`;

export const ElWrapper = styled.div`
  background-color: ${props => (props.selected && white) || yellow};
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 0.2em solid ${yellow};
  border-radius: 10px;
  box-sizing: border-box;

  &:hover {
    border: 0.2em solid ${black};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CalendarIcon = styled.img.attrs({
  src: calendarIcon,
  alt: 'Calendario de cumpleaños',
})`
  width: 2em;
  padding: 0.5em;
`;

export const GearIcon = styled.img.attrs({
  src: gearIcon,
  alt: 'Ajustes',
})`
  width: 2em;
  padding: 0.5em;
`;

export const ElLogOut = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 3em;
  min-width: 70px;

  p {
    margin: 0;
    text-align: right;
  }
`;

export const LogoWrapper = styled.div`
  padding-right: 0.5em;
`;
