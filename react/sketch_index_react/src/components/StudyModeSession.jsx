import React, { useState, useEffect } from 'react';
import { Pause, Timer } from 'lucide-react';

const StudyModeSession = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds for demo

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  return (
    <div className="bg-[#0d0e11] text-on-background selection:bg-primary/30 antialiased overflow-hidden h-screen w-screen flex flex-col items-center justify-center relative">
      <main className="relative w-full h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
        {/* Subtle Blue Pulse Vignette (Last 5 Seconds State) */}
        {timeLeft <= 5 && (
          <div className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000" 
               style={{ boxShadow: 'inset 0 0 120px 20px rgba(164, 201, 255, 0.08)' }}></div>
        )}

        {/* Reference Image Core */}
        <div className="w-full h-full flex items-center justify-center relative z-0">
          <img 
            alt="Study reference" 
            className="max-w-full max-h-full object-contain shadow-2xl" 
            src="https://placehold.co/800x1000/1d1f24/a5abb6?text=Reference+Image" 
          />
        </div>

        {/* TOP CHROME: Actions */}
        <div className="absolute top-8 right-8 z-20">
          <button className="group p-3 rounded-full hover:bg-white/5 transition-all duration-300 focus:outline-none">
            <Pause size={18} className="text-on-surface-variant opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* BOTTOM CHROME: Metadata & Timer */}
        <div className="absolute bottom-10 left-10 z-20 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[14px] text-on-surface-variant/50 tracking-widest uppercase">Progress</span>
            <span className="font-mono text-[14px] text-on-surface-variant/80">4 / 12</span>
          </div>
          <div className="w-24 h-[1px] bg-white/5 overflow-hidden">
            <div className="h-full bg-primary-dim/30 w-1/3 transition-all duration-700"></div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 z-20 flex items-center gap-3 px-4 py-2 bg-white/[0.02] backdrop-blur-xl rounded-full border border-white/[0.03]">
          <Timer size={16} className="text-primary/40" />
          <span className="font-mono text-[14px] text-on-surface-variant tabular-nums tracking-tighter">
            0:{timeLeft.toString().padStart(2, '0')}
          </span>
        </div>
      </main>
    </div>
  );
};

export default StudyModeSession;
