import { PayloadAction } from '@reduxjs/toolkit';
import { Action, ActionFunctionAny, createAction, handleActions } from 'redux-actions';

/**
 * 액션 타입 정의
 * 액션타입은 대문자
 * 문자열 내용은 모듈이름/액션이름
 */
const CHANGE_TITLE = 'auctionCreater/CHANGE_TITLE';
const CHANGE_CONTENT = 'auctionCreater/CHANGE_CONTENT';

/**
 * 액션 생성 함수
 * createAction : 액션 생성 함수를 생성하는 함수
 *
 * 1. CHANGE_TITLE : 제목 변경
 * 2. CHANGE_CONTENT : 내용 변경
 */
export const changeTitle: ActionFunctionAny<Action<string>> = createAction(CHANGE_TITLE);
export const changeContent: ActionFunctionAny<Action<string>> = createAction(CHANGE_CONTENT);

export interface AuctionCreaterState {
  auctionCreater: {
    title: string;
    content: string;
  };
}

/**
 * 초기 상태
 */
const initialState = {
  title: '',
  content: '',
};

/**
 * 리듀서
 * (state, action) => newState
 * action : {type, payload}
 * payload : 액션에서 전달된 데이터
 */
const auctionCreater = handleActions(
  {
    // 제목이 변경될 때
    [CHANGE_TITLE]: (state, action: PayloadAction<string>) => ({
      ...state, // 기존 상태를 복사
      title: action.payload, // title만 새로운 값으로 업데이트
    }),

    // 내용이 변경될 때
    [CHANGE_CONTENT]: (state, action: PayloadAction<string>) => ({
      ...state, // 기존 상태를 복사
      content: action.payload, // content만 새로운 값으로 업데이트
    }),
  },
  initialState
);

export default auctionCreater;
