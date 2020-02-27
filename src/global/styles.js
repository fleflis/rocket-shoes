import { createGlobalStyle } from 'styled-components';

import bgImg from '../assets/img/background.svg';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto, -apple-system, Ubuntu, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    min-height: 100%
  }

  body, input, button {
    font: 14px sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  body {
    background: #191920 url(${bgImg}) no-repeat center top;
  }
`;
