export const selectUser = state => state.auth.user;
export const selectUserToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsAuthLoading = state => state.auth.isAuthLoading;
export const selectIsRefreshing = state => state.auth.isRefreshing;
