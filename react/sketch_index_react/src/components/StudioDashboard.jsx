import React from 'react';
import { Plus, Timer, Play } from 'lucide-react';

const CollectionCard = ({ title, count, images, isNew }) => {
  if (isNew) {
    return (
      <div className="group cursor-pointer">
        <div className="aspect-[4/3] w-full rounded-xl border-2 border-dashed border-outline-variant bg-transparent hover:bg-surface-container-low transition-colors flex flex-col items-center justify-center mb-4">
          <Plus size={40} className="text-outline mb-2" />
          <span className="font-label text-sm text-outline group-hover:text-primary transition-colors">New Collection</span>
        </div>
        <div className="flex flex-col px-1">
          <span className="text-on-surface font-medium text-lg leading-tight">+ New Collection</span>
          <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mt-1">Empty Workspace</span>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-surface-container-low mb-4">
        <div className="grid grid-cols-2 grid-rows-2 h-full gap-0.5">
          {images.map((img, i) => (
            <img key={i} className="w-full h-full object-cover" src={img} alt="collection thumb" />
          ))}
        </div>
      </div>
      <div className="flex flex-col px-1">
        <span className="text-on-surface font-medium text-lg leading-tight">{title}</span>
        <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mt-1">{count} images</span>
      </div>
    </div>
  );
};

const StudioDashboard = () => {
  const collections = [
    {
      title: 'Evening Studies',
      count: 24,
      images: [
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Study+1",
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Study+2",
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Study+3",
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Study+4"
      ]
    },
    {
      title: 'Hand Anatomy',
      count: 11,
      images: [
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Hand+1",
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Hand+2",
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Hand+3",
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Hand+4"
      ]
    },
    {
      title: 'Vehicle Concepts',
      count: 6,
      images: [
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Car+1",
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Car+2",
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Car+3",
        "https://placehold.co/300x300/1d1f24/a5abb6?text=Car+4"
      ]
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((col, i) => (
          <CollectionCard key={i} title={col.title} count={col.count} images={col.images} />
        ))}
        <CollectionCard isNew={true} />
      </div>

      {/* Floating Focus Timer */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-surface-variant/60 backdrop-blur-xl px-6 py-3 rounded-full flex items-center gap-4 border border-white/5 shadow-2xl">
          <Timer size={24} className="text-primary" />
          <div className="flex flex-col">
            <span className="font-mono text-lg font-medium leading-none text-on-primary-container">25:00</span>
            <span className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Drawing Sprint</span>
          </div>
          <button className="bg-primary-container text-on-primary-container w-8 h-8 rounded-full flex items-center justify-center active:scale-90 transition-transform">
            <Play size={16} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudioDashboard;
