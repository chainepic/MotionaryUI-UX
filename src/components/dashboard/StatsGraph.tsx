'use client';

import React from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export const StatsGraph = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-full flex flex-col justify-between">
       <div className="flex justify-between items-start mb-4">
          <div>
             <p className="text-sm text-slate-500 font-medium">Total Revenue</p>
             <h3 className="text-2xl font-bold text-slate-900 mt-1">$48,294</h3>
          </div>
          <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
             <TrendingUp className="w-3 h-3" /> +12.5%
          </span>
       </div>

       {/* Simple SVG Chart */}
       <div className="relative h-24 w-full">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
             <defs>
               <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                 <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                 <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
               </linearGradient>
             </defs>
             <path 
               d="M0,40 L0,30 C10,32 20,25 30,28 C40,31 50,15 60,20 C70,25 80,10 90,15 L100,5 L100,40 Z" 
               fill="url(#gradient)" 
             />
             <path 
               d="M0,30 C10,32 20,25 30,28 C40,31 50,15 60,20 C70,25 80,10 90,15 L100,5" 
               fill="none" 
               stroke="#3b82f6" 
               strokeWidth="2" 
               strokeLinecap="round"
             />
          </svg>
       </div>
    </div>
  );
};

