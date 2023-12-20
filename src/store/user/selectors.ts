import {State} from '../../types/state/state';
import {NameSpace} from '../namespace';

export const getUser = (state: State) => state[NameSpace.User].user;
export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
