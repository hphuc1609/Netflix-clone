import classNames from 'classnames/bind';
import ReactPlayer from 'react-player';
import styles from './Intro.module.scss';
import { VscUnmute, VscMute } from 'react-icons/vsc';
import { useState } from 'react';

function Intro() {
    const cx = classNames.bind(styles);

    const [isMuted, setIsMuted] = useState(true);

    // Hàm xử lý khi click mute
    const handleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className={cx('wrapper')}>
            <ReactPlayer
                className={cx('video')}
                playing={true}
                url="https://vimeo.com/227991744"
                width="100%"
                height="100%"
                volume={0.5}
                muted={isMuted}
                loop={true}
            />
            <div className={cx('info')}>
                <h1 className={cx('title')}>Quái xế Baby</h1>
                <div className={cx('metadata')}>
                    <span className={cx('year')}>2017</span>
                    <span className={cx('spacer')}>|</span>
                    <span className={cx('number')}>18+</span>
                    <span className={cx('spacer')}>|</span>
                    <span className={cx('time')}>1g 53ph</span>
                    <span className={cx('spacer')}>|</span>
                    <span className={cx('genre')}>Hành động & Hài</span>
                </div>
                <p className={cx('desc')}>
                    Sau khi bị ép buộc làm việc cho một ông chủ tội phạm, một tài xế chạy trốn trẻ tuổi thấy mình tham
                    gia vào một vụ cướp đã cam chịu thất bại.
                </p>
            </div>
            <div className={cx('btn-volume')}>
                {isMuted ? (
                    <VscMute className={cx('icon-volume')} onClick={handleMute} />
                ) : (
                    <VscUnmute className={cx('icon-volume')} onClick={handleMute} />
                )}
            </div>
            <div className={cx('fade-bottom')}></div>
        </div>
    );
}

export default Intro;
