import { createSelector } from '@reduxjs/toolkit';
import { selectFilter, selectType } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter, selectType],
  (contacts, filter, type) => {
    if (!filter) {
      return contacts;
    } else {
      if (type === 'name') {
        return contacts.filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );
      } else {
        return contacts.filter(contact =>
          contact.number
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase())
        );
      }
    }
  }
);
