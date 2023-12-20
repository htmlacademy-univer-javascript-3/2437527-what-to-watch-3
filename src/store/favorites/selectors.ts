import {State} from '../../types/state/state';
import {NameSpace} from '../namespace';

export const getFavorites = (state: State) => state[NameSpace.Favorites];
