import classNames from 'classnames/bind';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss';

function Navbar(props) {
    const cx = classNames.bind(styles);
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();

    const handleSearchInput = (e) => {
        let keywords = e.target.value;
        setKeywords(keywords);
        if (keywords.length > 0) {
            navigate(`/search?keywords=${keywords.trim()}`);
        } else {
            navigate('/');
        }
    };

    const goHome = () => {
        navigate('/');
        setKeywords('');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navigation')}>
                <div className={cx('logo')} onClick={goHome}>
                    <img
                        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                        alt="NETFLIX"
                    />
                </div>
                <Link to="/" className={cx('mobile-logo')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/82px-Netflix_2015_N_logo.svg.png"
                        alt="NETFLIX"
                    />
                </Link>
                <div className={cx('search')}>
                    <BsSearch className={cx('icon-search')} />
                    <input
                        type="text"
                        placeholder="Tìm phim, chương trình,..."
                        value={keywords}
                        onChange={handleSearchInput}
                    />
                </div>
                <nav className={cx('menu')}>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <Link to="/" className={cx('link')}>
                                Trang chủ
                            </Link>
                        </li>
                        <li className={cx('item')}>
                            <span className={cx('link')}>Thể loại</span>
                            <ol className={cx('sub-menu')}>
                                <div>
                                    <li className={cx('sub-menu-item')}>
                                        <Link to="/action" className={cx('sub-menu-link')}>
                                            Hành động
                                        </Link>
                                    </li>
                                    <li className={cx('sub-menu-item')}>
                                        <Link to="/romantic" className={cx('sub-menu-link')}>
                                            Tình cảm
                                        </Link>
                                    </li>
                                    <li className={cx('sub-menu-item')}>
                                        <Link to="/fiction" className={cx('sub-menu-link')}>
                                            Viễn tưởng
                                        </Link>
                                    </li>
                                </div>
                                <div>
                                    <li className={cx('sub-menu-item')}>
                                        <Link to="/horror" className={cx('sub-menu-link')}>
                                            Kinh dị
                                        </Link>
                                    </li>
                                    <li className={cx('sub-menu-item')}>
                                        <Link to="/anime" className={cx('sub-menu-link')}>
                                            Hoạt hình
                                        </Link>
                                    </li>
                                    <li className={cx('sub-menu-item')}>
                                        <Link to="/drama" className={cx('sub-menu-link')}>
                                            Drama
                                        </Link>
                                    </li>
                                </div>
                            </ol>
                        </li>
                        <li className={cx('item')}>
                            <Link to="/tvshows" className={cx('link')}>
                                TV shows
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
