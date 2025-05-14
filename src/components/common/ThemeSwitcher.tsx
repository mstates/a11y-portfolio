// src/components/common/ThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Radio, RadioGroup, Label } from '@headlessui/react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const themes = [
  { id: 'light', name: 'Light', icon: SunIcon },
  { id: 'system', name: 'System', icon: ComputerDesktopIcon },
  { id: 'dark', name: 'Dark', icon: MoonIcon },
];

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Find the current theme object
  const currentTheme = themes.find(t => t.id === theme) || themes[0];

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 bg-transparent w-36" aria-hidden="true" />;
  }

  return (
    <RadioGroup value={currentTheme} onChange={(option) => setTheme(option.id)}>
      <Label className="sr-only">Theme</Label>
      <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
        {themes.map((option) => {
          const Icon = option.icon;
          return (
            <Radio
              key={option.id}
              value={option}
              className={({ checked }) => `
                ${checked ? 'bg-indigo-600 dark:bg-indigo-300 shadow-sm' : ''}
                relative rounded-md cursor-pointer p-2 flex items-center justify-center
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
              `}
            >
              {({ checked }) => (
                <>
                  <Icon 
                    className={`h-5 w-5 ${
                      checked 
                        ? 'text-white dark:text-indigo-900' 
                        : 'text-gray-500 dark:text-gray-200'
                    }`} 
                    aria-hidden="true" 
                  />
                  <span className="sr-only">{option.name}</span>
                </>
              )}
            </Radio>
          );
        })}
      </div>
    </RadioGroup>
  );
}
