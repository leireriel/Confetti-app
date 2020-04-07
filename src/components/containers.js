import styled from 'styled-components';
import { device } from 'constants/device';
import { yellow, opaqueWhite } from 'constants/colors';
import background from 'assets/background-confetti.svg';

export const MainWithConfetti = styled.main`
  background: url(${background}) repeat;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const WrapperHome = styled.div`
  padding: 4em 1em 0.5em;
  max-width: 1000px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 4em 2em 1.5em;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Section = styled.section`
  padding: 1em;
  background: ${opaqueWhite};
  border: 1px solid ${yellow};
  border-radius: 6px;
  margin: ${props => props.lastOne ? '0' : '0 0 2em'};

  @media ${device.tablet} {
    margin: ${props => props.lastOne ? '0' : '0 2em 0 0'};
  }
`;
