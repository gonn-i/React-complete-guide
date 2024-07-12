import { createSlice } from '@reduxjs/toolkit';

const initialshowState = {
  showModal: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'modalSlice',
  initialState: initialshowState,
  reducers: {
    modalToggle(state) {
      state.showModal = !state.showModal;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const modalReducer = uiSlice.reducer;
export const modalActions = uiSlice.actions;
