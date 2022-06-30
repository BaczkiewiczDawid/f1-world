import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "components/Navigation/Navbar";
import GlobalStyle from "assets/styles/globalStyles";
import { theme } from "assets/styles/theme";
import Dashboard from "components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
