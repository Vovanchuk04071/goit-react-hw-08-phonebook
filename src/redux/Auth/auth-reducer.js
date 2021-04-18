import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  getCurrentUserSuccess,
  changeLoading,
  fetchError,
} from './auth-action';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [fetchError]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [changeLoading]: (_, payload) => payload,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [logoutSuccess]: () => false,
  [fetchError]: () => false,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
  error,
  loading,
});
