import React, { useReducer, useState } from "react";
import * as Store from "./store";
import { Routes } from "./routes";
import { Provider } from "./Context";
import Teste from "./components/Teste";
import "./App.css";

export default function App() {
  const [store, dispatch] = useReducer(Store.reducer, Store.initalState);

  return (
    // <Store.Context.Provider value={{ store, dispatch }}>
    //     {console.log(store1)}
    //     <Routes />
    // </Store.Context.Provider>

    <Provider>
      <Teste />
    </Provider>
  );
}
