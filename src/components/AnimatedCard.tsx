import { ReactNode, useRef, useState, useEffect } from 'react';
import { motion } from './FramerMotion';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
  delay?: number;
  hoverEffect?: 'scale' | 'lift' | 'glow' | 'shine';
}

export default function AnimatedCard({
  children,
  className = '',
  index = 0,
  delay = 0,
  hoverEffect = 'lift'
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' && window.innerWidth >= 1024);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.5;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.5;

    setMousePosition({ x, y });
  };

  const getHoverStyle = () => {
    switch (hoverEffect) {
      case 'scale':
        return {
          transform: 'scale(1.05)',
        };
      case 'lift':
        return {
          transform: `translateY(-8px) rotateX(2deg) translateZ(0)`,
          boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
        };
      case 'glow':
        return {
          boxShadow: '0 0 30px rgba(37, 99, 235, 0.6), inset 0 0 30px rgba(37, 99, 235, 0.1)',
        };
      case 'shine':
        return {
          transform: 'translateY(-4px)',
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: isDesktop && isHovered
          ? `perspective(1000px) rotateX(${-mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) translateZ(0)`
          : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
      }}
      whileHover={hoverEffect !== 'shine' ? getHoverStyle() : undefined}
    >
      {isHovered && hoverEffect === 'shine' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse pointer-events-none rounded-2xl" />
      )}

      {children}

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animated-card {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
