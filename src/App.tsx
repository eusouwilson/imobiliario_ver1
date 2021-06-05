import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./routes/AuthenticatedRoute";
import { AuthProvider } from "./hooks/Auth";
import history from "services/history";
import GlobalStyle from "./constants/global";
import { Container } from "./constants/styles";
import { MenuBar } from "./components/";

class App extends React.Component {
  render() {
    return (
      <Container>
        <AuthProvider>
          <Router history={history}>
            <BrowserRouter>
              <GlobalStyle />
              <MenuBar />
              <Routes />
            </BrowserRouter>
          </Router>
        </AuthProvider>
      </Container>
    );
  }
}

export default App;
