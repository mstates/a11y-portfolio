  'use client';
  
  import { useRef, useEffect } from 'react';
  
  export function useFocus<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    
    const focus = () => {
      if (ref.current) {
        ref.current.focus();
      }
    };
    
    return { ref, focus };
  }
