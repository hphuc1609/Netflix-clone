import { useEffect, useState } from 'react';

export function useScrollY() {
    const [scrollY, setScrollY] = useState(0);

    // Hàm xử lý khi scroll
    const handleScrollY = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
    };

    useEffect(() => {
        handleScrollY();
        window.addEventListener('scroll', handleScrollY);

        return () => {
            window.removeEventListener('scroll', handleScrollY);
        };
    }, [scrollY]);
    return [scrollY];
}
