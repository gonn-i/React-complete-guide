import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// redux 상태 슬라이스를 통햐 state와 reducer 함수를 설정할 수 있음.
// 1) name은 슬라이스의 이름으로 자유롭게 설정가능
// 2) initialState 는 관리할 state의 초깃값을 설정
// 3) reducers 에는 상태를 변경하는 방법을 정의하는 객체로, 내부에 선언된 각 리듀서 함수는
// 인자로 state와 action을 받아서, 새로운 상태를 반환!!
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
