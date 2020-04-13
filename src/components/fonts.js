import styled from 'styled-components';
import { blue, green, white } from 'constants/colors';

export const H1 = styled.h1`
  font-size: 2em;
`;

export const H2 = styled.h2`
  font-size: 1.5em;
`;

export const P = styled.p`
  font-size: 1em;
  margin: ${props => props.margin ? 'default' : '0'};
  padding: ${props => props.padding || 'default'}
`;

export const Small = styled.small`
  font-size: 0.8em;
  margin: ${props => props.margin ? 'default' : '0'};
  padding: ${props => props.padding || 'default'}
`;

export const A = styled.a`
  color: ${blue};
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  font-weight: 300;
  outline: none;
  
  &:hover {
    color: ${green};
  }
  
  &:active {
    color: ${white};
  }
`;
