import {
    GET_MOVIE_ORIGINALS,
    GET_ACTION_MOVIES,
    GET_HORROR_MOVIES,
    GET_ROMANTIC_MOVIES,
    GET_ANIME_MOVIES,
    GET_FICTION_MOVIES,
    GET_TRENDING_MOVIES,
    GET_DRAMA_MOVIES,
    GET_TV_SHOWS,
    GET_SEARCH_MOVIES,
    SET_MOVIE_DETAILS,
} from '~/components/store/types';

const InitialStates = {
    movieOriginals: null,
    actionMovies: null,
    horrorMovies: null,
    romanticMovies: null,
    animeMovies: null,
    fictionMovies: null,
    dramaMovies: null,
    tvShows: null,
    trendingMovies: null,
    movieDetails: null,
    searchMovies: null,
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
                actionMovies: payload,
            };
        case GET_HORROR_MOVIES:
            return {
                ...state,
                horrorMovies: payload,
            };
        case GET_ROMANTIC_MOVIES:
            return {
                ...state,
                romanticMovies: payload,
            };
        case GET_ANIME_MOVIES:
            return {
                ...state,
                animeMovies: payload,
            };
        case GET_FICTION_MOVIES:
            return {
                ...state,
                fictionMovies: payload,
            };
        case GET_DRAMA_MOVIES:
            return {
                ...state,
                dramaMovies: payload,
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
        case GET_SEARCH_MOVIES:
            return {
                ...state,
                searchMovies: payload,
            };
        case SET_MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: payload,
            };
        default:
            return state;
    }
};

export default reducerMovie;
