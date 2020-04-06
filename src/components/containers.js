import styled from 'styled-components';
import { device } from 'constants/device';
import background from 'assets/background-confetti.svg';

export const MainWithConfetti = styled.main`
  background: url(${background}) repeat;
  flex: 1;
  padding: 4em 1em 0.5em;

  @media ${device.tablet} {
    padding: 4em 2em 1.5em;
  }
`;
