'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const NewsletterForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-900 rounded-2xl p-8 border border-white/10 text-center relative overflow-hidden">
       {/* Decorative */}
       <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
       <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />

       <div className="relative z-10">
         <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mx-auto mb-6">
            <Send className="w-5 h-5 -ml-1 translate-y-0.5 -rotate-12" />
         </div>
         
         <h3 className="text-2xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
         <p className="text-slate-400 mb-8 max-w-sm mx-auto">Get the latest updates, articles, and resources sent to your inbox weekly.</p>

         <form onSubmit={handleSubmit} className="relative max-w-sm mx-auto">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl py-3 px-4 flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Subscribed successfully!</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-2"
                >
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email" 
                    disabled={status === 'loading'}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                  />
                  <button 
                    disabled={status === 'loading'}
                    className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors disabled:opacity-70 flex items-center justify-center min-w-[100px]"
                  >
                    {status === 'loading' ? (
                      <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    ) : (
                      'Join'
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
         </form>
         
         <p className="text-xs text-slate-500 mt-6">No spam, unsubscribe at any time.</p>
       </div>
    </div>
  );
};

