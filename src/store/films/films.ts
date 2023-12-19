import {createSlice} from '@reduxjs/toolkit';
import {
  fetchFilmAction,
  fetchFilmsAction, fetchPromoFilmAction,
  fetchSimilarFilmsAction
} from '../api-actions';
import {NameSpace} from '../../routes';
import {Film, FilmPreview, PromoFilm} from '../../types/film-types';

type Films = {
  filmPreviews: { filmPreviews: FilmPreview[] } & { isLoaded: boolean };
  film: { film: Film | null } & { isLoaded: boolean };
  similarFilms: FilmPreview[];
  promoFilm: { promoFilm: PromoFilm | null };
}

const initialState: Films = {
  filmPreviews: { filmPreviews: [], isLoaded: false },
  film: { film: null, isLoaded: false },
  similarFilms: [],
  promoFilm: { promoFilm: null },
};

export const films = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmAction.fulfilled, (state, value) => {
        state.film = value.payload;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, value) => {
        state.filmPreviews = value.payload;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, value) => {
        state.similarFilms = value.payload.similarFilms;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, value) => {
        state.promoFilm = value.payload;
      });
  }
});
