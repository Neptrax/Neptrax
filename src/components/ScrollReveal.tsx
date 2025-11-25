import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
  depth?: number;
  className?: string;
  threshold?: number;
  resetOnExit?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  depth = 0,
  className = '',
  threshold = 0.1,
  resetOnExit = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('reveal-visible');
            }, delay);
          } else if (resetOnExit) {
            element.classList.remove('reveal-visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold, resetOnExit]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'reveal-up';
      case 'down':
        return 'reveal-down';
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      case 'fade':
        return 'reveal-fade';
      case 'zoom':
        return 'reveal-zoom';
      default:
        return 'reveal-up';
    }
  };

  const getDepthClass = () => {
    if (depth === 0) return '';
    if (depth === 1) return 'reveal-depth-light';
    if (depth === 2) return 'reveal-depth-medium';
    if (depth === 3) return 'reveal-depth-heavy';
    return '';
  };

  return (
    <div
      ref={elementRef}
      className={`reveal ${getDirectionClass()} ${getDepthClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
