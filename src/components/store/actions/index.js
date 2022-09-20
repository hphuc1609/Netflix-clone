import axios from 'axios';
import * as Types from '~/components/store/types';

const API_KEY = '196cbf713bb5f50c31a25d18d89e97a9';
const BASE_URL = 'https://api.themoviedb.org/3';

// Phim phổ biến
export const getMovieOriginals = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_network=213&language=vi`);
        dispatch({
            type: Types.GET_MOVIE_ORIGINALS, // Here is the type of action
            payload: result.data.results,
        });
    } catch (error) {
        console.log('Get Originals Movies Error: ', error);
    }
};

// Phim hành động
export const getActionMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=vi`);
        dispatch({
            type: Types.GET_ACTION_MOVIES, // Here is the type of action
            payload: result.data.results,
        });
    } catch (error) {
        console.log('Get Action Movies Error: ', error);
    }
};

// Phim kinh dị
export const getHorrorMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=vi`);
        dispatch({
            type: Types.GET_HORROR_MOVIES, // Here is the type of action
            payload: result.data.results,
        });
    } catch (error) {
        console.log('Get Horror Movies Error: ', error);
    }
};

// Phim tình cảm
export const getRomanticMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749&region=VN&language=vi&page=2`,
        );
        dispatch({
            type: Types.GET_ROMANTIC_MOVIES, // Here is the type of action
            payload: result.data.results,
        });
    } catch (error) {
        console.log('Get Romantic Movies Error: ', error);
    }
};

// Phim hoạt hình
export const getAnimeMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&language=vi`);
        dispatch({
            type: Types.GET_ANIME_MOVIES, // Here is the type of action
            payload: result.data.results,
        });
    } catch (error) {
        console.log('Get Anime Movies Error: ', error);
    }
};

// Phim viễn tưởng
export const getFictionMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878&language=vi`);
        dispatch({
            type: Types.GET_FICTION_MOVIES, // Here is the type of action
            payload: result.data.results,
        });
    } catch (error) {
        console.log('Get Fiction Movies Error: ', error);
    }
};

// Phim thịnh hành
export const getTrendingMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=vi`);
        dispatch({
            type: Types.GET_TRENDING_MOVIES, // Here is the type of action
            payload: result.data.results,
        });
    } catch (error) {
        console.log('Get Trending Error: ', error);
    }
};

// Phim truyền hình
export const getTvShows = () => async (dispatch) => {
    try {
        const result = await axios.get(`
        ${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&language=vi`);
        dispatch({
            type: Types.GET_TV_SHOWS, // Here is the type of action
            payload: result.data.results,
        });
    } catch (error) {
        console.log('Get TV Shows Error: ', error);
    }
};

// Xem chi tiết phim hoặc phim truyền hình
export const setMovieDetails = (movie) => (dispatch) => {
    dispatch({
        type: Types.SET_MOVIE_DETAILS, // Here is the type of action
        payload: movie,
    });
};

// Tìm kiếm phim
export const getSearchMovies = (keywords) => async (dispatch) => {
    try {
        const result = await axios.get(`
        ${BASE_URL}/search/multi?api_key=${API_KEY}&language=vi&query=${keywords}`);
        dispatch({
            type: Types.GET_SEARCH_MOVIES, // Here is the type of action
            payload: result.data.results,
        });
    } catch (error) {
        console.log('Get Search Movies Error: ', error);
    }
};
