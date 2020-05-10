import { createAction, createReducer } from "@reduxjs/toolkit";

import { Auth } from "../../../services/firebase/Models";

export const setUser = createAction("SET_USER");
export const setLogout = createAction("SET_LOGOUT");

export const initalState = Auth.getUser();

export default createReducer(initalState, {
  [setUser.type]: (state, { payload }) => payload,
  [setLogout.type]: () => null,
});
