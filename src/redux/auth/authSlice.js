import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './authOperations';

const handlePending = state => {
  state.isAuthLoading = true;
};

const handleRejected = state => {
  state.isAuthLoading = false;
};
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isAuthLoading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.isAuthLoading = false;
        state.user = {
          name: null,
          email: null,
        };
        (state.token = null), (state.isLoggedIn = false);
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isAuthLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isAuthLoading = false;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
