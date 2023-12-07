import {State} from '../../types/state';
import {NameSpace} from '../../routes';
import {FilmPreview} from '../../types/film-type';

export const getFavorites = (state: State): { favorites: FilmPreview[] } & { isLoaded: boolean } => state[NameSpace.Favorites].favorites;
