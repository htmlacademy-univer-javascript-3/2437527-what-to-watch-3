import {createReducer} from '@reduxjs/toolkit';
import {
  setGenre,
  setFilms,
  setFilm,
  setSimilarFilms,
  setPromoFilm,
  setReviews,
  requireAuthorization,
  setUser
} from './action';
import {Film, FilmPreview, PromoFilm} from '../types/film-type';
import {Review} from '../types/review';
import {AuthorizationStatus} from '../routes';
import {UserData} from '../types/user-data';

export const ALL_GENRES_RUBRIC = 'All genres';

export type InitialState = {
  genre: string;
  filmPreviews: { filmPreviews: FilmPreview[] } & { isLoaded: boolean };
  film: { film: Film | null } & { isLoaded: boolean };
  similarFilms: FilmPreview[];
  promoFilm: { promoFilm: PromoFilm | null} & { isLoaded: boolean };
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

const initialState : InitialState = {
  genre: ALL_GENRES_RUBRIC,
  filmPreviews: { filmPreviews: [], isLoaded: false },
  film: { film: null, isLoaded: false },
  similarFilms: [],
  promoFilm: { promoFilm: null, isLoaded: false },
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setFilms, (state, action) => {
      state.filmPreviews = action.payload;
    })
    .addCase(setFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload.similarFilms;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
