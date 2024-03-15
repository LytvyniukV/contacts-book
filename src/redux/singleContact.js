import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    item: {},
  },
  reducers: {
    setContact(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
export const selectContact = state => state.contact.item;
