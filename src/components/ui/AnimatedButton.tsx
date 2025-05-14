// src/components/ui/AnimatedButton.tsx
  'use client';
  
  import { ButtonHTMLAttributes, forwardRef } from 'react';
  import { motion } from 'framer-motion';
  
  interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
  }
  
  export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    ({ children, className, variant = 'primary', ...props }, ref) => {
      const baseClasses = "px-4 py-2 rounded-lg font-medium";
      const variantClasses = {
        primary: "bg-primary-600 text-white hover:bg-primary-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        outline: "border border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-gray-800",
      };

      return (
        <motion.button
          ref={ref}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`${baseClasses} ${variantClasses[variant]} ${className}`}
          {...props}
        >
          {children}
        </motion.button>
      );
    }
  );
