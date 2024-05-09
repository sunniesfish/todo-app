import { ThemeProvider } from "styled-components";
import { Reset } from "./GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools"
import { Router } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={}>
        <Reset/>
        <Router/>
        <ReactQueryDevtools/>
      </ThemeProvider>
    </>
  );
}

export default App;
