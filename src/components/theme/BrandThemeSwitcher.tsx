// src/components/theme/BrandThemeSwitcher.tsx
'use client';

import { useBrandTheme } from './BrandThemeProvider';
import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/solid';

// Define the themes for the radio group
const themes = [
  { id: 'default', name: 'Default' },
  { id: 'airbnb', name: 'Airbnb' }
];

export default function BrandThemeSwitcher() {
  const { brandTheme, setBrandTheme } = useBrandTheme();

  return (
    <RadioGroup value={brandTheme} onChange={(value) => setBrandTheme(value as 'default' | 'airbnb')} className="flex">
      <RadioGroup.Label className="sr-only">Brand Theme</RadioGroup.Label>
      <div className="relative inline-flex p-1 rounded-full bg-gray-100 dark:bg-gray-700">
        {themes.map((theme) => (
          <RadioGroup.Option
            key={theme.id}
            value={theme.id}
            className={({ checked }) => `
              relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer
              ${theme.id === 'airbnb' && checked ? 'bg-[#FF5A5F] text-white shadow-sm' : ''}
              ${theme.id === 'default' && checked ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm' : ''}
              ${!checked ? 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white' : ''}
            `}
          >
            {({ checked }) => (
              <div className="flex items-center">
                <span>{theme.name}</span>
                {checked && theme.id === 'airbnb' && (
                  <CheckIcon className="w-4 h-4 ml-1" aria-hidden="true" />
                )}
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}