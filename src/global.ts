import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background: #81259d;
    color: #1f1f1f;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;