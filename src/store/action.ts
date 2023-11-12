import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film-type';

export const changeGenre = createAction<{genre: string}>('changeGenre');
export const uploadFilms = createAction<{films: Film[]}>('uploadFilms');
