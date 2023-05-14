import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/header";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes></Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
