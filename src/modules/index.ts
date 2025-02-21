import { combineReducers } from 'redux';
import auctionCreater from './auctionCreaterModules';
/**
 * 모듈 목록
 * (두개 이상의 모듈을 사용할 경우 store할때 하나의 reducer를 사용해야하기때문에 합쳐줌)
 *
 * 1. auctionCreater
 */
const rootReducer = combineReducers({
  auctionCreater,
});

export default rootReducer;
