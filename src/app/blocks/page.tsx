'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Box, Cuboid, Layers } from 'lucide-react';
import { Footer } from '@/components/system/Footer';
import { HeroGradient } from '@/components/motionary/blocks/HeroGradient';
import { PricingSection } from '@/components/motionary/blocks/PricingSection';
import { FeatureSection } from '@/components/motionary/blocks/FeatureSection';
import { BentoGrid } from '@/components/motionary/blocks/BentoGrid';

export default function BlocksPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-12">
        <header className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hub
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Cuboid className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Building Blocks
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            Ready-to-use page sections. Stack them to create landing pages in minutes.
          </p>
        </header>

        <div className="space-y-12">
          
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-white/70">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">01</span>
                <h3 className="text-xl font-bold">Hero Sections</h3>
             </div>
             <div className="rounded-3xl overflow-hidden border border-white/10">
                <HeroGradient />
             </div>
          </div>

          <div className="space-y-4">
             <div className="flex items-center gap-2 text-white/70">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">02</span>
                <h3 className="text-xl font-bold">Feature Grids</h3>
             </div>
             <FeatureSection />
          </div>

          <div className="space-y-4">
             <div className="flex items-center gap-2 text-white/70">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">03</span>
                <h3 className="text-xl font-bold">Bento Grids</h3>
             </div>
             <BentoGrid />
          </div>

          <div className="space-y-4">
             <div className="flex items-center gap-2 text-white/70">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">04</span>
                <h3 className="text-xl font-bold">Pricing Tables</h3>
             </div>
             <PricingSection />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

