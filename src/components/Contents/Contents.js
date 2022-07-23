import className from 'classnames/bind';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieItem from '~/components/Contents/MovieItem/MovieItem';
import * as Actions from '~/components/store/actions';
import styles from './Contents.module.scss';

function Contents(props) {
    const cx = className.bind(styles);
    const dispatch = useDispatch();
    const { movieOriginals, actionMoives, trendingMovies, tvShows } = useSelector((state) => state.infoMovies);

    useEffect(() => {
        dispatch(Actions.getMovieOriginals());
        dispatch(Actions.getActionMovies());
        dispatch(Actions.getTrendingMovies());
        dispatch(Actions.getTvShows());
    }, [dispatch]);

    return (
        <div className={cx('container')}>
            <MovieItem movies={movieOriginals} title="Originals Movies" isIflix={true} />
            <MovieItem movies={actionMoives} title="Action Movies" isIflix={true} />
            <MovieItem movies={trendingMovies} title="Trending Now" />
            <MovieItem movies={tvShows} title="TV Episode and Drama" />
        </div>
    );
}

export default Contents;
