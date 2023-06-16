/* Packages */
import { createGlobalStyle } from 'styled-components'

/* Breakpoints */
import { breakpoints } from './breakpoints'

export const Css = createGlobalStyle`
  :root {
    --xs: ${breakpoints.xs};
    --s: ${breakpoints.s};
    --m: ${breakpoints.m};
    --l: ${breakpoints.l};
    --xl: ${breakpoints.xl};
  }

  :root {
    /* prettier-ignore */
    --secure-font: -apple-system, BlinkMacSystemFont, 'Segoe UI','Source Sans Pro', Oxygen, sans-serif;
    --main-font: 'Source Sans Pro';
    --body-font-family: var(--main-font), var(--secure-font);
    --body-font-size: 16px;
  }

  * {
    box-sizing: border-box;
    outline: none;
    outline: 0;
  }
  *:focus {
    outline: none;
    outline: 0;
  }

  html,
  body {
    font-family: var(--body-font-family);
    font-size: var(--body-font-size);
    height: 100%;
    margin: 0 auto;
    padding: 0;
    position: relative;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--body-font-family);
    margin: 0px;
    padding: 1rem 0px;
    position: relative;
    white-space: pre-line;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease, outline 0.000001s;
  }
  a:active,
  a:hover {
    text-decoration: none;
  }
  a:focus {
    color: inherit;
  }

  img,
  svg {
    border: 0;
    border: none;
    display: inline-block;
    outline: 0;
    outline: none;
    vertical-align: middle;
    user-select: none;
  }

  p {
    margin: 0px;
    padding: 0.3125rem 0px;
    white-space: pre-line;
  }

  hr {
    border: none;
    border-top: solid 1px;
  }
`
export { breakpoints }
