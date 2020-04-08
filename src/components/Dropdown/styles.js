import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  min-width: 5em;
  cursor: pointer;
  background-color: ${props => props.dropdownVisible ? props.colorMain : props.colorSecondary};
  color: ${props => props.dropdownVisible ? props.colorSecondary : props.colorMain};
  box-shadow: inset 0 0 0 1px ${props => props.colorMain};
  border: none;
  border-radius: 6px;
  outline: 0;

  svg {
    padding: ${props => props.dropdownVisible ? '0 0.5em 0 0' : '0 0 0 0.5em'};
    transform: ${props => props.dropdownVisible && 'rotate(180deg)'};
    transition: all 0.5s ease;
  }
`;

export const NavOptions = styled.nav`
  position: absolute;
  top: ${props => `${props.positionTop}px`};
  box-shadow: ${props => `0 0 10px 1px ${props.colorMain}`};
  border-radius: 6px;
  padding: 8px 12px;
  background: ${props => props.colorSecondary};
`;

export const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  padding: 0.5em 0;
`;
