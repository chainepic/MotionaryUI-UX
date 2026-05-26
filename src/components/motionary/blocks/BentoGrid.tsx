'use client';

import { motion } from 'framer-motion';

const cards = [
  { title: 'Metrics', desc: 'KPIs with soft glow', span: 'md:col-span-2', delay: 0 },
  { title: 'Live Ops', desc: 'Streaming events', span: 'md:row-span-2', delay: 0.05 },
  { title: 'AI Prompts', desc: 'Copy-ready prompts', span: '', delay: 0.1 },
  { title: 'Showcase', desc: 'Motion previews', span: '', delay: 0.15 },
];

export const BentoGrid = () => {
  return (
    <section className="rounded-3xl border border-white/10 bg-surface-50 p-6 md:p-10 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Blocks</p>
          <h2 className="text-3xl font-bold text-white">Bento Grid</h2>
        </div>
        <span className="text-xs text-white/50">Framer Motion + Tailwind</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[140px] md:auto-rows-[180px]">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: card.delay }}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 flex flex-col justify-between ${card.span}`}
          >
            <div>
              <p className="text-sm text-white/60">{card.title}</p>
              <h3 className="text-lg font-semibold text-white mt-1">{card.desc}</h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
              Ready to copy prompt / code
            </div>
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(0,243,255,0.08),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,0,255,0.08),transparent_25%)]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
