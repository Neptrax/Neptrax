import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from './FramerMotion';

interface HeroAnimationsProps {
  isMobile: boolean;
}

export default function HeroAnimations({ isMobile }: HeroAnimationsProps) {
  const { scrollYProgress } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(!isMobile);

  useEffect(() => {
    setIsDesktop(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setMousePosition({ x: x * 0.1, y: y * 0.1 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 opacity-100 overflow-hidden"
      style={{
        transform: isDesktop
          ? `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          : 'none',
      }}
    >
      <div className="absolute inset-0">
        <style>{`
          @keyframes gradient-orb-rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateZ(0); }
            50% { transform: translateY(-30px) translateZ(0); }
          }

          @keyframes float-slower {
            0%, 100% { transform: translateY(0px) translateZ(0); }
            50% { transform: translateY(-50px) translateZ(0); }
          }

          @keyframes shimmer-glow {
            0% { filter: blur(40px) opacity(0.4); }
            50% { filter: blur(80px) opacity(0.6); }
            100% { filter: blur(40px) opacity(0.4); }
          }

          .gradient-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            animation: gradient-orb-rotate 20s linear infinite, shimmer-glow 6s ease-in-out infinite;
            will-change: transform, filter;
          }

          .gradient-orb-1 {
            width: 500px;
            height: 500px;
            top: -200px;
            right: -100px;
            background: conic-gradient(
              from 0deg,
              #2563eb,
              #1e40af,
              #3b82f6,
              #60a5fa,
              #93c5fd,
              #2563eb
            );
            opacity: 0.25;
            animation: float-slow 8s ease-in-out infinite, gradient-orb-rotate 15s linear infinite;
          }

          .gradient-orb-2 {
            width: 600px;
            height: 600px;
            bottom: -300px;
            left: -150px;
            background: conic-gradient(
              from 180deg,
              #1e3a8a,
              #1e40af,
              #2563eb,
              #3b82f6,
              #1e3a8a
            );
            opacity: 0.2;
            animation: float-slower 12s ease-in-out infinite, gradient-orb-rotate 25s linear infinite reverse;
          }

          .gradient-orb-3 {
            width: 400px;
            height: 400px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: conic-gradient(
              from -90deg,
              #0f172a,
              #1e3a8a,
              #2563eb,
              #0f172a
            );
            opacity: 0.15;
            animation: float-slow 10s ease-in-out infinite, gradient-orb-rotate 30s linear infinite;
          }

          .parallax-layer {
            position: absolute;
            will-change: transform;
          }

          .parallax-layer-1 {
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(15, 23, 42, 0.8),
              rgba(30, 58, 138, 0.6)
            );
            opacity: 0.3;
          }

          .parallax-layer-2 {
            inset: 0;
            background: radial-gradient(
              circle at 20% 80%,
              rgba(37, 99, 235, 0.1),
              transparent 50%
            );
            opacity: 0.4;
          }

          @media (prefers-reduced-motion: reduce) {
            .gradient-orb {
              animation: none;
              filter: blur(60px) opacity(0.3);
            }
          }
        `}</style>

        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>

        <div className="parallax-layer parallax-layer-1"></div>
        <div className="parallax-layer parallax-layer-2"></div>
      </div>
    </div>
  );
}
