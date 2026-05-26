'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass, Menu, Smartphone, Sidebar } from 'lucide-react';
import { Footer } from '@/components/system/Footer';
import { MegaNavbar } from '@/components/nav-patterns/MegaNavbar';
import { MobileTabBar } from '@/components/nav-patterns/MobileTabBar';
import { VerticalSidebar } from '@/components/nav-patterns/VerticalSidebar';

export default function NavPatternsPage() {
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
            <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
              <Compass className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Navigation Patterns
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            Complete navigation structures for web and mobile applications.
          </p>
        </header>

        <div className="space-y-16">
          
          {/* Section 1: Mega Menu */}
          <section>
             <div className="flex items-center gap-2 mb-6">
                <Menu className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">Mega Navbar</h2>
             </div>
             <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[400px] bg-slate-950 relative">
                <MegaNavbar />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-20">
                   <p className="text-4xl font-black text-slate-800 rotate-12">PAGE CONTENT</p>
                </div>
             </div>
             <p className="text-sm text-white/40 mt-4">
                Full-width dropdown with structured content columns. Hover over "Products" to see interaction.
             </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-12">
             {/* Section 2: Mobile Tab Bar */}
             <section>
                <div className="flex items-center gap-2 mb-6">
                   <Smartphone className="w-5 h-5 text-primary" />
                   <h2 className="text-2xl font-bold">Mobile Tab Bar</h2>
                </div>
                <div className="flex justify-center p-8 bg-surface-50 rounded-3xl border border-white/5">
                   <MobileTabBar />
                </div>
             </section>

             {/* Section 3: Vertical Sidebar */}
             <section>
                <div className="flex items-center gap-2 mb-6">
                   <Sidebar className="w-5 h-5 text-primary" />
                   <h2 className="text-2xl font-bold">Collapsible Sidebar</h2>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[600px] bg-black flex">
                   <VerticalSidebar />
                   <div className="flex-1 bg-slate-950 p-8 opacity-50">
                      <div className="h-8 w-48 bg-slate-800 rounded mb-4" />
                      <div className="h-32 w-full bg-slate-800 rounded" />
                   </div>
                </div>
             </section>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

