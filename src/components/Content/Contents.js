import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieContent from './MovieContent';
import { getMovieOriginals } from '~/components/store/actions';

// const movies = [
//     {
//         title: 'Movie Name',
//         image: 'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
//     },
//     {
//         title: 'Movie Name',
//         image: 'https://cdn.moviefone.com/admin-uploads/posters/avatar-2-movie-poster_1652379656.jpg?d=360x540&q=50',
//     },
//     {
//         title: 'Movie Name',
//         image: 'https://www.tooxtraloaded.com.ng/wp-content/uploads/2022/04/a-thursday-bollywood-movie.jpg',
//     },
//     {
//         title: 'Movie Name',
//         image: 'https://movieposters2.com/images/1765313-b.jpg',
//     },
//     {
//         title: 'Movie Name',
//         image: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-05/10/15/asset/d02b60022872/sub-buzz-661-1652195573-11.jpg',
//     },
//     {
//         title: 'Movie Name',
//         image: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-05/10/15/asset/d02b60022872/sub-buzz-661-1652195573-11.jpg',
//     },
//     {
//         title: 'Movie Name',
//         image: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-05/10/15/asset/d02b60022872/sub-buzz-661-1652195573-11.jpg',
//     },
//     {
//         title: 'Movie Name',
//         image: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-05/10/15/asset/d02b60022872/sub-buzz-661-1652195573-11.jpg',
//     },
//     {
//         title: 'Movie Name',
//         image: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-05/10/15/asset/d02b60022872/sub-buzz-661-1652195573-11.jpg',
//     },
//     {
//         title: 'Movie Name',
//         image: 'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
//     },
//     {
//         title: 'Movie Name',
//         image: 'https://cdn.moviefone.com/admin-uploads/posters/avatar-2-movie-poster_1652379656.jpg?d=360x540&q=50',
//     },
// ];

function Contents(props) {
    const dispatch = useDispatch();
    const { movieOriginals } = useSelector((state) => state.infoMovies);

    useEffect(() => {
        dispatch(getMovieOriginals());
    }, [dispatch]);

    return (
        <div style={{ marginTop: '-80px' }}>
            <MovieContent movies={movieOriginals} title="Iflix Originals" isIflix={true} />
            <MovieContent movies={movieOriginals} title="Anime" />
            <MovieContent movies={movieOriginals} title="Trending Now" />
        </div>
    );
}

export default Contents;
