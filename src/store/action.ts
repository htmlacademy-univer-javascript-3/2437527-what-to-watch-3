import {createAction} from '@reduxjs/toolkit';
import {Film, FilmPreview, PromoFilm} from '../types/film-type';
import {Review} from '../types/review';

export const setGenre = createAction<{genre: string}>('setGenre');
export const setFilms = createAction<{filmPreviews: FilmPreview[]}>('setFilms');
export const setFilm = createAction<{film: Film[]}>('setFilm');
export const setSimilarFilms = createAction<{similarFilms: FilmPreview[]}>('setSimilarFilms');
export const setPromoFilm = createAction<{promoFilm: PromoFilm[]}>('setPromoFilm');
export const setReviews = createAction<{reviews: Review[]}>('setReviews');
export const setLoadingStatus = createAction<boolean>('setLoadingStatus');
