import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
    isLoading: false,
    error: false,
    success: false,
    successMessage: null,
  },

  reducers: {
    fetchUserStart: (state) => {
      state.isLoading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.userDetails = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    fetchUserError: (state) => {
      state.error = true;
      state.isLoading = false;
    },
    updateUserStart: (state) => {
      state.isLoading = true;
      state.success = false;
    },
    updateUserSuccess: (state, action) => {
      state.isLoading = false;
      state.successMessage = action.payload;
      state.error = false;
      state.success = true;
    },
    updateUserError: (state, action) => {
      state.error = true;
      state.isLoading = false;
      state.success = false;
    },
  },
});

export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserError,
  updateUserStart,
  updateUserSuccess,
  updateUserError,
} = userSlice.actions;

export default userSlice.reducer;
