import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #3a3a3a !important;
  font-family: 'Open Sans', Helvetica, sans-serif;

  a {
    cursor: pointer !important;

    span {
      text-decoration: none;
      color: #3a3a3a;
      font-weight: bold;
    }
  }
`;
