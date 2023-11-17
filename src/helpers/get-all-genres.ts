import {Film} from '../types/film-type';
import {ALL_GENRES_RUBRIC} from '../store/reducer';

export function getAllGenres(films : Film[]) {
  return [ALL_GENRES_RUBRIC, ...new Set(films.map((film) => film.genre).sort())];
}
