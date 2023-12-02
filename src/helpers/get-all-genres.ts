import {FilmPreview} from '../types/film-type';
import {ALL_GENRES_RUBRIC} from '../store/data/data';

export function getAllGenres(filmPreviews : FilmPreview[]) {
  return [ALL_GENRES_RUBRIC, ...new Set(filmPreviews.map((filmPreview) => filmPreview.genre).sort())];
}
