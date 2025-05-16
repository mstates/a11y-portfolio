// src/components/layout/BrandThemeSwitcher.tsx
'use client';

import { useBrand } from '@/contexts/BrandContext';
import { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';

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

  return (
    <RadioGroup 
      value={brand} 
      onChange={setBrand} 
      className="relative inline-flex rounded-lg p-1 bg-gray-100 dark:bg-gray-800"
    >
      <RadioGroup.Label className="sr-only">Brand Theme</RadioGroup.Label>
      
      {/* Default Option */}
      <RadioGroup.Option value="default" className="focus:outline-none z-10">
          {({ checked, active }) => (
            <div
              className={`
                relative px-4 py-2 text-sm rounded-md cursor-pointer transition-all duration-200
                ${checked 
                  ? 'text-indigo-700 dark:text-indigo-300 font-medium' 
                  : 'text-gray-600 dark:text-gray-400'
                }
              `}
            >
              <span className={`relative z-10 ${active ? 'underline' : ''}`}>Default</span>
              
              {/* Background for selected state */}
              {checked && (
                <span 
                  className="absolute inset-0 bg-white dark:bg-gray-700 rounded-md shadow-sm"
                  aria-hidden="true"
                />
              )}
              
              {/* Focus ring */}
              {active && (
                <span 
                  className="absolute -inset-1 rounded-lg ring-2 ring-indigo-500 dark:ring-indigo-400"
                  aria-hidden="true"
                />
              )}
            </div>
          )}
        </RadioGroup.Option>

      
      {/* Airbnb Option */}
      <RadioGroup.Option value="airbnb" className="focus:outline-none z-10">
          {({ checked, active }) => (
            <div
              className={`
                relative px-4 py-2 text-sm rounded-md cursor-pointer transition-all duration-200
                ${checked 
                  ? 'text-[#FF5A5F] font-medium' 
                  : 'text-gray-600 dark:text-gray-400'
                }
              `}
            >
              <span className={`relative z-10 ${active ? 'underline' : ''}`}>Airbnb</span>
              
              {/* Background for selected state */}
              {checked && (
                <span 
                  className="absolute inset-0 bg-white dark:bg-gray-700 rounded-md shadow-sm"
                  aria-hidden="true"
                />
              )}
              
              {/* Focus ring */}
              {active && (
                <span 
                  className="absolute -inset-1 rounded-lg ring-2 ring-[#FF5A5F]"
                  aria-hidden="true"
                />
              )}
            </div>
          )}
        </RadioGroup.Option>

      
      {/* Active Background Pill - Optional for more sophisticated animation */}
      <span 
        className={`
          absolute inset-0 pointer-events-none transition-all duration-200 ease-in-out
          ${brand === 'default' ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-hidden="true"
      >
        <span className="h-full w-1/2 rounded-full bg-white dark:bg-gray-700 shadow-sm opacity-0"/>
      </span>
    </RadioGroup>
  );
}
