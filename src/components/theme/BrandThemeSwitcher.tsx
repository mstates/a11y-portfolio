// src/components/layout/BrandThemeSwitcher.tsx
'use client';

import { Radio, RadioGroup } from '@headlessui/react';
import { useBrand } from '@/contexts/BrandContext';
import { useState, useEffect } from 'react';

export default function BrandThemeSwitcher() {
  const { brand, setBrand } = useBrand();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const options = [
    { id: 'default', name: 'Default' },
    { id: 'airbnb', name: 'Airbnb' }
  ];

  return (
    <RadioGroup 
      value={brand} 
      onChange={setBrand} 
      aria-label="Target audience"
      className="inline-flex rounded-full p-1 bg-gray-100 dark:bg-gray-800"
    >
      <div className="flex">
        {options.map((option) => (
          <Radio
            key={option.id}
            value={option.id}
            className={({ checked, focus }) => `
              relative rounded-full px-4 py-2 cursor-pointer text-sm transition-colors duration-200
              focus:not-data-focus:outline-none
              ${checked 
                ? option.id === 'airbnb'
                  ? 'bg-white dark:bg-gray-700 text-[#FF5A5F] font-medium shadow-sm border-1' 
                  : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium shadow-sm border-1'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }
              ${focus ? 'outline-2 outline-offset-2 outline-indigo-500 dark:outline-indigo-400 ring-2 ring-offset-2' : ''}
              ${option.id === 'airbnb' && focus ? 'outline-[#FF5A5F]' : ''}
            `}
          >
            {option.name}
          </Radio>
        ))}
      </div>
    </RadioGroup>
  );
}