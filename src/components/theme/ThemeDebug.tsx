// src/components/theme/ThemeDebug.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeDebug() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-lg shadow-lg z-50 text-xs border border-slate-200 dark:border-slate-700">
      <h3 className="font-bold mb-2">Theme Debug</h3>
      <div className="space-y-1">
        <p>Selected: <span className="font-mono">{theme}</span></p>
        <p>Resolved: <span className="font-mono">{resolvedTheme}</span></p>
        <p>System: <span className="font-mono">{systemTheme}</span></p>
        <p>Dark class: <span className="font-mono">{document.documentElement.classList.contains('dark') ? 'Yes' : 'No'}</span></p>
        <p>Color scheme: <span className="font-mono">{document.documentElement.style.colorScheme || 'Not set'}</span></p>
      </div>
      <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
        <p className="font-bold">Test elements:</p>
        <div className="mt-1 flex items-center space-x-2">
          <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600"/>
          <span>bg-slate-300 dark:bg-slate-600</span>
        </div>
        <div className="mt-1 flex items-center space-x-2">
          <div className="w-4 h-4 bg-primary"/>
          <span>bg-primary</span>
        </div>
      </div>
    </div>
  );
}
