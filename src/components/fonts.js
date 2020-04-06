import styled from 'styled-components';
import { blue, green, white, lightGray } from 'constants/colors';

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
  font-weight: 300;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 55%;
    left: 0.5em;
    width: calc(100% - 0.25em);
    height: 0.7em;
    background-color: ${green};
    opacity: 0.08;
  }

  &:hover {
    color: ${green};
    transition: all 0.5s ease;
  }
`;
