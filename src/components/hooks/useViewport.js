//hook useViewport
import { useState, useEffect } from 'react';

export function useViewport() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth || document.documentElement.clientWidth);

    useEffect(() => {
        const handleWindowWidth = () => {
            const width = window.innerWidth || document.documentElement.clientWidth;
            setWindowWidth(width);
        };
        handleWindowWidth();
        window.addEventListener('resize', handleWindowWidth);

        return () => window.removeEventListener('resize', handleWindowWidth);
    }, []);

    return windowWidth;
}
