import {State} from '../../types/state';
import {NameSpace} from '../../routes';

export const getGenre = (state: State): string => state[NameSpace.Data].genre;
export const getErrorMessage = (state: State): string | undefined => state[NameSpace.Data].errorMessage;
