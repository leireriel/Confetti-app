import styled from 'styled-components';
import { white } from 'constants/colors';

export const ClickableEl = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${white};
  color: ${props => props.color};
  border: none;
  outline: 0;
`;
