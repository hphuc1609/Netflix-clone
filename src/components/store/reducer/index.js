import { combineReducers } from 'redux';
import reducerMovie from './ReducerMovie';

const rootReducer = combineReducers({
    infoMovies: reducerMovie,
});

export default rootReducer;
