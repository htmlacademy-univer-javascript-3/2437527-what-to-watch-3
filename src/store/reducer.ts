import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, uploadFilms} from './action';
import {Film} from '../types/film-type';

export const ALL_GENRES_RUBRIC = 'All genres';

const initialState = {
  genre: ALL_GENRES_RUBRIC,
  films: <Film[]>[],
  filmsOfGenre: <Film[]>[]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
      if (action.payload.genre === ALL_GENRES_RUBRIC) {
        state.filmsOfGenre = state.films;
      } else {
        state.filmsOfGenre = state.films.filter((film) => film.genre === state.genre);
      }
    })
    .addCase(uploadFilms, (state, action) => {
      state.films = action.payload.films;
      state.filmsOfGenre = action.payload.films;
    });
});

export {reducer};
