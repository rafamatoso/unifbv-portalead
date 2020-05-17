import { createAction, createReducer } from '@reduxjs/toolkit';

const initalState = {
  loading: false,
  message: { message: '', time: 0, type: 'success', active: false },
};

export const setLoading = createAction('SET_LOADING');
export const showMessage = createAction(
  'SHOW_MESSAGE',
  ({ message, time, type }) => {
    return {
      payload: { message, time, type },
    };
  },
);
export const hideMessage = createAction('HIDE_MESSAGE');

export default createReducer(initalState, {
  [setLoading.type]: (state, { payload }) => ({ ...state, loading: payload }),
  [showMessage.type]: (state, { payload }) => ({
    ...state,
    message: { ...payload, active: true },
  }),
  [hideMessage.type]: (state) => ({
    ...state,
    message: { ...state.message, active: false },
  }),
});
