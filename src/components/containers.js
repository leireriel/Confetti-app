import styled from 'styled-components';
import { device } from 'constants/device';
import { yellow, opaqueWhite } from 'constants/colors';
import background from 'assets/background-confetti.svg';

export const MainWithConfetti = styled.main`
  background: url(${background}) repeat;
  flex: 1;
  padding: 4em 1em 0.5em;

  @media ${device.tablet} {
    padding: 4em 2em 1.5em;
  }
`;

export const WrapperSection = styled.section`
  padding: 1em;
  background: ${opaqueWhite};
  border: 1px solid ${yellow};
  border-radius: 6px;
`;
