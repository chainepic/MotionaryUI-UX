'use client';

import React from 'react';
import { PaletteCard } from '@/components/colors/PaletteCard';
import { PALETTES } from '@/data/palettes';
import { Footer } from '@/components/system/Footer';
import Link from 'next/link';
import { ArrowLeft, Palette } from 'lucide-react';

export default function ColorsPage() {
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
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Palette className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Color Schemes
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            Curated color palettes optimized for digital interfaces. Click any color strip to copy its HEX code.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PALETTES.map((palette) => (
            <PaletteCard 
              key={palette.id}
              name={palette.name}
              colors={palette.colors}
              tags={palette.tags}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

