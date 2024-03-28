import { createSelector } from '@reduxjs/toolkit';
import {
  selectFilterName,
  selectFilterNumber,
} from '../filters/filtersSelectors';

export const selectContacts = state => state.contacts.items;
export const selectId = state => state.contacts.id;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName, selectFilterNumber],
  (contacts, filterName, filterNumber) => {
    const normalizedFilter = filterName.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) &&
        contact.number.startsWith(filterNumber)
    );
  }
);
