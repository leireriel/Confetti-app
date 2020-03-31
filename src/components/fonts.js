import styled from 'styled-components';
import { purple, pink } from 'constants/colors';

export const Title = styled.h1`
  font-size: 2em;
`;

export const Paragraph = styled.p`
  font-size: 1em;
  margin: ${props => props.margin ? 'default' : '0'};
`;

export const Micro = styled.p`
  font-size: 0.8em;
  margin: ${props => props.margin ? 'default' : '0'};
`;

export const Link = styled.a`
  color: ${purple};
  text-decoration: none;

  &:hover {
    color: ${pink};
  }
`;
