import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: null,
    isLoading: false,
    error: false,
  },

  reducers: {
    loginStart: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      },
      loginError: (state) => {
        state.error = true;
        state.isLoading = false;
      },
    logout: (state) => {
      state.userInfo = null;
    }
  },
});

export const { loginStart, loginSuccess, loginError, logout} = authSlice.actions;

export default authSlice.reducer;
