'use client';

import React, { useState } from 'react';
import { Menu, X, Home, Settings, User, Bell, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-full w-full bg-slate-950 text-white overflow-hidden border border-white/10 rounded-xl relative">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: 240 }}
        animate={{ width: isOpen ? 240 : 72 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-full bg-slate-900 border-r border-white/5 flex flex-col z-10"
      >
        <div className="h-16 flex items-center px-4 border-b border-white/5">
          <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold">
            M
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="ml-3 font-bold whitespace-nowrap"
              >
                Motionary
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex-1 p-2 space-y-1">
          {[
            { icon: Home, label: 'Dashboard' },
            { icon: User, label: 'Profile' },
            { icon: Bell, label: 'Notifications' },
            { icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center p-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors group"
            >
              <item.icon className="w-5 h-5 min-w-[20px]" />
              {isOpen && (
                <span className="ml-3 text-sm whitespace-nowrap opacity-100 transition-opacity duration-200">
                  {item.label}
                </span>
              )}
              {!isOpen && (
                <div className="absolute left-16 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                   {item.label}
                </div>
              )}
            </button>
          ))}
        </nav>

        <div className="p-2 border-t border-white/5">
          <button
             onClick={() => setIsOpen(!isOpen)}
             className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-white/5 text-slate-400"
          >
             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
         <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-slate-950/50 backdrop-blur">
             <div className="flex items-center gap-2 text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg text-sm w-64">
                <Search className="w-4 h-4" />
                <span>Search...</span>
             </div>
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
         </header>
         <div className="flex-1 p-6 overflow-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                 {[1,2,3].map(i => (
                    <div key={i} className="h-32 rounded-xl bg-white/5 border border-white/5 p-4 animate-pulse" />
                 ))}
             </div>
             <div className="h-96 rounded-xl bg-white/5 border border-white/5 p-4" />
         </div>
      </main>
    </div>
  );
};

