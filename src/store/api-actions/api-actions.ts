import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state/state.js';
import {Film} from '../../types/films/film';
import {
  redirectToRoute,
} from './redirect-to-route';
import {Review} from '../../types/review/review';
import {Auth} from '../../types/auth/auth';
import {User} from '../../types/user/user';
import {dropToken, saveToken} from '../../api/token';
import {Comment} from '../../types/comment/comment';
import {Favorite} from '../../types/favorite/favorite';
import {PromoFilm} from '../../types/films/promo-film';
import {FilmPreview} from '../../types/films/film-preview';
import {ApiRoutes} from '../../api/api-routes';

export const fetchFilmsAction = createAsyncThunk<FilmPreview[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(ApiRoutes.Films);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilm',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film>(ApiRoutes.Film(id));
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<FilmPreview[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(ApiRoutes.SimilarFilms(id));
    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunk<PromoFilm, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchPromoFilm',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PromoFilm>(ApiRoutes.Promo);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/fetchReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<Review[]>(ApiRoutes.Reviews(id));
    return data;
  },
);

export const postCommentAction = createAsyncThunk<void, Comment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/postComment',
  async ({id: id, comment: comment, rating: rating},
    {dispatch: dispatch, extra: api}) => {
    dispatch(redirectToRoute(ApiRoutes.Film(id)));
    await api.post<Omit<Comment, 'id'>>(ApiRoutes.Reviews(id), {comment: comment, rating: rating});
  },
);

export const fetchFavoritesAction = createAsyncThunk<FilmPreview[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(ApiRoutes.Favorites);
    return data;
  },
);

export const postFavorite = createAsyncThunk<Film, Favorite, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/postFavorite',
  async ({filmId: filmId, status: status},
    {dispatch: dispatch, extra: api}) => {
    const {data} = await api.post<Film>(ApiRoutes.PostFavorite(filmId, status));
    dispatch(fetchFavoritesAction());
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<User>(ApiRoutes.Login);
    dispatch(fetchFavoritesAction());
    return {name: data.name, email: data.email, avatarUrl: data.avatarUrl, token: data.token};
  },
);

export const loginAction = createAsyncThunk<User, Auth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<User>(ApiRoutes.Login, {email, password});
    saveToken(data.token);
    dispatch(fetchFavoritesAction());
    dispatch(redirectToRoute(ApiRoutes.Main));
    return {name: data.name, email: data.email, avatarUrl: data.avatarUrl, token: data.token};
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoutes.Logout);
    dropToken();
  },
);
