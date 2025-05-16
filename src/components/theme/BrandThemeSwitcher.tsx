// src/components/layout/BrandThemeSwitcher.tsx
'use client';

import { useBrand } from '@/contexts/BrandContext';
import { useState, useEffect } from 'react';
import { RadioGroup, Radio, Label } from '@headlessui/react';

export default function BrandThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { brand, setBrand } = useBrand();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <RadioGroup value={brand} onChange={setBrand} className="flex rounded-full p-1 bg-gray-100 dark:bg-gray-800">
      <Label className="sr-only">Brand Theme</Label>
      <div className="relative inline-flex p-1 rounded-full bg-gray-100 dark:bg-gray-700">
      <Radio value="default">
        {({ checked }) => (
          <span 
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
              checked 
                ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
            }`}
          >
            Default
          </span>
        )}
      </Radio>
      <Radio value="airbnb">
        {({ checked }) => (
          <span 
            className={`px-3 py-1 text-sm rounded-full cursor-pointer ${
              checked 
                ? 'bg-[#FF5A5F] text-white shadow-sm' 
                : 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm'
            }`}
          >
            Airbnb
          </span>
        )}
      </Radio>
      </div>
    </RadioGroup>
  );
}
