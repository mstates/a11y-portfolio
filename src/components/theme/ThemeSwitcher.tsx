// src/components/theme/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const themes = [
  { id: 'light', name: 'Light', icon: SunIcon },
  { id: 'system', name: 'System', icon: ComputerDesktopIcon },
  { id: 'dark', name: 'Dark', icon: MoonIcon },
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Get the current theme id
  const currentThemeId = theme || 'system';

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <RadioGroup value={currentThemeId} onChange={setTheme} className="flex space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
        <RadioGroup.Label className="sr-only">Choose a theme</RadioGroup.Label>
        
        {themes.map((themeOption) => (
          <RadioGroup.Option
            key={themeOption.id}
            value={themeOption.id}
            className={({ checked }) => `
              relative rounded-full p-2 flex items-center justify-center
              cursor-pointer focus:outline-none
              ${checked 
                ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' 
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }
            `}
          >
            {({ checked }) => (
              <>
                <themeOption.icon 
                  className={`h-5 w-5 ${checked ? 'text-primary' : ''}`} 
                  aria-hidden="true" 
                />
                <span className="sr-only">{themeOption.name}</span>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
}
