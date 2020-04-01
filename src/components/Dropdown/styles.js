import styled from 'styled-components';
import { white } from 'constants/colors';

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
