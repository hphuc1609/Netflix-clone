import className from 'classnames/bind';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiArrowUpCircleFill } from 'react-icons/ri';

import MoviesRow from '~/components/Contents/MoviesRow/MoviesRow';
import GoToTop from '~/components/Contents/GoToTop';
import * as Actions from '~/components/store/actions';
import styles from './Contents.module.scss';
import { animateScroll as scroll } from 'react-scroll';
import { useScrollY } from '~/components/hooks/useScrollY';
import MoviesDetail from '../MoviesDetail/MoviesDetail';

function Contents(props) {
    const cx = className.bind(styles);
    const dispatch = useDispatch();
    const [scrollY] = useScrollY();
    const {
        movieOriginals,
        actionMoives,
        trendingMovies,
        tvShows,
        romanticMovies,
        horrorMovies,
        animeMovies,
        fictionMovies,
    } = useSelector((state) => state.infoMovies);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        dispatch(Actions.getMovieOriginals());
        dispatch(Actions.getActionMovies());
        dispatch(Actions.getHorrorMovies());
        dispatch(Actions.getRomanticMovies());
        dispatch(Actions.getAnimeMovies());
        dispatch(Actions.getFictionMovies());
        dispatch(Actions.getTrendingMovies());
        dispatch(Actions.getTvShows());
    }, [dispatch]);

    return (
        <div className={cx('container')}>
            <MoviesRow movies={movieOriginals} title="Phổ biến trên Netflix" isNetflix={true} />
            <MoviesRow movies={actionMoives} title="Phim hành động" isNetflix={true} />
            <MoviesRow movies={horrorMovies} title="Phim kinh dị" isNetflix={true} />
            <MoviesRow movies={romanticMovies} title="Phim tâm lý - tình cảm" isNetflix={true} />
            <MoviesRow movies={animeMovies} title="Phim hoạt hình" isNetflix={true} />
            <MoviesRow movies={fictionMovies} title="Phim khoa học viễn tưởng" isNetflix={true} />
            <MoviesRow movies={trendingMovies} title="Phim xu hướng hiện hành" />
            <MoviesRow movies={tvShows} title="Phim truyền hình chính kịch" />
            <GoToTop onClick={() => scrollToTop()} scrollY={scrollY}>
                <RiArrowUpCircleFill />
            </GoToTop>
        </div>
    );
}

export default Contents;
