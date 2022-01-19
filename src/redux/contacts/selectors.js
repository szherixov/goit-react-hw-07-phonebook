import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);

  if (filter === '') return contacts;
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
};

export const getVisibleContactsMemo = createSelector([getFilter, getContacts], (filter, contacts) =>
  filter === '' ? contacts : contacts.name.toLowerCase().includes(filter.toLowerCase()),
);
