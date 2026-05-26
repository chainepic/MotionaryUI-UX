'use client';

import { motion } from 'framer-motion';

export const HeroGradient = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0b1021] text-white p-10 md:p-16 shadow-2xl border border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,243,255,0.15),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,0,255,0.12),transparent_30%)]" />
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono tracking-wide"
          >
            AI-ready • Framer Motion • Tailwind
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Build motion-first experiences in minutes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 leading-relaxed"
          >
            A curated library of production-ready motion components and blocks. Copy code or prompts directly into your AI workflow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex gap-3"
          >
            <button className="px-6 py-3 rounded-lg bg-primary text-black font-semibold hover:brightness-110 transition">Copy Code</button>
            <button className="px-6 py-3 rounded-lg border border-white/20 text-white/80 hover:border-white/50 transition">Copy Prompt</button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,243,255,0.12),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(255,0,255,0.12),transparent_30%)]" />
          <div className="absolute inset-4 rounded-xl border border-white/10 bg-black/40" />
          <div className="absolute inset-8 flex flex-col justify-center items-center gap-4 text-sm text-white/70">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Live Preview</span>
            <div className="h-24 w-full max-w-xs bg-gradient-to-r from-primary/40 to-transparent rounded-lg" />
            <div className="h-12 w-full max-w-xs bg-white/5 rounded-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
