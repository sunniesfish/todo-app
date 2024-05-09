import { ThemeProvider } from "styled-components";
import { Reset } from "./GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools"
import Router from "./Router";
import { darkTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Reset/>
        <Router />
        <ReactQueryDevtools/>
      </ThemeProvider>
    </>
  );
}

export default App;
