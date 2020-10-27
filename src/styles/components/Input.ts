import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #f5f5f5 !important;
  border-radius: 3px;
  padding: 10px;
  width: 100%;

  border: 2px solid #f5f5f5;
  color: #666360;

  display: flex;
  align-items: center;
  transition: all 0.4s;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ea1d2c;
      border-color: #ea1d2c;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ea1d2c;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #ccc;
      font-weight: 300;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
