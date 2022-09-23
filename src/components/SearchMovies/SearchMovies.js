import className from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useViewport } from '~/components/hooks/useViewport';
import { getSearchMovies, setMovieDetails } from '~/components/store/actions';
import styles from './SearchMovies.module.scss';

const useQuery = () => new URLSearchParams(useLocation().search);

function SearchMovies(props) {
    const cx = className.bind(styles);
    const windowWidth = useViewport();
    const dispatch = useDispatch();
    const { searchMovies } = useSelector((state) => state.infoMovies);

    const keywords = useQuery().get('keywords');
    useEffect(() => {
        if (keywords) {
            dispatch(getSearchMovies(keywords));
        }
    }, [keywords, dispatch]);

    console.log(searchMovies);

    return (
        <div className={cx('search-container')}>
            {searchMovies && searchMovies.length > 0 ? (
                <div
                    className={cx('search-content')}
                    style={{
                        gridTemplateColumns: `repeat(
                        ${
                            windowWidth > 1200
                                ? 5
                                : windowWidth > 992
                                ? 4
                                : windowWidth > 768
                                ? 3
                                : windowWidth > 600
                                ? 2
                                : 1
                        }, auto)`,
                    }}
                >
                    {searchMovies.map((movie, index) => {
                        if ((movie.backdrop_path !== null) & (movie.media_type !== 'person')) {
                            const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                            return (
                                <div
                                    className={cx('movie-item')}
                                    key={index}
                                    onClick={() => dispatch(setMovieDetails(movie))}
                                >
                                    <img src={imgUrl} alt={movie.title || movie.name} className={cx('movie-img')} />
                                    <span className={cx('movie-name')}>{movie.title || movie.name}</span>
                                </div>
                            );
                        }
                    })}
                </div>
            ) : (
                <div className={cx('no-movie')}>
                    <h3>Không tìm thấy phim nào với từ khóa "{keywords}"</h3>
                </div>
            )}
        </div>
    );
}

export default SearchMovies;
