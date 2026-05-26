'use client';

import React from 'react';

export const Fireflies = () => {
  // Generate random positions for CSS
  const fireflies = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
  }));

  return (
    <div className="relative w-full h-full bg-[#0f172a] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      
      {fireflies.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full bg-yellow-300 blur-[1px] opacity-0 animate-float"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: '4px',
            height: '4px',
            animation: `float ${f.duration}s ease-in-out infinite alternate, fade ${f.duration}s ease-in-out infinite`,
            animationDelay: `${f.delay}s`,
            boxShadow: '0 0 10px 2px rgba(253, 224, 71, 0.3)'
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px); }
        }
        @keyframes fade {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

