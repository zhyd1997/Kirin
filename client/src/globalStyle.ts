import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
    --kirin-gap-size-1x: 1em;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
}`;
