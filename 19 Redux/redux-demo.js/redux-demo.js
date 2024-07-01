const redux = require('redux');

// 상태 업데이트를 담당할 리듀서 함수를 정의
// 리듀서 함수는 새로운 상태에 대한 스냅샷을 생성
// 1) 리듀서 함수의 인자로, 상태값과 액션을 담아서 작성
// 이때 state에는 초기 실행의 경우를 고려하여, default 값을 넣어줘야함 + action은 주문서라고 생각하기 -> 어떻게 바꿔주기 주문서
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type == 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// 상태를 저장할 저장소를 만드는 방법
// redux 에서 createStore 함수를 실행하고, 인자로 자장소를 변경시키는 리듀서 함수를 등록함
const store = redux.createStore(counterReducer);

// 저장소를 구독하는 방법
const counterSubscriber = () => {
  const latestState = store.getState(); // createStore() 로 저장된 저장소에서 가장 최신 상태를 가져옴 + 상태가 변경될떄마다 trigger 됨
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
