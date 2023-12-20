import {State} from '../../types/state/state';
import {User} from '../../types/user/user';
import {NameSpace} from '../namespace';
import {AuthorizationStatus} from '../../const/authorization-status';

export const getUser = (state: State): User | null => state[NameSpace.User].user;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
