import React from 'react';
import { ChevronDown, X, Timer, Play } from 'lucide-react';
import ImageCard from './ImageCard';

const BrowseCatalog = ({ onStartSession }) => {
  const categories = ['All', 'Figures', 'Anatomy', 'Hands', 'Faces', 'Objects', 'Vehicles'];
  const activeCategory = 'Figures';

  const images = [
    {
      url: "https://placehold.co/400x600/1d1f24/a5abb6?text=Portrait+Ref",
      alt: "dramatic chiaroscuro portrait"
    },
    {
      url: "https://placehold.co/600x400/1d1f24/a5abb6?text=Action+Ref",
      alt: "athlete sprinting"
    },
    {
      url: "https://placehold.co/500x500/1d1f24/a5abb6?text=Hands+Study",
      alt: "human hands study"
    },
    {
      url: "https://placehold.co/400x550/1d1f24/a5abb6?text=Pose+Ref",
      alt: "fashion model seated"
    },
    {
      url: "https://placehold.co/700x400/1d1f24/a5abb6?text=Landscape+Ref",
      alt: "atmospheric landscape"
    },
    {
      url: "https://placehold.co/400x400/1d1f24/a5abb6?text=Face+Study",
      alt: "dramatic face lighting"
    },
    {
      url: "https://placehold.co/400x650/1d1f24/a5abb6?text=Anatomy+Ref",
      alt: "yoga practitioner"
    },
    {
      url: "https://placehold.co/450x600/1d1f24/a5abb6?text=Gesture+Ref",
      alt: "male dancer leaping"
    }
  ];

  return (
    <div className="flex flex-col flex-1">
      <section className="px-8 pt-6 pb-2 space-y-6">
        {/* Category Rail */}
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-lg transition-all text-sm font-label ${
                activeCategory === cat
                  ? 'bg-primary text-on-primary font-bold'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-medium'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-1.5 bg-surface-container-low text-on-surface border border-white/5 rounded-full hover:bg-surface-container transition-colors text-sm font-label">
              Angle
              <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 bg-surface-container-low text-on-surface border border-white/5 rounded-full hover:bg-surface-container transition-colors text-sm font-label">
              Lighting
              <ChevronDown size={14} />
            </button>
            <div className="h-4 w-[1px] bg-outline-variant/30 mx-2"></div>
            {/* Active Chips */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 pl-3 pr-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium font-label">
                3/4 Front
                <X size={12} className="cursor-pointer hover:text-white" />
              </div>
              <div className="flex items-center gap-1.5 pl-3 pr-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium font-label">
                Dramatic
                <X size={12} className="cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>
          <button className="text-primary text-sm font-medium font-label hover:underline underline-offset-4">Clear All</button>
        </div>
      </section>

      {/* Masonry Grid Area */}
      <section className="px-8 py-6 flex-1 overflow-y-auto">
        <div className="masonry">
          {images.map((img, idx) => (
            <ImageCard key={idx} imageUrl={img.url} altText={img.alt} />
          ))}
        </div>
      </section>

      {/* Floating Timer */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex items-center gap-4 px-4 py-2 bg-surface-variant/60 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
          <Timer size={20} className="text-tertiary" />
          <span className="font-mono text-lg font-medium text-on-surface tracking-wider">25:00</span>
          <button onClick={onStartSession} className="w-8 h-8 flex items-center justify-center bg-tertiary text-on-tertiary rounded-full hover:opacity-90 transition-opacity">
            <Play size={18} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseCatalog;
