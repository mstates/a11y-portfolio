// src/components/common/ThemeScript.tsx
import Script from 'next/script';

export function ThemeScript() {
  return (
    <Script
      id="theme-script"
      strategy="afterInteractive"
      src="/scripts/theme.js"
    />
  );
}
