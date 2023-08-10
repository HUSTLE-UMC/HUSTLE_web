import { createGlobalStyle } from 'styled-components';

export const supportScreenSize = 1280;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; 

    @media all and (max-width: ${supportScreenSize}px) {
      font-size: 31.25%;
    }
  }

  body {
    background: white;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', -apple-system, sans-serif, Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
