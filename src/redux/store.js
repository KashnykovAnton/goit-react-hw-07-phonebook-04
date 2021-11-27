import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsAPI } from './contacts/RTK';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filter } from './contacts/contacts-reducers';
// import { filter } from './contacts/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsAPI.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
