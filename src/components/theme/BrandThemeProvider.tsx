// src/components/theme/BrandThemeProvider.tsx
'use client';

import { createContext, useContext, useState, useEffect, } from 'react';
import type { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';

// Define the type for our brand theme
type BrandTheme = 'default' | 'airbnb';

// Define the shape of our context
interface BrandThemeContextType {
  brand: BrandTheme;
  setBrand: (brand: BrandTheme) => void;
  isAirbnb: boolean;
}

// Create the context with a default value
const BrandThemeContext = createContext<BrandThemeContextType | undefined>(undefined);

// Provider component
export function BrandThemeProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const initialBrand = searchParams.get('for') === 'airbnb' ? 'airbnb' : 'default';
  
  const [brand, setBrand] = useState<BrandTheme>(initialBrand);

  // Update URL when brand changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      
      if (brand === 'airbnb') {
        url.searchParams.set('for', 'airbnb');
      } else {
        url.searchParams.delete('for');
      }
      
      window.history.replaceState({}, '', url.toString());
    }
  }, [brand]);

  // Computed value for easier use in components
  const isAirbnb = brand === 'airbnb';

  // Value to be provided to consuming components
  const value = {
    brand,
    setBrand,
    isAirbnb
  };

  return (
    <BrandThemeContext.Provider value={value}>
      {children}
    </BrandThemeContext.Provider>
  );
}

// Custom hook to use the context
export function useBrandTheme() {
  const context = useContext(BrandThemeContext);
  if (context === undefined) {
    throw new Error('useBrandTheme must be used within a BrandThemeProvider');
  }
  return context;
}