import { configureStore } from '@reduxjs/toolkit';

import reducers from './ducks';

export default configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development',
});
