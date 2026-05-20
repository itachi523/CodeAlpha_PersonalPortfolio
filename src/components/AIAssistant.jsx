import React, { useState, useEffect } from 'react';

const AIAssistant = ({ message }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    setDisplayText('');
    if (!message) return;
    
    const interval = setInterval(() => {
      if (i < message.length) {
        setDisplayText(prev => prev + message.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [message]);

  if (!message) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
      <div className="hud-border px-6 py-3 bg-hud-dark/80 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-hud-cyan animate-ping" />
        <p className="font-orbitron text-hud-cyan text-sm md:text-base text-shadow-neon tracking-widest whitespace-nowrap">
          {displayText}
        </p>
      </div>
    </div>
  );
};

export default AIAssistant;
