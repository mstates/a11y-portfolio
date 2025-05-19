// src/components/test/HeadlessTest.tsx
'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function HeadlessTest() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="p-6 border rounded-lg my-4">
<div className="bg-red-500 p-4 text-white mb-4 rounded">
  This should be a red box with white text if Tailwind is working.
</div>      <h2 className="text-xl font-bold mb-6">Headless UI Test</h2>
      
      <div className="flex items-center">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="bg-gray-200 ui-checked:bg-blue-600 relative inline-flex h-6 w-11 items-center rounded-full"
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className="translate-x-1 ui-checked:translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"
          />
        </Switch>
        <span className="ml-3">
          Switch is {enabled ? 'on' : 'off'}
        </span>
      </div>
    </div>
  );
}