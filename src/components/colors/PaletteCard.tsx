'use client';

import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface PaletteCardProps {
  name: string;
  colors: string[];
  tags: string[];
}

export function PaletteCard({ name, colors, tags }: PaletteCardProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="bg-surface-50 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
      {/* Color Strip */}
      <div className="h-32 flex">
        {colors.map((color, index) => (
          <div
            key={index}
            className="h-full flex-1 group relative cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => copyToClipboard(color)}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
              {copied === color ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-white">{name}</h3>
        </div>
        
        {/* Hex Codes List (Small) */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
           {colors.map((c) => (
             <button 
               key={c} 
               onClick={() => copyToClipboard(c)}
               className="text-[10px] font-mono bg-white/5 px-1.5 py-0.5 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
             >
               {c}
             </button>
           ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/40 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

