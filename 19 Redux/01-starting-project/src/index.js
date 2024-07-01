import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // store에서 제공하는 state를 전달해주고 싶은 컴포넌트에 감싸준다. (부모에 감싸면 하위 컴포넌트까지 저장소에서 데이터 받을 수 있겠죠)
  // 이때 store props 에 설정한 리덕스 저장소를 전달해줌
  <Provider store={store}>
    <App />
  </Provider>
);
