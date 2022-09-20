import { BsSearch } from 'react-icons/bs';
import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar(props) {
    const cx = classNames.bind(styles);
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();

    const handleSearchInput = (e) => {
        let keywords = e.target.value;
        setKeywords(keywords);

        // Nếu có keywords thì hiện và ngược lại
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
                <a href="/" className={cx('mobile-logo')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/82px-Netflix_2015_N_logo.svg.png"
                        alt="NETFLIX"
                    />
                </a>
                <div className={cx('search')}>
                    <BsSearch className={cx('icon-search')} />
                    <input
                        type="text"
                        placeholder="Tìm phim, chương trình,..."
                        value={keywords}
                        onChange={handleSearchInput}
                    />
                </div>
                <div className={cx('menu')}>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <a href="#netflix" className={cx('link')}>
                                Trang chủ
                            </a>
                        </li>
                        <li className={cx('item')}>
                            <a href="#movies" className={cx('link')}>
                                Thể loại
                            </a>
                            <ol className={cx('sub-menu')}>
                                <div>
                                    <li className={cx('sub-menu-item')}>
                                        <a href="#action" className={cx('sub-menu-link')}>
                                            Hành động
                                        </a>
                                    </li>
                                    <li className={cx('sub-menu-item')}>
                                        <a href="#romantic" className={cx('sub-menu-link')}>
                                            Tình cảm
                                        </a>
                                    </li>
                                    <li className={cx('sub-menu-item')}>
                                        <a href="#fiction" className={cx('sub-menu-link')}>
                                            Viễn tưởng
                                        </a>
                                    </li>
                                </div>
                                <div>
                                    <li className={cx('sub-menu-item')}>
                                        <a href="#horror" className={cx('sub-menu-link')}>
                                            Kinh dị
                                        </a>
                                    </li>
                                    <li className={cx('sub-menu-item')}>
                                        <a href="#cartoon" className={cx('sub-menu-link')}>
                                            Hoạt hình
                                        </a>
                                    </li>
                                    <li className={cx('sub-menu-item')}>
                                        <a href="#tvShows" className={cx('sub-menu-link')}>
                                            Chính kịch
                                        </a>
                                    </li>
                                </div>
                            </ol>
                        </li>
                        <li className={cx('item')}>
                            <a href="#anime" className={cx('link')}>
                                Anime
                            </a>
                        </li>
                        <li className={cx('item')}>
                            <a href="#trending" className={cx('link')}>
                                Trending
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
