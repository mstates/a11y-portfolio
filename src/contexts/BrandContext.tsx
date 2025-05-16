// src/contexts/BrandContext.tsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type BrandTheme = 'default' | 'airbnb';

interface BrandContextType {
  brand: BrandTheme;
  setBrand: (brand: BrandTheme) => void;
  isAirbnb: boolean;
}

const BrandContext = createContext<BrandContextType>({
  brand: 'default',
  setBrand: () => {},
  isAirbnb: false
});


export function BrandProvider({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState<BrandTheme>('default');

  return (
    <BrandContext.Provider 
      value={{ 
        brand, 
        setBrand,
        isAirbnb: brand === 'airbnb'
      }}
    >
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}

