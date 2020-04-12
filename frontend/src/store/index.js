import React from 'react';

import { types } from './types';

import { set, get, clear } from '../services/sessionStorage';

export { types };

const dataStorage = get();

const cleanState = {
  user: {},
  auth: {
    token: null,
  },
};

function saveState(newState) {
  set(newState);
  return get();
}

function logout() {
  clear();
  return cleanState;
}
