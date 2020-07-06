import { combineReducers } from 'redux';

import movie from '../src/movies/reducer';

const rootReducer = combineReducers({ movie });

export default rootReducer;
