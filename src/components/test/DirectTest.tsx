// src/components/test/DirectTest.tsx
'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function DirectTest() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="p-6 border rounded-lg my-4">
      <h2 className="text-xl font-bold mb-6">Direct Attribute Test</h2>
      
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="relative inline-flex h-6 w-11 items-center rounded-full 
                   bg-gray-200 
                   [&[data-checked]]:bg-blue-600 
                   [&[data-focus]]:ring-2 
                   [&[data-focus]]:ring-blue-500"
      >
        <span className="sr-only">Enable feature</span>
        <span
          className="inline-block h-4 w-4 transform rounded-full bg-white transition
                     translate-x-1 
                     [.ui-checked_&]:translate-x-6"
        />
      </Switch>
      <span className="ml-3">
        Switch is {enabled ? 'on' : 'off'}
      </span>
    </div>
  );
}