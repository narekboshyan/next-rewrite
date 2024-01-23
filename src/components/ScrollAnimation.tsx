import { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, threshold = 0.5, animation }:any) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return (
    <div ref={elementRef} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
