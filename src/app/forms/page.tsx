'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookType, ScrollText, UserCircle } from 'lucide-react';
import { Footer } from '@/components/system/Footer';
import { ModernLogin } from '@/components/forms/ModernLogin';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { MultiStepForm } from '@/components/forms/MultiStepForm';

export default function FormsPage() {
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
            <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400">
              <ScrollText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Form Patterns
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            High-conversion input groups and layouts. Designed for usability and aesthetics.
          </p>
        </header>

        <div className="space-y-16">
          
          {/* Section 1: Auth */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 flex justify-center p-8 bg-surface-50 rounded-3xl border border-white/5">
                <ModernLogin />
             </div>
             <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 rounded-lg bg-white/10 text-white"><UserCircle className="w-5 h-5" /></div>
                   <h2 className="text-2xl font-bold">Authentication</h2>
                </div>
                <p className="text-white/60 mb-6 leading-relaxed">
                   A clean, modern login interface with floating labels, password visibility toggle, and social login options.
                   Includes a subtle background blur effect for depth.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-white/40">
                   <span className="px-2 py-1 bg-white/5 rounded border border-white/5">React Hook Form</span>
                   <span className="px-2 py-1 bg-white/5 rounded border border-white/5">Tailwind</span>
                </div>
             </div>
          </section>

          {/* Section 2: Multi-step */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 rounded-lg bg-white/10 text-white"><BookType className="w-5 h-5" /></div>
                   <h2 className="text-2xl font-bold">Multi-Step Wizard</h2>
                </div>
                <p className="text-white/60 mb-6 leading-relaxed">
                   Break down complex flows into manageable chunks. Features smooth transition animations between steps 
                   using Framer Motion's AnimatePresence mode.
                </p>
                <button className="text-primary hover:text-primary/80 font-mono text-sm">
                   View Component Source &gt;
                </button>
             </div>
             <div className="flex justify-center p-8 bg-surface-50 rounded-3xl border border-white/5">
                <MultiStepForm />
             </div>
          </section>

           {/* Section 3: Newsletter */}
           <section className="max-w-4xl mx-auto text-center pt-12">
              <h2 className="text-2xl font-bold mb-8">Newsletter Signup</h2>
              <NewsletterForm />
              <p className="text-white/40 text-sm mt-8 max-w-lg mx-auto">
                 Minimalist subscribe form with loading states and success feedback built-in.
              </p>
           </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}

