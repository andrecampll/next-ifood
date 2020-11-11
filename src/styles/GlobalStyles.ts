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
  }

  body, input, button, textarea {
    font-family: "Open Sans", Helvetica, sans-serif;
    font-size: 16px;
  }
`;
