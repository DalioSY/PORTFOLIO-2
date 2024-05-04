import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    </ThemeProvider>
  );
}
