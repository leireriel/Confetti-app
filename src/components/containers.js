import styled from 'styled-components';
import { device } from 'constants/device';
import background from 'assets/background.svg';

export const Wrapper = styled.section`
  background-image: url(${background});
  background-repeat: repeat;
  
  height: 100vh;
  padding: 0.5em 1em;

  @media ${device.tablet} {
    padding: 1.5em 2em;
  }
`;
