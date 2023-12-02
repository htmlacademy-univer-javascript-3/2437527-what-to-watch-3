import {combineReducers} from '@reduxjs/toolkit';
import {data} from './data/data';
import {user} from './user/user';
import {reviews} from './reviews/reviews';
import {films} from './films/films';
import {NameSpace} from '../routes';

export const rootReducer = combineReducers({
  [NameSpace.Data]: data.reducer,
  [NameSpace.Films]: films.reducer,
  [NameSpace.Reviews]: reviews.reducer,
  [NameSpace.User]: user.reducer
});
