import { useRef, useEffect, useState } from 'react';
import { useInView } from './FramerMotion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 600,
  className = '',
  decimals = 0
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Linear progression
      const currentValue = startValue + (target - startValue) * progress;
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, target, duration]);

  const formatNumber = (num: number) => {
    return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
  };

  return (
    <div ref={ref} className={className}>
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </div>
  );
}
