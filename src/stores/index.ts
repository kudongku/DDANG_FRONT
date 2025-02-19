import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../modules';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
