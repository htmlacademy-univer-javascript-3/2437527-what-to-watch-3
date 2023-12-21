import {ALL_GENRES_RUBRIC} from '../store/data/data';
import {FilmPreview} from '../types/films/film-preview';

export function getAllGenres(filmPreviews : FilmPreview[]) {
  return [ALL_GENRES_RUBRIC, ...new Set(filmPreviews.map((filmPreview) => filmPreview.genre).sort())];
}
