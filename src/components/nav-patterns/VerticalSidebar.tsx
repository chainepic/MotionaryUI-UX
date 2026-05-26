'use client';

import React, { useState } from 'react';
import { Home, Users, Settings, Folder, ChevronRight, PieChart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VerticalSidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>('projects');

  const nav = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { 
      id: 'projects', 
      icon: Folder, 
      label: 'Projects', 
      sub: ['Active', 'Archived', 'Settings'] 
    },
    { id: 'team', icon: Users, label: 'Team' },
    { 
      id: 'reports', 
      icon: PieChart, 
      label: 'Reports',
      sub: ['Sales', 'Traffic', 'Conversion']
    },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 h-full min-h-[500px] bg-slate-900 text-white p-4 flex flex-col rounded-r-2xl border-r border-white/5">
       <div className="flex items-center gap-3 px-2 mb-8 mt-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">A</div>
          <span className="font-bold text-lg">AdminPanel</span>
       </div>

       <div className="flex-1 space-y-1">
          {nav.map(item => {
             const hasSub = !!item.sub;
             const isOpen = openSubmenu === item.id;

             return (
                <div key={item.id}>
                   <button
                      onClick={() => hasSub && setOpenSubmenu(isOpen ? null : item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors
                         ${isOpen || (!hasSub && openSubmenu===null) ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                      `}
                   >
                      <div className="flex items-center gap-3">
                         <item.icon className="w-5 h-5" />
                         <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      {hasSub && (
                         <ChevronRight className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                      )}
                   </button>

                   <AnimatePresence>
                      {hasSub && isOpen && (
                         <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                         >
                            <div className="pl-11 pr-2 py-2 space-y-1">
                               {item.sub.map(sub => (
                                  <button 
                                     key={sub}
                                     className="w-full text-left text-sm text-slate-500 hover:text-white py-1.5 transition-colors block"
                                  >
                                     {sub}
                                  </button>
                               ))}
                            </div>
                         </motion.div>
                      )}
                   </AnimatePresence>
                </div>
             );
          })}
       </div>

       <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center gap-3 p-2">
             <div className="w-8 h-8 rounded-full bg-slate-700" />
             <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">Jane Doe</div>
                <div className="text-xs text-slate-500 truncate">jane@example.com</div>
             </div>
          </div>
       </div>
    </div>
  );
};

