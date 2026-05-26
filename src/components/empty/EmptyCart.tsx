'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 max-w-md w-full">
      <div className="relative mb-6">
         {/* Background blobs */}
         <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
         
         <motion.div
           initial={{ y: 0 }}
           animate={{ y: -10 }}
           transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
           className="relative z-10 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center"
         >
            <ShoppingCart className="w-10 h-10 text-slate-300" />
            <motion.div 
               className="absolute top-6 right-6 w-3 h-3 bg-red-400 rounded-full"
               animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
               transition={{ duration: 1.5, repeat: Infinity }}
            />
         </motion.div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2">Your cart is empty</h3>
      <p className="text-slate-500 mb-8 max-w-xs mx-auto">
        Looks like you haven't added anything to your cart yet.
      </p>

      <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-bold hover:scale-105 transition-transform">
        <Plus className="w-4 h-4" /> Start Shopping
      </button>
    </div>
  );
};

