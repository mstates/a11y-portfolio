  'use client';
  
  import { useRef, useEffect } from 'react';
  
  export function useRipple() {
    const ref = useRef<HTMLElement>(null);
    
    useEffect(() => {
      const element = ref.current;
      if (!element) return;
      
      const handleClick = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.top = `${y}px`;
        ripple.style.left = `${x}px`;
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.background = 'rgba(255, 255, 255, 0.4)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.transition = 'all 0.6s ease-out';
        
        element.appendChild(ripple);
        
        setTimeout(() => {
          ripple.style.width = '200px';
          ripple.style.height = '200px';
          ripple.style.transform = 'translate(-50%, -50%) scale(1)';
          ripple.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      };
      
      element.addEventListener('click', handleClick);
      
      return () => {
        element.removeEventListener('click', handleClick);
      };
    }, []);
    
    return ref;
  }