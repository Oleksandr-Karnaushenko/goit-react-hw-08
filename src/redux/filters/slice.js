import { createSlice } from '@reduxjs/toolkit';

/// slice ///
const slice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
    type: 'name',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    changeType(state, action) {
      state.type = action.payload;
    },
  },
});

/// exports ///
export default slice.reducer;
export const { changeFilter, changeType } = slice.actions;
