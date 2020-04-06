import styled from 'styled-components';
import { device } from 'constants/device';
import { blue, white } from 'constants/colors';

export const FooterWrapper = styled.footer`
  background-color: ${blue};
  color: ${white};
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    padding: 0.5em 2em;
  }
`;

export const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;
