import {State} from '../../types/state';
import {NameSpace} from '../../routes';
import {Film, FilmPreview, PromoFilm} from '../../types/film-types';

export const getFilmPreviews = (state: State): { filmPreviews: FilmPreview[] } & { isLoaded: boolean } => state[NameSpace.Films].filmPreviews;
export const getFilm = (state: State): { film: Film | null } & { isLoaded: boolean } => state[NameSpace.Films].film;
export const getSimilarFilms = (state: State): FilmPreview[] => state[NameSpace.Films].similarFilms;
export const getPromoFilm = (state: State): { promoFilm: PromoFilm | null } => state[NameSpace.Films].promoFilm;
