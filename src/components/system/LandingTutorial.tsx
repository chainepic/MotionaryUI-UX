'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LandingTutorial = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem('wizard_seen');
    // Check if seen flag exists and is less than 24h old (optional complexity, for now just simple boolean check)
    if (!hasSeen) {
      // Small delay to not jar the user immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    localStorage.setItem('wizard_seen', 'true');
  };

  const handleStart = () => {
    setIsVisible(false);
    router.push('/wizard');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-zinc-900 border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
          >
            <button 
              onClick={handleSkip}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white/50" />
            </button>

            <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
              <Wand2 className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-3">Welcome to Motionary</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Build your perfect design system in seconds. Use our new <strong>Design Wizard</strong> to generate a custom prompt for your AI coding assistant.
            </p>

            <div className="flex flex-col gap-3">
              <button 
                onClick={handleStart}
                className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                <Wand2 className="w-4 h-4" /> Start Design Wizard
              </button>
              <button 
                onClick={handleSkip}
                className="w-full py-3.5 text-white/50 font-medium hover:text-white transition-colors"
              >
                Skip for now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

