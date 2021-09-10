import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {
      email: 'bishesh@gmail.com',
      password: "bishesh1234"
    },
    isLoading: false,
    error: false,
   
  },

  reducers: {
    loginStart: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
        state.userInfo = action.payload;
        state.isLoading = false;
        state.error = false;
      },
      loginError: (state, action) => {
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
