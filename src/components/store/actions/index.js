import axios from 'axios';
import * as types from '~/components/store/types';

const API_KEY = '196cbf713bb5f50c31a25d18d89e97a9';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovieOriginals = () => async (dispatch) => {
    try {
        const results = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=en&sort_by=popularity.desc&page=1`,
        );
        dispatch({
            type: types.GET_MOVIE_ORIGINALS, // Here is the type of action
            payload: results.data.results,
        });
    } catch (error) {
        console.log('Get Movies Api Error: ', error);
    }
};
