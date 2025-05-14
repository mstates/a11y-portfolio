// src/components/common/ThemeSwitcher.test.tsx
  import { render, screen, fireEvent } from '@testing-library/react';
  import { ThemeProvider } from 'next-themes';
  import { ThemeSwitcher } from './ThemeSwitcher';
  
  // Mock useTheme
  jest.mock('next-themes', () => ({
    useTheme: () => ({
      theme: 'light',
      setTheme: jest.fn(),
    }),
  }));
  
  describe('ThemeSwitcher', () => {
    it('renders correctly', () => {
      render(
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      );
      
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
    
    it('shows options when clicked', () => {
      render(
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      );
      
      fireEvent.click(screen.getByRole('listbox'));
      expect(screen.getByText('Dark')).toBeVisible();
      expect(screen.getByText('System')).toBeVisible();
      expect(screen.getByText('Light')).toBeVisible();
    });
  });
