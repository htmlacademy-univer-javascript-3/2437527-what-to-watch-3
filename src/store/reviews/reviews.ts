import {createSlice} from '@reduxjs/toolkit';
import {fetchReviewsAction} from '../api-actions/api-actions';
import {Review} from '../../types/review/review';
import {NameSpace} from '../namespace';

type ReviewsState = {
  reviews: Review[];
  isLoaded: boolean;
  hasError: boolean;
}

const initialState: ReviewsState = {
  reviews: [],
  isLoaded: false,
  hasError: false
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsAction.pending, (state, value) => {
        state.isLoaded = false;
        state.hasError = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, value) => {
        state.isLoaded = true;
        state.reviews = value.payload;
        state.hasError = false;
      })
      .addCase(fetchReviewsAction.rejected, (state, value) => {
        state.isLoaded = false;
        state.hasError = true;
      });
  }
});
