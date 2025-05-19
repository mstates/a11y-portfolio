// src/components/common/ThemeSwitcher.tsx
'use client';

import { Field, Label, Radio, RadioGroup } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

// Define the theme options
const themes = [
  { id: 'light', name: 'Light', icon: SunIcon },
  { id: 'system', name: 'System', icon: ComputerDesktopIcon },
  { id: 'dark', name: 'Dark', icon: MoonIcon },
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 bg-transparent w-36" aria-hidden="true" />;
  }

  // Default to 'system' if theme is not set
  const currentTheme = theme || 'system';

  return (
    <RadioGroup 
      value={currentTheme} 
      onChange={setTheme} 
      aria-label="Theme preference"
      className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg"
    >
      {themes.map((themeOption) => {
        const Icon = themeOption.icon;
        return (
          <Field key={themeOption.id} className="flex items-center">
            <Radio
              value={themeOption.id}
              className="data-checked:bg-pink-400 data-hover:bg-gray-300 data-checked:shadow-sm
                         data-focus:ring-2 data-focus:ring-indigo-500 data-focus:ring-offset-2 dark:data-focus:ring-offset-gray-800
                         relative w-10 h-10 rounded-md cursor-pointer flex items-center justify-center"
            >
              <Icon 
                className="data-checked:text-white text-black dark:text-white h-5 w-5  data-not-selected:hidden  dark:data-checked:text-pink-400 dark:data-not-checked:text-green-400" 
                aria-hidden="true" 
              />
            </Radio>
            <Label className="sr-only">{themeOption.name}</Label>
          </Field>
        );
      })}
    </RadioGroup>
  );
}