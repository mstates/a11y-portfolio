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
      className="inline-flex rounded-full p-2 bg-gray-100 dark:bg-gray-800"
    >
      <div className="relative inline-grid grid-cols-2 gap-2">
        {options.map((option) => (
          <Radio
            key={option.id}
            value={option.id}
            className={({ checked }) => `
              relative font-medium rounded-full px-4 py-2 cursor-pointer text-sm transition-colors duration-200
              outline-2 outline-transparent focus:outline-black focus:ring-2 focus:ring-offset-4
              ${checked 
                ? option.id === 'airbnb'
                  ? 'bg-white dark:bg-gray-700 text-[var(--airbnb-dark-red)] border-gray-900 shadow-sm' 
                  : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }
              ${option.id === 'airbnb' ? 'dark:text-white focus:ring-gray-900' : 'focus:ring-gray-900'}
            `}
          >
            {option.name}
          </Radio>
        ))}
      </div>
    </RadioGroup>
  );
}
