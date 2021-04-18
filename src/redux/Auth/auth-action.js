import { createAction } from '@reduxjs/toolkit';

export const registerSuccess = createAction('auth/registerSuccess');

export const loginSuccess = createAction('auth/loginSuccess');

export const logoutSuccess = createAction('auth/logoutSuccess');

export const getCurrentUserSuccess = createAction('auth/getCurrentUser');

export const changeLoading = createAction('auth/changeLoading');

export const fetchError = createAction('auth/fetchError');
