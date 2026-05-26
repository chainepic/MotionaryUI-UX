'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, LayoutTemplate, Sidebar, Columns, PanelLeft } from 'lucide-react';
import { Footer } from '@/components/system/Footer';
import { SidebarLayout } from '@/components/layouts/SidebarLayout';
import { SplitScreenLayout } from '@/components/layouts/SplitScreenLayout';
import { HolyGrailLayout } from '@/components/layouts/HolyGrailLayout';

export default function LayoutsPage() {
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
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
              <LayoutTemplate className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Layout Patterns
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            Responsive, production-ready page structures. Copy the code and fill in your content.
          </p>
        </header>

        <div className="space-y-16">
          
          {/* Section 1: Dashboard / App Shell */}
          <section>
            <div className="flex items-center gap-2 mb-6">
               <Sidebar className="w-5 h-5 text-primary" />
               <h2 className="text-2xl font-bold">App Shells</h2>
            </div>
            <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
               <SidebarLayout />
            </div>
            <div className="mt-4 flex justify-between items-center px-2">
               <p className="text-sm text-white/50">Collapsible Sidebar + Header + Content Area</p>
               <button className="text-xs font-mono text-primary hover:text-primary/80 transition-colors">
                  VIEW CODE &gt;
               </button>
            </div>
          </section>

          {/* Section 2: Marketing / Auth */}
          <section>
             <div className="flex items-center gap-2 mb-6">
               <Columns className="w-5 h-5 text-primary" />
               <h2 className="text-2xl font-bold">Split Screen</h2>
             </div>
             <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white text-black">
                <SplitScreenLayout />
             </div>
             <div className="mt-4 flex justify-between items-center px-2">
               <p className="text-sm text-white/50">Ideal for Sign Up, Login, or Feature Showcases</p>
            </div>
          </section>

          {/* Section 3: Content / Documentation */}
          <section>
             <div className="flex items-center gap-2 mb-6">
               <PanelLeft className="w-5 h-5 text-primary" />
               <h2 className="text-2xl font-bold">Holy Grail</h2>
             </div>
             <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-50 text-slate-900">
                <HolyGrailLayout />
             </div>
             <div className="mt-4 flex justify-between items-center px-2">
               <p className="text-sm text-white/50">Classic Header + Footer + Sidebar + Aside structure</p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}

