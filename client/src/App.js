import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/custom.scss";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <h1>Hello Body</h1>
        {/* <Routes></Routes> */}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
