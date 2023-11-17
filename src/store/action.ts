import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film-type';

export const setGenre = createAction<{genre: string}>('setGenre');
export const setFilms = createAction<{films: Film[]}>('setFilms');
