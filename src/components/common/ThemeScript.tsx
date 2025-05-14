// src/components/common/ThemeScript.tsx
import { ScriptProps } from 'next/script';

// Create a separate file for the script content
export function ThemeScript() {
  // This will be included in the <head> of your document
  return (
    <>
      {/* Put this script in public/scripts/theme.js */}
      <script
        id="theme-script"
        strategy="beforeInteractive"
        src="/scripts/theme.js"
      />
    </>
  );
}
