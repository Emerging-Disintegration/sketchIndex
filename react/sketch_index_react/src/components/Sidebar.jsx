import React from 'react';
import { Home, Compass, BookOpen, Palette, User } from 'lucide-react';

const Sidebar = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'browse', icon: Compass, label: 'Browse' },
    { id: 'study', icon: BookOpen, label: 'Study Mode' },
    { id: 'studio', icon: Palette, label: 'Studio Mode' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-16 flex flex-col items-center py-6 border-r border-white/5 bg-slate-950/90 backdrop-blur-xl z-50">
      <div className="mb-10">
        <span className="text-primary font-headline italic text-2xl" title="SketchIndex Logo Mark">S</span>
      </div>
      <nav className="flex flex-col items-center gap-8 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`transition-colors rounded-lg p-2 group relative ${
              activeTab === item.id ? 'text-primary font-bold scale-110' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
            }`}
          >
            <item.icon size={24} />
            <span className="absolute left-14 bg-surface-container-highest text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
      <div className="mt-auto">
        <button className="text-slate-500 hover:text-slate-300 transition-colors hover:bg-white/5 rounded-lg p-2 group relative">
          <User size={24} />
          <span className="absolute left-14 bg-surface-container-highest text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            Profile
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
