'use client';

import React from 'react';
import { User, MessageSquare, Heart, ShoppingBag } from 'lucide-react';

export const ActivityFeed = () => {
  const activities = [
    { icon: User, color: 'bg-blue-500', text: 'New user registered', time: '2m ago' },
    { icon: ShoppingBag, color: 'bg-purple-500', text: 'New order #3452', time: '15m ago' },
    { icon: MessageSquare, color: 'bg-green-500', text: 'Comment on "Design System"', time: '1h ago' },
    { icon: Heart, color: 'bg-red-500', text: 'Project liked by @sarah', time: '3h ago' },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-full">
      <h3 className="font-bold text-slate-900 mb-6">Recent Activity</h3>
      <div className="space-y-6">
         {activities.map((item, i) => (
            <div key={i} className="flex gap-4 relative">
               {/* Vertical Line */}
               {i !== activities.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-[-24px] w-0.5 bg-slate-100" />
               )}
               
               <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white shrink-0 z-10 shadow-sm`}>
                  <item.icon className="w-4 h-4" />
               </div>
               <div>
                  <p className="text-sm font-medium text-slate-700 leading-none pt-1.5">{item.text}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.time}</p>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

