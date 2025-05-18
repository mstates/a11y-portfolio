'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

type ThemeVariant = 'default' | 'airbnb';

interface ThemeContextType {
  themeVariant: ThemeVariant;
  setThemeVariant: (variant: ThemeVariant) => void;
  isAirbnbVariant: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useNextTheme();
  const [themeVariant, setThemeVariant] = useState<ThemeVariant>('default');
  const [mounted, setMounted] = useState(false);

  // Update next-themes when our variant changes
  useEffect(() => {
    // This could add custom theme logic if needed
    if (themeVariant === 'airbnb') {
      // Set specific theme colors for Airbnb
      document.documentElement.classList.add('theme-airbnb');
    } else {
      document.documentElement.classList.remove('theme-airbnb');
    }
  }, [themeVariant]);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider 
      value={{ 
        themeVariant, 
        setThemeVariant,
        isAirbnbVariant: themeVariant === 'airbnb'
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
