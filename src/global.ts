import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-text-strong: #0f172a;
    --color-text: #1e293b;
    --color-text-muted: #64748b;
    --color-surface: #ffffff;
    --color-surface-soft: rgba(255, 255, 255, 0.72);
    --color-border: rgba(148, 163, 184, 0.24);
    --color-accent: #0ea5e9;
    --color-accent-dark: #0369a1;
    --color-danger: #dc2626;
    --shadow-elevated: 0 28px 80px rgba(15, 23, 42, 0.18);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  input,
  button {
    font-family: "Trebuchet MS", "Segoe UI", sans-serif;
  }

  body {
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(14, 165, 233, 0.16), transparent 32%),
      radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.12), transparent 26%),
      linear-gradient(135deg, #07111f 0%, #0f172a 52%, #13233f 100%);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px
    );
    background-size: 100% 28px;
    opacity: 0.22;
  }

  button {
    cursor: pointer;
  }

  input,
  button {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: rgba(14, 165, 233, 0.24);
  }
`;

export default GlobalStyles;
