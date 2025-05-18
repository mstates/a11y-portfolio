'use client';
  
  import { useState, useEffect } from 'react';
  import { useTheme } from 'next-themes';
  import { RadioGroup } from '@headlessui/react';
  import { CheckCircleIcon } from '@heroicons/react/20/solid';
  
  const colorSchemes = [
    { id: 'blue', name: 'Blue', value: '59, 130, 246' },
    { id: 'indigo', name: 'Indigo', value: '99, 102, 241' },
    { id: 'purple', name: 'Purple', value: '139, 92, 246' },
    { id: 'pink', name: 'Pink', value: '236, 72, 153' },
    { id: 'red', name: 'Red', value: '239, 68, 68' },
  ];
  
  export function ColorSchemeSelector() {
    const [mounted, setMounted] = useState(false);
    const [scheme, setScheme] = useState(colorSchemes[0]);
    
    useEffect(() => {
      setMounted(true);
      
      // Load saved scheme
      const savedScheme = localStorage.getItem('color-scheme');
      if (savedScheme) {
        const found = colorSchemes.find(s => s.id === savedScheme);
        if (found) setScheme(found);
      }
    }, []);
    
    useEffect(() => {
      if (!mounted) return;
      
      // Update CSS variable when scheme changes
      document.documentElement.style.setProperty('--color-primary', scheme.value);
      localStorage.setItem('color-scheme', scheme.id);
    }, [scheme, mounted]);
    
    if (!mounted) return null;
    
    return (
      <div className="w-full max-w-md">
        <RadioGroup value={scheme} onChange={setScheme}>
          <RadioGroup.Label className="text-lg font-medium mb-4">Color Scheme</RadioGroup.Label>
          <div className="space-y-2">
            {colorSchemes.map((colorScheme) => (
              <RadioGroup.Option
                key={colorScheme.id}
                value={colorScheme}
                className={({ checked }) => `
                  ${checked ? 'ring-2 ring-offset-2 ring-primary' : ''}
                  relative rounded-lg px-5 py-4 cursor-pointer flex focus:outline-none
                  bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
                `}
              >
                {({ checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div 
                          className="w-6 h-6 rounded-full mr-3" 
                          style={{ backgroundColor: `rgb(${colorScheme.value})` }} 
                        />
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium ${checked ? 'text-primary-600 dark:text-primary-400' : 'text-gray-900 dark:text-gray-100'}`}
                          >
                            {colorScheme.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-primary-600 dark:text-primary-400">
                          <CheckCircleIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    );
  }
