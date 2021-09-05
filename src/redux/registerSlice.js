import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    newUser: null,
    isLoading: false,
    error: false,
  },

  reducers: {
    registerStart: (state, action) => {
      state.isLoading = true;
    },
    registerSuccess: (state, action) => {
        state.isLoading = false;
        state.newUser = action.payload;
    },
      registerError: (state) => {
        state.error = true;
        state.isLoading = false;
      },
  },
});

export const {registerStart,registerSuccess,registerError} = registerSlice.actions;

export default registerSlice.reducer;
