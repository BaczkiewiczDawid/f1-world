import { ThemeProvider } from "styled-components";
import Navbar from "components/Navbar";
import GlobalStyle from "assets/styles/globalStyles";
import { theme } from "assets/styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
