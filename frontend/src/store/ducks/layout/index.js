import { createAction, createReducer } from '@reduxjs/toolkit';

const initalState = { loading: false, message: [] };

export const setLoading = createAction('SET_LOADING');
export const addMessage = createAction('ADD_MESSAGE');
export const rmMessage = createAction('RM_MESSAGE');

export default createReducer(initalState, {
  [setLoading.type]: (state, { payload }) => ({ ...state, loading: payload }),
  [addMessage.type]: (state, { payload }) => ({
    ...state,
    message: [...state.message, payload],
  }),
  [rmMessage.type]: (state, { payload }) => ({
    ...state,
    message: state.message.filter((item, i) => i !== payload),
  }),
});
