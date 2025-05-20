// src/components/test/RadioTest.tsx
'use client';

import { useState } from 'react';
import { Field, Label, Radio, RadioGroup } from '@headlessui/react';

export default function RadioTest() {
  const [plan, setPlan] = useState('startup');

  return (
    <div className="p-6 border rounded-lg my-4">
      <h2 className="text-xl font-bold mb-6">Radio Test</h2>
      
      <RadioGroup value={plan} onChange={setPlan} className="space-y-3">
        <RadioGroup.Label className="text-base font-medium">Select a plan</RadioGroup.Label>
        
        <Field className="flex items-center gap-2">
          <Radio 
            value="startup"
            className="h-5 w-5 rounded-full border border-gray-300 
             [&[data-checked]]:bg-blue-500 [&[data-checked]]:border-blue-500"
          />
          <Label>Startup</Label>
        </Field>
        
        <Field className="flex items-center gap-2">
          <Radio 
            value="business"
            className="h-5 w-5 rounded-full border border-gray-300 
                       ui-checked:bg-blue-500 ui-checked:border-blue-500"
          />
          <Label>Business</Label>
        </Field>
        
        <Field className="flex items-center gap-2">
          <Radio 
            value="enterprise"
            className="h-5 w-5 rounded-full border border-gray-300 
                       ui-checked:bg-blue-500 ui-checked:border-blue-500"
          />
          <Label>Enterprise</Label>
        </Field>
      </RadioGroup>
      
      <div className="mt-4">
        Selected plan: <span className="font-semibold">{plan}</span>
      </div>
    </div>
  );
}