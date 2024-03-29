import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    changeFilterName(state, action) {
      state.name = action.payload;
    },
    changeFilterNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { changeFilterName, changeFilterNumber } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
