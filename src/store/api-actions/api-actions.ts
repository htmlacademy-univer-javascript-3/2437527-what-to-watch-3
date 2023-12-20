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
import {APIRoutes} from '../../api/api-routes';

export const fetchFavoritesAction = createAsyncThunk<{ favorites: FilmPreview[] } & { isLoaded: boolean }, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(APIRoutes.Favorites);
    return {favorites: data, isLoaded: true};
  },
);

export const checkAuthAction = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<User>(APIRoutes.Login);
    dispatch(fetchFavoritesAction());
    return {name: data.name, email: data.email, avatarUrl: data.avatarUrl, token: data.token};
  },
);

export const loginAction = createAsyncThunk<User, Auth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<User>(APIRoutes.Login, {email, password});
    saveToken(data.token);
    dispatch(fetchFavoritesAction());
    dispatch(redirectToRoute(APIRoutes.Main));
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
    await api.delete(APIRoutes.Logout);
    dropToken();
  },
);

export const fetchFilmsAction = createAsyncThunk<{ filmPreviews: FilmPreview[] } & { isLoaded: boolean }, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(APIRoutes.Films);
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
    const {data} = await api.get<Film>(APIRoutes.Film(id));
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
    const {data} = await api.get<FilmPreview[]>(APIRoutes.SimilarFilms(id));
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
    const {data} = await api.get<PromoFilm>(APIRoutes.Promo);
    return {promoFilm: data, isLoaded: true};
  },
);

export const fetchReviewsAction = createAsyncThunk<{reviews: Review[]}, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<Review[]>(APIRoutes.Reviews(id));
    return {reviews: data};
  },
);

export const postCommentAction = createAsyncThunk<void, Comment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postComment',
  async ({id: id, comment: comment, rating: rating},
    {dispatch: dispatch, extra: api}) => {
    dispatch(redirectToRoute(APIRoutes.Film(id)));
    await api.post<Omit<Comment, 'id'>>(APIRoutes.Reviews(id), {comment: comment, rating: rating});
  },
);

export const postFavorite = createAsyncThunk<Film, Favorite, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postFavorite',
  async ({filmId: filmId, status: status},
    {dispatch: dispatch, extra: api}) => {
    const {data} = await api.post<Film>(APIRoutes.PostFavorite(filmId, status));
    dispatch(fetchFavoritesAction());
    return data;
  },
);
