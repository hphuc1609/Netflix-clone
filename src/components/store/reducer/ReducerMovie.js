import { GET_MOVIE_ORIGINALS } from '~/components/store/types';

const MovieInitialStates = {
    movieOriginals: [],
};

const reducerMovie = (state = MovieInitialStates, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_MOVIE_ORIGINALS:
            return {
                ...state,
                movieOriginals: payload,
            };
        default:
            return state;
    }
};

export default reducerMovie;
