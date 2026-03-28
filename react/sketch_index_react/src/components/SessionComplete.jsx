import React from 'react';
import { CheckCircle, Sparkles, Flame } from 'lucide-react';

const SessionComplete = ({ onRestart, onBrowse }) => {
  const sessionImages = [
    "https://placehold.co/200x200/1d1f24/a5abb6?text=Study+1",
    "https://placehold.co/200x200/1d1f24/a5abb6?text=Study+2",
    "https://placehold.co/200x200/1d1f24/a5abb6?text=Study+3",
    "https://placehold.co/200x200/1d1f24/a5abb6?text=Study+4"
  ];

  return (
    <main className="flex-grow flex items-center justify-center p-6 bg-background">
      <div className="max-w-[600px] w-full flex flex-col items-center text-center">
        <div className="mb-2">
          <CheckCircle size={48} className="text-tertiary" />
        </div>
        <h1 className="text-[36px] font-headline leading-tight mb-3 text-on-surface">
          Session Complete
        </h1>
        <p className="font-instrument text-on-surface-variant text-[16px] tracking-wide mb-10">
          12 images · 20 minutes · Figures
        </p>
        
        <div className="w-full relative mb-12">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 px-4 pb-2">
            {sessionImages.map((src, i) => (
              <img 
                key={i}
                className="w-20 h-20 flex-shrink-0 object-cover rounded-lg border border-white/5" 
                src={src} 
                alt="session thumb"
              />
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>

        <div className="w-full space-y-6">
          <button className="w-full h-[52px] bg-primary-container text-on-primary-container font-instrument font-semibold text-lg rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            Save to Studio
            <Sparkles size={18} />
          </button>
          <div className="flex flex-col gap-4">
            <button 
              onClick={onRestart}
              className="text-primary hover:text-primary-fixed-dim transition-colors font-instrument font-medium text-[15px] flex items-center justify-center gap-2"
            >
              Start Another Session
            </button>
            <button 
              onClick={onBrowse}
              className="text-on-surface-variant hover:text-on-surface transition-colors font-instrument font-medium text-[15px]"
            >
              Browse More References
            </button>
          </div>
        </div>

        <div className="mt-16 p-6 rounded-xl bg-surface-container-low border border-white/5 w-full flex items-center justify-between text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-tertiary/10">
              <Flame size={24} className="text-tertiary" />
            </div>
            <div>
              <p className="text-[14px] font-label uppercase tracking-widest text-tertiary leading-none mb-1">Daily Streak</p>
              <p className="text-xl font-headline italic">4 Days Consistent</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-label text-on-surface-variant text-xs mb-1">NEXT MILESTONE</p>
            <p className="font-label text-on-surface text-sm">7 Days</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SessionComplete;
