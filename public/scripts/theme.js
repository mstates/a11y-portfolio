// public/scripts/theme.js
(() => {
  try {
    // Check for theme value in localStorage
    const storedTheme = localStorage.getItem('theme');
    
    // If the user has explicitly selected a theme, use that
    if (storedTheme === 'dark' || storedTheme === 'light') {
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
      return;
    }
    
    // Otherwise, check system preference
    if (storedTheme === 'system' || !storedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
      
      // Optional: Set up listener for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
        // Only update if theme is set to 'system'
        if (localStorage.getItem('theme') === 'system') {
          document.documentElement.classList.toggle('dark', matches);
        }
      });
    }
  } catch (err) {
    console.error('Theme initialization error:', err);
  }
})();
