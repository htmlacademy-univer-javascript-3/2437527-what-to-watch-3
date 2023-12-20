import {State} from '../../types/state/state';
import {Review} from '../../types/review/review';
import {NameSpace} from '../namespace';

export const getReviews = (state: State): Review[] => state[NameSpace.Reviews].reviews;
