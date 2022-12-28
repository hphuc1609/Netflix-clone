import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

function Footer() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('footer')}>
            <p className={cx('footer-text')}>
                © 2022. Made with <span className={cx('footer-heart')}>❤</span> by{' '}
                <a href=" https://github.com/hphuc1609" className={cx('footer-author')} rel="noreferrer">
                    Phuc Luu
                </a>
            </p>
        </div>
    );
}

export default Footer;
