import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Film, FilmPreview} from '../types/film-type';
import {setFilm, setFilms, setLoadingStatus, setPromoFilm, setReviews, setSimilarFilms} from './action';
import {APIRoute} from '../routes';
import {Review} from '../types/review';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<FilmPreview[]>(APIRoute.Films);
    dispatch(setLoadingStatus(false));
    dispatch(setFilms({filmPreviews: data}));
  },
);

export const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilm',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Film(id));
    dispatch(setFilm({film: data}));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSimilarFilms',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(APIRoute.SimilarFilms(id));
    dispatch(setSimilarFilms({similarFilms: data}));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(APIRoute.Promo);
    dispatch(setPromoFilm({promoFilm: data}));
  },
);

export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(APIRoute.Reviews(id));
    dispatch(setReviews({reviews: data}));
  },
);
