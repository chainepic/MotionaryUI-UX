'use client';

import React, { useState } from 'react';
import { Home, Search, Heart, User, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const MobileTabBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'create', icon: PlusCircle, label: 'Create', highlight: true },
    { id: 'likes', icon: Heart, label: 'Likes' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-black rounded-[3rem] h-[600px] border-[8px] border-slate-800 relative overflow-hidden flex flex-col shadow-2xl">
       {/* Screen Content */}
       <div className="flex-1 bg-slate-50 p-6 overflow-y-auto">
          <div className="h-8 w-32 bg-slate-200 rounded mb-6" />
          <div className="space-y-4">
             {[1,2,3].map(i => (
                <div key={i} className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100" />
             ))}
          </div>
       </div>

       {/* Tab Bar */}
       <div className="bg-white border-t border-slate-100 px-6 pb-8 pt-4 flex justify-between items-end relative">
          {tabs.map((tab) => {
             const isActive = activeTab === tab.id;
             return (
                <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`flex flex-col items-center gap-1 transition-colors relative z-10 w-12 
                      ${isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}
                      ${tab.highlight ? '-mt-6' : ''}
                   `}
                >
                   {tab.highlight ? (
                      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-transform">
                         <tab.icon className="w-7 h-7" />
                      </div>
                   ) : (
                      <tab.icon className="w-6 h-6" />
                   )}
                   
                   {!tab.highlight && (
                      <span className="text-[10px] font-medium">{tab.label}</span>
                   )}
                </button>
             );
          })}
       </div>
    </div>
  );
};

