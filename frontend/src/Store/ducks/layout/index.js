import { createAction, createReducer } from "@reduxjs/toolkit";

const initalState = { loading: false };

export const setLoading = createAction("SET_LOADING");

export default createReducer(initalState, {
  [setLoading.type]: (state, { payload }) => ({ ...state, loading: payload }),
});
