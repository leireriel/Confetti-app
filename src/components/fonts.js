import styled from 'styled-components';
import { blue, pink } from 'constants/colors';

export const Title = styled.h1`
  font-size: 2em;
`;

export const Paragraph = styled.p`
  font-size: 1em;
`;

export const Micro = styled.p`
  font-size: 0.7em;
`;

export const Link = styled.a`
  color: ${blue};
  text-decoration: none;

  &:hover {
    color: ${pink};
  }
`;
