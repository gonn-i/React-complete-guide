import { createSlice } from '@reduxjs/toolkit';

const initialshowState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: initialshowState,
  reducers: {
    modalToggle(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const modalActions = modalSlice.actions;
