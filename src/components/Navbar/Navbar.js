import { BsSearch } from 'react-icons/bs';
import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';
import { useScrollY } from '~/components/hooks';

function Navbar({ props }) {
    const cx = classNames.bind(styles);

    const [scrollY] = useScrollY();

    return (
        <div
            className={cx('wrapper')}
            style={scrollY < 50 ? { backgroundColor: 'transparent' } : { backgroundColor: 'var(--bg-header-color)' }}
        >
            <div className={cx('navigation')}>
                <div className={cx('logo')}>
                    <a href="#">
                        <h3 className={cx('logo-name')}>IFLIX</h3>
                    </a>
                </div>
                <div className={cx('search')}>
                    <BsSearch className={cx('icon-search')} />
                    <input type="text" placeholder="Tìm phim, chương trình,..." />
                </div>
                <div className={cx('menu')}>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <a href="#" className={cx('link')}>
                                Home
                            </a>
                        </li>
                        <li className={cx('item')}>
                            <a href="#" className={cx('link')}>
                                Movies
                            </a>
                        </li>
                        <li className={cx('item')}>
                            <a href="#" className={cx('link')}>
                                Anime
                            </a>
                        </li>
                        <li className={cx('item')}>
                            <a href="#" className={cx('link')}>
                                TV Shows
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
