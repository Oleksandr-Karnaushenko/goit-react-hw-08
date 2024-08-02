import { createSlice } from '@reduxjs/toolkit';

/// slice ///
const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

/// selectors ///
export const selectFilter = state => state.filters.name;

/// exports ///
export default slice.reducer;
export const { changeFilter } = slice.actions;
