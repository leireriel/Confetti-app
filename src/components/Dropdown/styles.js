import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  min-width: 5em;
  cursor: pointer;
  background-color: ${props => props.hover ? props.colorMain : props.colorSecondary};
  color: ${props => props.hover ? props.colorSecondary : props.colorMain};
  box-shadow: inset 0 0 0 1px ${props => props.colorMain};
  border: none;
  border-radius: 6px;
  outline: 0;
  // position: relative;

  svg {
    padding-left: 0.5em;
  }
`;

export const NavOptions = styled.nav`
  border: 1px solid ${props => props.colorMain};
  border-radius: 6px;
  padding: 8px 12px;
  position: absolute;
  top: 3em;
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
