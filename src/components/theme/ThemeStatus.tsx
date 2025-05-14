// src/components/theme/ThemeStatus.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeStatus() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-md text-xs z-50 border border-gray-200 dark:border-gray-700">
      <div>Theme: {theme}</div>
      <div>Resolved: {resolvedTheme}</div>
      <div>Dark class: {document.documentElement.classList.contains('dark') ? 'Yes' : 'No'}</div>
    </div>
  );
}
