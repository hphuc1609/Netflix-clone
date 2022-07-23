import axios from 'axios';
import * as Types from '~/components/store/types';

const API_KEY = '196cbf713bb5f50c31a25d18d89e97a9';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovieOriginals = () => async (dispatch) => {
    try {
        const results = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_network=213`);
        dispatch({
            type: Types.GET_MOVIE_ORIGINALS, // Here is the type of action
            payload: results.data.results,
        });
    } catch (error) {
        console.log('Get Originals Api Error: ', error);
    }
};

export const getActionMovies = () => async (dispatch) => {
    try {
        const results = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
        dispatch({
            type: Types.GET_ACTION_MOVIES, // Here is the type of action
            payload: results.data.results,
        });
    } catch (error) {
        console.log('Get Trending Api Error: ', error);
    }
};

export const getTrendingMovies = () => async (dispatch) => {
    try {
        const results = await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`);
        dispatch({
            type: Types.GET_TRENDING_MOVIES, // Here is the type of action
            payload: results.data.results,
        });
    } catch (error) {
        console.log('Get Trending Api Error: ', error);
    }
};

export const getTvShows = () => async (dispatch) => {
    try {
        const results = await axios.get(`
        ${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`);
        dispatch({
            type: Types.GET_TV_SHOWS, // Here is the type of action
            payload: results.data.results,
        });
    } catch (error) {
        console.log('Get Trending Api Error: ', error);
    }
};
