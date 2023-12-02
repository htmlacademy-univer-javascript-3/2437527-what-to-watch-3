import {FilmPreview} from '../types/film-type';
import {ALL_GENRES_RUBRIC} from '../store/data/data';

export function filterFilms(filmPreviews : FilmPreview[], genre : string) {
  return genre === ALL_GENRES_RUBRIC ? filmPreviews : filmPreviews.filter((filmPreview) => filmPreview.genre === genre);
}
