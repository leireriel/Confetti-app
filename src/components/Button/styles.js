import styled from 'styled-components';
import { white, black, pink, lightPink } from 'constants/colors';

export const ButtonShape = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${white};
  box-shadow: inset 0 0 0 1px ${props => props.type === 'primary' ? pink : black};
  border: none;
  border-radius: 6px;
  outline: 0;

  &:hover {
    background-color: ${props => props.type === 'primary' ? lightPink : black};
  }
`;
