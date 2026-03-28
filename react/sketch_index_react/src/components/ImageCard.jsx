import React from 'react';
import { Plus } from 'lucide-react';

const ImageCard = ({ imageUrl, altText }) => {
  return (
    <div className="masonry-item group relative overflow-hidden rounded-xl bg-surface-container-low shadow-lg transition-transform hover:scale-[1.01] cursor-pointer">
      <img className="w-full object-cover" alt={altText} src={imageUrl} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-primary/90 text-on-primary rounded-lg text-sm font-bold shadow-xl hover:bg-primary transition-all scale-95 hover:scale-100">
          <Plus size={18} />
          Save
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
