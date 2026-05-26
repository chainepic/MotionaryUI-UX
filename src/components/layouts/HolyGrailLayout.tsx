'use client';

import React from 'react';

export const HolyGrailLayout = () => {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 text-slate-800 rounded-xl overflow-hidden border border-slate-200">
      {/* Header */}
      <header className="h-14 bg-white border-b border-slate-200 flex items-center px-6 justify-between shrink-0">
        <div className="font-bold text-lg">Brand</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
           <span className="text-slate-900">Products</span>
           <span className="hover:text-slate-900 transition-colors">Solutions</span>
           <span className="hover:text-slate-900 transition-colors">Pricing</span>
        </nav>
        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200" />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Aside (Nav) */}
        <aside className="w-64 bg-slate-50 border-r border-slate-200 p-4 hidden md:block overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Documentation</div>
          <div className="space-y-1">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="h-8 rounded flex items-center px-3 hover:bg-slate-200/50 cursor-pointer text-sm text-slate-600">
                 Section {i}
               </div>
             ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <div className="h-8 w-3/4 bg-slate-100 rounded mb-6" />
            <div className="space-y-4">
               <div className="h-4 w-full bg-slate-50 rounded" />
               <div className="h-4 w-full bg-slate-50 rounded" />
               <div className="h-4 w-5/6 bg-slate-50 rounded" />
            </div>
            
            <div className="grid grid-cols-2 gap-6 my-8">
               <div className="aspect-video bg-slate-50 rounded-lg border border-slate-100" />
               <div className="aspect-video bg-slate-50 rounded-lg border border-slate-100" />
            </div>

            <div className="h-4 w-full bg-slate-50 rounded" />
            <div className="h-4 w-full bg-slate-50 rounded mt-2" />
          </div>
        </main>

        {/* Right Aside (TOC/Ads) */}
        <aside className="w-64 bg-slate-50 border-l border-slate-200 p-6 hidden xl:block overflow-y-auto">
           <div className="text-sm font-semibold mb-4">On this page</div>
           <div className="space-y-3">
              {[1,2,3].map(i => (
                 <div key={i} className="flex gap-2">
                    <div className="w-0.5 h-full bg-slate-200" />
                    <div className="text-sm text-slate-500 hover:text-primary cursor-pointer">Heading {i}</div>
                 </div>
              ))}
           </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="h-12 bg-white border-t border-slate-200 flex items-center justify-center text-sm text-slate-400 shrink-0">
        © 2024 Company Name. All rights reserved.
      </footer>
    </div>
  );
};

