import { ButtonHTMLAttributes, ReactNode, useRef } from 'react';

interface EnhancedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function EnhancedButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}: EnhancedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = buttonRef.current;
    if (!btn) return;

    // Create ripple effect
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)';
    ripple.style.pointerEvents = 'none';
    ripple.style.transform = 'translate(-50%, -50%)';

    btn.appendChild(ripple);

    // Animate ripple
    const animation = ripple.animate(
      [
        { width: '0px', height: '0px', opacity: 1 },
        { width: '500px', height: '500px', opacity: 0 }
      ],
      {
        duration: 600,
        easing: 'ease-out'
      }
    );

    animation.onfinish = () => ripple.remove();

    onClick?.(e);
  };

  const baseStyles =
    'relative overflow-hidden transition-all duration-300 font-medium rounded-full';

  const variantStyles = {
    primary: 'btn-magnetic bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]',
    secondary: 'border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/10 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]',
    ghost: 'text-[#f1f5f9] hover:bg-white/10 border border-white/20'
  };

  const sizeStyles = {
    sm: 'px-4 sm:px-6 py-2 sm:py-2.5 text-sm',
    md: 'px-6 sm:px-8 py-3 sm:py-4 text-base',
    lg: 'px-8 sm:px-12 py-4 sm:py-5 text-lg'
  };

  return (
    <button
      ref={buttonRef}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
