import React, {useReducer} from 'react';
import * as Store from './store';
import {Routes} from './routes';

import './App.css';

export default function App() {
  const [store, dispatch] = useReducer(Store.reducer, Store.initalState);
  return (
    <Store.Context.Provider value={{store, dispatch}}>
      <Routes />
    </Store.Context.Provider>
  );
}
