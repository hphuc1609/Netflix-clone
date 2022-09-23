import className from 'classnames/bind';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setMovieDetails } from '~/components/store/actions';

import styles from './MoviesDetail.module.scss';

const cx = className.bind(styles);

function MoviesDetail(props) {
    const { movie, showModal } = props;
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setMovieDetails(null));
    };

    return (
        <div className={cx('overlay')}>
            <div className={cx('modal', `${showModal ? 'showModal' : 'hideModal'}`)} onClick={handleCloseModal}></div>
            <div
                className={cx('modal-backdrop', `${showModal ? 'showBackdrop' : 'hideBackdrop'}`)}
                style={{
                    backgroundImage: `url(
                    ${
                        movie?.backdrop_path
                            ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
                            : 'https://via.placeholder.com/500x281'
                    }
                )`,
                }}
            >
                <div className={cx('modal-container')}>
                    <div className={cx('close-btn')} onClick={handleCloseModal}>
                        <AiOutlineClose />
                    </div>
                    <div className={cx('movie-info')}>
                        <h1 className={cx('movie-title')}>{movie?.title || movie?.name}</h1>
                        <div className={cx('movie-details')}>
                            <p className={cx('movie-satistical')}>
                                <span className={cx('movie-rating')}>Đánh giá: {movie?.vote_average} </span>
                                <span className={cx('movie-viewer')}>
                                    Lượt xem:{' '}
                                    {movie?.popularity > 1000
                                        ? `${(movie?.popularity / 1000).toFixed(1)}k`
                                        : movie?.popularity}
                                </span>
                            </p>
                            <p className={cx('movie-release')}>
                                <span className={cx('movie-label')}>Phát hành:</span>
                                <span className={cx('movie-date')}>
                                    {movie?.release_date || movie?.first_air_date || movie?.last_air_date || 'N/A'}
                                </span>
                            </p>
                            <p className={cx('movie-time')}>
                                <span className={cx('movie-label')}>Thời lượng:</span>
                                <span className={cx('movie-runtime')}>{movie?.runtime || 'm'}</span>
                            </p>
                            <div className={cx('movie-synopsis')}>
                                <p className={cx('movie-label')}>Nội dung:</p>
                                <p className={cx('movie-overview')}>
                                    {movie?.overview || 'Không có thông tin nội dung'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviesDetail;
