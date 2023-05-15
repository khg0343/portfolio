import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppNavbar from "./components/AppNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/custom.scss";
import { Container } from "reactstrap";
import PageList from "./routes/publicRoute/PageList";
import PageDetail from "./routes/publicRoute/PageDetail";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppNavbar />
        <Header />
        <Container id="main-body">
          <Routes>
            <Route path="/" exact component={PageList} />
            <Route path="/page/:id" exact component={PageDetail} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
