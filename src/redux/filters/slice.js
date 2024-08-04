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

/// exports ///
export default slice.reducer;
export const { changeFilter } = slice.actions;
