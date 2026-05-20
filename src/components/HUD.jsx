import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProfileCard from './ProfileCard';
import Radar from './Radar';
import ProjectPanels from './ProjectPanels';
import { ShieldAlert, Crosshair, Hexagon } from 'lucide-react';

const HUD = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // HUD Entry Animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen p-4 md:p-8 flex flex-col z-10 pointer-events-auto">
      
      {/* Top Header Bar */}
      <header className="flex justify-between items-center mb-8 border-b border-hud-cyan/30 pb-4">
        <div className="flex items-center gap-2">
          <Hexagon className="w-8 h-8 text-hud-cyan animate-[spin_10s_linear_infinite]" />
          <div className="font-orbitron">
            <h2 className="text-xl font-bold tracking-[0.2em] text-shadow-neon">J.A.R.V.I.S</h2>
            <p className="text-xs text-hud-cyan/60 tracking-widest">OS v10.4.2</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right hidden md:block">
            <p className="font-mono text-sm text-hud-cyan/80">LAT: 17.3850° N</p>
            <p className="font-mono text-sm text-hud-cyan/80">LNG: 78.4867° E</p>
          </div>
          <div className="h-10 w-[1px] bg-hud-cyan/30 hidden md:block" />
          <div className="flex gap-4">
            <ShieldAlert className="w-6 h-6 text-yellow-400 animate-pulse" />
            <Crosshair className="w-6 h-6 text-hud-cyan animate-[spin_4s_linear_infinite]" />
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        
        {/* Left Panel - Profile & Stats */}
        <div className="lg:col-span-3 space-y-6">
          <ProfileCard />
        </div>

        {/* Center Panel - Radar / 3D Element Space */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center min-h-[50vh] lg:min-h-[70vh] relative">
          <Radar />
          
          {/* Bottom center targeting brackets */}
          <div className="absolute bottom-0 w-64 flex justify-between px-4 opacity-50">
            <div className="w-4 h-4 border-b-2 border-l-2 border-hud-cyan" />
            <div className="w-4 h-4 border-b-2 border-r-2 border-hud-cyan" />
          </div>
        </div>

        {/* Right Panel - Projects & DB */}
        <div className="lg:col-span-3 space-y-6">
          <ProjectPanels />
        </div>
        
      </main>

      {/* Footer / Status Bar */}
      <footer className="mt-8 pt-4 border-t border-hud-cyan/30 flex justify-between items-center text-xs font-mono text-hud-cyan/60">
        <div className="flex gap-4">
          <span className="animate-pulse">NET: SECURE</span>
          <span>MEM: 64TB OVERRIDE</span>
        </div>
        <div>
          <span>POWER: 100% (ARC REACTOR)</span>
        </div>
      </footer>
    </div>
  );
};

export default HUD;
