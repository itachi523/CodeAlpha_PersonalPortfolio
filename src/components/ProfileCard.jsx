import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { User, MapPin, Mail, Cpu, Activity, Fingerprint } from 'lucide-react';

const ProfileCard = () => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: -50, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.8 }
    );
  }, []);

  return (
    <div ref={cardRef} className="flex flex-col gap-6">
      <div className="hud-border p-6 relative overflow-hidden group">
        {/* Scanning Effect Overlay */}
        <div className="absolute top-0 left-0 w-full h-1 bg-hud-cyan/40 box-shadow-neon animate-[scan_3s_linear_infinite]" />
        
        <div className="flex items-center gap-4 mb-6 border-b border-hud-cyan/30 pb-4">
          <div className="w-16 h-16 rounded-full border-2 border-hud-cyan p-1 relative flex items-center justify-center bg-hud-cyan/10 box-shadow-neon">
            <User className="w-8 h-8 text-hud-cyan" />
            <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-hud-cyan animate-[spin_3s_linear_infinite]" />
          </div>
          <div>
            <h1 className="font-orbitron text-2xl font-bold tracking-widest text-shadow-neon">BHUVAN DARSI</h1>
            <p className="font-mono text-sm text-hud-cyan/80 flex items-center gap-2">
              <Activity className="w-4 h-4 animate-pulse" /> AI/ML DEVELOPER
            </p>
          </div>
        </div>

        <div className="space-y-4 font-rajdhani text-lg tracking-wide">
          <div className="flex items-center justify-between border-b border-hud-cyan/10 pb-2">
            <span className="flex items-center gap-2 text-hud-cyan/60"><MapPin className="w-4 h-4" /> LOCATION</span>
            <span>HYDERABAD, IN</span>
          </div>
          <div className="flex items-center justify-between border-b border-hud-cyan/10 pb-2">
            <span className="flex items-center gap-2 text-hud-cyan/60"><Mail className="w-4 h-4" /> STATUS</span>
            <span className="text-green-400 animate-pulse">ONLINE</span>
          </div>
          <div className="flex items-center justify-between border-b border-hud-cyan/10 pb-2">
            <span className="flex items-center gap-2 text-hud-cyan/60"><Cpu className="w-4 h-4" /> SYSTEM CORE</span>
            <span>OPTIMAL</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Fingerprint className="w-12 h-12 text-hud-cyan/40 hover:text-hud-cyan transition-colors duration-300 animate-pulse cursor-pointer" />
        </div>
      </div>

      <div className="hud-border p-4">
        <h3 className="font-orbitron text-sm mb-3 text-shadow-neon">SKILL.MATRIX</h3>
        <div className="flex flex-wrap gap-2">
          {["React", "Node.js", "Python", "Machine Learning", "Three.js", "GSAP", "Tailwind"].map((skill, idx) => (
            <span key={idx} className="text-sm px-2 py-1 border border-hud-cyan/30 bg-hud-cyan/5 text-hud-cyan/90">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500px); }
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
