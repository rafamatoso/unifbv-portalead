import React from 'react';
import { Provider } from 'react-redux';

import Loading from './components/Loading';
import { Routes } from './routes';
import store from './store';

import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <Loading />
      <Routes />
    </Provider>
  );
}
