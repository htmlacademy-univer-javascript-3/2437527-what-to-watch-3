import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Film, FilmPreview, PromoFilm} from '../types/film-type';
import {
  redirectToRoute,
} from './action';
import {APIRoute, AppRoute} from '../routes';
import {Review} from '../types/review';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {CommentData} from '../types/comment-data';

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return {name: data.name, email: data.email, avatarUrl: data.avatarUrl, token: data.token};
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return {name: data.name, email: data.email, avatarUrl: data.avatarUrl, token: data.token};
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchReviews = createAsyncThunk<{reviews: Review[]}, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<Review[]>(APIRoute.Reviews(id));
    return {reviews: data};
  },
);

export const fetchFilmsAction = createAsyncThunk<{ filmPreviews: FilmPreview[] } & { isLoaded: boolean }, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(APIRoute.Films);
    return {filmPreviews: data, isLoaded: true};
  },
);

export const fetchFilmAction = createAsyncThunk<{ film: Film | null } & { isLoaded: boolean }, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilm',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Film(id));
    return {film: data, isLoaded: true};
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<{similarFilms: FilmPreview[]}, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(APIRoute.SimilarFilms(id));
    return {similarFilms: data};
  },
);

export const fetchPromoFilmAction = createAsyncThunk<{ promoFilm: PromoFilm | null } & { isLoaded: boolean }, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromoFilm',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PromoFilm>(APIRoute.Promo);
    return {promoFilm: data, isLoaded: true};
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
