import className from 'classnames/bind';
import { useEffect } from 'react';
import { RiArrowUpCircleFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { animateScroll as scroll } from 'react-scroll';
import GoToTop from '~/components/Contents/GoToTop';
import MoviesRow from '~/components/Contents/MoviesRow/MoviesRow';
import { useScrollY } from '~/components/hooks/useScrollY';
import * as Actions from '~/components/store/actions';
import styles from './Contents.module.scss';

function Contents(props) {
    const cx = className.bind(styles);
    const dispatch = useDispatch();
    const [scrollY] = useScrollY();
    const {
        movieOriginals,
        actionMovies,
        romanticMovies,
        horrorMovies,
        animeMovies,
        fictionMovies,
        trendingMovies,
        tvShows,
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
        dispatch(Actions.getDramaMovies());
        dispatch(Actions.getTrendingMovies());
        dispatch(Actions.getTvShows());
    }, [dispatch]);

    return (
        <div className={cx('container')}>
            <MoviesRow movies={movieOriginals} title="Phổ biến trên Netflix" isNetflix={true} />
            <MoviesRow movies={actionMovies} title="Phim hành động" isNetflix={true} link={'/action'} />
            <MoviesRow movies={horrorMovies} title="Phim kinh dị" isNetflix={true} link={'/horror'} />
            <MoviesRow movies={romanticMovies} title="Phim tâm lý - tình cảm" isNetflix={true} link={'/romantic'} />
            <MoviesRow movies={animeMovies} title="Phim hoạt hình" isNetflix={true} link={'/anime'} />
            <MoviesRow movies={fictionMovies} title="Phim khoa học viễn tưởng" isNetflix={true} link={'/fiction'} />
            <MoviesRow movies={trendingMovies} title="Phim xu hướng hiện hành" />
            <MoviesRow movies={tvShows} title="Phim truyền hình - chính kịch" link={'/tvshows'} />
            <GoToTop onClick={() => scrollToTop()} scrollY={scrollY}>
                <RiArrowUpCircleFill />
            </GoToTop>
        </div>
    );
}

export default Contents;
