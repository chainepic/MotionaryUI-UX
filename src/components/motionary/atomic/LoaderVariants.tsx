'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, RefreshCw } from 'lucide-react';

// 1. Classic Spinner
export const ClassicSpinner = () => (
    <div className="w-8 h-8 border-4 border-white/10 border-t-primary rounded-full animate-spin" />
);

// 2. Pulsing Dots
export const PulseDots = () => (
    <div className="flex gap-1.5">
        {[0, 1, 2].map(i => (
            <motion.div
                key={i}
                className="w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
            />
        ))}
    </div>
);

// 3. Bouncing Ball
export const BouncingBall = () => (
    <div className="flex justify-center items-end h-10 pb-1 gap-1">
        {[0, 1, 2].map(i => (
            <motion.div
                key={i}
                className="w-3 h-3 bg-secondary rounded-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1, ease: "easeInOut" }}
            />
        ))}
    </div>
);

// 4. Orbit Loader
export const OrbitLoader = () => (
    <div className="relative w-10 h-10">
        <motion.div 
            className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.div 
            className="absolute inset-2 border-2 border-transparent border-b-secondary rounded-full"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
    </div>
);

// 5. Liquid Loader
export const LiquidLoader = () => (
    <div className="relative w-12 h-12 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-primary"
            animate={{ height: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        <motion.div 
            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"
        />
    </div>
);

// 6. Skeleton Loader
export const SkeletonLoader = () => (
    <div className="w-full max-w-[150px] space-y-2">
        <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
        <div className="h-3 bg-white/5 rounded w-full animate-pulse delay-75" />
        <div className="h-3 bg-white/5 rounded w-5/6 animate-pulse delay-150" />
    </div>
);

// 7. Text Typing Loader
export const TextLoader = () => (
    <div className="font-mono text-sm text-primary">
        LOADING<motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>...</motion.span>
    </div>
);

// 8. WiFi Signal
export const WifiLoader = () => (
    <div className="relative w-8 h-8 flex items-end justify-center overflow-hidden">
        <motion.div className="absolute bottom-0 w-1 h-1 bg-white rounded-full" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.div className="absolute bottom-[-4px] w-4 h-4 border-t-2 border-white rounded-full" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} />
        <motion.div className="absolute bottom-[-8px] w-7 h-7 border-t-2 border-white rounded-full" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} />
    </div>
);

// 9. Equalizer
export const EqualizerLoader = () => (
    <div className="flex items-end gap-0.5 h-6">
        {[1,2,3,4,5].map(i => (
            <motion.div 
                key={i}
                className="w-1 bg-accent"
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
            />
        ))}
    </div>
);

// 10. Hourglass (Rotating)
export const HourglassLoader = () => (
    <motion.div 
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[16px] border-t-white" />
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-white" />
    </motion.div>
);

// 11. DNA Helix
export const DNALoader = () => (
    <div className="flex gap-1 items-center">
        {[...Array(8)].map((_, i) => (
            <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
            />
        ))}
    </div>
);

// 12. Infinity Loop (SVG)
export const InfinityLoader = () => (
    <svg className="w-16 h-8" viewBox="0 0 100 50">
        <motion.path
            d="M20,25 C20,10 40,10 50,25 C60,40 80,40 80,25 C80,10 60,10 50,25 C40,40 20,40 20,25"
            fill="none"
            stroke="#00f3ff"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: 1 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
    </svg>
);

// 13. Radar Scan
export const RadarLoader = () => (
    <div className="relative w-12 h-12 border border-white/30 rounded-full flex items-center justify-center overflow-hidden">
        <div className="w-1 h-1 bg-white rounded-full" />
        <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            style={{ transformOrigin: "center", clipPath: "polygon(50% 50%, 100% 0, 100% 100%)" }} // Simplified wedge
        />
    </div>
);

// 14. Battery Charge
export const BatteryLoader = () => (
    <div className="flex items-center gap-1">
        <div className="w-10 h-5 border border-white/50 rounded-sm p-0.5 flex">
             <motion.div 
                className="h-full bg-green-500 rounded-sm"
                animate={{ width: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2 }}
             />
        </div>
        <div className="w-1 h-2 bg-white/50 rounded-r-sm" />
    </div>
);

// 15. Gear Spin
export const GearLoader = () => (
    <div className="relative">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
            <RefreshCw className="w-8 h-8 text-white/50" />
        </motion.div>
         <motion.div 
            className="absolute -bottom-2 -right-2"
            animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
            <RefreshCw className="w-5 h-5 text-primary" />
        </motion.div>
    </div>
);

// 16. Progress Bar (Striped)
export const StripedProgress = () => (
    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden relative">
        <motion.div 
            className="absolute inset-y-0 left-0 bg-primary w-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[spin_1s_linear_infinite]" />
    </div>
);

// 17. Ripple Effect
export const RippleLoader = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
        {[0, 1].map(i => (
            <motion.div
                key={i}
                className="absolute border-2 border-primary rounded-full"
                initial={{ width: 0, height: 0, opacity: 1 }}
                animate={{ width: "100%", height: "100%", opacity: 0 }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.75 }}
            />
        ))}
    </div>
);

// 18. Flipping Square
export const FlipSquareLoader = () => (
    <motion.div 
        className="w-8 h-8 bg-secondary"
        animate={{ 
            rotateX: [0, 180, 180, 0],
            rotateY: [0, 0, 180, 0],
        }}
        transition={{ repeat: Infinity, duration: 2, times: [0, 0.5, 0.5, 1] }}
    />
);

// 19. Glitch Loader
export const GlitchLoader = () => (
    <div className="font-black text-xl text-white relative">
        <span className="relative z-10">LOADING</span>
        <motion.span 
            className="absolute top-0 left-0 text-red-500 opacity-70"
            animate={{ x: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 0.2 }}
        >LOADING</motion.span>
        <motion.span 
            className="absolute top-0 left-0 text-blue-500 opacity-70"
            animate={{ x: [2, -2, 2] }}
            transition={{ repeat: Infinity, duration: 0.2, delay: 0.1 }}
        >LOADING</motion.span>
    </div>
);

// 20. Circular Progress Number
export const CircularNumberLoader = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
             <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
             <motion.circle 
                cx="24" cy="24" r="20" stroke="#00f3ff" strokeWidth="4" fill="none" 
                strokeDasharray="126"
                strokeDashoffset="126"
                animate={{ strokeDashoffset: 0 }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             />
        </svg>
        <span className="text-[10px] font-mono absolute">99%</span>
    </div>
);


// DNASpiral
export const DNASpiral = () => (
    <div className="flex gap-1 items-center justify-center h-16">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="w-2 h-2 bg-blue-500 rounded-full animate-[bounce_1s_infinite]" style={{ animationDelay: `${i * 100}ms` }} />
      ))}
    </div>
);

// CubeRotate
export const CubeRotate = () => (
    <div className="w-8 h-8 bg-blue-500 animate-[spin_2s_infinite] rounded-sm" />
);

// LiquidBlob
export const LiquidBlob = () => (
    <div className="w-12 h-12 bg-purple-500 rounded-full animate-[blob_3s_infinite] filter blur-sm" />
);

// NeonRing
export const NeonRing = () => (
    <div className="w-12 h-12 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin shadow-[0_0_10px_#22d3ee]" />
);

// SquareFill
export const SquareFill = () => (
    <div className="w-10 h-10 border-2 border-white relative">
      <div className="absolute inset-0 bg-white animate-[fill-up_2s_infinite]" />
    </div>
);

// TwinCircles
export const TwinCircles = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full border-4 border-white opacity-20" />
      <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin" />
      <div className="absolute inset-2 rounded-full border-4 border-red-500 border-b-transparent animate-spin direction-reverse" />
    </div>
);

// PulseRadar
export const PulseRadar = () => (
    <div className="w-12 h-12 bg-green-500 rounded-full animate-ping opacity-75" />
);

// BouncingDots
export const BouncingDots = () => (
    <div className="flex gap-2">
      <div className="w-3 h-3 bg-white rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100" />
      <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200" />
    </div>
);

// CircularDash
export const CircularDash = () => (
    <svg className="w-12 h-12 animate-spin text-indigo-500" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
);

// BarScanner
export const BarScanner = () => (
    <div className="w-16 h-1 bg-zinc-700 overflow-hidden relative rounded-full">
      <div className="absolute top-0 left-0 w-8 h-full bg-blue-500 animate-[slide-scan_1.5s_infinite_linear]" />
    </div>
);

// SegmentLoad
export const SegmentLoad = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-2 h-6 bg-zinc-700 animate-[pulse_1s_infinite]" style={{ animationDelay: `${i * 150}ms` }} />
      ))}
    </div>
);

// GradientFillBar
export const GradientFillBar = () => (
    <div className="w-32 h-2 bg-zinc-800 rounded-full overflow-hidden">
      <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 animate-[progress_2s_ease-in-out_infinite] origin-left scale-x-0" />
    </div>
);

// StepsVertical
export const StepsVertical = () => (
    <div className="flex flex-col gap-1 items-center">
      <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
      <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
      <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
    </div>
);

// OrbitMoon
export const OrbitMoon = () => (
    <div className="w-8 h-8 bg-zinc-800 rounded-full relative flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-full absolute top-0 animate-[spin_1s_infinite_linear] origin-[50%_100%] h-full" />
    </div>
);

// TypingCursor
export const TypingCursor = () => (
    <div className="flex items-center text-zinc-400 font-mono">
      Loading
      <span className="w-2 h-4 bg-white ml-1 animate-[blink_1s_infinite]" />
    </div>
);

// ScrambleLoad
export const ScrambleLoad = () => (
    <div className="font-mono text-sm animate-pulse">
      XJ9#_LOAD
    </div>
);

// GradientTextLoad
export const GradientTextLoad = () => (
    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-500 animate-[shimmer_2s_infinite] bg-[length:200%_100%]">
      Loading...
    </div>
);

// CoffeeFill
export const CoffeeFill = () => (
    <div className="w-8 h-10 border-2 border-zinc-500 rounded-b-lg relative overflow-hidden flex items-end">
      <div className="w-full bg-amber-700 animate-[fill-up_3s_infinite]" style={{ height: '0%' }} />
      <div className="absolute top-2 right-[-6px] w-2 h-4 border-2 border-l-0 border-zinc-500 rounded-r-md" />
    </div>
);

// HourglassFlip
export const HourglassFlip = () => (
    <div className="text-2xl animate-[spin_3s_infinite]">⏳</div>
);

// BatteryChargeLoop
export const BatteryChargeLoop = () => (
    <div className="w-10 h-5 border-2 border-zinc-500 rounded relative p-0.5">
      <div className="h-full bg-green-500 w-full animate-[pulse_2s_infinite]" />
      <div className="absolute -right-1.5 top-1 w-1 h-2 bg-zinc-500 rounded-r" />
    </div>
);

// WifiSignal
export const WifiSignal = () => (
    <div className="flex gap-1 items-end h-6">
      <div className="w-1 h-2 bg-zinc-500 animate-[pulse_1s_infinite]" />
      <div className="w-1 h-3 bg-zinc-500 animate-[pulse_1s_infinite_delay-100ms]" />
      <div className="w-1 h-5 bg-zinc-500 animate-[pulse_1s_infinite_delay-200ms]" />
      <div className="w-1 h-6 bg-zinc-500 animate-[pulse_1s_infinite_delay-300ms]" />
    </div>
);

// UploadingCloud
export const UploadingCloud = () => (
    <div className="relative">
      <svg className="w-10 h-10 text-zinc-600" fill="currentColor" viewBox="0 0 24 24"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-[loading_1.5s_infinite]" />
    </div>
);

// ServerBlink
export const ServerBlink = () => (
    <div className="flex flex-col gap-1">
      <div className="w-8 h-2 bg-zinc-700 rounded-full animate-pulse" />
      <div className="w-8 h-2 bg-zinc-700 rounded-full animate-pulse delay-75" />
      <div className="w-8 h-2 bg-zinc-700 rounded-full animate-pulse delay-150" />
    </div>
);

// PacmanEat
export const PacmanEat = () => (
    <div className="flex items-center gap-1">
      <div className="w-4 h-4 bg-yellow-400 rounded-full clip-path-polygon-[100%_0,100%_100%,50%_50%] animate-[chomp_0.5s_infinite]" />
      <div className="w-1 h-1 bg-white rounded-full animate-[slide-left_1s_infinite]" />
      <div className="w-1 h-1 bg-white rounded-full animate-[slide-left_1s_infinite_delay-300ms]" />
    </div>
);

// EqualizerBars
export const EqualizerBars = () => (
    <div className="flex gap-0.5 items-end h-8">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="w-1 bg-pink-500 animate-[equalizer_0.5s_infinite_ease-in-out_alternate]" style={{ height: `${Math.random() * 100}%`, animationDelay: `${Math.random()}s` }} />
      ))}
    </div>
);

// GlobeSpin
export const GlobeSpin = () => (
    <div className="w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center animate-[spin_5s_linear_infinite]">
      🌎
    </div>
);

// SearchRadar
export const SearchRadar = () => (
    <div className="w-10 h-10 border border-zinc-700 rounded-full relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-green-500 origin-left animate-[spin_2s_linear_infinite]" />
    </div>
);

// RefreshSpin
export const RefreshSpin = () => (
    <svg className="w-6 h-6 text-zinc-400 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
);

// InfinityLoop
export const InfinityLoop = () => (
    <div className="text-3xl text-blue-500 font-bold animate-[pulse_2s_infinite]">∞</div>
);

// PendulumSwing
export const PendulumSwing = () => (
    <div className="w-1 h-10 bg-zinc-600 origin-top animate-[swing_2s_infinite_ease-in-out]">
      <div className="w-4 h-4 bg-zinc-400 rounded-full -ml-1.5 mt-10" />
    </div>
);
