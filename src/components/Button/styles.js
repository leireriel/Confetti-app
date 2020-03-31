import styled from 'styled-components';

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  min-width: 5em;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  background-color: ${props => props.contrast};
  color: ${props => props.color};
  box-shadow: inset 0 0 0 1px ${props => props.color};
  border: none;
  border-radius: 6px;
  outline: 0;
  // both next ones are for the ripple effect
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${props => !props.disabled && props.color};
    color: ${props => !props.disabled && props.contrast};
  }
`;
