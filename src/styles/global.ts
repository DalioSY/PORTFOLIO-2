import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}

body {
  background-color: ${({ theme }) => theme.colors.black};;
  color: ${({ theme }) => theme.colors.white};;
}
`;
