import {createAction} from '@reduxjs/toolkit';
import {Film, FilmPreview, PromoFilm} from '../types/film-type';
import {Review} from '../types/review';
import {AuthorizationStatus} from '../routes';
import {UserData} from '../types/user-data';

export const setGenre = createAction<{genre: string}>('setGenre');

export const setFilms = createAction<{ filmPreviews: FilmPreview[] } & { isLoaded: boolean }>('setFilms');

export const setFilm = createAction<{ film: Film | null } & { isLoaded: boolean }>('setFilm');

export const setSimilarFilms = createAction<{similarFilms: FilmPreview[]}>('setSimilarFilms');

export const setPromoFilm = createAction<{ promoFilm: PromoFilm | null} & { isLoaded: boolean }>('setPromoFilm');

export const setReviews = createAction<{reviews: Review[]}>('setReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setUser = createAction<UserData>('setUser');

export const redirectToRoute = createAction<string>('redirectToRoute');

export const setErrorMessage = createAction<string | null>('setErrorMessage');
