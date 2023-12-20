import {State} from '../../types/state/state';
import {NameSpace} from '../namespace';

export const getGenre = (state: State) => state[NameSpace.Data].genre;
export const getErrorMessage = (state: State) => state[NameSpace.Data].errorMessage;
