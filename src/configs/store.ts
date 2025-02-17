import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../modules';
import { createLogger } from 'redux-logger';

const logger = createLogger();

/**
 * 스토어 생성
 * 크롬의 Redux DevTools 확장 프로그램을 사용하면 더 쉽게 디버깅할 수 있음
 */
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
