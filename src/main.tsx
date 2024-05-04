import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { App } from "./App";
import { GlobalProvider } from "./contexts/GlobalContext";
import { lightTheme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>,
);
