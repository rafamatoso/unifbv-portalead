import { createAction, createReducer } from '@reduxjs/toolkit';

const initalState = { loading: false, message: null };

export const setLoading = createAction('SET_LOADING');
export const showMessage = createAction('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');

export default createReducer(initalState, {
  [setLoading.type]: (state, { payload }) => ({ ...state, loading: payload }),
  [showMessage.type]: (state, { payload }) => ({
    ...state,
    message: payload,
  }),
  [hideMessage.type]: (state) => ({
    ...state,
    message: null,
  }),
});
