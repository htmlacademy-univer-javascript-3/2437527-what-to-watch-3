import {createReducer} from '@reduxjs/toolkit';
import {setGenre, setFilms} from './action';
import {films} from '../mocks/films';

export const ALL_GENRES_RUBRIC = 'All genres';

const initialState = {
  genre: ALL_GENRES_RUBRIC,
  films: films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload.films;
    });
});

export {reducer};
