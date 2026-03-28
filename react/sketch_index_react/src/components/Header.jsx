import React from 'react';
import { UserCircle } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="sticky top-0 w-full h-[52px] z-40 bg-slate-950/80 backdrop-blur-md flex justify-between items-center px-8 border-b border-white/5">
      <h1 className="font-instrument font-semibold text-[30px] tracking-tight text-slate-100 uppercase">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="text-slate-400 hover:opacity-80 transition-opacity p-1">
          <UserCircle size={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
