import { useState, useEffect } from 'react';

const useIntersectionObserver = (ref: any, options: any) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current); // Stop observing after it’s visible
                }
            },
            options
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return isVisible;
};

export default useIntersectionObserver;