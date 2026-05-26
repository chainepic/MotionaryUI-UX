'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 1. 3D Flip Card
export const FlipCard = () => (
    <div className="group w-full h-40 perspective-1000">
        <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <div className="absolute inset-0 bg-surface-200 rounded-xl flex items-center justify-center backface-hidden border border-white/10">
                <h3 className="text-xl font-bold">Front</h3>
            </div>
            <div className="absolute inset-0 bg-primary text-black rounded-xl flex items-center justify-center backface-hidden rotate-y-180">
                <h3 className="text-xl font-bold">Back</h3>
            </div>
        </div>
    </div>
);

// 2. Glow Border Card
export const GlowCard = () => (
    <div className="relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden group border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
        <div className="absolute inset-[1px] bg-surface-100 rounded-xl flex items-center justify-center z-10">
            <span className="text-white/70 font-medium">Neon Glow</span>
        </div>
    </div>
);

// 3. Parallax Tilt Card (Simplified)
export const TiltCard = () => (
    <motion.div
        whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-40 bg-surface-200 rounded-xl border border-white/10 flex items-center justify-center shadow-xl perspective-1000 cursor-pointer"
    >
        <div className="transform translate-z-20">
             <h3 className="text-lg font-bold">Tilt Interaction</h3>
        </div>
    </motion.div>
);

// 4. Image Reveal Card
export const RevealCard = () => (
    <div className="group relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden cursor-pointer">
        <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:-translate-y-full transition-transform duration-500 ease-in-out bg-surface-200">
            <h3 className="text-lg font-bold">Hover Me</h3>
        </div>
        <div className="absolute inset-0 bg-secondary flex items-center justify-center">
            <h3 className="text-lg font-bold text-white">Hello!</h3>
        </div>
    </div>
);

// 5. Glassmorphism Card
export const GlassCard = () => (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-xl bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500&auto=format&fit=crop')] bg-cover">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative w-[80%] h-[60%] glass-panel rounded-lg flex items-center justify-center border border-white/20 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105">
            <span className="font-bold text-white drop-shadow-md">Frosted Glass</span>
        </div>
    </div>
);

// 6. Curtain Card
export const CurtainCard = () => (
    <div className="group relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden cursor-pointer">
         <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary font-mono">HIDDEN CONTENT</span>
         </div>
         <div className="absolute inset-0 bg-surface-300 flex items-center justify-center transition-transform duration-500 origin-top group-hover:scale-y-0">
            <span className="font-bold text-white/50">Curtain Up</span>
         </div>
    </div>
);

// 7. Stacking Card
export const StackCard = () => (
    <div className="group relative w-full h-40 flex items-center justify-center">
        <div className="absolute inset-0 bg-secondary rounded-xl translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 opacity-50" />
        <div className="absolute inset-0 bg-primary rounded-xl translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 opacity-70" />
        <div className="relative w-full h-full bg-surface-200 border border-white/10 rounded-xl flex items-center justify-center z-10 hover:-translate-y-1 transition-transform duration-300">
            Stacking
        </div>
    </div>
);

// 8. Pattern Reveal Card
export const PatternCard = () => (
    <div className="group relative w-full h-40 bg-primary rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-surface-200 transition-transform duration-500 group-hover:translate-x-full z-10 flex items-center justify-center border border-white/10 rounded-xl">
            <span className="font-bold">Slide Reveal</span>
        </div>
        <div className="absolute inset-0 bg-[url('/grid-small.svg')] opacity-50 flex items-center justify-center text-black font-bold">
            PATTERN
        </div>
    </div>
);

// 9. Border Beam Card
export const BorderBeamCard = () => (
    <div className="relative w-full h-40 bg-surface-100 rounded-xl overflow-hidden flex items-center justify-center border border-transparent">
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#00f3ff_100%)] animate-spin-slow" />
        <div className="absolute inset-[2px] bg-surface-100 rounded-lg z-10 flex items-center justify-center">
            Border Beam
        </div>
    </div>
);

// 10. Floating Icon Card
export const FloatingIconCard = () => (
    <div className="group w-full h-40 bg-surface-200 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-surface-300 transition-colors duration-300">
        <div className="p-4 bg-white/5 rounded-full group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
            <div className="w-6 h-6 bg-primary rounded-full" />
        </div>
        <span className="text-sm text-white/50 group-hover:text-white transition-colors">Hover Me</span>
    </div>
);

// 11. Noise Card (TV Static)
export const NoiseCard = () => (
    <div className="group relative w-full h-40 bg-black rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <span className="font-mono tracking-widest group-hover:text-primary transition-colors">NOISE</span>
    </div>
);

// 12. Spotlight Gradient Card
export const SpotlightGradientCard = () => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div 
            ref={divRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-40 bg-surface-200 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center group"
        >
            <div 
                className="absolute w-[200px] h-[200px] bg-primary/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ left: position.x - 100, top: position.y - 100 }}
            />
            <span className="relative z-10 font-light">Spotlight</span>
        </div>
    );
}

// 13. Directional Hover Card (Concept)
export const DirectionalCard = () => (
     <div className="group relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <span className="relative z-10 font-bold group-hover:text-black transition-colors">Directional</span>
    </div>
)

// 14. Zoom Background Card
export const ZoomBgCard = () => (
    <div className="relative w-full h-40 rounded-xl overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-125" />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4">
            <h4 className="font-bold text-white translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Zoom Effect</h4>
        </div>
    </div>
);

// 15. Blob Morph Card
export const BlobMorphCard = () => (
     <div className="relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
        <div className="absolute w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute w-24 h-24 bg-primary/20 rounded-full blur-xl top-2 right-2 animate-pulse" />
        <span className="relative z-10 font-bold tracking-wider text-white/80">Ambient</span>
    </div>
);

// 16. Skew Card
export const SkewCard = () => (
     <div className="group w-full h-40 perspective-1000 cursor-pointer">
        <div className="w-full h-full bg-surface-200 border border-white/10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-x-12 group-hover:-translate-y-2 shadow-2xl">
            Skew Hover
        </div>
    </div>
);

// 17. Content Slide Up Card
export const SlideUpCard = () => (
    <div className="group relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden cursor-pointer border border-white/5">
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-lg font-bold translate-y-4 group-hover:-translate-y-6 transition-transform duration-300">Title</h3>
            <p className="text-sm text-white/60 translate-y-12 opacity-0 group-hover:translate-y-[-1.5rem] group-hover:opacity-100 transition-all duration-300 delay-75">
                Hidden description appears on hover.
            </p>
        </div>
    </div>
);

// 18. Glitch Border Card
export const GlitchBorderCard = () => (
    <div className="group relative w-full h-40 bg-surface-200 rounded-xl flex items-center justify-center">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-200" />
        <div className="relative w-full h-full bg-surface-200 rounded-xl z-10 flex items-center justify-center border border-white/10">
            Glitch Border
        </div>
    </div>
);

// 19. Magnetic Element Card
export const MagneticElementCard = () => (
    <div className="w-full h-40 bg-surface-200 rounded-xl border border-white/10 flex items-center justify-center p-8 group">
        <motion.div
            className="w-12 h-12 bg-white rounded-full"
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
        />
    </div>
);

// 20. Video Hover Card
export const VideoHoverCard = () => (
    <div className="relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden group">
         <div className="absolute inset-0 flex items-center justify-center z-10 font-bold bg-black/50 group-hover:opacity-0 transition-opacity duration-300">
            HOVER TO PLAY
         </div>
         {/* Placeholder for video - using GIF for demo */}
         <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/3o7TKSjRrfIPjeiSEQ/giphy.gif')] bg-cover bg-center opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
);


// HoloTiltCard
export const HoloTiltCard = () => (
    <div className="group relative w-64 h-80 perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105 shadow-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shine" />
        <div className="p-6 h-full flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white mb-2 translate-z-10 group-hover:translate-z-12 transition-transform">Holographic</h3>
          <p className="text-white/60 text-sm translate-z-5 group-hover:translate-z-8 transition-transform">3D tilt effect with shine</p>
        </div>
      </div>
    </div>
);

// DepthMapCard
export const DepthMapCard = () => (
    <div className="group relative w-64 h-80 overflow-hidden rounded-2xl bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
      </div>
      <div className="relative h-full p-6 flex flex-col justify-end z-10">
        <h3 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Depth</h3>
        <p className="text-blue-200/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Interactive depth sensing</p>
      </div>
    </div>
);

// LayeredParallaxCard
export const LayeredParallaxCard = () => (
    <div className="group relative w-64 h-80 bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -translate-y-16 translate-x-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl translate-y-16 -translate-x-16 group-hover:-translate-x-8 group-hover:translate-y-8 transition-transform duration-500" />
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div className="w-10 h-10 bg-white/10 rounded-lg group-hover:rotate-12 transition-transform duration-300" />
        <div>
          <h4 className="text-white font-medium mb-1 group-hover:translate-x-2 transition-transform">Parallax</h4>
          <p className="text-xs text-zinc-500">Floating elements</p>
        </div>
      </div>
    </div>
);

// NeonFrameCard
export const NeonFrameCard = () => (
    <div className="group relative w-64 h-80 bg-black rounded-xl p-0.5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity" style={{clipPath: 'inset(0 0 0 0 round 12px)'}} />
      <div className="relative h-full bg-zinc-950 rounded-[10px] p-6 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
          <div className="w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-shadow" />
        </div>
        <h3 className="text-white font-bold">Neon Frame</h3>
      </div>
    </div>
);

// IsoStackCard
export const IsoStackCard = () => (
    <div className="group relative w-64 h-64">
      <div className="absolute inset-0 bg-red-500 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300 opacity-50" />
      <div className="absolute inset-0 bg-orange-500 rounded-xl translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 opacity-75" />
      <div className="relative h-full bg-zinc-900 rounded-xl border border-white/10 p-6 flex items-center justify-center group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
        <span className="text-white font-bold text-xl">Stack</span>
      </div>
    </div>
);

// FrostedPaneCard
export const FrostedPaneCard = () => (
    <div className="w-64 h-80 relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-x-4 bottom-4 h-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col justify-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white/20">
        <h3 className="text-white font-bold">Frosted Pane</h3>
        <p className="text-white/70 text-xs">Glass morphism effect</p>
      </div>
    </div>
);

// BlurOverlayCard
export const BlurOverlayCard = () => (
    <div className="group relative w-64 h-80 rounded-2xl overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-50" />
      <div className="absolute inset-0 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <button className="px-6 py-2 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View</button>
      </div>
      <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity">
        <h3 className="text-white text-xl font-bold">Blur Reveal</h3>
      </div>
    </div>
);

// CrystalEdgeCard
export const CrystalEdgeCard = () => (
    <div className="group relative w-64 h-80 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-colors">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mb-4" />
        <h3 className="text-white font-bold">Crystal Edge</h3>
      </div>
    </div>
);

// GlacierCard
export const GlacierCard = () => (
    <div className="relative w-64 h-80 bg-slate-900 rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <h3 className="text-cyan-100 text-lg font-medium">Glacier</h3>
        <p className="text-cyan-200/50 text-sm">Cold storage</p>
      </div>
    </div>
);

// PrismRefractCard
export const PrismRefractCard = () => (
    <div className="group relative w-64 h-80 bg-black rounded-2xl border border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full border border-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
           <div className="w-16 h-16 rounded-full bg-white/5" />
        </div>
      </div>
    </div>
);

// BentoBoxCard
export const BentoBoxCard = () => (
    <div className="w-64 h-64 bg-zinc-900 rounded-3xl p-4 grid grid-rows-2 gap-4 group hover:bg-zinc-800 transition-colors">
      <div className="bg-zinc-800 rounded-2xl w-full h-full group-hover:bg-zinc-700 transition-colors" />
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-800 rounded-2xl w-full h-full group-hover:bg-zinc-700 transition-colors delay-75" />
        <div className="bg-orange-500 rounded-2xl w-full h-full group-hover:scale-95 transition-transform" />
      </div>
    </div>
);

// GridRevealCard
export const GridRevealCard = () => (
    <div className="group relative w-64 h-64 bg-black rounded-2xl border border-white/10 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="bg-zinc-900/50 hover:bg-zinc-800 transition-colors duration-300" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h3 className="text-white text-2xl font-bold tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">GRID</h3>
      </div>
    </div>
);

// TileExpandCard
export const TileExpandCard = () => (
    <div className="w-64 h-80 flex flex-col gap-2">
      <div className="flex-1 bg-zinc-800 rounded-xl hover:flex-[2] transition-all duration-300 flex items-center justify-center text-white/50 hover:text-white hover:bg-zinc-700">A</div>
      <div className="flex-1 bg-zinc-800 rounded-xl hover:flex-[2] transition-all duration-300 flex items-center justify-center text-white/50 hover:text-white hover:bg-zinc-700">B</div>
      <div className="flex-1 bg-zinc-800 rounded-xl hover:flex-[2] transition-all duration-300 flex items-center justify-center text-white/50 hover:text-white hover:bg-zinc-700">C</div>
    </div>
);

// StatCardMetric
export const StatCardMetric = () => (
    <div className="group w-64 h-40 bg-white text-black rounded-2xl p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 shadow-xl">
      <div className="flex justify-between items-start">
        <span className="font-medium text-gray-500">Revenue</span>
        <span className="text-green-500 text-sm font-bold bg-green-100 px-2 py-1 rounded-full">+12%</span>
      </div>
      <div className="text-4xl font-bold tracking-tight group-hover:text-blue-600 transition-colors">$42k</div>
    </div>
);

// ProfileCardMini
export const ProfileCardMini = () => (
    <div className="group flex items-center gap-4 p-4 bg-zinc-900 rounded-2xl border border-white/5 hover:border-white/20 transition-all w-64">
      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full group-hover:rotate-12 transition-transform" />
      <div>
        <h4 className="text-white font-medium group-hover:text-pink-500 transition-colors">Alex Doe</h4>
        <p className="text-zinc-500 text-sm">Product Designer</p>
      </div>
    </div>
);

// VideoPreviewCard
export const VideoPreviewCard = () => (
    <div className="group relative w-64 h-40 bg-zinc-900 rounded-xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
      <span className="absolute bottom-3 right-3 text-xs font-mono text-white bg-black/60 px-2 py-1 rounded">02:14</span>
    </div>
);

// AlbumArtCard
export const AlbumArtCard = () => (
    <div className="group w-48">
      <div className="relative w-48 h-48 mb-4">
        <div className="absolute inset-0 bg-zinc-800 rounded-lg shadow-xl translate-y-2 group-hover:translate-y-0 group-hover:translate-x-2 group-hover:rotate-3 transition-all duration-300 opacity-50" />
        <div className="relative w-full h-full bg-zinc-700 rounded-lg overflow-hidden group-hover:-translate-y-1 transition-transform duration-300">
           <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500" />
        </div>
      </div>
      <h4 className="text-white font-medium truncate">Midnight City</h4>
      <p className="text-zinc-500 text-xs">M83</p>
    </div>
);

// LiveIndicatorCard
export const LiveIndicatorCard = () => (
    <div className="relative w-64 h-80 bg-zinc-900 rounded-2xl overflow-hidden group border border-red-500/0 hover:border-red-500/20 transition-colors">
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-red-500 text-xs font-bold uppercase tracking-wider">Live</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
);

// SwipeActionCard
export const SwipeActionCard = () => (
    <div className="relative w-64 h-20 bg-red-500 rounded-xl overflow-hidden group cursor-pointer">
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-medium">Delete</div>
      <div className="absolute inset-0 bg-zinc-800 rounded-xl flex items-center px-6 transition-transform group-hover:-translate-x-20 duration-300 ease-out border border-white/10">
        <span className="text-white">Swipe Left</span>
      </div>
    </div>
);

// ExpandDetailCard
export const ExpandDetailCard = () => (
    <div className="w-64 bg-zinc-900 rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:shadow-2xl group">
      <div className="p-6">
        <h3 className="text-white font-bold">Details</h3>
        <p className="text-zinc-500 text-sm mt-2">Hover to see more info</p>
      </div>
      <div className="h-0 group-hover:h-24 bg-zinc-800/50 transition-all duration-300 overflow-hidden px-6">
        <p className="text-zinc-400 text-xs py-4">Here is the hidden content revealed on hover.</p>
      </div>
    </div>
);

// FlipInfoCard
export const FlipInfoCard = () => (
    <div className="group w-64 h-40 perspective-1000 cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        <div className="absolute inset-0 bg-zinc-800 rounded-xl backface-hidden flex items-center justify-center border border-white/10">
           <span className="text-white font-bold">Hover Me</span>
        </div>
        <div className="absolute inset-0 bg-blue-600 rounded-xl backface-hidden rotate-y-180 flex items-center justify-center">
           <span className="text-white font-bold">Hello!</span>
        </div>
      </div>
    </div>
);

// NoiseGradientCard
export const NoiseGradientCard = () => (
    <div className="relative w-64 h-80 rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-orange-500" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white font-black text-3xl tracking-tighter mix-blend-overlay opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">NOISE</h3>
      </div>
    </div>
);

// ShapeMorphCard
export const ShapeMorphCard = () => (
    <div className="relative w-64 h-80 bg-zinc-900 rounded-2xl overflow-hidden group">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl group-hover:scale-150 group-hover:translate-x-10 transition-transform duration-700" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl group-hover:scale-150 group-hover:-translate-x-10 transition-transform duration-700" />
      <div className="relative h-full flex items-center justify-center">
         <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-lg group-hover:rounded-full transition-all duration-500 border border-white/20" />
      </div>
    </div>
);

// GlitchCardEffect
export const GlitchCardEffect = () => (
    <div className="relative w-64 h-40 bg-black border border-white/20 group hover:border-red-500/50 transition-colors overflow-hidden">
      <div className="absolute inset-0 bg-red-500/10 translate-x-full group-hover:translate-x-0 transition-transform duration-75" />
      <div className="absolute inset-0 bg-blue-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-75 delay-75" />
      <div className="relative h-full flex items-center justify-center">
        <span className="text-white font-mono uppercase tracking-widest group-hover:translate-x-1 group-hover:text-red-500 transition-all">System Failure</span>
      </div>
    </div>
);

// HollowCard
export const HollowCard = () => (
    <div className="w-64 h-80 border-2 border-dashed border-zinc-700 rounded-2xl flex items-center justify-center group hover:border-solid hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 cursor-pointer">
      <div className="flex flex-col items-center gap-2 text-zinc-600 group-hover:text-zinc-300 transition-colors">
        <span className="text-4xl font-light">+</span>
        <span className="text-sm font-medium">Add New</span>
      </div>
    </div>
);

// GlassCreditCard
export const GlassCreditCard = () => (
    <div className="relative w-72 h-44 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-between overflow-hidden group hover:bg-white/10 transition-colors">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-purple-500/50 transition-colors duration-500" />
      <div className="flex justify-between items-center z-10">
        <div className="w-10 h-6 bg-white/20 rounded" />
        <span className="text-white/50 text-xs font-mono">**** 4242</span>
      </div>
      <div className="z-10">
        <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Card Holder</p>
        <p className="text-white font-medium tracking-wide">ALEXANDER DOE</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
    </div>
);

// FeatureListCard
export const FeatureListCard = () => (
    <div className="w-64 h-auto bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group">
      <h3 className="text-white font-bold mb-4">Pro Plan</h3>
      <ul className="space-y-3">
        {[1, 2, 3].map((i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
            <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[10px]">✓</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>Feature ${i}</span>
          </li>
        ))}
      </ul>
    </div>
);

// PricingTierCard
export const PricingTierCard = () => (
    <div className="w-64 bg-zinc-900 rounded-2xl p-6 border border-zinc-800 relative hover:scale-105 transition-transform duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        POPULAR
      </div>
      <h3 className="text-xl font-bold text-white">Startup</h3>
      <div className="text-3xl font-bold text-white mt-4">$29<span className="text-sm font-normal text-zinc-500">/mo</span></div>
      <button className="w-full mt-6 py-2 rounded-lg bg-zinc-800 text-white group-hover:bg-indigo-600 transition-colors">Get Started</button>
    </div>
);

// NotificationCard
export const NotificationCard = () => (
    <div className="relative w-64 h-24">
      <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex gap-4 items-center shadow-lg transform translate-y-0 hover:-translate-y-1 transition-transform cursor-default z-10">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </div>
        <div>
           <h4 className="text-white text-sm font-medium">New Message</h4>
           <p className="text-zinc-500 text-xs">You have 1 unread</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-zinc-800 rounded-xl transform scale-95 translate-y-2 -z-10 opacity-50" />
      <div className="absolute inset-0 bg-zinc-800 rounded-xl transform scale-90 translate-y-4 -z-20 opacity-25" />
    </div>
);

// CodeSnippetCard
export const CodeSnippetCard = () => (
    <div className="w-64 bg-zinc-950 rounded-lg p-4 font-mono text-xs border border-zinc-800 group hover:border-zinc-700 transition-colors">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      </div>
      <div className="space-y-1 text-zinc-500">
        <p><span className="text-purple-400">const</span> <span className="text-blue-400">magic</span> = <span className="text-yellow-400">()</span> <span className="text-purple-400">=&gt;</span> {'{'}</p>
        <p className="pl-4 group-hover:text-green-400 transition-colors duration-300">return "Awesome";</p>
        <p>{'}'}</p>
      </div>
    </div>
);
