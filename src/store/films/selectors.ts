import {State} from '../../types/state/state';
import {NameSpace} from '../namespace';

export const getFilm = (state: State) => state[NameSpace.Films].filmState;
export const getFilmPreviews = (state: State) => state[NameSpace.Films].filmPreviewsState;
export const getSimilarFilms = (state: State) => state[NameSpace.Films].similarFilmsState;
export const getPromoFilm = (state: State) => state[NameSpace.Films].promoFilmState;
