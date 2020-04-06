import styled from 'styled-components';
import { device } from 'constants/device';
import { green } from 'constants/colors';

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${green};
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
