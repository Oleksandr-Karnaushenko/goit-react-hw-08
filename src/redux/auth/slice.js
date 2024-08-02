import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      //registration
      //   .addCase(register.pending, state => {})
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //   .addCase(register.rejected, state => {}),
      //logIn
      //   .addCase(logIn.pending, state => {})
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //   .addCase(logIn.rejected, state => {}),
      //logOut
      //   .addCase(logIn.pending, state => {})
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      }),
  //   .addCase(logIn.rejected, state => {}),
});

export default authSlice.reducer;
