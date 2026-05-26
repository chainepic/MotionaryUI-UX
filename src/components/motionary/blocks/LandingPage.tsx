'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layout, Zap, Shield } from 'lucide-react';

export const LandingPage = () => {
  return (
    <div className="w-full h-full bg-black overflow-y-auto rounded-xl border border-white/10 hide-scrollbar">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-10">
        <div className="font-bold text-white tracking-tighter">ACME</div>
        <div className="flex gap-4 text-xs text-white/60">
          <span>Product</span>
          <span>Pricing</span>
          <span>About</span>
        </div>
        <button className="px-3 py-1.5 bg-white text-black text-xs font-bold rounded-full">Get Started</button>
      </nav>

      {/* Hero */}
      <div className="px-6 py-16 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-primary mb-6"
        >
          v2.0 is now live
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-black text-white tracking-tight mb-4"
        >
          Build faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Motion</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-white/50 max-w-md mb-8"
        >
          The ultimate library for building modern, interactive user interfaces with React and Framer Motion.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-3"
        >
          <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-transform">
            Start Building <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-5 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors">
            Documentation
          </button>
        </motion.div>
      </div>

      {/* Features */}
      <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/5">
        {[
          { icon: <Layout className="w-5 h-5" />, title: 'Modern Stack', desc: 'React, Tailwind, Motion' },
          { icon: <Zap className="w-5 h-5" />, title: 'Lightning Fast', desc: 'Optimized for performance' },
          { icon: <Shield className="w-5 h-5" />, title: 'Type Safe', desc: 'Built with TypeScript' },
        ].map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl bg-black border border-white/5 hover:border-white/20 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-200 flex items-center justify-center text-white mb-3">
              {f.icon}
            </div>
            <h3 className="text-white font-bold text-sm mb-1">{f.title}</h3>
            <p className="text-xs text-white/40">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

