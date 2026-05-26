'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 1. Neon Button
export const NeonButton = () => (
  <motion.button
    className="px-8 py-3 text-primary border border-primary rounded shadow-[0_0_10px_rgba(0,243,255,0.5)] hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.8)] transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Neon Pulse
  </motion.button>
);

// 2. Glitch Button
export const GlitchButton = () => (
  <button className="relative px-8 py-3 bg-surface-200 text-white font-mono overflow-hidden group">
    <span className="relative z-10 group-hover:translate-x-1 transition-transform">GLITCH</span>
    <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 translate-x-[-2px] translate-y-[2px] mix-blend-difference transition-opacity duration-75"></span>
    <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 translate-x-[2px] translate-y-[-2px] mix-blend-difference transition-opacity duration-75 delay-75"></span>
  </button>
);

// 3. Cyberpunk Button
export const CyberButton = () => (
  <button className="relative px-10 py-4 bg-transparent border border-yellow-400 text-yellow-400 font-bold tracking-widest uppercase hover:bg-yellow-400 hover:text-black transition-colors duration-200"
    style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
  >
    CYBERPUNK
  </button>
);

// 4. Spotlight Button
export const SpotLightButton = () => (
    <button className="relative px-8 py-3 rounded-full bg-surface-300 text-white overflow-hidden group">
        <span className="relative z-10">Spotlight</span>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    </button>
);

// 5. Elastic Button
export const ElasticButton = () => (
    <motion.button 
        className="px-8 py-3 bg-secondary text-white rounded-lg"
        whileHover={{ scaleX: 1.2, scaleY: 0.9 }}
        whileTap={{ scaleX: 0.9, scaleY: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        Elastic
    </motion.button>
);

// 6. Shimmer Button
export const ShimmerButton = () => (
    <button className="relative px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md overflow-hidden group">
        <span className="relative z-10">Shimmer</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-200%] group-hover:animate-pulse-slow" />
    </button>
);

// 7. Blob Button (Simplified for CSS performance)
export const BlobButton = () => (
    <motion.button
        className="px-8 py-3 bg-[#ff0055] text-white rounded-full"
        animate={{ 
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
        Morphing Blob
    </motion.button>
);

// 8. Ghost Button
export const GhostButton = () => (
    <button className="px-8 py-3 border border-white/30 text-white/70 rounded hover:border-white hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        Ghost Hover
    </button>
);

// 9. Send Button (Micro-interaction)
export const SendButton = () => {
    const [sent, setSent] = React.useState(false);
    return (
        <motion.button
            className={`px-8 py-3 rounded-full text-white flex items-center justify-center gap-2 overflow-hidden ${sent ? 'bg-green-500' : 'bg-blue-600'}`}
            onClick={() => { setSent(true); setTimeout(() => setSent(false), 2000); }}
            layout
        >
            <motion.span layout>{sent ? "Sent!" : "Send"}</motion.span>
            {sent && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>✓</motion.span>}
        </motion.button>
    )
}

// 10. 3D Tilt Button
export const TiltButton = () => {
    const ref = React.useRef<HTMLButtonElement>(null);
    const [rotateX, setRotateX] = React.useState(0);
    const [rotateY, setRotateY] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        setRotateX(yPct * -20);
        setRotateY(xPct * 20);
    };

    return (
        <motion.button
            ref={ref}
            className="px-8 py-4 bg-surface-100 border border-white/10 text-white rounded-xl shadow-xl transform-style-3d perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { setRotateX(0); setRotateY(0); }}
            animate={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
        >
            <span className="block transform translate-z-10">3D Tilt</span>
        </motion.button>
    )
}


// AiSparkleButton
export const AiSparkleButton = () => (
    <button className="relative px-6 py-3 bg-black text-white rounded-lg group overflow-hidden">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-40 transition-opacity" />
      <span className="relative flex items-center gap-2">
        <span>Generate</span>
        <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </span>
      <span className="absolute inset-0 border border-white/10 rounded-lg" />
    </button>
);

// NeuralLinkButton
export const NeuralLinkButton = () => (
    <button className="relative px-8 py-3 bg-zinc-900 text-emerald-400 font-mono text-sm border border-emerald-500/30 rounded group hover:border-emerald-400 transition-colors">
      <span className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors" />
      <span className="relative z-10">CONNECT_NODE</span>
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 group-hover:w-full transition-all duration-300 ease-out" />
    </button>
);

// DataStreamButton
export const DataStreamButton = () => (
    <button className="relative px-6 py-3 bg-slate-900 text-blue-400 overflow-hidden group rounded-md border border-blue-900/50">
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className="w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#3b82f6_50%,#0000_100%)] animate-spin-slow" />
      </div>
      <span className="relative z-10 font-medium tracking-wide">STREAM DATA</span>
    </button>
);

// HoloGhostButton
export const HoloGhostButton = () => (
    <button className="group relative px-6 py-2 bg-transparent text-white border border-white/20 rounded-full hover:border-white/60 transition-colors">
      <span className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
      <span className="relative">Ghost Mode</span>
    </button>
);

// CosmicDustButton
export const CosmicDustButton = () => (
    <button className="relative px-8 py-3 bg-indigo-950 text-indigo-200 rounded-lg overflow-hidden group shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] transition-shadow">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">COSMIC</span>
    </button>
);

// FrostyGlassButton
export const FrostyGlassButton = () => (
    <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95">
      Glass UI
    </button>
);

// CrystalPrismButton
export const CrystalPrismButton = () => (
    <button className="relative px-6 py-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-t border-l border-white/30 rounded-lg text-white overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700" />
      <span className="font-light tracking-widest">PRISM</span>
    </button>
);

// BlurRevealButton
export const BlurRevealButton = () => (
    <button className="group relative px-8 py-3 rounded-full bg-black/50 text-white overflow-hidden">
      <div className="absolute inset-0 bg-fuchsia-500/20 blur-xl group-hover:bg-fuchsia-500/40 transition-colors duration-500" />
      <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
        Next Step &rarr;
      </span>
    </button>
);

// IceLayerButton
export const IceLayerButton = () => (
    <button className="relative px-6 py-2">
      <span className="absolute inset-0 bg-cyan-500/20 skew-x-12 rounded-lg blur-sm group-hover:blur-md transition-all" />
      <span className="relative block px-6 py-2 bg-black/80 border border-cyan-500/30 text-cyan-200 rounded-lg backdrop-blur-sm hover:-translate-y-1 transition-transform duration-200">
        Ice Layer
      </span>
    </button>
);

// MirrorReflectButton
export const MirrorReflectButton = () => (
    <button className="relative px-8 py-3 bg-neutral-900 text-neutral-300 border border-white/10 rounded overflow-hidden group">
      <span className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10 group-hover:text-white transition-colors">Reflect</span>
    </button>
);

// HardShadowButton
export const HardShadowButton = () => (
    <button className="px-6 py-3 bg-yellow-400 text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
      HARD SHADOW
    </button>
);

// RetroPopButton
export const RetroPopButton = () => (
    <button className="px-6 py-2 bg-pink-400 text-black border-2 border-black rounded-none hover:bg-pink-300 transition-colors font-mono uppercase tracking-tighter">
      Retro Pop
    </button>
);

// OffsetBorderButton
export const OffsetBorderButton = () => (
    <button className="relative inline-block group">
      <span className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200" />
      <span className="relative block px-8 py-3 bg-blue-600 text-white border-2 border-white font-bold uppercase">
        Offset
      </span>
    </button>
);

// BrutalUnderlineButton
export const BrutalUnderlineButton = () => (
    <button className="relative px-1 py-1 text-white font-black text-xl uppercase group">
      <span className="relative z-10">Brutalist</span>
      <span className="absolute bottom-0 left-0 w-full h-1/3 bg-red-600 -z-0 group-hover:h-full transition-all duration-200 ease-out" />
    </button>
);

// PixelPressButton
export const PixelPressButton = () => (
    <button className="px-4 py-2 bg-indigo-600 text-white font-mono text-xs border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1 transition-all">
      PIXEL_PRESS_START
    </button>
);

// DotIndicatorButton
export const DotIndicatorButton = () => (
    <button className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
      <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform duration-300" />
      <span className="uppercase tracking-widest text-xs">Status</span>
    </button>
);

// LineExpandButton
export const LineExpandButton = () => (
    <button className="group relative py-1 text-white">
      Expand Line
      <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white group-hover:w-full group-hover:left-0 transition-all duration-300" />
    </button>
);

// IconMorphButton
export const IconMorphButton = () => (
    <button className="p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors group">
      <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </button>
);

// TextShiftButton
export const TextShiftButton = () => (
    <button className="h-10 overflow-hidden text-white/80 hover:text-white transition-colors">
      <div className="flex flex-col group hover:-translate-y-10 transition-transform duration-300">
        <span className="h-10 flex items-center">Hover Me</span>
        <span className="h-10 flex items-center text-primary font-bold">Lets Go</span>
      </div>
    </button>
);

// StatusRingButton
export const StatusRingButton = () => (
    <button className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white hover:border-white/50 transition-colors">
      <span className="absolute inset-0 rounded-full animate-ping bg-white/20 opacity-75" />
      <span className="relative">OK</span>
    </button>
);

// FlipLayerButton
export const FlipLayerButton = () => (
    <button className="group relative h-12 w-32 perspective-1000">
      <div className="absolute inset-0 w-full h-full bg-blue-600 text-white flex items-center justify-center transition-all duration-500 transform-style-3d group-hover:rotate-x-180 backface-hidden">
        Front
      </div>
      <div className="absolute inset-0 w-full h-full bg-purple-600 text-white flex items-center justify-center transition-all duration-500 transform-style-3d rotate-x-180 backface-hidden group-hover:rotate-x-0">
        Back
      </div>
    </button>
);

// DepthPressButton
export const DepthPressButton = () => (
    <button className="px-8 py-3 bg-zinc-800 text-white rounded shadow-[0_5px_0_rgb(63,63,70)] active:shadow-none active:translate-y-[5px] transition-all duration-100 ease-in-out">
      Push Down
    </button>
);

// IsoTiltButton
export const IsoTiltButton = () => (
    <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg transform hover:-rotate-y-12 hover:rotate-x-12 hover:scale-110 transition-transform duration-300 perspective-500 shadow-xl">
      Isometric
    </button>
);

// LayeredShadowButton
export const LayeredShadowButton = () => (
    <button className="relative px-6 py-3 bg-white text-black font-bold z-10 hover:-translate-y-1 transition-transform duration-200">
      Layered
      <span className="absolute inset-0 bg-blue-500 -z-10 translate-x-2 translate-y-2" />
      <span className="absolute inset-0 bg-red-500 -z-20 translate-x-4 translate-y-4" />
    </button>
);

// FloatElevationButton
export const FloatElevationButton = () => (
    <button className="px-8 py-3 bg-zinc-800 text-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out">
      Elevate
    </button>
);

// MorphBlobButton
export const MorphBlobButton = () => (
    <button className="relative px-8 py-4 bg-rose-500 text-white rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] hover:rounded-[50%_50%_20%_80%_/_25%_85%_25%_75%] transition-all duration-500 ease-in-out">
      Morphing
    </button>
);

// GooeyTrailButton
export const GooeyTrailButton = () => (
    <button className="relative px-8 py-3 bg-teal-500 text-white rounded-full overflow-hidden group">
      <span className="absolute w-32 h-32 bg-teal-400 rounded-full -translate-x-full -translate-y-full group-hover:scale-[2.5] transition-transform duration-500 ease-in-out" />
      <span className="relative z-10">Gooey Fill</span>
    </button>
);

// RipplePulseButton
export const RipplePulseButton = () => (
    <button className="relative px-6 py-3 overflow-hidden rounded-lg bg-indigo-600 text-white group">
      <span className="absolute inset-0 rounded-lg ring-4 ring-white/30 group-active:scale-95 transition-transform" />
      Ripple Click
    </button>
);

// LiquidBorderButton
export const LiquidBorderButton = () => (
    <button className="relative px-8 py-3 bg-transparent text-white border-2 border-transparent rounded-lg">
      <span className="absolute inset-0 rounded-lg border-2 border-white/50 [mask-image:linear-gradient(45deg,transparent_25%,white_50%,transparent_75%)] [mask-size:250%] hover:[mask-position:100%] transition-[mask-position] duration-700" />
      Liquid Border
    </button>
);

// OrganicOutlineButton
export const OrganicOutlineButton = () => (
    <button className="px-6 py-3 border-2 border-white text-white rounded-tl-2xl rounded-br-2xl hover:rounded-tr-2xl hover:rounded-bl-2xl hover:rounded-tl-none hover:rounded-br-none transition-all duration-300">
      Shape Shift
    </button>
);

// NeumorphicSoft
export const NeumorphicSoft = () => (
    <button className="px-6 py-3 bg-zinc-800 rounded-lg shadow-[5px_5px_10px_#18181b,-5px_-5px_10px_#3f3f46] hover:shadow-[inset_5px_5px_10px_#18181b,inset_-5px_-5px_10px_#3f3f46] text-zinc-400 font-bold transition-shadow duration-300 active:scale-95">
      Neumorphic
    </button>
);

// GlassmorphismBlur
export const GlassmorphismBlur = () => (
    <button className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white font-bold hover:bg-white/20 transition-all duration-300 shadow-lg">
      Glass UI
    </button>
);

// RetroPixelBtn
export const RetroPixelBtn = () => (
    <button className="px-4 py-2 bg-blue-600 text-white font-mono text-xs border-b-4 border-r-4 border-blue-800 active:border-0 active:translate-y-1 active:translate-x-1 transition-all">
      START GAME
    </button>
);

// ClaymorphismBtn
export const ClaymorphismBtn = () => (
    <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300">
      Clay Style
    </button>
);

// LiquidFillBtn
export const LiquidFillBtn = () => (
    <button className="relative px-6 py-3 border border-blue-500 text-blue-500 font-bold overflow-hidden group">
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">Hover Me</span>
      <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </button>
);

// MagneticPullBtn
export const MagneticPullBtn = () => (
    <div className="p-4 group">
      <button className="px-6 py-3 bg-zinc-800 rounded-full text-white font-bold group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200 ease-out shadow-lg hover:shadow-xl">
        Magnetic
      </button>
    </div>
);

// ThreeDPressBtn
export const ThreeDPressBtn = () => (
    <button className="px-6 py-3 bg-red-500 text-white font-bold rounded shadow-[0_4px_0_rgb(153,27,27)] active:shadow-none active:translate-y-[4px] transition-all">
      3D Press
    </button>
);

// BorderBeamBtn
export const BorderBeamBtn = () => (
    <button className="relative px-6 py-3 bg-black text-white font-bold overflow-hidden group">
      <span className="relative z-10">Border Beam</span>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-colors duration-300" />
      <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 transform -translate-x-full group-hover:animate-[slide-right_1s_infinite]" />
    </button>
);

// LoadingSpinnerBtn
export const LoadingSpinnerBtn = () => (
    <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded flex items-center gap-2 cursor-wait opacity-80">
      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      Processing
    </button>
);

// SuccessCheckBtn
export const SuccessCheckBtn = () => (
    <button className="px-6 py-3 bg-green-500 text-white font-bold rounded flex items-center gap-2">
      <svg className="w-5 h-5 animate-[ping_0.5s_ease-out]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      Saved
    </button>
);

// ErrorShakeBtn
export const ErrorShakeBtn = () => (
    <button className="px-6 py-3 bg-red-600 text-white font-bold rounded hover:animate-[shake_0.4s_ease-in-out]">
      Delete
    </button>
);

// DisabledLockBtn
export const DisabledLockBtn = () => (
    <button className="px-6 py-3 bg-zinc-700 text-zinc-500 font-bold rounded cursor-not-allowed relative group">
      Locked
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Permission Denied
      </div>
    </button>
);

// BlobMorphBtn
export const BlobMorphBtn = () => (
    <button className="w-32 h-12 bg-pink-500 text-white font-bold rounded-[30%_70%_70%_30%/30%_30%_70%_70%] hover:rounded-[50%_50%_20%_80%/25%_75%_25%_75%] transition-all duration-500">
      Morph
    </button>
);

// GlitchEffectBtn
export const GlitchEffectBtn = () => (
    <button className="relative px-6 py-3 bg-black text-white font-mono font-bold group">
      <span className="absolute inset-0 bg-red-500 translate-x-1 opacity-0 group-hover:opacity-50 animate-pulse" />
      <span className="absolute inset-0 bg-blue-500 -translate-x-1 opacity-0 group-hover:opacity-50 animate-pulse animation-delay-100" />
      <span className="relative">GLITCH</span>
    </button>
);

// ShineSweepBtn
export const ShineSweepBtn = () => (
    <button className="relative px-6 py-3 bg-blue-600 text-white font-bold rounded overflow-hidden group">
      <span className="relative z-10">Shine</span>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
    </button>
);

// ConfettiBtn
export const ConfettiBtn = () => (
    <button className="relative px-6 py-3 bg-yellow-400 text-black font-bold rounded active:scale-95 transition-transform group">
      Celebrate
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-active:opacity-100 pointer-events-none">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-[ping_0.5s_ease-out]" />
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-[ping_0.6s_ease-out]" />
      </div>
    </button>
);

// GradientBorderRun
export const GradientBorderRun = () => (
    <button className="relative px-6 py-3 bg-black text-white font-bold rounded-lg overflow-hidden p-[1px] group">
      <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100" />
      <span className="relative block bg-black rounded px-6 py-2 z-10">Gradient Run</span>
    </button>
);

// SendIconFly
export const SendIconFly = () => (
    <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded flex items-center gap-2 group overflow-hidden">
      <span>Send</span>
      <svg className="w-4 h-4 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
      <svg className="w-4 h-4 absolute right-6 translate-x-[-200%] translate-y-[200%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
    </button>
);

// SpotlightBtn
export const SpotlightBtn = () => (
    <button className="relative px-6 py-3 bg-zinc-800 text-white font-bold rounded overflow-hidden group">
      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 origin-center" />
      <span className="relative z-10">Spotlight</span>
    </button>
);

// RippleClickBtn
export const RippleClickBtn = () => (
    <button className="relative px-6 py-3 bg-purple-600 text-white font-bold rounded overflow-hidden active:scale-95 transition-transform">
      Ripple Click
      <span className="absolute inset-0 bg-white/30 rounded-full scale-0 active:animate-[ripple_0.6s_linear]" />
    </button>
);

// GhostOutlineBtn
export const GhostOutlineBtn = () => (
    <button className="px-6 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-black transition-colors duration-300">
      Ghost
    </button>
);

// UnderlineGrowBtn
export const UnderlineGrowBtn = () => (
    <button className="relative px-2 py-1 text-white font-bold group">
      Underline
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
    </button>
);

// PillToggleBtn
export const PillToggleBtn = () => (
    <button className="w-12 h-6 bg-zinc-700 rounded-full p-1 relative transition-colors hover:bg-zinc-600 group">
      <div className="w-4 h-4 bg-white rounded-full absolute left-1 group-hover:left-7 transition-all duration-300" />
    </button>
);

// DownloadProgressBtn
export const DownloadProgressBtn = () => (
    <button className="relative px-6 py-3 bg-green-600 text-white font-bold rounded overflow-hidden">
      <span className="relative z-10">Downloading...</span>
      <div className="absolute top-0 left-0 h-full bg-green-700 w-1/2 animate-[pulse_2s_infinite]" />
    </button>
);

// CartAddBtn
export const CartAddBtn = () => (
    <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded flex items-center gap-2 group hover:bg-orange-600">
      <span>Add to Cart</span>
      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    </button>
);

// PlayPauseMorph
export const PlayPauseMorph = () => (
    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
      <div className="flex gap-1">
        <div className="w-1 h-4 bg-black" />
        <div className="w-1 h-4 bg-black" />
      </div>
    </button>
);

// SocialShareBtn
export const SocialShareBtn = () => (
    <button className="w-10 h-10 bg-blue-500 text-white rounded-full hover:w-32 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group">
      <span className="min-w-[1.5rem] text-center">f</span>
      <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap">Share on FB</span>
    </button>
);

// DeleteConfirmSlide
export const DeleteConfirmSlide = () => (
    <button className="w-10 h-10 bg-red-500 text-white rounded overflow-hidden group hover:w-24 transition-all duration-300 relative">
      <svg className="w-5 h-5 absolute top-2.5 left-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
      <span className="absolute left-10 top-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Delete</span>
    </button>
);

// UploadCloudBtn
export const UploadCloudBtn = () => (
    <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded flex items-center gap-2 group hover:bg-sky-600">
      <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
      Upload
    </button>
);

// FavoriteHeartBtn
export const FavoriteHeartBtn = () => (
    <button className="text-zinc-500 hover:text-red-500 transition-colors group">
      <svg className="w-8 h-8 group-active:scale-125 transition-transform duration-100 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </button>
);

// PulseRingBtn
export const PulseRingBtn = () => (
    <button className="relative w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
      <span className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
      <span className="relative z-10">+</span>
    </button>
);

// SwipeArrowBtn
export const SwipeArrowBtn = () => (
    <button className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white group hover:bg-zinc-700">
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
);

// BurgerMenuBtn
export const BurgerMenuBtn = () => (
    <button className="w-10 h-10 flex flex-col justify-center gap-1.5 group cursor-pointer">
      <span className="w-6 h-0.5 bg-white transition-transform group-hover:translate-y-2 group-hover:rotate-45" />
      <span className="w-6 h-0.5 bg-white transition-opacity group-hover:opacity-0" />
      <span className="w-6 h-0.5 bg-white transition-transform group-hover:-translate-y-2 group-hover:-rotate-45" />
    </button>
);

// CopyClipboardBtn
export const CopyClipboardBtn = () => (
    <button className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded hover:text-white flex items-center gap-2 group active:text-green-400 transition-colors">
      <span>Copy</span>
      <svg className="w-4 h-4 group-active:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    </button>
);

// ThemeToggleBtn
export const ThemeToggleBtn = () => (
    <button className="w-12 h-6 bg-zinc-700 rounded-full p-1 flex items-center cursor-pointer hover:bg-zinc-600">
      <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-md transform translate-x-0 hover:translate-x-6 transition-transform duration-300" />
    </button>
);
