import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --baseFont: 'Open Sans Condensed', sans-serif;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: var(--baseFont);
    padding: 20px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
    @media screen and (min-width: 1200px) {
      padding: 20px 40px;
    }
  }

  *,
  *:before,
  *:after {
  box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;