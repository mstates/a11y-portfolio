// src/components/theme/ThemeScript.tsx
export default function ThemeScript() {
  // This script will run before React hydration to prevent flash of wrong theme
  const themeScript = `
    (function() {
      function getThemePreference() {
        if (localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      const theme = getThemePreference();
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  // Using next/script with "beforeInteractive" strategy would be better
  // but for simplicity, we'll use a standard script tag
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      // add this key to prevent Next.js warning about static generation
      id="theme-script" 
    />
  );
}
