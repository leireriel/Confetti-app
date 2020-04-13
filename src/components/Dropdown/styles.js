import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
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
  transition: all 0.5s ease;

  svg {
    padding: ${props => props.dropdownVisible ? '0 0.5em 0 0' : '0 0 0 0.5em'};
    transform: ${props => props.dropdownVisible && 'rotate(180deg)'};
    transition: all 0.5s ease;
  }
`;

export const NavOptions = styled.nav`
  position: absolute;
  top: ${props => (props.posYDropdown === 'top') && `${props.y + 5}px`};
  bottom: ${props => (props.posYDropdown === 'bottom') && `${props.y + 5}px`};
  left: ${props => (props.posXDropdown === 'left') && '0'};
  right: ${props => (props.posXDropdown === 'right') && '0'};
  box-shadow: inset 0 0 0 1px ${props => props.colorMain};
  border-radius: 6px;
  background: ${props => props.colorSecondary};
  z-index: 1;
  width: max-content;
  box-sizing: border-box;
`;

export const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  margin: 0.5em;

  a {
    display: block;
  }
`;
