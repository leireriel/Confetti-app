import styled from 'styled-components';
import { white, black, pink } from 'constants/colors';

export const ButtonEl = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${white};
  box-shadow: inset 0 0 0 1px ${props => props.type === 'primary' ? pink : black};
  border: none;
  border-radius: 6px;
  outline: 0;
  position: relative;
  overflow: hidden;
  
  &:hover {
    box-shadow: inset 0 0 0 2px ${props => props.type === 'primary' ? pink : black};
  }
`;

// ripple effect on button
// hover button
// types button como array de components
// logo pintar con lineas diagonales /
