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
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: inset 0 0 0 2px ${props => props.type === 'primary' ? pink : black};
  }
`;

export const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Ripple = styled.span`
  position: absolute;
  top: ...
  right: ...
  height: ...
  width: ...
  transform: scale(0);
  border-radius: 100%;
  opacity: 0.75;
  background-color: ${lightPink};
  animation-name: ripple;
  animation-duration: 850ms;

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

// ripple effect on button
// hover button
// types button como array de components
// logo pintar con lineas diagonales /
