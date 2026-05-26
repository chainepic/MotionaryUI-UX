'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// 1. Bar Chart Grow
export const BarChartGrow = () => (
    <div className="flex items-end gap-2 h-24">
        {[40, 70, 50, 90, 60, 30].map((h, i) => (
            <motion.div
                key={i}
                className="w-4 bg-primary rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
            />
        ))}
    </div>
);

// 2. Circular Progress
export const CircleProgress = () => (
    <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
            <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
            <motion.circle 
                cx="48" cy="48" r="40" stroke="#00f3ff" strokeWidth="8" fill="none"
                strokeDasharray="251" strokeDashoffset="251"
                animate={{ strokeDashoffset: 251 * 0.25 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold">75%</div>
    </div>
);

// 3. Counter Count Up
export const CountUp = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c < 100 ? c + 1 : 100);
        }, 20);
        return () => clearInterval(interval);
    }, []);
    return <div className="text-4xl font-mono font-bold">{count}%</div>
};

// 4. Line Chart Draw
export const LineChart = () => (
    <svg className="w-full h-24 overflow-visible" viewBox="0 0 100 50">
        <motion.path 
            d="M0,50 L20,30 L40,40 L60,10 L80,25 L100,5"
            fill="none" stroke="#00f3ff" strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
        />
    </svg>
);

// 5. Pie Chart Spin
export const PieChart = () => (
    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-surface-200">
        <motion.div 
            className="absolute inset-0 bg-primary"
            initial={{ clipPath: "polygon(50% 50%, 50% 0%, 50% 0%)" }}
            animate={{ clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)" }} // ~40%
            transition={{ duration: 1 }}
        />
    </div>
);

// 6. Area Chart Fill
export const AreaChart = () => (
    <svg className="w-full h-24" viewBox="0 0 100 50" preserveAspectRatio="none">
        <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00f3ff" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#00f3ff" stopOpacity="0"/>
            </linearGradient>
        </defs>
        <motion.path 
            d="M0,50 L0,30 L20,40 L40,10 L60,30 L80,20 L100,40 L100,50 Z"
            fill="url(#grad)"
            initial={{ d: "M0,50 L0,50 L20,50 L40,50 L60,50 L80,50 L100,50 L100,50 Z" }}
            animate={{ d: "M0,50 L0,30 L20,40 L40,10 L60,30 L80,20 L100,40 L100,50 Z" }}
            transition={{ duration: 1 }}
        />
    </svg>
);

// 7. Scatter Plot Pop
export const ScatterPlot = () => (
    <div className="relative w-full h-24 bg-surface-100 rounded border border-white/10">
        {[...Array(10)].map((_, i) => (
            <motion.div 
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{ left: `${Math.random()*90}%`, bottom: `${Math.random()*90}%` }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
            />
        ))}
    </div>
);

// 8. Vertical Progress
export const VerticalProgress = () => (
    <div className="w-4 h-24 bg-surface-100 rounded-full overflow-hidden flex items-end">
        <motion.div 
            className="w-full bg-secondary"
            initial={{ height: 0 }}
            animate={{ height: "60%" }}
            transition={{ duration: 1 }}
        />
    </div>
);

// 9. Radar Chart Draw
export const RadarChart = () => (
    <svg className="w-24 h-24" viewBox="0 0 100 100">
        <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <motion.polygon 
            points="50,20 80,50 50,80 20,50"
            fill="rgba(0,243,255,0.3)" stroke="#00f3ff" strokeWidth="2"
            initial={{ scale: 0, transformOrigin: "center" }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        />
    </svg>
);

// 10. Stacked Bar
export const StackedBar = () => (
    <div className="w-full h-6 bg-surface-100 rounded overflow-hidden flex">
        <motion.div className="h-full bg-primary" initial={{ width: 0 }} animate={{ width: "40%" }} transition={{ duration: 0.5 }} />
        <motion.div className="h-full bg-secondary" initial={{ width: 0 }} animate={{ width: "30%" }} transition={{ duration: 0.5, delay: 0.5 }} />
        <motion.div className="h-full bg-accent" initial={{ width: 0 }} animate={{ width: "20%" }} transition={{ duration: 0.5, delay: 1 }} />
    </div>
);

// 11. Live Data Stream
export const LiveData = () => (
    <div className="flex items-end gap-1 h-12 w-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-1 bg-primary"
                animate={{ height: [10, Math.random()*40+10, 10] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
            />
        ))}
    </div>
);

// 12. Donut Chart
export const DonutChart = () => (
    <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
            <circle cx="48" cy="48" r="30" stroke="rgba(255,255,255,0.1)" strokeWidth="15" fill="none" />
            <motion.circle 
                cx="48" cy="48" r="30" stroke="#ff00ff" strokeWidth="15" fill="none"
                strokeDasharray="188" strokeDashoffset="188"
                animate={{ strokeDashoffset: 188 * 0.4 }}
                transition={{ duration: 1 }}
            />
        </svg>
    </div>
);

// 13. Heatmap Grid
export const Heatmap = () => (
    <div className="grid grid-cols-5 gap-1">
        {[...Array(25)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-4 h-4 rounded-sm"
                initial={{ opacity: 0 }}
                animate={{ 
                    backgroundColor: `rgba(0,243,255, ${Math.random()})`,
                    opacity: 1 
                }}
                transition={{ delay: i * 0.02 }}
            />
        ))}
    </div>
);

// 14. Funnel Chart
export const FunnelChart = () => (
    <div className="flex flex-col items-center gap-1 w-full">
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-4 bg-primary/80 rounded" transition={{ duration: 0.5 }} />
        <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} className="h-4 bg-primary/60 rounded" transition={{ duration: 0.5, delay: 0.2 }} />
        <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} className="h-4 bg-primary/40 rounded" transition={{ duration: 0.5, delay: 0.4 }} />
        <motion.div initial={{ width: 0 }} animate={{ width: "40%" }} className="h-4 bg-primary/20 rounded" transition={{ duration: 0.5, delay: 0.6 }} />
    </div>
);

// 15. Gauge Meter
export const GaugeChart = () => (
    <div className="relative w-24 h-12 overflow-hidden">
        <div className="w-24 h-24 rounded-full border-8 border-white/10" />
        <motion.div 
            className="absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-t-primary border-r-primary border-b-transparent border-l-transparent -rotate-45"
            initial={{ rotate: -135 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1 }}
        />
    </div>
);

// 16. Network Graph
export const NetworkGraph = () => (
    <div className="relative w-full h-24">
        {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute w-2 h-2 bg-white rounded-full" 
                style={{ top: Math.random()*80+"%", left: Math.random()*80+"%" }}
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i*0.1 }}
            />
        ))}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.line x1="20%" y1="20%" x2="80%" y2="80%" stroke="white" strokeWidth="1" strokeOpacity="0.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
        </svg>
    </div>
);

// 17. Comparison Bars
export const ComparisonBars = () => (
    <div className="flex items-center gap-4 w-full">
        <div className="flex-1 flex flex-col items-end gap-1">
            <motion.div className="h-2 bg-white/50 rounded w-full" initial={{ width: 0 }} animate={{ width: "80%" }} />
            <motion.div className="h-2 bg-white/50 rounded w-full" initial={{ width: 0 }} animate={{ width: "60%" }} />
        </div>
        <div className="w-px h-12 bg-white/20" />
        <div className="flex-1 flex flex-col gap-1">
            <motion.div className="h-2 bg-primary rounded w-full" initial={{ width: 0 }} animate={{ width: "90%" }} />
            <motion.div className="h-2 bg-primary rounded w-full" initial={{ width: 0 }} animate={{ width: "70%" }} />
        </div>
    </div>
);

// 18. Step Tracker
export const StepTracker = () => (
    <div className="flex justify-between items-center w-full relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10" />
        <motion.div className="absolute top-1/2 left-0 h-0.5 bg-primary -z-10" initial={{ width: 0 }} animate={{ width: "50%" }} transition={{ duration: 1 }} />
        <div className="w-4 h-4 bg-primary rounded-full" />
        <div className="w-4 h-4 bg-primary rounded-full" />
        <div className="w-4 h-4 bg-white/20 rounded-full" />
    </div>
);

// 19. Candle Stick
export const CandleStick = () => (
    <div className="flex items-center gap-2 h-16">
        <div className="w-2 bg-green-500 h-8 relative rounded-sm"><div className="absolute -top-2 left-1/2 w-px h-12 bg-green-500 -translate-x-1/2" /></div>
        <div className="w-2 bg-red-500 h-6 relative rounded-sm"><div className="absolute -top-1 left-1/2 w-px h-10 bg-red-500 -translate-x-1/2" /></div>
        <div className="w-2 bg-green-500 h-10 relative rounded-sm"><div className="absolute -top-3 left-1/2 w-px h-16 bg-green-500 -translate-x-1/2" /></div>
    </div>
);

// 20. Percentage Ring (Small)
export const MiniRing = () => (
    <div className="w-8 h-8 border-2 border-white/10 rounded-full flex items-center justify-center relative">
        <motion.div className="absolute inset-0 border-2 border-primary rounded-full border-l-transparent border-b-transparent rotate-45" animate={{ rotate: 405 }} transition={{ duration: 1.5 }} />
        <span className="text-[8px]">50</span>
    </div>
);


// BarChartRace
export const BarChartRace = () => (
    <div className="flex flex-col gap-2 w-full h-32">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-4 bg-blue-500 rounded animate-[width-race_2s_ease-in-out_infinite_alternate]" style={{ width: `${Math.random() * 50 + 20}%`, animationDelay: `${i * 0.2}s` }} />
          <span className="text-[10px] text-zinc-500">Item {i+1}</span>
        </div>
      ))}
    </div>
);

// LineGraphDraw
export const LineGraphDraw = () => (
    <div className="w-full h-32 relative overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
        <path d="M0,50 L10,40 L20,45 L30,20 L40,30 L50,10 L60,25 L70,15 L80,35 L90,20 L100,5" fill="none" stroke="#10b981" strokeWidth="1" className="animate-[draw-path_2s_ease-out_forwards]" strokeDasharray="200" strokeDashoffset="200" />
        <path d="M0,50 L10,40 L20,45 L30,20 L40,30 L50,10 L60,25 L70,15 L80,35 L90,20 L100,5 V50 H0 Z" fill="url(#gradient)" className="opacity-0 animate-[fade-in_1s_delay-1s_forwards]" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
);

// PieChartSlice
export const PieChartSlice = () => (
    <div className="w-24 h-24 rounded-full bg-zinc-800 relative overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 bg-blue-500 clip-path-polygon-[50%_50%,100%_0,100%_50%] hover:scale-110 transition-transform origin-center" />
      <div className="absolute inset-0 bg-red-500 clip-path-polygon-[50%_50%,100%_50%,50%_100%] hover:scale-110 transition-transform origin-center" />
      <div className="absolute inset-0 bg-green-500 clip-path-polygon-[50%_50%,50%_100%,0_50%] hover:scale-110 transition-transform origin-center" />
      <div className="absolute inset-0 bg-yellow-500 clip-path-polygon-[50%_50%,0_50%,50%_0] hover:scale-110 transition-transform origin-center" />
      <div className="absolute inset-0 bg-purple-500 clip-path-polygon-[50%_50%,50%_0,100%_0] hover:scale-110 transition-transform origin-center" />
    </div>
);

// RadarPolygon
export const RadarPolygon = () => (
    <div className="w-32 h-32 relative flex items-center justify-center">
      <div className="absolute inset-0 border border-zinc-700 opacity-50 clip-path-polygon-[50%_0,100%_38%,82%_100%,18%_100%,0_38%]" />
      <div className="absolute inset-4 border border-zinc-700 opacity-50 clip-path-polygon-[50%_0,100%_38%,82%_100%,18%_100%,0_38%]" />
      <div className="absolute inset-0 bg-blue-500/30 clip-path-polygon-[50%_10%,90%_40%,75%_90%,25%_80%,10%_40%] animate-[pulse-scale_2s_infinite]" />
    </div>
);

// CounterJump
export const CounterJump = () => (
    <div className="flex gap-1 text-3xl font-mono font-bold">
      <span className="animate-[slide-up-num_0.5s_infinite]">1</span>
      <span className="animate-[slide-up-num_0.5s_infinite_delay-100ms]">2</span>
      <span className="animate-[slide-up-num_0.5s_infinite_delay-200ms]">3</span>
    </div>
);

// PercentageCircle
export const PercentageCircle = () => (
    <div className="w-24 h-24 rounded-full border-8 border-zinc-800 relative flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        <circle cx="48" cy="48" r="40" stroke="#3b82f6" strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="251" className="animate-[fill-circle_1.5s_ease-out_forwards]" />
      </svg>
      <span className="text-xl font-bold animate-[fade-in_1s_delay-500ms_forwards] opacity-0">75%</span>
    </div>
);

// ProgressStriped
export const ProgressStriped = () => (
    <div className="w-full h-6 bg-zinc-800 rounded-full overflow-hidden relative">
      <div className="h-full bg-green-500 w-3/4 relative">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[move-stripes_1s_linear_infinite]" />
      </div>
    </div>
);

// StatCardHover
export const StatCardHover = () => (
    <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 hover:border-blue-500 transition-colors group cursor-pointer w-48">
      <p className="text-zinc-500 text-xs uppercase mb-1">Revenue</p>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">$12k</span>
        <span className="text-green-500 text-xs bg-green-900/20 px-1 rounded flex items-center gap-0.5 group-hover:scale-110 transition-transform">
          ▲ 12%
        </span>
      </div>
    </div>
);

// HeatmapPulse
export const HeatmapPulse = () => (
    <div className="w-full h-32 bg-zinc-800 rounded relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-red-500/30 rounded-full blur-xl animate-[pulse_2s_infinite]" />
      <div className="absolute top-1/2 left-2/3 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-[pulse_3s_infinite]" />
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-green-500/30 rounded-full blur-xl animate-[pulse_2.5s_infinite]" />
    </div>
);

// LocationPinDrop
export const LocationPinDrop = () => (
    <div className="relative h-16 w-8 mx-auto flex flex-col items-center justify-end group cursor-pointer">
      <svg className="w-8 h-8 text-red-500 animate-[bounce_1s_infinite] group-hover:animate-none group-hover:-translate-y-2 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
      <div className="w-4 h-1 bg-black/50 rounded-full filter blur-[1px] group-hover:scale-75 transition-transform" />
    </div>
);

// RoutePathTrace
export const RoutePathTrace = () => (
    <svg className="w-full h-32" viewBox="0 0 200 100">
      <path d="M10,90 Q50,10 90,90 T190,10" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="5 5" />
      <circle r="4" fill="#3b82f6">
        <animateMotion dur="3s" repeatCount="indefinite" path="M10,90 Q50,10 90,90 T190,10" />
      </circle>
    </svg>
);

// MapZoomIn
export const MapZoomIn = () => (
    <div className="w-full h-32 bg-zinc-800 overflow-hidden relative group cursor-zoom-in">
      <div className="w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 absolute top-[-50%] left-[-50%] group-hover:scale-125 transition-transform duration-700" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
      </div>
    </div>
);

// ParticleCloud
export const ParticleCloud = () => (
    <div className="w-full h-32 relative overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-[float_5s_infinite_linear]" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDuration: `${3 + Math.random() * 5}s` }} />
      ))}
    </div>
);

// NetworkNodes
export const NetworkNodes = () => (
    <div className="w-full h-32 relative flex items-center justify-center">
      <div className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-1/4 animate-pulse" />
      <div className="absolute w-2 h-2 bg-white rounded-full top-1/3 left-1/2 animate-pulse delay-100" />
      <div className="absolute w-2 h-2 bg-white rounded-full top-2/3 left-3/4 animate-pulse delay-200" />
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="25%" y1="50%" x2="50%" y2="33%" stroke="rgba(255,255,255,0.2)" />
        <line x1="50%" y1="33%" x2="75%" y2="66%" stroke="rgba(255,255,255,0.2)" />
        <line x1="75%" y1="66%" x2="25%" y2="50%" stroke="rgba(255,255,255,0.2)" />
      </svg>
    </div>
);

// WaveSpectrum
export const WaveSpectrum = () => (
    <div className="flex items-center justify-center gap-1 h-16 w-full">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="w-1 bg-purple-500 rounded-full animate-[wave-height_1s_ease-in-out_infinite]" style={{ height: '20%', animationDelay: `${i * 0.1}s` }} />
      ))}
    </div>
);

// OrbitalData
export const OrbitalData = () => (
    <div className="w-24 h-24 relative flex items-center justify-center">
      <div className="absolute inset-0 border border-zinc-700 rounded-full" />
      <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full -translate-x-1/2 animate-[spin_3s_linear_infinite] origin-[0_3rem]" />
      <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-red-500 rounded-full -translate-x-1/2 animate-[spin_2s_linear_infinite] origin-[0_1.5rem]" />
      <div className="w-4 h-4 bg-white rounded-full" />
    </div>
);

// TrendArrow
export const TrendArrow = () => (
    <div className="flex items-center gap-2 group cursor-pointer">
      <span className="text-2xl font-bold">42%</span>
      <svg className="w-6 h-6 text-green-500 group-hover:translate-y-[-4px] group-hover:translate-x-[4px] transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    </div>
);

// DonutHover
export const DonutHover = () => (
    <div className="w-20 h-20 rounded-full border-8 border-zinc-800 border-t-blue-500 border-r-blue-500 transform rotate-45 hover:rotate-[225deg] transition-transform duration-700 cursor-pointer flex items-center justify-center">
      <span className="transform -rotate-45 hover:rotate-[-225deg] transition-transform duration-700 text-xs">50%</span>
    </div>
);

// BarStackHover
export const BarStackHover = () => (
    <div className="w-8 h-24 flex flex-col-reverse bg-zinc-800 rounded overflow-hidden group cursor-pointer">
      <div className="w-full h-1/3 bg-blue-600 group-hover:bg-blue-500 transition-colors" />
      <div className="w-full h-1/3 bg-green-600 group-hover:bg-green-500 transition-colors" />
      <div className="w-full h-1/3 bg-red-600 group-hover:bg-red-500 transition-colors" />
    </div>
);

// NumberCounter
export const NumberCounter = () => (
    <div className="text-4xl font-bold font-mono group cursor-pointer">
      <span className="group-hover:animate-pulse">1,234</span>
    </div>
);

// SkillProficiency
export const SkillProficiency = () => (
    <div className="w-48 space-y-1 group">
      <div className="flex justify-between text-xs text-zinc-400">
        <span>React</span>
        <span className="group-hover:text-white">90%</span>
      </div>
      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 w-[90%] group-hover:animate-[fill-width_1s_ease-out]" />
      </div>
    </div>
);

// TimelineDot
export const TimelineDot = () => (
    <div className="flex flex-col items-center gap-1 group cursor-pointer">
      <div className="w-3 h-3 bg-zinc-600 rounded-full border-2 border-zinc-900 group-hover:bg-blue-500 group-hover:scale-125 transition-all" />
      <div className="h-10 w-0.5 bg-zinc-800 group-hover:bg-zinc-700" />
    </div>
);

// BubbleChart
export const BubbleChart = () => (
    <div className="w-32 h-32 relative">
      <div className="absolute top-0 left-0 w-12 h-12 bg-blue-500/50 rounded-full animate-[float_4s_infinite_ease-in-out]" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-500/50 rounded-full animate-[float_5s_infinite_ease-in-out_reverse]" />
      <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-green-500/50 rounded-full animate-[float_3s_infinite_linear]" />
    </div>
);

// DataStream
export const DataStream = () => (
    <div className="w-full h-4 bg-zinc-900 overflow-hidden relative">
      <div className="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-[slide-right_1s_linear_infinite]" />
    </div>
);

// ServerLoad
export const ServerLoad = () => (
    <div className="w-16 h-20 bg-zinc-800 border-2 border-zinc-700 rounded-lg flex flex-col justify-end p-1 gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`w-full h-2 rounded-sm ${i < 3 ? 'bg-green-500' : 'bg-zinc-700 animate-pulse'}`} />
      ))}
    </div>
);

// LiveUsers
export const LiveUsers = () => (
    <div className="flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full border border-zinc-800">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
      <span className="text-xs font-mono">2.4k Online</span>
    </div>
);

// PieSegmentHover
export const PieSegmentHover = () => (
    <div className="w-24 h-24 rounded-full border-[10px] border-zinc-800 border-t-purple-500 border-r-purple-500 transform -rotate-45 hover:border-t-purple-400 hover:border-r-purple-400 transition-colors cursor-pointer shadow-lg" />
);

// GridDataReveal
export const GridDataReveal = () => (
    <div className="grid grid-cols-3 gap-1 w-24">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-full pt-[100%] bg-zinc-800 rounded animate-[fade-in_0.5s_ease-out_forwards]" style={{ animationDelay: `${i * 0.05}s` }} />
      ))}
    </div>
);

// ScatterPlotDot
export const ScatterPlotDot = () => (
    <div className="w-32 h-20 relative border-l border-b border-zinc-700">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full hover:scale-150 transition-transform cursor-pointer" style={{ left: `${20 * (i+1)}%`, bottom: `${Math.random() * 80}%` }} />
      ))}
    </div>
);
