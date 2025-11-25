import { useEffect, useState, useRef } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  delayBetweenLoops?: number;
  className?: string;
}

export default function TypeWriter({
  text,
  speed = 80,
  delayBetweenLoops = 2000,
  className = ''
}: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTypeAnimation = () => {
      if (!isDeleting) {
        if (displayedText.length < text.length) {
          const nextChar = text[displayedText.length];
          setDisplayedText((prev) => prev + nextChar);
          timerRef.current = setTimeout(handleTypeAnimation, speed);
        } else {
          timerRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenLoops);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          timerRef.current = setTimeout(handleTypeAnimation, speed / 2);
        } else {
          setIsDeleting(false);
          timerRef.current = setTimeout(handleTypeAnimation, 500);
        }
      }
    };

    timerRef.current = setTimeout(handleTypeAnimation, speed);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [displayedText, isDeleting, text, speed, delayBetweenLoops]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
