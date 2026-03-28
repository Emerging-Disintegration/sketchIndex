import React from 'react';
import { Flame, Trophy, Lightbulb, Timer, Play } from 'lucide-react';

const HomeHub = ({ onStartSession }) => {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* Featured Daily Prompt Card */}
      <section className="relative group overflow-hidden rounded-xl bg-surface-container-low border border-white/5 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            alt="The Foreshortened Figure" 
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
            src="https://placehold.co/1200x600/1d1f24/a5abb6?text=Featured+Prompt" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2b1e0f]/95 to-[#0b0e12]/98"></div>
        </div>
        <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row gap-12 items-end">
          <div className="flex-1 space-y-6">
            <header>
              <span className="text-[12px] font-medium tracking-[0.2em] text-tertiary uppercase font-label">TODAY'S PROMPT</span>
              <h2 className="text-5xl md:text-6xl font-headline mt-2 text-on-background">The Foreshortened Figure</h2>
            </header>
            <p className="text-lg md:text-xl font-instrument text-on-surface-variant max-w-2xl leading-relaxed">
              Focus on extreme perspective and overlapping forms. Pay close attention to how the limbs diminish in space.
            </p>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-label uppercase tracking-widest text-on-surface-variant/60">Reference Study Material</h3>
              <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    alt={`ref ${i}`} 
                    className="w-20 h-20 rounded-lg object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all border border-white/10" 
                    src={`https://placehold.co/200x200/1d1f24/a5abb6?text=Ref+${i}`} 
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button onClick={onStartSession} className="bg-tertiary hover:bg-tertiary-dim text-on-tertiary-fixed px-10 py-4 rounded-full font-label font-semibold text-sm tracking-widest uppercase transition-all shadow-lg active:scale-95 backdrop-blur-md">
              Start Drawing
            </button>
          </div>
        </div>
      </section>

      {/* Secondary Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Recent Collections */}
        <section className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-headline text-on-background">Recent Collections</h2>
            <button className="text-sm font-label text-primary hover:text-primary-fixed-dim transition-colors">View All Archive</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Collection Card 1 */}
            <div className="bg-surface-container rounded-xl p-4 group cursor-pointer hover:bg-surface-container-high transition-colors">
              <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden mb-4 aspect-video">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={`https://placehold.co/300x200/1d1f24/a5abb6?text=Thumb+${i}`} 
                    alt="collection thumb"
                  />
                ))}
              </div>
              <h3 className="font-instrument font-semibold text-lg text-on-surface">Morning Gestures</h3>
              <p className="font-label text-xs text-on-surface-variant tracking-wider uppercase mt-1">24 Sketches • Last updated 2d ago</p>
            </div>
            {/* Collection Card 2 */}
            <div className="bg-surface-container rounded-xl p-4 group cursor-pointer hover:bg-surface-container-high transition-colors">
              <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden mb-4 aspect-video">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={`https://placehold.co/300x200/1d1f24/a5abb6?text=Thumb+${i}`} 
                    alt="collection thumb"
                  />
                ))}
              </div>
              <h3 className="font-instrument font-semibold text-lg text-on-surface">Action Studies</h3>
              <p className="font-label text-xs text-on-surface-variant tracking-wider uppercase mt-1">12 Sketches • Last updated 5h ago</p>
            </div>
          </div>
        </section>

        {/* Sidebar Info / Streak Status */}
        <aside className="space-y-8">
          <div className="bg-surface-container-highest/30 backdrop-blur-xl rounded-xl p-8 border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-instrument font-semibold text-on-surface">Practice Streak</h3>
              <Trophy size={20} className="text-tertiary" />
            </div>
            <div className="text-center space-y-2">
              <div className="text-7xl font-headline text-tertiary">7</div>
              <p className="font-label text-sm uppercase tracking-[0.2em] text-on-tertiary-container">Days Consistent</p>
            </div>
            <div className="mt-8 grid grid-cols-7 gap-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div key={i} className={`aspect-square rounded-sm flex items-center justify-center text-[10px] font-bold ${i === 6 ? 'bg-tertiary text-on-tertiary ring-2 ring-tertiary ring-offset-2 ring-offset-background' : 'bg-tertiary text-on-tertiary'}`}>
                  {day}
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-tertiary/10 rounded-lg border border-tertiary/20">
              <p className="text-xs font-body leading-relaxed text-on-surface-variant italic text-center">
                "Inspiration exists, but it has to find you working."
              </p>
            </div>
          </div>

          <div className="p-6 bg-primary-container/20 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4">
              <Lightbulb size={24} className="text-primary" />
              <div className="space-y-2">
                <h4 className="font-instrument font-semibold text-on-surface">Pro Tip</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Use the 'Studio Mode' to record your stroke process. Rewatching your lines helps identify tension in your grip.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Floating Timer */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-surface-variant/60 backdrop-blur-2xl px-6 py-3 rounded-full border border-white/10 shadow-2xl flex items-center gap-4">
          <Timer size={18} className="text-primary" />
          <span className="font-label text-xl font-medium tracking-widest text-on-surface">15:00</span>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <button className="text-xs font-label uppercase tracking-widest text-primary hover:text-white transition-colors">Start Focus</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHub;
