'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareOff } from 'lucide-react';

export const NoMessages = () => {
  return (
    <div className="h-[400px] w-full max-w-sm bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-8 overflow-hidden relative">
       {/* Chat Bubbles Background */}
       {[1,2,3].map((i) => (
          <motion.div
             key={i}
             initial={{ opacity: 0, y: 20, scale: 0.8 }}
             animate={{ opacity: [0, 1, 0], y: -100, x: (i%2 === 0 ? 20 : -20) }}
             transition={{ 
                duration: 4, 
                delay: i * 1.5, 
                repeat: Infinity,
                ease: "linear"
             }}
             className={`absolute bottom-0 ${i%2===0 ? 'right-10' : 'left-10'} w-12 h-8 bg-slate-100 rounded-lg rounded-tl-none`}
          />
       ))}

       <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 rotate-3">
          <MessageSquareOff className="w-8 h-8" />
       </div>

       <h3 className="text-lg font-bold text-slate-900 mb-2">No messages yet</h3>
       <p className="text-slate-400 text-sm text-center px-4">
          When you start a conversation, your messages will appear here.
       </p>
    </div>
  );
};

