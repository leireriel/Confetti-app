import styled from 'styled-components';

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  min-width: 5em;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  box-shadow: ${({ color }) => `inset 0 0 0 1px ${color}`};
  border: none;
  border-radius: 6px;
  outline: none;
  margin: ${({ margin }) => margin};
  text-transform: uppercase;
  font-weight: 700;

  // both next ones are for the ripple effect
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${({ disabled, color }) => !disabled && color};
    color: ${({ disabled, background}) => !disabled && background};
    transition: all 1s ease;
  }
`;
