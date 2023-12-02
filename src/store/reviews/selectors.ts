import {State} from '../../types/state';
import {NameSpace} from '../../routes';
import {Review} from '../../types/review';

export const getReviews = (state: State): Review[] => state[NameSpace.Reviews].reviews;
