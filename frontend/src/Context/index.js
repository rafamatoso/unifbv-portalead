import React, { createContext, useState } from "react";
import Connect, { useSelector, useDispatch, createAction } from "./Connect";
const Context = createContext();

export default Context;

export function Provider({ children }) {
  const [store, dispatch] = useState({});
  return (
    <Context.Provider value={{ store, dispatch }}>
      <Connect>{children}</Connect>
    </Context.Provider>
  );
}

export { useSelector, useDispatch, createAction };
