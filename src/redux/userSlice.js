import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "test123",
      email: "test123@gmail.com",
    },
    pending: false,
    error: false,
  },

  reducers: {
    loginStart: (state, action) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
        state.pending = false;
        state.userInfo = action.payload;
      },
      loginError: (state) => {
        state.error = true;
        state.pending = false;
      },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loginStart, loginSuccess, loginError} = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
