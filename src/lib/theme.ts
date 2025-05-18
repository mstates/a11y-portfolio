// // src/lib/theme.ts
// export const themeModeAttribute = 'class';
// export const availableThemes = ['light', 'dark', 'system'];

// src/lib/theme.ts
  export type ThemeColors = {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  
  export type Theme = {
    name: string;
    colors: ThemeColors;
  };
  
  export const themes: Record<string, Theme> = {
    light: {
      name: 'Light',
      colors: {
        primary: '59, 130, 246', // blue-500
        secondary: '99, 102, 241', // indigo-500
        accent: '236, 72, 153', // pink-500
        background: '255, 255, 255', // white
        text: '17, 24, 39', // gray-900
      },
    },
    dark: {
      name: 'Dark',
      colors: {
        primary: '96, 165, 250', // blue-400
        secondary: '129, 140, 248', // indigo-400
        accent: '244, 114, 182', // pink-400
        background: '17, 24, 39', // gray-900
        text: '255, 255, 255', // white
      },
    },
  };
