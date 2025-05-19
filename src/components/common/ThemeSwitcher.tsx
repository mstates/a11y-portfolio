// src/components/common/ThemeSwitcher.tsx
'use client';

import { Field, Radio, RadioGroup } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

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
    return <div className="h-10 w-36 bg-transparent" aria-hidden="true" />;
  }

  const currentTheme = theme || 'system';
  
  return (
    <RadioGroup 
      value={currentTheme} 
      onChange={setTheme} 
      aria-label="Theme preference"
      className="theme-switcher"
    >
      {themes.map((themeOption) => {
        const Icon = themeOption.icon;
        return (
          <Field key={themeOption.id} className="theme-option">
            <Radio
              value={themeOption.id}
              className="theme-radio"
            >
              <Icon 
                className="theme-icon" 
                aria-hidden="true" 
              />
            </Radio>
            <span className="sr-only">{themeOption.name}</span>
          </Field>
        );
      })}
    </RadioGroup>
  );
}