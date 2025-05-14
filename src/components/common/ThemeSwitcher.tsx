// src/components/common/ThemeSwitcher.tsx
'use client';

import { Fragment, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { availableThemes } from '@/lib/theme';

const themeOptions = [
  { id: 'light', name: 'Light', icon: SunIcon },
  { id: 'system', name: 'System', icon: ComputerDesktopIcon },
  { id: 'dark', name: 'Dark', icon: MoonIcon },
];

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Find the current theme object
  const selectedTheme = themeOptions.find(t => t.id === theme) || themeOptions[1];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return empty div with same dimensions to prevent layout shift
    return <div className="h-10 w-32" aria-hidden="true" />;
  }

  return (
    <Listbox value={selectedTheme} onChange={(option) => setTheme(option.id)}>
      <div className="relative w-32">
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 text-sm">
          <span className="flex items-center">
            <selectedTheme.icon className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" aria-hidden="true" />
            <span className="truncate">{selectedTheme.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
            {themeOptions.map((option) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) => `
                  ${active ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100' : 'text-gray-900 dark:text-gray-100'}
                  cursor-pointer select-none relative py-2 pl-10 pr-4
                `}
                value={option}
              >
                {({ selected, active }) => (
                  <>
                    <span className="flex items-center truncate">
                      <option.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                      {option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600 dark:text-indigo-400">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
