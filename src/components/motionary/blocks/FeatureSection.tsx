'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed with zero-runtime CSS generation.' },
  { icon: Shield, title: 'Secure by Default', desc: 'Enterprise-grade security built into every component.' },
  { icon: Smartphone, title: 'Mobile First', desc: 'Responsive designs that look great on any device.' },
  { icon: Globe, title: 'Global Edge', desc: 'Deployed to the edge for low-latency access worldwide.' },
];

export const FeatureSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-950 text-white rounded-3xl border border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4"
          >
            Everything you need
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            A complete toolkit for building modern user interfaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

