import className from 'classnames/bind';
import styles from './Footer.module.scss';

function Footer() {
    const cx = className.bind(styles);

    return (
        <div className={cx('footer')}>
            <p>
                <span className={cx('text')}>Copyright © Netflix.</span>
                <span className={cx('text')}>All Rights Reserved</span>
            </p>
        </div>
    );
}

export default Footer;
