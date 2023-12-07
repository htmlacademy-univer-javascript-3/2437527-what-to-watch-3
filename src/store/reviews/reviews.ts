import {createSlice} from '@reduxjs/toolkit';
import {fetchReviewsAction} from '../api-actions';
import {NameSpace} from '../../routes';
import {Review} from '../../types/review';

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
