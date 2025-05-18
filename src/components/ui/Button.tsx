// src/components/ui/Button.tsx
import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'primary-airbnb' | 'secondary';
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  isAirbnb?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  ariaLabel,
  isAirbnb = false,
}: ButtonProps) {
  // Determine button variant
  const buttonVariant = variant === 'primary' && isAirbnb ? 'primary-airbnb' : variant;
  
  // Common button classes
  const buttonClasses = `btn btn-${buttonVariant} ${className}`;
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  );
}