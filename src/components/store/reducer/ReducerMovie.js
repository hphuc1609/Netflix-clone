import { GET_MOVIE_ORIGINALS, GET_ACTION_MOVIES, GET_TRENDING_MOVIES, GET_TV_SHOWS } from '~/components/store/types';

const InitialStates = {
    movieOriginals: null,
    actionMoives: null,
    trendingMovies: null,
    tvShows: null,
};

const reducerMovie = (state = InitialStates, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_MOVIE_ORIGINALS:
            return {
                ...state,
                movieOriginals: payload,
            };
        case GET_ACTION_MOVIES:
            return {
                ...state,
                actionMoives: payload,
            };
        case GET_TRENDING_MOVIES:
            return {
                ...state,
                trendingMovies: payload,
            };
        case GET_TV_SHOWS:
            return {
                ...state,
                tvShows: payload,
            };
        default:
            return state;
    }
};

export default reducerMovie;
