import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart-slice';
import { modalReducer } from './ui-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
