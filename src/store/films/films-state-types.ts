import {Film} from '../../types/films/film';
import {FilmPreview} from '../../types/films/film-preview';
import {PromoFilm} from '../../types/films/promo-film';

type FilmState = {
  film: Film | null;
  isLoaded: boolean;
  hasError: boolean;
}

type FilmPreviewsState = {
  filmPreviews: FilmPreview[];
  isLoaded: boolean;
  hasError: boolean;
}

type PromoFilmState = {
  promoFilm: PromoFilm | null;
  isLoaded: boolean;
  hasError: boolean;
}

type SimilarFilmsState = {
  similarFilms: FilmPreview[];
  isLoaded: boolean;
  hasError: boolean;
}

export type AllFilmsDataState = {
  filmState: FilmState;
  filmPreviewsState: FilmPreviewsState;
  similarFilmsState: SimilarFilmsState;
  promoFilmState: PromoFilmState;
}
