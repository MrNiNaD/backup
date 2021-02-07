import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
max-width: 1350px;
width: 80%;
margin: 0 auto;
`;

export default GlobalStyle;