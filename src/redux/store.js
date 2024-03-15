import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { modalReducer } from './modalSlice';
import { contactReducer } from './singleContact';

const persistedContactsReducer = persistReducer(
  {
    key: 'contacts',
    storage,
    whitelist: ['items'],
  },
  contactsReducer
);
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filterReducer,
    modal: modalReducer,
    contact: contactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
