import React, { useRef, useEffect, useState } from 'react';

// Re-export motion components with proper types
export const motion = {
  div: ({ children, initial, animate, transition, style, className, whileHover, whileTap, ref, ...props }: any) => (
    <div 
      ref={ref}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </div>
  ),
  img: ({ children, initial, animate, transition, style, className, whileHover, whileTap, ref, ...props }: any) => (
    <img 
      ref={ref}
      className={className}
      style={style}
      {...props}
    />
  ),
  button: ({ children, initial, animate, transition, style, className, whileHover, whileTap, ref, ...props }: any) => (
    <button 
      ref={ref}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </button>
  )
};

// Custom scroll hook
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return { scrollYProgress: scrollY / (document.body.scrollHeight - window.innerHeight) };
};

// Transform hook
export const useTransform = (value: number, inputRange: [number, number], outputRange: [number, number]) => {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  
  const progress = (value - inputMin) / (inputMax - inputMin);
  return outputMin + progress * (outputMax - outputMin);
};

// In view hook
export const useInView = (ref: React.RefObject<Element>, options: { once?: boolean; threshold?: number } = {}) => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once) {
            observer.unobserve(element);
          }
        } else if (!options.once) {
          setIsInView(false);
        }
      },
      { threshold: options.threshold || 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [ref, options.once, options.threshold]);
  
  return isInView;
};

// AnimatePresence component
export const AnimatePresence = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Enhanced scroll reveal component with fallback animations
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({ children, direction = "up", delay = 0, duration = 0.6, className = "" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShouldAnimate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const directions = {
    up: { transform: shouldAnimate ? 'translateY(0)' : 'translateY(50px)' },
    down: { transform: shouldAnimate ? 'translateY(0)' : 'translateY(-50px)' },
    left: { transform: shouldAnimate ? 'translateX(0)' : 'translateX(50px)' },
    right: { transform: shouldAnimate ? 'translateX(0)' : 'translateX(-50px)' },
    fade: { opacity: shouldAnimate ? 1 : 0 }
  };

  const animationStyle = {
    ...directions[direction],
    opacity: shouldAnimate ? 1 : 0,
    transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`
  };

  return (
    <div
      ref={ref}
      style={animationStyle}
      className={className}
    >
      {children}
    </div>
  );
};

// Enhanced motion components with hover effects
export const EnhancedMotion = {
  div: ({ 
    children, 
    initial, 
    animate, 
    whileHover, 
    whileTap, 
    transition, 
    style, 
    className, 
    ...props 
  }: any) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isTapped, setIsTapped] = useState(false);
    
    const hoverStyle = whileHover && isHovered ? whileHover : {};
    const tapStyle = whileTap && isTapped ? whileTap : {};
    
    const combinedStyle = {
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      ...style,
      ...hoverStyle,
      ...tapStyle
    };
    
    return (
      <div
        className={className}
        style={combinedStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsTapped(true)}
        onMouseUp={() => setIsTapped(false)}
        onTouchStart={() => setIsTapped(true)}
        onTouchEnd={() => setIsTapped(false)}
        {...props}
      >
        {children}
      </div>
    );
  }
};

export default {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  ScrollReveal,
  EnhancedMotion
};