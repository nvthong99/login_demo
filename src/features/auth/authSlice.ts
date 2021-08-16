import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'modules/User';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
  message?: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  message: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.message = undefined;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoggedIn = false;
      state.message = action.payload;
      state.logging = false;
    },
  },
});

// Actions
export const authActions = authSlice.actions;
console.log('AuthAction', authSlice.actions);

// Selectors
export const selectAuth = (state: any) => state.auth;
export const selectIslogging = (state: any) => state.auth.logging;
export const selectCurrentUser = (state: any) => state.auth.currentUser;
export const selectMessage = (state: any) => state.auth.message;
//Reducer

const authReducer = authSlice.reducer;
export default authReducer;
