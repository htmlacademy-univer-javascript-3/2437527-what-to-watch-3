import {createSlice} from '@reduxjs/toolkit';
import {fetchReviewsAction} from '../api-actions/api-actions';
import {Review} from '../../types/review/review';
import {NameSpace} from '../namespace';

type Reviews = {
  reviews: Review[];
}

const initialState: Reviews = {
  reviews: [],
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, value) => {
        state.reviews = value.payload.reviews;
      });
  }
});
