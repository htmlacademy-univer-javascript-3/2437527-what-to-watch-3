import {Film} from '../types/film-type';
import {ALL_GENRES_RUBRIC} from '../store/reducer';

export function getAllGenres(films : Film[]) {
  const genres : string[] = [...new Set(films.map((film) => film.genre).sort())];
  genres.unshift(ALL_GENRES_RUBRIC);
  return genres;
}
