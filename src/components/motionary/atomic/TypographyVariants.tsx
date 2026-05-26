'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 1. Kinetic Text
export const KineticText = () => (
  <h1 className="text-4xl font-black uppercase tracking-tighter hover:tracking-widest transition-all duration-500 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 hover:from-primary hover:to-secondary">
    Kinetic
  </h1>
);

// 2. Glitch Text
export const GlitchText = () => (
  <div className="relative group cursor-pointer">
    <h1 className="text-4xl font-mono font-bold text-white relative z-10">GLITCH_TXT</h1>
    <h1 className="text-4xl font-mono font-bold text-red-500 absolute top-0 left-0 -z-10 translate-x-[2px] opacity-0 group-hover:opacity-100 group-hover:animate-pulse">GLITCH_TXT</h1>
    <h1 className="text-4xl font-mono font-bold text-blue-500 absolute top-0 left-0 -z-10 -translate-x-[2px] opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-75">GLITCH_TXT</h1>
  </div>
);

// 3. Gradient Text
export const GradientText = () => (
  <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300%">
    Gradient Flow
  </h1>
);

// 4. Typewriter
export const TypewriterText = () => (
  <div className="font-mono text-2xl border-r-2 border-white pr-1 animate-pulse">
    typing_effect_
  </div>
);

// 5. Masked Text
export const MaskedText = () => (
  <h1 className="text-5xl font-black text-transparent bg-clip-text bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center hover:scale-110 transition-transform cursor-pointer">
    MASKED
  </h1>
);

// 6. Staggered Text
export const StaggeredText = () => {
  const letters = "STAGGERED".split("");
  return (
    <div className="flex overflow-hidden">
      {letters.map((l, i) => (
        <span key={i} className="text-3xl font-bold hover:-translate-y-2 transition-transform duration-300 cursor-default">
          {l}
        </span>
      ))}
    </div>
  );
};

// 7. Outline Text
export const OutlineText = () => (
  <h1 className="text-4xl font-black text-transparent stroke-white stroke-2 hover:text-white transition-colors duration-300 cursor-pointer" style={{ WebkitTextStroke: '1px white' }}>
    OUTLINE
  </h1>
);

// 8. Neon Text
export const NeonText = () => (
  <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_20px_#00f3ff] hover:text-primary transition-all duration-300">
    NEON LIGHTS
  </h1>
);

// 9. Retro Pixel
export const RetroPixelText = () => (
  <h1 className="text-2xl font-mono tracking-widest text-green-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase">
    Start Game
  </h1>
);

// 10. 3D Layer Text
export const ThreeDText = () => (
  <h1 className="text-4xl font-black text-white hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200" 
      style={{ textShadow: '4px 4px 0px #2563eb' }}>
    3D LAYER
  </h1>
);

// 11. Fade Reveal
export const FadeRevealText = () => (
  <h1 className="text-3xl font-light text-white/20 hover:text-white transition-colors duration-700 cursor-pointer">
    Reveal Me
  </h1>
);

// 12. Scramble Text (Static Demo)
export const ScrambleText = () => (
  <h1 className="font-mono text-2xl group cursor-pointer">
    <span className="group-hover:hidden">TARGET</span>
    <span className="hidden group-hover:inline">010101</span>
  </h1>
);

// 13. Highlight Mark
export const HighlightText = () => (
  <span className="text-2xl font-bold relative inline-block group cursor-pointer">
    Highlight
    <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-500/50 -z-10 group-hover:h-full transition-all duration-300" />
  </span>
);

// 14. Reflection
export const ReflectionText = () => (
  <div className="relative">
    <h1 className="text-4xl font-bold text-white">REFLECT</h1>
    <h1 className="text-4xl font-bold text-white/20 scale-y-[-1] absolute top-full left-0 bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent">REFLECT</h1>
  </div>
);

// 15. Wave Text
export const WaveText = () => (
  <div className="flex">
    {"WAVE".split("").map((l, i) => (
      <span key={i} className="text-3xl font-bold animate-bounce" style={{ animationDelay: `${i * 100}ms` }}>{l}</span>
    ))}
  </div>
);

// 16. Smokey Text
export const SmokeyText = () => (
  <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-transparent hover:blur-sm transition-all duration-500 cursor-pointer">
    SMOKE
  </h1>
);

// 17. Elastic Letter
export const ElasticLetter = () => (
  <h1 className="text-4xl font-black tracking-tighter hover:tracking-normal transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] cursor-pointer">
    ELASTIC
  </h1>
);

// 18. Spotlight Text
export const SpotlightText = () => (
  <h1 className="text-4xl font-bold text-zinc-800 bg-clip-text hover:text-transparent bg-gradient-to-r from-zinc-800 via-white to-zinc-800 bg-[length:50%_100%] bg-no-repeat animate-[shimmer_2s_infinite]">
    SPOTLIGHT
  </h1>
);

// 19. Variable Font (Weight)
export const VariableWeightText = () => (
  <h1 className="text-4xl font-thin hover:font-black transition-all duration-500 cursor-pointer">
    VARIABLE
  </h1>
);

// 20. Code Typing
export const CodeTypeText = () => (
  <div className="font-mono text-sm bg-zinc-900 p-2 rounded text-green-400">
    &gt; npm install motionary
  </div>
);

