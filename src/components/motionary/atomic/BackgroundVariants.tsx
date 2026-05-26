'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 1. Mesh Gradient (Animated)
export const MeshGradient = () => (
    <div className="w-full h-full absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,1),rgba(124,58,237,0.5),transparent)] animate-spin-slow opacity-50" />
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,1),rgba(37,99,235,0.5),transparent)] animate-spin-slow animation-delay-2000 opacity-50 mix-blend-overlay" style={{ animationDirection: 'reverse' }} />
    </div>
);

// 2. Grid Moving
export const MovingGrid = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <motion.div 
            className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:40px_40px] opacity-20"
            animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
    </div>
);

// 3. Dot Matrix
export const DotMatrix = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
    </div>
);

// 4. Aurora Borealis
export const AuroraBg = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl filter blur-3xl">
        <motion.div className="absolute top-0 left-0 w-full h-1/2 bg-green-500/30" animate={{ x: [-50, 50, -50], skewX: [-10, 10, -10] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute bottom-0 right-0 w-full h-1/2 bg-purple-500/30" animate={{ x: [50, -50, 50], skewX: [10, -10, 10] }} transition={{ duration: 10, repeat: Infinity }} />
    </div>
);

// 5. Neon Lines
export const NeonLines = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl flex items-center justify-center">
        {[1,2,3,4,5].map(i => (
            <motion.div 
                key={i}
                className="absolute w-full h-[2px] bg-primary shadow-[0_0_10px_#00f3ff]"
                style={{ top: `${i * 20}%` }}
                animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
        ))}
    </div>
);

// 6. Starfield (CSS)
export const StarfieldCSS = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full"
                style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: Math.random()*2 + 1, repeat: Infinity, delay: Math.random() }}
            />
        ))}
    </div>
);

// 7. Gradient Wave
export const GradientWave = () => (
    <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 overflow-hidden rounded-xl">
        <motion.div 
            className="absolute inset-0 bg-black"
            animate={{ opacity: [0.8, 0.6, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
    </div>
);

// 8. Hexagon Pattern
export const HexagonPattern = () => (
    <div className="w-full h-full absolute inset-0 bg-surface-100 overflow-hidden rounded-xl">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'40\' viewBox=\'0 0 24 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 40c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10s-10 4.477-10 10v20c0 5.523 4.477 10 10 10z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
    </div>
);

// 9. Radial Pulse
export const RadialPulse = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl flex items-center justify-center">
        {[1,2,3].map(i => (
            <motion.div 
                key={i}
                className="absolute border border-primary/30 rounded-full"
                initial={{ width: 0, height: 0, opacity: 1 }}
                animate={{ width: "150%", height: "150%", opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
            />
        ))}
    </div>
);

// 10. Noise Static (Animated)
export const AnimatedNoise = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 animate-[spin_0.5s_linear_infinite]" />
    </div>
);

// 11. Circuit Board
export const CircuitBoard = () => (
    <div className="w-full h-full absolute inset-0 bg-surface-200 overflow-hidden rounded-xl">
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M10 10h30v10h-30z" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="10" cy="10" r="2" fill="white"/>
                <circle cx="40" cy="20" r="2" fill="white"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
    </div>
);

// 12. Fog Flow
export const FogFlow = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

// 13. Stripes Moving
export const MovingStripes = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.1)_50%,rgba(255,255,255,.1)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[spin_2s_linear_infinite]" />
    </div>
);

// 14. Rain Effect
export const RainEffect = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        {[...Array(10)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-[1px] h-10 bg-blue-400/50"
                style={{ left: `${Math.random()*100}%`, top: -40 }}
                animate={{ top: "100%" }}
                transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: Math.random(), ease: "linear" }}
            />
        ))}
    </div>
);

// 15. Fire Ember
export const FireEmbers = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        {[...Array(10)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-500 rounded-full blur-[1px]"
                style={{ left: `${Math.random()*100}%`, bottom: -10 }}
                animate={{ bottom: "100%", opacity: 0, x: Math.random()*20 - 10 }}
                transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: Math.random() }}
            />
        ))}
    </div>
);

// 16. Bokeh Blur
export const BokehBlur = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-white/10 blur-xl"
                style={{ 
                    width: Math.random()*50 + 20, 
                    height: Math.random()*50 + 20,
                    left: `${Math.random()*80}%`,
                    top: `${Math.random()*80}%`
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3 + Math.random(), repeat: Infinity }}
            />
        ))}
    </div>
);

// 17. Cyber Grid (Perspective)
export const CyberGrid = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl perspective-500">
        <motion.div 
            className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:40px_40px] opacity-30 origin-bottom"
            style={{ rotateX: 60 }}
            animate={{ backgroundPositionY: ["0px", "40px"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black" />
    </div>
);

// 18. Spotlight Follow (Global) - Simplified for component
export const SpotlightFollow = () => {
    // Needs mouse tracking logic usually, simplified here
    return (
        <div className="w-full h-full absolute inset-0 bg-surface-100 overflow-hidden rounded-xl flex items-center justify-center group">
            <div className="w-32 h-32 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    )
}

// 19. Vignette Pulse
export const VignettePulse = () => (
    <div className="w-full h-full absolute inset-0 bg-white overflow-hidden rounded-xl">
        <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,black_150%)]"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
    </div>
);

// 20. TV Glitch Lines
export const TvGlitchBg = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <motion.div 
            className="absolute w-full h-[2px] bg-white/20"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
            className="absolute w-full h-[5px] bg-white/10"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
        />
    </div>
);


// DotGridWave
export const DotGridWave = () => (
    <div className="w-full h-64 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
);

// IsometricLinesBg
export const IsometricLinesBg = () => (
    <div className="w-full h-64 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(30deg, #444 1px, transparent 1px), linear-gradient(150deg, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>
);

// HexagonPulseBg
export const HexagonPulseBg = () => (
    <div className="w-full h-64 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 animate-pulse" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/hexellence.png")' }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 mix-blend-overlay"></div>
    </div>
);

// CrosshairBg
export const CrosshairBg = () => (
    <div className="w-full h-64 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-red-500/50 -translate-x-1/2"></div>
      <div className="absolute top-1/2 left-1/2 h-full w-[1px] bg-red-500/50 -translate-y-1/2"></div>
    </div>
);

// CircuitBoardBg
export const CircuitBoardBg = () => (
    <div className="w-full h-64 bg-green-950 relative overflow-hidden group">
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: 'radial-gradient(circle at center, #22c55e 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine"></div>
    </div>
);

// AuroraBorealis
export const AuroraBorealis = () => (
    <div className="w-full h-64 bg-black relative overflow-hidden">
      <div className="absolute -inset-[50%] bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-30 blur-[100px] animate-[spin_10s_linear_infinite]"></div>
    </div>
);

// MeshGradientFlow
export const MeshGradientFlow = () => (
    <div className="w-full h-64 relative overflow-hidden bg-white">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.2),transparent_50%),radial-gradient(circle_at_0%_0%,rgba(0,255,0,0.2),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(0,0,255,0.2),transparent_50%)] animate-[spin_20s_linear_infinite]"></div>
    </div>
);

// ConicSpinBg
export const ConicSpinBg = () => (
    <div className="w-full h-64 relative overflow-hidden flex items-center justify-center bg-zinc-900">
      <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,white_360deg)] opacity-10 animate-[spin_4s_linear_infinite]"></div>
    </div>
);

// SunsetFadeBg
export const SunsetFadeBg = () => (
    <div className="w-full h-64 bg-gradient-to-b from-indigo-900 via-purple-800 to-orange-500 animate-pulse"></div>
);

// NeonNightBg
export const NeonNightBg = () => (
    <div className="w-full h-64 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-pink-600/50 to-transparent blur-3xl"></div>
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-blue-600/50 to-transparent blur-3xl"></div>
    </div>
);

// MouseFollowSpot
export const MouseFollowSpot = () => (
    <div className="w-full h-64 bg-zinc-900 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.1)_0%,transparent_50%)] group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white/20 pointer-events-none">Hover Me</div>
    </div>
);

// RippleClickBg
export const RippleClickBg = () => (
    <div className="w-full h-64 bg-blue-600 relative overflow-hidden active:bg-blue-700 transition-colors">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-white/30 rounded-full scale-0 active:scale-[10] transition-transform duration-700 ease-out"></div>
      </div>
    </div>
);

// GridDistortionCSS
export const GridDistortionCSS = () => (
    <div className="w-full h-64 bg-black overflow-hidden relative group">
       <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 gap-1 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
         {[...Array(60)].map((_, i) => (
           <div key={i} className="bg-zinc-800/50 hover:bg-zinc-600 transition-colors rounded-sm"></div>
         ))}
       </div>
    </div>
);

// ParallaxStarsBg
export const ParallaxStarsBg = () => (
    <div className="w-full h-64 bg-slate-950 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:50px_50px] opacity-30 translate-x-0 group-hover:translate-x-10 transition-transform duration-1000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(white_2px,transparent_2px)] bg-[length:100px_100px] opacity-50 translate-x-0 group-hover:translate-x-20 transition-transform duration-1000"></div>
    </div>
);

// BlurFocusBg
export const BlurFocusBg = () => (
    <div className="w-full h-64 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000')] bg-cover bg-center filter blur-md hover:blur-none transition-all duration-700"></div>
);

// AbstractShapesBg
export const AbstractShapesBg = () => (
    <div className="w-full h-64 bg-zinc-100 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
);

// MatrixRainCSS
export const MatrixRainCSS = () => (
    <div className="w-full h-64 bg-black relative overflow-hidden font-mono text-green-500 text-xs opacity-50">
      <div className="absolute inset-0 flex justify-between px-2">
        <div className="animate-[fall_2s_infinite_linear]">1 0 1 0 1</div>
        <div className="animate-[fall_3s_infinite_linear] delay-75">0 1 0 1 0</div>
        <div className="animate-[fall_2.5s_infinite_linear] delay-150">1 1 0 0 1</div>
        <div className="animate-[fall_4s_infinite_linear] delay-300">0 0 1 1 0</div>
      </div>
    </div>
);

// StripesBg
export const StripesBg = () => (
    <div className="w-full h-64 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,black,black_10px,transparent_10px,transparent_20px)] animate-[shine_20s_linear_infinite]"></div>
    </div>
);

// ZigZagBg
export const ZigZagBg = () => (
    <div className="w-full h-64 bg-orange-500 relative overflow-hidden">
       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(135deg, #fff 25%, transparent 25%), linear-gradient(225deg, #fff 25%, transparent 25%), linear-gradient(45deg, #fff 25%, transparent 25%), linear-gradient(315deg, #fff 25%, transparent 25%)', backgroundPosition: '10px 0, 10px 0, 0 0, 0 0', backgroundSize: '20px 20px', backgroundRepeat: 'repeat' }}></div>
    </div>
);

// PolkaDotBg
export const PolkaDotBg = () => (
    <div className="w-full h-64 bg-indigo-600 relative overflow-hidden hover:bg-indigo-500 transition-colors">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
    </div>
);

// WarmGlowBg
export const WarmGlowBg = () => (
    <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-amber-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse"></div>
    </div>
);

// ColdSteelBg
export const ColdSteelBg = () => (
    <div className="w-full h-64 bg-gradient-to-b from-slate-300 to-slate-500 relative overflow-hidden group">
       <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
);

// VignetteBg
export const VignetteBg = () => (
    <div className="w-full h-64 bg-emerald-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,black_150%)]"></div>
    </div>
);

// GrainyNoiseBg
export const GrainyNoiseBg = () => (
    <div className="w-full h-64 bg-zinc-800 relative isolate">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ filter: 'url(#noiseFilter)' }}></div>
      <svg className="hidden"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch"/></filter></svg>
      <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl">NOISE</div>
    </div>
);

// GradientBorderBg
export const GradientBorderBg = () => (
    <div className="w-full h-64 p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl">
      <div className="w-full h-full bg-black rounded-lg back"></div>
    </div>
);

// CircleScatterBg
export const CircleScatterBg = () => (
    <div className="w-full h-64 bg-purple-900 relative overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white/10 animate-pulse" 
             style={{ 
               width: Math.random() * 50 + 10, 
               height: Math.random() * 50 + 10, 
               top: Math.random() * 100 + '%', 
               left: Math.random() * 100 + '%',
               animationDuration: Math.random() * 3 + 1 + 's'
             }} />
      ))}
    </div>
);

// LineFlowBg
export const LineFlowBg = () => (
    <div className="w-full h-64 bg-black relative overflow-hidden">
       <div className="absolute inset-0 border-t border-white/20 translate-y-8"></div>
       <div className="absolute inset-0 border-t border-white/20 translate-y-16"></div>
       <div className="absolute inset-0 border-t border-white/20 translate-y-24"></div>
       <div className="absolute top-0 left-0 w-2 h-full bg-white/50 blur-md animate-[slide-right_3s_linear_infinite]"></div>
    </div>
);

// CheckerboardBg
export const CheckerboardBg = () => (
    <div className="w-full h-64 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
    </div>
);

// SplitColorBg
export const SplitColorBg = () => (
    <div className="w-full h-64 relative flex">
      <div className="flex-1 bg-yellow-400 hover:flex-[2] transition-all duration-500"></div>
      <div className="flex-1 bg-black hover:flex-[2] transition-all duration-500"></div>
    </div>
);

// DiagonalSlideBg
export const DiagonalSlideBg = () => (
    <div className="w-full h-64 bg-blue-500 relative overflow-hidden group">
      <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12 origin-left"></div>
    </div>
);

// SunsetShift
export const SunsetShift = () => (
    <div className="absolute inset-0 bg-gradient-to-b from-orange-400 via-red-500 to-purple-900 animate-[gradient-y_5s_ease-in-out_infinite] bg-[length:100%_200%]" />
);

// DeepSeaGradient
export const DeepSeaGradient = () => (
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,255,0.1),transparent_50%)] animate-pulse" />
    </div>
);

// HolographicFoil
export const HolographicFoil = () => (
    <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 animate-[hue-rotate_3s_infinite_linear] opacity-50" />
);

// DotMatrixScroll
export const DotMatrixScroll = () => (
    <div className="absolute inset-0 bg-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] animate-[slide-down_5s_linear_infinite]" />
    </div>
);

// GridPerspectivePlane
export const GridPerspectivePlane = () => (
    <div className="absolute inset-0 bg-zinc-900 perspective-500 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#444_1px,transparent_1px),linear-gradient(to_bottom,#444_1px,transparent_1px)] [background-size:40px_40px] transform rotate-x-60 scale-150 animate-[slide-up_2s_linear_infinite]" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
    </div>
);

// HexagonHive
export const HexagonHive = () => (
    <div className="absolute inset-0 bg-zinc-900">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'40\' viewBox=\'0 0 24 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 40c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10s-10 4.477-10 10v20c0 5.523 4.477 10 10 10z\' fill=\'%23fff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
    </div>
);

// ZigzagScroll
export const ZigzagScroll = () => (
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,#fff_25%,transparent_25%)_-50px_0,linear-gradient(225deg,#fff_25%,transparent_25%)_-50px_0,linear-gradient(315deg,#fff_25%,transparent_25%),linear-gradient(45deg,#fff_25%,transparent_25%)] [background-size:100px_100px] animate-[slide-right_10s_linear_infinite]" />
    </div>
);

// FirefliesSwarm
export const FirefliesSwarm = () => (
    <div className="absolute inset-0 bg-black overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-[float_5s_infinite_ease-in-out]" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }} />
      ))}
    </div>
);

// SnowfallSimple
export const SnowfallSimple = () => (
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-[fall_5s_linear_infinite]" style={{ left: `${Math.random() * 100}%`, animationDuration: `${2 + Math.random() * 3}s`, opacity: Math.random() }} />
      ))}
    </div>
);

// DustMotes
export const DustMotes = () => (
    <div className="absolute inset-0 bg-zinc-800 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="absolute w-0.5 h-0.5 bg-white rounded-full animate-[pulse_4s_infinite]" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }} />
      ))}
    </div>
);

// StarfieldWarp
export const StarfieldWarp = () => (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-[ping_1s_infinite]" style={{ transform: `rotate(${i * 36}deg) translateX(50px)`, animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
    </div>
);

// MouseTrailGlow
export const MouseTrailGlow = () => (
    <div className="absolute inset-0 bg-zinc-900 group overflow-hidden">
      <div className="w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 absolute pointer-events-none transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2" />
      <div className="absolute inset-0 flex items-center justify-center text-zinc-500">Hover Me</div>
    </div>
);

// ClickRippleBg
export const ClickRippleBg = () => (
    <div className="absolute inset-0 bg-zinc-800 active:bg-zinc-700 transition-colors duration-200 flex items-center justify-center cursor-pointer">
      <span className="text-zinc-500 select-none">Click Background</span>
    </div>
);

// ParallaxLayerBg
export const ParallaxLayerBg = () => (
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/800/600')] bg-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-900 to-transparent" />
    </div>
);

// SpotlightRevealBg
export const SpotlightRevealBg = () => (
    <div className="absolute inset-0 bg-black">
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" style={{ background: 'radial-gradient(circle at center, transparent 10%, black 50%)' }} />
      <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-bold text-4xl opacity-10">SECRET</div>
    </div>
);

// LavaLampBlobs
export const LavaLampBlobs = () => (
    <div className="absolute inset-0 bg-purple-900 overflow-hidden filter blur-xl contrast-150">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500 rounded-full animate-[float_6s_infinite_ease-in-out]" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-500 rounded-full animate-[float_7s_infinite_ease-in-out_reverse]" />
    </div>
);

// NoiseStaticTv
export const NoiseStaticTv = () => (
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20 animate-[noise_0.5s_steps(5)_infinite]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E")' }} />
    </div>
);

// LiquidBlobsBg
export const LiquidBlobsBg = () => (
    <div className="absolute inset-0 bg-white overflow-hidden">
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[float_6s_infinite]" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[float_6s_infinite_delay-2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[float_6s_infinite_delay-4s]" />
    </div>
);

// GlassPrismBg
export const GlassPrismBg = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/20">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite]" />
    </div>
);

// DiagonalStripes
export const DiagonalStripes = () => (
    <div className="absolute inset-0 bg-zinc-900">
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]" />
    </div>
);

// FloatingSquares
export const FloatingSquares = () => (
    <div className="absolute inset-0 bg-zinc-800 overflow-hidden">
      <div className="absolute w-10 h-10 border border-white/20 top-1/4 left-1/4 animate-[spin_10s_linear_infinite]" />
      <div className="absolute w-20 h-20 border border-white/10 bottom-1/4 right-1/4 animate-[spin_15s_linear_infinite_reverse]" />
    </div>
);

// RadialPulseBg
export const RadialPulseBg = () => (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,transparent_70%)] animate-[pulse_3s_infinite]" />
    </div>
);

// GridMoveBg
export const GridMoveBg = () => (
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] [background-size:20px_20px] animate-[slide-right_20s_linear_infinite]" />
    </div>
);

// CyberGridBg
export const CyberGridBg = () => (
    <div className="absolute inset-0 bg-black">
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-purple-900/50 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px)] [background-size:100%_20px]" />
    </div>
);

// ScanlineBg
export const ScanlineBg = () => (
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
      <div className="absolute w-full h-1 bg-white/10 top-0 animate-[scan-vertical_2s_linear_infinite]" />
    </div>
);

// BokehBg
export const BokehBg = () => (
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2" />
    </div>
);

// PatternMorphBg
export const PatternMorphBg = () => (
    <div className="absolute inset-0 bg-zinc-900 transition-all duration-1000 hover:bg-zinc-800 cursor-pointer">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:10px_10px] hover:[background-size:20px_20px] transition-all duration-1000" />
    </div>
);

// InteractiveGradient
export const InteractiveGradient = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 group hover:from-purple-500 hover:to-pink-500 transition-all duration-1000" />
);

// RainWindow
export const RainWindow = () => (
    <div className="absolute inset-0 bg-zinc-800">
      <div className="absolute w-0.5 h-4 bg-white/20 top-0 left-1/4 animate-[drop_1s_infinite]" />
      <div className="absolute w-0.5 h-4 bg-white/20 top-0 left-1/2 animate-[drop_1.5s_infinite_delay-200ms]" />
      <div className="absolute w-0.5 h-4 bg-white/20 top-0 left-3/4 animate-[drop_1.2s_infinite_delay-500ms]" />
    </div>
);

// MatrixCodeBg
export const MatrixCodeBg = () => (
    <div className="absolute inset-0 bg-black overflow-hidden font-mono text-green-500 text-xs opacity-50">
      <div className="absolute top-0 left-2 animate-[fall_2s_linear_infinite]">1 0 1 0</div>
      <div className="absolute top-0 left-8 animate-[fall_3s_linear_infinite_delay-1s]">0 1 0 0</div>
    </div>
);

// FloatingBubblesBg
export const FloatingBubblesBg = () => (
    <div className="absolute inset-0 bg-blue-900 overflow-hidden">
      <div className="absolute bottom-0 left-4 w-4 h-4 bg-white/20 rounded-full animate-[rise_4s_linear_infinite]" />
      <div className="absolute bottom-0 left-12 w-6 h-6 bg-white/20 rounded-full animate-[rise_6s_linear_infinite_delay-1s]" />
    </div>
);

// GlitchBackground
export const GlitchBackground = () => (
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-red-500/10 translate-x-1 animate-pulse" />
      <div className="absolute inset-0 bg-blue-500/10 -translate-x-1 animate-pulse animation-delay-75" />
    </div>
);

// WavesBg
export const WavesBg = () => (
    <div className="absolute inset-0 bg-blue-500 overflow-hidden">
      <div className="absolute bottom-0 w-[200%] h-20 bg-white/20 rounded-[50%] animate-[wave_4s_linear_infinite]" />
    </div>
);
