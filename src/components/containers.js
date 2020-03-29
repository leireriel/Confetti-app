import styled from 'styled-components';
import { device } from 'constants/device';

export const Wrapper = styled.section`
  padding: 0.5em 1em;

  @media ${device.tablet} {
    padding: 1.5em 2em;
  }
`;
