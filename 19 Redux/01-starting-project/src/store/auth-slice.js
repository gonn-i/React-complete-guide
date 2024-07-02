import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// store에 연결할 reducer 함수 export
export const authReducer = authSlice.reducer;
// dispatch 시 사용할, action export
export const authActions = authSlice.actions;
