'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Ban, BoxSelect, SearchX, ShoppingBag } from 'lucide-react';
import { Footer } from '@/components/system/Footer';
import { EmptySearch } from '@/components/empty/EmptySearch';
import { EmptyCart } from '@/components/empty/EmptyCart';
import { NoMessages } from '@/components/empty/NoMessages';

export default function EmptyStatesPage() {
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
            <div className="p-3 bg-slate-500/10 rounded-xl text-slate-400">
              <Ban className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Empty States
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            Delightful placeholders for when there's nothing to show yet.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="flex flex-col gap-4">
             <div className="p-8 bg-surface-50 rounded-3xl border border-white/5 flex items-center justify-center min-h-[400px]">
                <EmptySearch />
             </div>
             <div className="flex items-center gap-2 px-2">
                <SearchX className="w-4 h-4 text-primary" />
                <h3 className="font-bold">No Results</h3>
             </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4">
             <div className="p-8 bg-surface-50 rounded-3xl border border-white/5 flex items-center justify-center min-h-[400px]">
                <EmptyCart />
             </div>
             <div className="flex items-center gap-2 px-2">
                <ShoppingBag className="w-4 h-4 text-primary" />
                <h3 className="font-bold">Empty Cart</h3>
             </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4">
             <div className="p-8 bg-surface-50 rounded-3xl border border-white/5 flex items-center justify-center min-h-[400px]">
                <NoMessages />
             </div>
             <div className="flex items-center gap-2 px-2">
                <BoxSelect className="w-4 h-4 text-primary" />
                <h3 className="font-bold">No Content</h3>
             </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

