import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import styles from './MovieContent.module.scss';

function MovieContent({ movies, title, isIflix }) {
    const cx = classNames.bind(styles);

    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);

    const sliderRef = useRef();
    const movieRef = useRef();

    const handleScrollRight = () => {
        // Lấy chiều dài của slider (scrollWidth) - chiều rộng của slider (clientWidth)
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        const currentScrollLeft = sliderRef.current.scrollLeft;

        if (currentScrollLeft < maxScrollLeft) {
            sliderRef.current.scrollLeft += movieRef.current.clientWidth * 2;
        }
    };

    const handleScrollLeft = () => {
        const currentScrollLeft = sliderRef.current.scrollLeft;
        if (currentScrollLeft > 0) {
            sliderRef.current.scrollLeft -= movieRef.current.clientWidth * 2;
        }
    };

    useEffect(() => {
        // Nếu đang kéo thì setIsDrag = true
        if (isDrag) {
            if (dragMove < dragDown) {
                handleScrollRight();
            }
            if (dragMove > dragDown) {
                handleScrollLeft();
            }
        }
    }, [dragDown, dragMove, isDrag]);

    const handleDragStart = (e) => {
        setIsDrag(true);
        setDragDown(e.screenX);
    };

    const handleDragEnd = () => {
        setIsDrag(false);
    };

    const handleDragEnter = (e) => {
        setDragMove(e.screenX);
    };

    return (
        <div className={cx('container')}>
            <h3 className={cx('heading')}>{title}</h3>
            <div
                className={cx('list')}
                ref={sliderRef}
                draggable={true}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragEnter={handleDragEnter}
            >
                {movies &&
                    movies.length > 0 &&
                    movies.map((movie, index) => {
                        if (movie.poster_path && movie.backdrop_path !== null) {
                            // Nếu có isIflix thì hiển thị ảnh poster, không thì hiển thị ảnh backdrop
                            let imgURL = isIflix
                                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

                            return (
                                <div className={cx('item')} key={index} ref={movieRef}>
                                    <img src={imgURL} alt={movie.title || movie.name} />
                                    <span className={cx('name')}>{movie.title || movie.name}</span>
                                </div>
                            );
                        }
                    })}
            </div>
            <div className={cx('btn-prev')} onClick={handleScrollLeft}>
                <BsChevronLeft className={cx('btn-icon')} />
            </div>
            <div className={cx('btn-next')} onClick={handleScrollRight}>
                <BsChevronRight className={cx('btn-icon')} />
            </div>
        </div>
    );
}

export default MovieContent;
