import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toasts: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.toasts.push(action.payload);
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
  },
});

export const { setToast, clearToasts } = appSlice.actions;
export default appSlice.reducer;
