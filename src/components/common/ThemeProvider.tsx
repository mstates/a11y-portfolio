// src/components/theme/ThemeProvider.tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';
import { themeModeAttribute } from '@/lib/theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute={themeModeAttribute}
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
