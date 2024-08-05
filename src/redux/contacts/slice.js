import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './operations';
import { logOut } from '../auth/operations';

/// slice ///
const slice = createSlice({
  name: 'contacts',
  initialState: { items: [], loading: false, error: null },
  reducers: {
    changeName(state, action) {
      for (const contact of state.items) {
        if (contact.id === action.payload.id) {
          contact.name = action.payload.name;
          break;
        }
      }
    },
    changeNumber(state, action) {
      for (const contact of state.items) {
        if (contact.id === action.payload.id) {
          contact.number = action.payload.number;
          break;
        }
      }
    },
  },

  extraReducers: builder => {
    builder
      /// fetch ///
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /// add ///
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /// delete ///
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //logOut
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })
      // changeContact
      .addCase(changeContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeContact.fulfilled, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(changeContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

/// exports ///
export default slice.reducer;
export const { changeName, changeNumber } = slice.actions;
