import { Reset } from "./GlobalStyle";
import ToDoList from "./components/ToDoList";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Reset/>
        <ToDoList/>
      </ThemeProvider>
    </>
  );
}

export default App;
