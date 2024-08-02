import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import authReduser from './auth/slice';
import contactReduser from './contacts/slice';
import filterReduser from './filters/slice';

export const store = configureStore({
  reducer: {
    auth: authReduser,
    contacts: contactReduser,
    filters: filterReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
