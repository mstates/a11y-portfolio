// src/components/theme/BrandThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import { useBrandTheme } from './BrandThemeProvider';

export default function BrandThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { brand, setBrand } = useBrandTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <RadioGroup 
      value={brand} 
      onChange={setBrand} 
      className="inline-flex rounded-full p-1 bg-gray-100 dark:bg-gray-800"
      aria-label="Choose site theme"
    >
      <RadioGroup.Label className="sr-only">Brand Theme</RadioGroup.Label>
      
      <RadioGroup.Option 
        value="default" 
        className="focus:outline-none"
      >
        {({ checked }) => (
          <span className={`px-3 py-1 text-sm rounded-full cursor-pointer transition-colors ${
            checked 
              ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-indigo-400' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}>
            Default
          </span>
        )}
      </RadioGroup.Option>
      
      <RadioGroup.Option 
        value="airbnb" 
        className="focus:outline-none"
      >
        {({ checked }) => (
          <span className={`px-3 py-1 text-sm rounded-full cursor-pointer transition-colors ${
            checked 
              ? 'bg-white dark:bg-gray-700 shadow-sm text-[#FF5A5F]' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}>
            Airbnb
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}