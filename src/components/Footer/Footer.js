import className from 'classnames/bind';
import styles from './Footer.module.scss';

function Footer() {
    const cx = className.bind(styles);

    return (
        <div className={cx('footer')}>
            <p>
                <span className={cx('footer-text')}>Copyright © Hoang Phuc.</span>
                <span className={cx('footer-text')}>All Rights Reserved</span>
            </p>
            <p>
                <span className={cx('footer-mail')}>phucluu1609@gmail.com</span>
            </p>
        </div>
    );
}

export default Footer;
