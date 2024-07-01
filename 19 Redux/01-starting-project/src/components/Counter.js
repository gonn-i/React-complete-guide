import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // Redux store 구독 및 상태 조각 가져오기
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  // useDispatch 훅을 통해, dispatch 함수를 반환하고
  // dispatch 함수에 action 을 전달하여, store 내부의 상태 변경을 트리거
  const dispatch = useDispatch();
  const IncrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const IncreseHandler = () => {
    dispatch({ type: 'increse', payload: { amount: 5 } });
  };

  const DecrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={IncreseHandler}>Increse by 5</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import { Component } from 'react';
// import {connect } from 'react-redux'
// class Counter extends Component {
//   // this.props.increment()를 호출하여 increment 액션을 디스패치
//   IncrementHandler = () => {
//     this.props.increment();
//   };
//   //this.props.decrement()를 호출하여 decrement 액션을 디스패치
//   DecrementHandler = () => {
//     this.props.decrement();
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.IncrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.DecrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // Redux 스토어의 상태를 컴포넌트의 props로 매핑 -> useSelector 대체
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// //액션을 디스패치하는 함수 -> useDispatch 대체
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// // connect 함수로 Counter 컴포넌트를 Redux 스토어에 연결
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
