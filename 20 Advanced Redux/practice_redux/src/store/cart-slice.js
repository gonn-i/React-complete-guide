import { createSlice } from '@reduxjs/toolkit';

const initalCounter = {
  totalQuantity: 0,
  total: 0.0,
  items: [],
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initalCounter,
  // 리듀서 정의
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    add(state, action) {
      const wantAddItem = action.payload;
      const addItem = state.items.find((item) => item.id === wantAddItem.id);

      addItem.quantity = addItem.quantity + 1;
      addItem.totalPrice = addItem.totalPrice + addItem.price;
      state.totalQuantity++;
      state.changed = true;
    },
    minus(state, action) {
      const wantDeleteItemId = action.payload.id;
      const itemIdx = state.items.findIndex((item) => item.id === wantDeleteItemId);

      if (itemIdx !== -1) {
        const minusItem = state.items[itemIdx];

        if (minusItem.quantity > 1) {
          minusItem.quantity = minusItem.quantity - 1;
          minusItem.totalPrice = minusItem.totalPrice - minusItem.price;
        } else {
          state.items.splice(itemIdx, 1);
        }
      }
      if (state.totalQuantity > 0) {
        state.totalQuantity--;
      }
      state.changed = true;
    },
    addtoCart(state, action) {
      const newitem = action.payload;

      const existItem = state.items.find((item) => item.id === newitem.id);
      if (!existItem) {
        state.items = [
          ...state.items,
          {
            id: newitem.id,
            title: newitem.title,
            price: newitem.price,
            quantity: 1,
            totalPrice: newitem.price,
          },
        ];
      } else {
        existItem.quantity += 1;
        existItem.totalPrice += existItem.price;
      }
      state.totalQuantity += 1;
      state.changed = true;
    },
  },
});

// 리듀서 자동 생성
export const cartReducer = cartSlice.reducer;

// 액션 생성자 자동 생성
export const cartActions = cartSlice.actions;
