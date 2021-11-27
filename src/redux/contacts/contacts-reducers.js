import { createReducer } from '@reduxjs/toolkit';
import { contactsActions } from '.';

export const filter = createReducer('', {
  [contactsActions.filterContact]: (_, action) => action.payload,
});
