import styled from 'styled-components';
import { blue, green, white } from 'constants/colors';

export const H1 = styled.h1`
  font-size: 2em;
  margin: ${({ margin }) => margin || '0'};
`;

export const H2 = styled.h2`
  font-size: 1.5em;
  margin: ${({ margin }) => margin || '0'};
`;

export const P = styled.p`
  font-size: 1em;
  margin: ${({ margin }) => margin ? 'default' : '0'};
  padding: ${({ padding }) => padding || 'default'}
`;

export const Small = styled.small`
  font-size: 0.8em;
  margin: ${({ margin }) => margin ? 'default' : '0'};
  padding: ${({ padding }) => padding || 'default'}
`;

export const A = styled.a`
  color: ${blue};
  text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
  font-weight: 300;
  outline: none;
  
  &:hover {
    color: ${green};
  }
  
  &:active {
    color: ${white};
  }
`;
