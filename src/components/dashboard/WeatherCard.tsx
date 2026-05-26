'use client';

import React from 'react';
import { CloudRain, Sun, Cloud, Wind, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export const WeatherCard = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-blue-100">San Francisco</h3>
          <p className="text-4xl font-bold mt-2">72°</p>
          <div className="flex items-center gap-2 mt-1 text-blue-100 text-sm">
            <span>High: 76°</span>
            <span>Low: 64°</span>
          </div>
        </div>
        <motion.div
           animate={{ y: [-2, 2, -2] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
           <Sun className="w-12 h-12 text-yellow-300" />
        </motion.div>
      </div>

      <div className="mt-8 flex justify-between items-end">
         <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-blue-100">
               <Wind className="w-4 h-4" /> <span>8 mph</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100">
               <Droplets className="w-4 h-4" /> <span>12%</span>
            </div>
         </div>
         <div className="text-right">
            <p className="font-medium">Sunny</p>
            <p className="text-xs text-blue-200">Feels like 74°</p>
         </div>
      </div>

      {/* Background Decor */}
      <Cloud className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10" />
      <Cloud className="absolute top-1/2 -left-8 w-24 h-24 text-white/5" />
    </div>
  );
};

