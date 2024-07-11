import { createSlice } from '@reduxjs/toolkit';

const initalCounter = {
  totalQuantity: 0,
  total: 0.0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initalCounter,
  reducers: {
    add(state, action) {
      const wantAddItem = action.payload;
      const addItem = state.items.find((item) => item.id === wantAddItem.id);

      addItem.quantity = addItem.quantity + 1;
      addItem.totalPrice = addItem.totalPrice + addItem.price;
      state.totalQuantity++;
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
    },
    addtoCart(state, action) {
      const newitem = action.payload;

      const existItem = state.items.find((item) => item.id === newitem.id);
      if (!existItem) {
        state.items.push({
          id: newitem.id,
          title: newitem.title,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
        });
      } else {
        existItem.quantity = existItem.quantity + 1;
        existItem.totalPrice = existItem.totalPrice + existItem.price;
      }
      state.totalQuantity++;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
