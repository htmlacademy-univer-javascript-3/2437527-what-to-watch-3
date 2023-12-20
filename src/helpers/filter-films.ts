import {ALL_GENRES_RUBRIC} from '../store/data/data';
import {FilmPreview} from '../types/films/film-preview';

export function filterFilms(filmPreviews : FilmPreview[], genre : string) {
  return genre === ALL_GENRES_RUBRIC ? filmPreviews : filmPreviews.filter((filmPreview) => filmPreview.genre === genre);
}
