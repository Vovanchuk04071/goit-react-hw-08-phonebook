import { createAction } from '@reduxjs/toolkit';

export const fetchContactSuccess = createAction(
  'phone/fetchContactSuccess',
);

export const addContactSuccess = createAction(
  'phone/addContactSuccess',
);

export const deleteContactSuccess = createAction(
  'phone/deleteContactSuccess',
);

export const loadingChange = createAction(
  'phone/loadingChange',
);

export const changeFilter = createAction(
  'phone/changeFilter',
);

export const fetchError = createAction(
  'phone/fetchError',
);
