import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviewDetails: null,
    isLoading: false,
    error: false,
    success: false,
    successMessage: null,
  },

  reducers: {
    fetchReviewStart: (state) => {
      state.isLoading = true;
    },
    fetchReviewSuccess: (state, action) => {
      state.reviewDetails = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    fetchReviewError: (state) => {
      state.error = true;
      state.isLoading = false;
    },
    addNewReviewStart: (state) => {
      state.isLoading = true;
    },
    addNewReviewSuccess: (state, action) => {
      state.reviewDetails = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    addNewReviewError: (state) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const {
  fetchReviewStart,
  fetchReviewSuccess,
  fetchReviewError,
  addNewReviewStart,
  addNewReviewSuccess,
  addNewReviewError,
} = reviewSlice.actions;

export default reviewSlice.reducer;
