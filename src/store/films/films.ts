import {createSlice} from '@reduxjs/toolkit';
import {
  fetchFilmAction, fetchFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction
} from '../api-actions/api-actions';
import {NameSpace} from '../namespace';
import {AllFilmsDataState} from './films-state-types';

const initialState: AllFilmsDataState = {
  filmState: { film: null, isLoaded: false, hasError: false },
  filmPreviewsState: { filmPreviews: [], isLoaded: false, hasError: false },
  similarFilmsState: { similarFilms: [], isLoaded: false, hasError: false },
  promoFilmState: { promoFilm: null, isLoaded: false, hasError: false },
};

export const films = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmAction.pending, (state, value) => {
        state.filmState.isLoaded = false;
        state.filmState.hasError = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, value) => {
        state.filmState.isLoaded = true;
        state.filmState.film = value.payload;
        state.filmState.hasError = false;
      })
      .addCase(fetchFilmAction.rejected, (state, value) => {
        state.filmState.isLoaded = false;
        state.filmState.hasError = true;
      })

      .addCase(fetchFilmsAction.pending, (state, value) => {
        state.filmPreviewsState.isLoaded = false;
        state.filmPreviewsState.hasError = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, value) => {
        state.filmPreviewsState.isLoaded = true;
        state.filmPreviewsState.filmPreviews = value.payload;
        state.filmPreviewsState.hasError = false;
      })
      .addCase(fetchFilmsAction.rejected, (state, value) => {
        state.filmPreviewsState.isLoaded = false;
        state.filmPreviewsState.hasError = true;
      })

      .addCase(fetchSimilarFilmsAction.pending, (state, value) => {
        state.similarFilmsState.isLoaded = false;
        state.similarFilmsState.hasError = false;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, value) => {
        state.similarFilmsState.isLoaded = true;
        state.similarFilmsState.similarFilms = value.payload;
        state.similarFilmsState.hasError = false;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state, value) => {
        state.similarFilmsState.isLoaded = false;
        state.similarFilmsState.hasError = true;
      })

      .addCase(fetchPromoFilmAction.pending, (state, value) => {
        state.promoFilmState.isLoaded = false;
        state.promoFilmState.hasError = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, value) => {
        state.promoFilmState.isLoaded = true;
        state.promoFilmState.promoFilm = value.payload;
        state.promoFilmState.hasError = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state, value) => {
        state.promoFilmState.isLoaded = false;
        state.promoFilmState.hasError = true;
      });
  }
});
