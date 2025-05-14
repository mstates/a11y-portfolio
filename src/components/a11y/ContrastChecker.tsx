  'use client';
  
  import { useState } from 'react';
  
  function calculateContrast(color1: string, color2: string) {
    // Convert hex to RGB and calculate WCAG contrast ratio
    // Implementation omitted for brevity
    return 4.5; // Placeholder
  }
  
  export function ContrastChecker() {
    const [foreground, setForeground] = useState('#000000');
    const [background, setBackground] = useState('#FFFFFF');
    const contrast = calculateContrast(foreground, background);
    
    return (
      <div className="p-4 border rounded-lg">
        <h2 className="text-lg font-bold">Contrast Checker</h2>
        <div className="flex space-x-4 my-4">
          <div>
            <label htmlFor="foreground" className="block mb-2">Foreground</label>
            <input 
              id="foreground"
              type="color" 
              value={foreground} 
              onChange={(e) => setForeground(e.target.value)}
              className="h-10 w-20"
            />
          </div>
          <div>
            <label htmlFor="background" className="block mb-2">Background</label>
            <input 
              id="background"
              type="color" 
              value={background} 
              onChange={(e) => setBackground(e.target.value)}
              className="h-10 w-20"
            />
          </div>
        </div>
        <div 
          className="p-4 my-4 rounded" 
          style={{ backgroundColor: background, color: foreground }}
        >
          Sample Text
        </div>
        <div className="mt-4">
          <p>Contrast Ratio: {contrast.toFixed(2)}:1</p>
          <p>
            {contrast >= 4.5 ? '✅ WCAG AA Passed' : '❌ WCAG AA Failed'} 
            {contrast >= 7 ? ' ✅ WCAG AAA Passed' : ' ❌ WCAG AAA Failed'}
          </p>
        </div>
      </div>
    );
  }
