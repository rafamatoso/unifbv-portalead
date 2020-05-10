import React from "react";

import store from "./Store";
import { Routes } from "./routes";
import "./App.css";
import { Provider } from "react-redux";
import Loading from "./components/Loading";

export default function App() {
  return (
    <Provider store={store}>
      <Loading />
      <Routes />
    </Provider>
  );
}
