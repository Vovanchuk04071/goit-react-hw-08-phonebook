import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactSuccess,
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
  loadingChange,
  fetchError,
} from './phoneBook-action.js';

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [loadingChange]: (_, { payload }) => payload,
});

const error = createReducer('', {
  [fetchError]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
