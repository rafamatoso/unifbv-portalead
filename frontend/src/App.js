import React from 'react';
import { Provider } from 'react-redux';

import { Loading, Message } from './components';
import { Routes } from './routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Loading />
      <Message />
      <Routes />
    </Provider>
  );
}
