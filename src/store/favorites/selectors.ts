import {State} from '../../types/state/state';
import {FilmPreview} from '../../types/films/film-preview';
import {NameSpace} from '../namespace';

export const getFavorites = (state: State): { favorites: FilmPreview[] } & { isLoaded: boolean } => state[NameSpace.Favorites].favorites;
