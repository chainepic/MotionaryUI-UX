'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Code } from 'lucide-react';
import { Footer } from '@/components/system/Footer';
import { MatrixRain } from '@/components/motionary/particles/MatrixRain';
import { Fireflies } from '@/components/motionary/particles/Fireflies';
import { Constellation } from '@/components/motionary/particles/Constellation';
import { ParticleCanvas } from '@/components/motionary/advanced/ParticleCanvas';

export default function ParticlesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
              <Sparkles className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Particle Effects
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            High-performance canvas and CSS-based particle systems for immersive backgrounds.
          </p>
        </header>

        {/* Featured Showcase - Non-standard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Item 1: 3D Starfield (Reuse existing) */}
          <div className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-surface-50">
            <div className="absolute inset-0">
               <ParticleCanvas />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
               <h3 className="text-xl font-bold mb-1">3D Starfield</h3>
               <p className="text-sm text-white/50">React Three Fiber • Orbit Controls</p>
            </div>
          </div>

          {/* Item 2: Matrix Rain */}
          <div className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-surface-50">
            <div className="absolute inset-0">
               <MatrixRain />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
               <h3 className="text-xl font-bold mb-1 text-green-400">Digital Rain</h3>
               <p className="text-sm text-white/50">HTML5 Canvas • 2D Context</p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Item 3: Fireflies */}
           <div className="group relative h-[300px] rounded-3xl overflow-hidden border border-white/10 bg-surface-50">
             <div className="absolute inset-0">
               <Fireflies />
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
               <h3 className="text-xl font-bold mb-1 text-yellow-300">Fireflies</h3>
               <p className="text-sm text-white/50">Pure CSS Animations</p>
            </div>
           </div>

           {/* Item 4: Constellation */}
           <div className="group relative h-[300px] md:col-span-2 rounded-3xl overflow-hidden border border-white/10 bg-surface-50">
             <div className="absolute inset-0">
               <Constellation />
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
               <h3 className="text-xl font-bold mb-1">Constellation Network</h3>
               <p className="text-sm text-white/50">Interactive Canvas • Distance Calculation</p>
            </div>
           </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

