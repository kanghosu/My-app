import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  // 여기에 필요한 reset.css 코드를 추가하세요.
`;

export default GlobalStyle;
