'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileQuestion } from 'lucide-react';

export const EmptySearch = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-2xl border border-slate-100 max-w-sm">
      <div className="relative mb-6">
        <motion.div
          animate={{ 
            x: [0, 10, -10, 5, -5, 0],
            rotate: [0, 5, -5, 3, -3, 0]
          }}
          transition={{ 
            duration: 2, 
            ease: "easeInOut", 
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500"
        >
          <Search className="w-8 h-8" />
        </motion.div>
        <motion.div
           animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-[10px] text-white font-bold"
        >
           ?
        </motion.div>
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 mb-2">No results found</h3>
      <p className="text-slate-500 text-sm mb-6">
        We couldn't find what you searched for. Try adjusting your search terms.
      </p>
      
      <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
        Clear Search
      </button>
    </div>
  );
};

