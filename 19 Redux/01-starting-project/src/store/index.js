import { createStore } from 'redux';

// 상태 업데이트를 담당할 리듀서 함수
// 리듀서 함수는 새로운 상태에 대한 스냅샷을 생성 (이때 내부에는 side Effect을 다룰 수 없음)
// 1) 리듀서 함수의 인자로, 상태값과 액션을 담아서 작성
// 이때 state에는 초기 실행의 경우를 고려하여, default 값을 넣어줘야함 + action은 주문서라고 생각하기 -> 어떻게 바꿔주기 주문서
const initialState = { counter: 0, showCounter: true };

function counterReducer(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === 'increse') {
    return {
      ...state,
      counter: state.counter + action.payload.amount,
    };
  }
  if (action.type === 'decrement') {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === 'toggle') {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
}

// 상태를 저장할 저장소를 만드는 방법
// redux 에서 createStore 함수를 실행하고, 인자로 자장소를 변경시키는 리듀서 함수를 포인터로 넘겨줄 것
const store = createStore(counterReducer);

export default store;
