import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/Root';
import Error from './pages/Error';

import './index.css';
import ProductDetail from './pages/ProductDetail';

// https://example.com/products
// https -> 프로토콜
// example.com -> 도메인
// 도메인 뒤에 부터가 path임

// route 설정해주는 또 다른 방법
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/products" element={<Products />}></Route>
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />, // 에러를 핸들링할 요소
    children: [
      // 도메인 뒤에 '/' 그리고 아무것도 없으면 path: '/' 가 실행
      // index: true 를 설정해주면, 부모 라우트가 활성일 경우에 로딩되어야 하는 기본 라우트를 정의!
      { index: true, element: <HomePage /> },
      { path: '/products', element: <Products /> },
      { path: '/product/:productId', element: <ProductDetail /> }, // 콜론을 통해 경로 매개변수 받기
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
