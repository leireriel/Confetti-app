import styled from 'styled-components';
import { blue, green, white } from 'constants/colors';

export const Title = styled.h1`
  font-size: 2em;
`;

export const Paragraph = styled.p`
  font-size: 1em;
  margin: ${props => props.margin ? 'default' : '0'};
  padding: ${props => props.padding || 'default'}
`;

export const Micro = styled.p`
  font-size: 0.8em;
  margin: ${props => props.margin ? 'default' : '0'};
  padding: ${props => props.padding || 'default'}
`;

export const Link = styled.a`
  color: ${props => props.contrast ? white : blue};
  text-decoration: none;

  &:hover {
    color: ${green};
  }
`;
