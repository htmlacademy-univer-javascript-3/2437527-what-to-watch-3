import {createReducer} from '@reduxjs/toolkit';
import {setGenre, setFilms, setLoadingStatus, setFilm, setSimilarFilms, setPromoFilm, setReviews} from './action';
import {Film, FilmPreview, PromoFilm} from '../types/film-type';
import {Review} from '../types/review';

export const ALL_GENRES_RUBRIC = 'All genres';

export type InitialState = {
  genre: string;
  filmPreviews: FilmPreview[];
  film: Film;
  similarFilms: FilmPreview[];
  promoFilm: PromoFilm;
  reviews: Review[];
  isFilmsDataLoading: boolean;
};

const initialState : InitialState = {
  genre: ALL_GENRES_RUBRIC,
  filmPreviews: [],
  film: {
    'id': 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
    'name': 'The Grand Budapest Hotel',
    'posterImage': 'https://url-to-image/image.jpg',
    'backgroundImage': 'https://url-to-image/image.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://url-to-video/video.jpg',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2014,
    'isFavorite': false
  },
  promoFilm: {
    'id': 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
    'name': 'The Grand Budapest Hotel',
    'posterImage': 'https://url-to-image/image.jpg',
    'backgroundImage': 'https://url-to-image/image.jpg',
    'videoLink': 'https://url-to-video/video.mp4',
    'genre': 'Comedy',
    'released': 2014,
    'isFavorite': false
  },
  similarFilms: [],
  reviews: [],
  isFilmsDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setFilms, (state, action) => {
      state.filmPreviews = action.payload.filmPreviews;
    })
    .addCase(setFilm, (state, action) => {
      state.film = action.payload.film as unknown as Film;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload.similarFilms;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload.promoFilm as unknown as PromoFilm;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    });
});

export {reducer};
