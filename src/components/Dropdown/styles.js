import styled from 'styled-components';
import { white } from 'constants/colors';
import chevronIcon from 'assets/chevron.svg';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  min-width: 5em;
  cursor: pointer;
  background-color: ${white};
  color: ${props => props.color};
  box-shadow: inset 0 0 0 1px ${props => props.color};
  border: none;
  border-radius: 6px;
  outline: 0;
`;

export const ChevronIcon = styled.img.attrs({
  src: chevronIcon,
  alt: 'Abrir menú desplegable',
})`
  width: 1em;
  padding-left: 0.5em;
`;
