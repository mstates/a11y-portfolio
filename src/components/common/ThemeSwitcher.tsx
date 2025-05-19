// src/components/common/ThemeSwitcher.tsx
'use client';

import { Field, Label, Radio, RadioGroup } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

// Define the theme options
const themes = [
  { id: 'system', name: 'System', icon: ComputerDesktopIcon },
  { id: 'light', name: 'Light', icon: SunIcon },
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
      className="relative inline-grid grid-cols-3 gap-4 rounded-full bg-gray-950/8 dark:bg-white/10 dark:text-white p-1"
    >
      {themes.map((themeOption) => {
        const Icon = themeOption.icon;
        return (
          <Field key={themeOption.id} className="flex items-center">
            <Radio
              value={themeOption.id}
              className="*:size-6 rounded-full outline-transparent data-focus:dark:bg-white outline-2 outline-offset-1 data-focus:dark:outline-white data-checked:outline-gray-900 data-checked:bg-white data-focus:ring-2 data-checked:ring-offset-4 sm:p-0 dark:data-checked:text-black dark:data-focus:ring-pink-500"
            >
              <Icon 
                className="inset" 
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