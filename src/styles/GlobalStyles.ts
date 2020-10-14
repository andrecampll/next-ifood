import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    font-family: "Open Sans", Helvetica, sans-serif;
  }

  body, input, button {
    font-family: 'Open Sans', serif;
    font-size: 16px;
  }
`;
