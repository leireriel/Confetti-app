import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  min-width: 5em;
  cursor: pointer;
  background-color: ${({ dropdownVisible, colorMain, colorSecondary }) => (
    dropdownVisible ? colorMain : colorSecondary)};
  color: ${({ dropdownVisible, colorMain, colorSecondary }) => (
    dropdownVisible ? colorSecondary : colorMain)};
  box-shadow: inset 0 0 0 1px ${({ colorMain }) => colorMain};
  border: none;
  border-radius: 6px;
  outline: 0;
  transition: all 0.5s ease;

  svg {
    padding: ${({ dropdownVisible }) => dropdownVisible ? '0 0.5em 0 0' : '0 0 0 0.5em'};
    transform: ${({ dropdownVisible }) => dropdownVisible && 'rotate(180deg)'};
    transition: all 0.5s ease;
  }
`;

export const NavOptions = styled.nav`
  position: absolute;
  top: ${({ posYDropdown, y }) => (posYDropdown === 'top') && `${y + 5}px`};
  bottom: ${({ posYDropdown, y }) => (posYDropdown === 'bottom') && `${y + 5}px`};
  left: ${({ posXDropdown }) => (posXDropdown === 'left') && '0'};
  right: ${({ posXDropdown }) => (posXDropdown === 'right') && '0'};
  box-shadow: inset 0 0 0 1px ${({ colorMain }) => colorMain};
  border-radius: 6px;
  background: ${({ colorSecondary }) => colorSecondary};
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
