import {State} from '../../types/state/state';
import {NameSpace} from '../namespace';

export const getReviews = (state: State) => state[NameSpace.Reviews];
