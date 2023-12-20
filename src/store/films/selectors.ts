import {State} from '../../types/state/state';
import {Film} from '../../types/films/film';
import {PromoFilm} from '../../types/films/promo-film';
import {FilmPreview} from '../../types/films/film-preview';
import {NameSpace} from '../namespace';

export const getFilmPreviews = (state: State): { filmPreviews: FilmPreview[] } & { isLoaded: boolean } => state[NameSpace.Films].filmPreviews;
export const getFilm = (state: State): { film: Film | null } & { isLoaded: boolean } => state[NameSpace.Films].film;
export const getSimilarFilms = (state: State): FilmPreview[] => state[NameSpace.Films].similarFilms;
export const getPromoFilm = (state: State): { promoFilm: PromoFilm | null } => state[NameSpace.Films].promoFilm;
