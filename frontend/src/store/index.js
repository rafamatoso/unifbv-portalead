import React, { createContext, useContext } from "react";

import { types } from "./types";

import { set, get, clear } from "../services/storage";

export { types };

const dataStorage = get();

const cleanState = {
  user: null,
  loading: null
};

function saveState(newState) {
  set(newState);
  return get();
}

function logout() {
  clear();
  return cleanState;
}

export const initalState = dataStorage || cleanState;

export const Context = createContext();

const actionMap = {
  [types.SET_USER]: (state, payload) => saveState({ ...state, user: payload }),
  [types.SET_LOADING]: (state, payload) => saveState({ ...state, loading: payload }),
  [types.SET_LOGOUT]: () => logout(),
};

export function reducer(state, action) {
  return actionMap[action.type]
    ? actionMap[action.type](state, action.payload)
    : state;
}

export function connect(Component) {
  return function ConnectedComponent(props) {
    const { store, dispatch } = useContext(Context);
    return <Component store={store} dispatch={dispatch} {...props} />;
  };
}
