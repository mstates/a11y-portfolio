// src/components/theme/BrandThemeProvider.tsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Define the possible brand themes
type BrandTheme = 'default' | 'airbnb';

// Type for the brand theme context
type BrandThemeContextType = {
  brandTheme: BrandTheme;
  setBrandTheme: (theme: BrandTheme) => void;
};

// Create the context
const BrandThemeContext = createContext<BrandThemeContextType | undefined>(undefined);

// Props for the BrandThemeProvider
interface BrandThemeProviderProps {
  children: ReactNode;
  defaultBrandTheme?: BrandTheme;
}

export function BrandThemeProvider({
  children,
  defaultBrandTheme = 'default',
}: BrandThemeProviderProps) {
  // State for the brand theme (default or airbnb)
  const [brandTheme, setBrandTheme] = useState<BrandTheme>(defaultBrandTheme);
  const [mounted, setMounted] = useState(false);

  // Effect to handle mounting and loading saved preferences
  useEffect(() => {
    setMounted(true);
    
    // Load saved brand theme from localStorage
    const savedBrandTheme = localStorage.getItem('brandTheme') as BrandTheme;
    if (savedBrandTheme && (savedBrandTheme === 'default' || savedBrandTheme === 'airbnb')) {
      setBrandTheme(savedBrandTheme);
    }
  }, []);

  // Effect to apply the brand theme and save preferences
  useEffect(() => {
    if (!mounted) return;
    
    // Apply the brand theme by adding/removing classes from the document element
    document.documentElement.classList.remove('theme-default', 'theme-airbnb');
    document.documentElement.classList.add(`theme-${brandTheme}`);
    
    // Save to localStorage
    localStorage.setItem('brandTheme', brandTheme);
  }, [brandTheme, mounted]);

  // Value to be provided by the context
  const value = {
    brandTheme,
    setBrandTheme,
  };

  return (
    <BrandThemeContext.Provider value={value}>
      {children}
    </BrandThemeContext.Provider>
  );
}

// Custom hook to use the brand theme context
export function useBrandTheme() {
  const context = useContext(BrandThemeContext);
  if (context === undefined) {
    throw new Error('useBrandTheme must be used within a BrandThemeProvider');
  }
  return context;
}
