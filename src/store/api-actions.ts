import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Film, FilmPreview, PromoFilm} from '../types/film-type';
import {
  redirectToRoute,
  requireAuthorization,
  setFilm,
  setFilms,
  setLoadingStatus,
  setPromoFilm,
  setReviews,
  setSimilarFilms, setUser
} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../routes';
import {Review} from '../types/review';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {CommentData} from '../types/comment-data';

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
    const {data} = await api.get<Film[]>(APIRoute.Film(id));
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
    const {data} = await api.get<PromoFilm[]>(APIRoute.Promo);
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

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUser({name: data.name, email: data.email, avatarUrl: data.avatarUrl, token: data.token}));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const postCommentAction = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postComment',
  async ({id: id, comment: comment, rating: rating},
    {dispatch: dispatch, extra: api}) => {
    dispatch(redirectToRoute(AppRoute.Film(id)));
    await api.post<Omit<CommentData, 'id'>>(APIRoute.Reviews(id), {comment: comment, rating: rating});
  },
);
