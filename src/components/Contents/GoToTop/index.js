import className from 'classnames/bind';
import styles from './GoToTop.module.scss';

function GoToTop({ children, onClick, scrollY }) {
    const cx = className.bind(styles);
    return (
        <div
            className={cx('scrollTop')}
            onClick={onClick}
            style={{
                visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`,
                opacity: `${scrollY > 600 ? 1 : 0}`,
                transform: `${scrollY > 600 ? 'translateY(0)' : 'translateY(-50%)'}`,
            }}
        >
            {children}
        </div>
    );
}

export default GoToTop;
