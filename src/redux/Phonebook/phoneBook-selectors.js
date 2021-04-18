import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state =>
  state.contacts.loading;

export const getContacts = state =>
  state.contacts.contacts;

export const getFilter = state =>
  state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalaizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(normalaizedFilter),
    );
  },
);
