import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useViewport } from '~/components/hooks/useViewport';
import { setMovieDetails } from '~/components/store/actions';
import styles from './LayoutMovies.module.scss';

const cx = classNames.bind(styles);

function DramaMovies() {
    const { dramaMovies } = useSelector((state) => state.infoMovies);
    const windowWidth = useViewport();
    const dispatch = useDispatch();

    return (
        <div className={cx('container')}>
            <h1 className={cx('title')}>Drama Chính Kịch</h1>
            {dramaMovies && dramaMovies.length > 0 ? (
                <div
                    className={cx('content')}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(
                        ${
                            windowWidth > 1200
                                ? 5
                                : windowWidth >= 992
                                ? 4
                                : windowWidth >= 768
                                ? 3
                                : windowWidth >= 600
                                ? 2
                                : 2
                        }, auto)`,
                    }}
                >
                    {dramaMovies.map((movie, index) => {
                        if ((movie.poster_path !== null) & (movie.media_type !== 'person')) {
                            const imgUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
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
                <div></div>
            )}
        </div>
    );
}

export default DramaMovies;
