import { createAction, handleActions } from 'redux-actions';

/*
액션 타입 정의
액션타입은 대문자
문자열 내용은 모듈이름/액션이름
*/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서 함수
const counter = handleActions(
  {
    [INCREASE]: (state) => ({
      ...state,
      number: state.number + 1,
    }),
    [DECREASE]: (state) => ({
      ...state,
      number: state.number - 1,
    }),
  },
  initialState
);

export default counter;
