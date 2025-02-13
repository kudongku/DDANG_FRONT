import { combineReducers } from 'redux';
import counter from './counter';

/**
 * 모듈 목록
 * (두개 이상의 모듈을 사용할 경우 store할때 하나의 reducer를 사용해야하기때문에 합쳐줌)
 *
 * 1. counter
 */
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
