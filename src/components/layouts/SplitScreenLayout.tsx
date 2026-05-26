'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const SplitScreenLayout = () => {
  return (
    <div className="flex h-full w-full bg-white text-slate-900 rounded-xl overflow-hidden">
      {/* Left Panel - Content/Form */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
        <div className="max-w-md mx-auto w-full">
           <div className="mb-8">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">Welcome Back</span>
              <h2 className="text-3xl font-black mt-2 text-slate-900">Log in to your account</h2>
              <p className="text-slate-500 mt-2">Enter your details to access the workspace.</p>
           </div>
           
           <div className="space-y-4">
              <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                 <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="name@company.com" />
              </div>
              <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                 <input type="password" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="••••••••" />
              </div>
              <button className="w-full py-2.5 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors font-medium mt-2">
                 Sign In
              </button>
           </div>
           
           <div className="mt-8 pt-8 border-t border-slate-100 text-center text-sm text-slate-500">
              Don't have an account? <span className="text-primary font-bold cursor-pointer">Sign up free</span>
           </div>
        </div>
      </div>

      {/* Right Panel - Visual/Marketing */}
      <div className="hidden lg:flex w-1/2 bg-slate-950 relative overflow-hidden items-center justify-center p-12">
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
         
         <div className="relative z-10 max-w-lg text-white">
            <h3 className="text-2xl font-bold mb-6">Designed for Developers</h3>
            <ul className="space-y-4">
               {['Production-ready code', 'Fully responsive templates', 'Dark mode included'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-green-400" />
                     <span className="text-slate-300">{item}</span>
                  </li>
               ))}
            </ul>
            
            <div className="mt-12 p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
               <p className="text-sm italic text-slate-300">"This library saved me weeks of development time. The layouts are simply beautiful."</p>
               <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-slate-400" />
                  <div className="text-xs">
                     <div className="font-bold">Alex Chen</div>
                     <div className="text-slate-400">Senior Product Designer</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

