  'use client';
  
  import { useEffect, useState } from 'react';
  
  export function useAnnouncer() {
    const [message, setMessage] = useState('');
    return { announce: setMessage, message };
  }
  
  export function Announcer({ message }: { message: string }) {
    return (
      <div 
        className="sr-only" 
        role="status" 
        aria-live="polite"
        aria-atomic="true"
      >
        {message}
      </div>
    );
  }
