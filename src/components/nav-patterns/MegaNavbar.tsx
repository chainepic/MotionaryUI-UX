'use client';

import React, { useState } from 'react';
import { ChevronDown, Box, ShoppingBag, Users, BarChart3, Globe, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MegaNavbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const menuItems = [
    { id: 'products', label: 'Products' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'resources', label: 'Resources' },
  ];

  return (
    <div className="w-full bg-slate-900 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
           <div className="font-bold text-xl text-white tracking-tight">Acme Inc.</div>
           
           <nav className="hidden md:flex gap-8 h-full items-center">
             {menuItems.map(item => (
                <button
                   key={item.id}
                   onMouseEnter={() => setHovered(item.id)}
                   className={`h-full flex items-center gap-1 text-sm font-medium transition-colors border-b-2 border-transparent ${hovered === item.id ? 'text-white border-blue-500' : 'text-slate-400 hover:text-white'}`}
                >
                   {item.label} <ChevronDown className={`w-3 h-3 transition-transform ${hovered === item.id ? 'rotate-180' : ''}`} />
                </button>
             ))}
           </nav>
        </div>

        <div className="flex gap-4">
           <button className="text-slate-400 hover:text-white text-sm font-medium">Log In</button>
           <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">Sign Up</button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
         {hovered && (
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 10 }}
               transition={{ duration: 0.2 }}
               onMouseLeave={() => setHovered(null)}
               className="absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 shadow-2xl py-8"
            >
               <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
                  {/* Example Content for Products */}
                  {hovered === 'products' && (
                     <>
                        <div className="col-span-1 space-y-4">
                           <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Core Platform</h4>
                           <a href="#" className="flex gap-3 group">
                              <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                 <Box className="w-4 h-4" />
                              </div>
                              <div>
                                 <div className="text-white font-medium group-hover:text-blue-400">Database</div>
                                 <div className="text-xs text-slate-500">Managed SQL & NoSQL</div>
                              </div>
                           </a>
                           <a href="#" className="flex gap-3 group">
                              <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                 <Globe className="w-4 h-4" />
                              </div>
                              <div>
                                 <div className="text-white font-medium group-hover:text-purple-400">Edge Network</div>
                                 <div className="text-xs text-slate-500">Global CDN & Functions</div>
                              </div>
                           </a>
                        </div>
                        <div className="col-span-1 space-y-4">
                           <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Features</h4>
                           <a href="#" className="flex gap-3 group">
                              <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                 <Shield className="w-4 h-4" />
                              </div>
                              <div>
                                 <div className="text-white font-medium group-hover:text-green-400">Security</div>
                                 <div className="text-xs text-slate-500">DDoS Protection & WAF</div>
                              </div>
                           </a>
                           <a href="#" className="flex gap-3 group">
                              <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                 <Zap className="w-4 h-4" />
                              </div>
                              <div>
                                 <div className="text-white font-medium group-hover:text-orange-400">Performance</div>
                                 <div className="text-xs text-slate-500">Image Optimization</div>
                              </div>
                           </a>
                        </div>
                        <div className="col-span-2 bg-slate-800 rounded-xl p-6 relative overflow-hidden">
                           <div className="relative z-10">
                              <h4 className="font-bold text-white mb-2">New: Vector Database</h4>
                              <p className="text-sm text-slate-400 mb-4 max-w-xs">Power your AI applications with our high-performance vector search.</p>
                              <button className="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-500 transition-colors">Try Beta</button>
                           </div>
                           <div className="absolute right-0 bottom-0 opacity-10">
                              <Box className="w-32 h-32" />
                           </div>
                        </div>
                     </>
                  )}
                  
                  {(hovered === 'solutions' || hovered === 'resources') && (
                     <div className="col-span-4 text-center py-12 text-slate-500">
                        Placeholder content for {hovered}...
                     </div>
                  )}
               </div>
            </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
};

