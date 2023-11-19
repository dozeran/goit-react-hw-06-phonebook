import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contact;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contact, filter) => {
    return contact.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
