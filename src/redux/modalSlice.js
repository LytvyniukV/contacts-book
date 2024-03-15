import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    status: false,
  },
  reducers: {
    toggleModal(state, action) {
      state.status = action.payload;
    },
  },
});
export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
export const selectModal = state => state.status;
