import {Film} from '../types/film-type';
import {ALL_GENRES_RUBRIC} from '../store/reducer';

export function filterFilms(films : Film[], genre : string) {
  return genre === ALL_GENRES_RUBRIC ? films : films.filter((film) => film.genre === genre);
}
