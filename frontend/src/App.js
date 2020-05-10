import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';

import { Routes } from './routes';

import Loading from './components/Loading';

import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <Loading />
      <Routes />
    </Provider>
  );
}
