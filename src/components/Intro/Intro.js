import classNames from 'classnames/bind';
import ReactPlayer from 'react-player';
import styles from './Intro.module.scss';
import { VscUnmute, VscMute } from 'react-icons/vsc';
import { useState } from 'react';

function Intro({ props }) {
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
                <h1 className={cx('heading')}>Baby Driver</h1>
                <p className={cx('text')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur
                    sagittis, nisl nunc egestas nisi
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
