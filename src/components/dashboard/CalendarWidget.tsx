'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CalendarWidget = () => {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const activeDate = 15;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-full">
      <div className="flex justify-between items-center mb-6">
         <h3 className="font-bold text-slate-900">October 2024</h3>
         <div className="flex gap-2">
            <button className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"><ChevronLeft className="w-4 h-4" /></button>
            <button className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"><ChevronRight className="w-4 h-4" /></button>
         </div>
      </div>
      
      <div className="grid grid-cols-7 gap-y-4 text-center">
         {days.map(d => (
            <div key={d} className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{d}</div>
         ))}
         {/* Empty cells for padding */}
         <div /> <div />
         
         {dates.map(d => (
            <div key={d} className="flex justify-center">
               <button 
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium transition-all
                     ${d === activeDate 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                        : 'text-slate-600 hover:bg-slate-100'}
                  `}
               >
                  {d}
               </button>
            </div>
         ))}
      </div>
    </div>
  );
};

