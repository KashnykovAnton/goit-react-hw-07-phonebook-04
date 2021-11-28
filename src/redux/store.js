import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsSlice } from 'redux/contacts/contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filter } from 'redux/contacts/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsSlice.reducerPath]: contactsSlice.reducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsSlice.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
