'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 1. Image Zoom Hover
export const ImageZoom = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg cursor-pointer group">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
    </div>
);

// 2. Grayscale to Color
export const GrayToColor = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg cursor-pointer group">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" />
    </div>
);

// 3. Blur Reveal
export const BlurRevealImage = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg cursor-pointer group relative">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center blur-sm group-hover:blur-0 transition-all duration-500" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-300">HOVER ME</div>
    </div>
);

// 4. Sliding Caption
export const SlideCaption = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg cursor-pointer group relative">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="text-white font-bold">Forest Path</h4>
        </div>
    </div>
);

// 5. Ken Burns Effect
export const KenBurns = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center animate-[kenburns_20s_infinite_alternate]" style={{ animationName: 'pulse', animationDuration: '20s' }} />
        {/* Note: Tailwind animate-pulse is different, simulating Ken Burns via CSS scale usually needs keyframes */}
        <style jsx>{`
            @keyframes kenburns {
                0% { transform: scale(1); }
                100% { transform: scale(1.2) translate(10px, 10px); }
            }
        `}</style>
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center" style={{ animation: 'kenburns 15s ease-in-out infinite alternate' }} />
    </div>
);

// 6. 3D Tilt Image
export const TiltImage = () => (
    <motion.div 
        className="w-full h-48 rounded-lg bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center perspective-1000"
        whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
    />
);

// 7. Glitch Image Hover
export const GlitchImage = () => (
    <div className="relative w-full h-48 rounded-lg overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-50 translate-x-2 mix-blend-difference transition-opacity duration-100" />
    </div>
);

// 8. Circle Reveal Mask
export const CircleReveal = () => (
    <div className="relative w-full h-48 rounded-lg overflow-hidden group bg-black">
        <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center transition-all duration-700"
            style={{ clipPath: 'circle(0% at 50% 50%)' }}
        />
         <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center transition-all duration-700 group-hover:clip-path-full"
             style={{ clipPath: 'circle(150% at 50% 50%)' }} 
        />
        {/* Default visible state needs refining for pure CSS hover or JS state */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
            <span className="text-white/50">Hover to Reveal</span>
        </div>
         <style jsx>{`
            .group:not(:hover) div:nth-child(2) { clip-path: circle(20% at 50% 50%); filter: grayscale(100%); }
            .group:hover div:nth-child(2) { clip-path: circle(150% at 50% 50%); filter: grayscale(0%); }
        `}</style>
    </div>
);

// 9. Before/After Slider (Simulated)
export const BeforeAfter = () => {
    const [slider, setSlider] = React.useState(50);
    return (
        <div className="relative w-full h-48 rounded-lg overflow-hidden cursor-ew-resize" onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setSlider(((e.clientX - rect.left) / rect.width) * 100);
        }}>
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center grayscale" />
             <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center" 
                style={{ clipPath: `inset(0 ${100-slider}% 0 0)` }} 
            />
            <div className="absolute top-0 bottom-0 w-0.5 bg-white" style={{ left: `${slider}%` }} />
        </div>
    )
}

// 10. Polaroid Stack
export const PolaroidStack = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
         <div className="absolute w-32 h-40 bg-white p-2 shadow-lg rotate-[-6deg] transition-transform hover:rotate-[-12deg] hover:z-10">
             <div className="w-full h-24 bg-gray-200 mb-2 bg-[url('https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=200')] bg-cover" />
         </div>
         <div className="absolute w-32 h-40 bg-white p-2 shadow-lg rotate-[4deg] transition-transform hover:rotate-[12deg] hover:z-10 hover:scale-110 z-0">
             <div className="w-full h-24 bg-gray-200 mb-2 bg-[url('https://images.unsplash.com/photo-1531297461136-82lw82?q=80&w=200')] bg-cover" />
         </div>
    </div>
);

// 11. Reflection Effect
export const ReflectionImage = () => (
    <div className="group w-full h-48 flex flex-col items-center perspective-1000">
         <div className="w-full h-32 bg-[url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=500')] bg-cover bg-center rounded-t-lg group-hover:-translate-y-2 transition-transform duration-500" />
         <div className="w-full h-32 bg-[url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=500')] bg-cover bg-center scale-y-[-1] opacity-20 mask-image-gradient" style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))' }} />
    </div>
);

// 12. Parallax Scroll Image (Needs scroll context, simulating hover)
export const ParallaxHover = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg group">
        <div className="w-[120%] h-[120%] -ml-[10%] -mt-[10%] bg-[url('https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=500')] bg-cover bg-center transition-transform duration-1000 group-hover:translate-y-4 group-hover:translate-x-4" />
    </div>
);

// 13. Image Pixelation
export const PixelateImage = () => (
     <div className="w-full h-48 overflow-hidden rounded-lg relative group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500')] bg-cover bg-center transition-all duration-300 group-hover:blur-md scale-110" />
        {/* Real pixelation requires Canvas/WebGL, blurring as fallback */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-mono bg-black/50">PIXELATED</div>
    </div>
);

// 14. Color Overlay Fade
export const OverlayFade = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg relative group">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=500')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-black font-bold">
            OVERLAY
        </div>
    </div>
);

// 15. Border Frame Draw
export const BorderDrawImage = () => (
    <div className="relative w-full h-48 p-4 group">
        <div className="absolute inset-0 border-2 border-white/20 group-hover:border-primary transition-colors duration-500" />
        <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
        <div className="absolute top-0 right-0 w-0.5 h-0 bg-primary group-hover:h-full transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-primary group-hover:h-full transition-all duration-500" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500')] bg-cover bg-center" />
    </div>
);

// 16. Rotate In
export const RotateInImage = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg perspective-1000 group">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500')] bg-cover bg-center transition-transform duration-500 origin-bottom group-hover:rotate-x-10" />
    </div>
);

// 17. Split Image (CSS Clip)
export const SplitImage = () => (
    <div className="relative w-full h-48 rounded-lg overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140884-074bf86ee91c?q=80&w=500')] bg-cover bg-center transition-transform duration-500 group-hover:-translate-x-2" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140884-074bf86ee91c?q=80&w=500')] bg-cover bg-center transition-transform duration-500 group-hover:translate-x-2" style={{ clipPath: 'inset(0 0 0 50%)' }} />
        <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-0 group-hover:opacity-100 -z-10" />
    </div>
);

// 18. Gallery Stack (Auto-play)
export const GalleryStack = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
        {[0, 1, 2].map(i => (
            <motion.div
                key={i}
                className="absolute w-40 h-32 bg-surface-300 rounded border border-white/10 shadow-lg bg-[url('https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=200')]"
                animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [i*5, i*5+5, i*5],
                    zIndex: i
                }}
                transition={{ repeat: Infinity, duration: 4, delay: i * 1 }}
            />
        ))}
    </div>
);

// 19. Ink InkSpread (Mask Image)
export const InkSpread = () => (
    <div className="w-full h-48 bg-black rounded-lg overflow-hidden relative group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=500')] bg-cover bg-center opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white font-bold mix-blend-overlay text-4xl tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-150 group-hover:scale-100">INK</span>
        </div>
    </div>
);

// 20. Lens Flare Hover
export const LensFlare = () => (
    <div className="w-full h-48 rounded-lg overflow-hidden relative group bg-black">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1534849144194-b446a45f020d?q=80&w=500')] bg-cover bg-center opacity-80" />
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/30 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
);


// LensZoom
export const LensZoom = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group cursor-crosshair">
      <img src="https://picsum.photos/400/300?grayscale" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-150" alt="Lens Zoom" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
    </div>
);

// ColorizeHover
export const ColorizeHover = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out" alt="Colorize" />
    </div>
);

// DirectionalPan
export const DirectionalPan = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/600/400" className="w-full h-full object-cover scale-125 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4" alt="Pan" />
    </div>
);

// SplitReveal
export const SplitReveal = () => (
    <div className="w-full h-48 flex relative overflow-hidden rounded-lg group">
      <div className="w-1/2 h-full bg-zinc-800 relative overflow-hidden transition-transform duration-500 group-hover:-translate-x-full">
         <img src="https://picsum.photos/400/300" className="absolute w-[200%] h-full max-w-none object-cover left-0" alt="Left" />
      </div>
      <div className="w-1/2 h-full bg-zinc-800 relative overflow-hidden transition-transform duration-500 group-hover:translate-x-full">
         <img src="https://picsum.photos/400/300" className="absolute w-[200%] h-full max-w-none object-cover right-0" alt="Right" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <span className="text-xl font-bold tracking-widest uppercase">Reveal</span>
      </div>
    </div>
);

// OverlaySlide
export const OverlaySlide = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover" alt="Overlay" />
      <div className="absolute inset-0 bg-blue-600/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
        <span className="text-white font-bold text-lg">View Project</span>
      </div>
    </div>
);

// MasonryFade
export const MasonryFade = () => (
    <div className="grid grid-cols-3 gap-2 w-full h-48 overflow-hidden">
      {[1,2,3,4,5,6].map((i) => (
        <div key={i} className="bg-zinc-800 rounded overflow-hidden relative group">
          <img src={`https://picsum.photos/200/200?random=${i}`} className="w-full h-full object-cover opacity-0 animate-[fade-in_0.5s_ease-out_forwards]" style={{ animationDelay: `${i * 100}ms` }} alt="Masonry" />
        </div>
      ))}
    </div>
);

// CarouselSlide
export const CarouselSlide = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative flex items-center group">
      <div className="flex w-[300%] h-full animate-[slide-left-3_10s_infinite_linear]">
         <img src="https://picsum.photos/400/300?random=1" className="w-1/3 h-full object-cover" alt="1" />
         <img src="https://picsum.photos/400/300?random=2" className="w-1/3 h-full object-cover" alt="2" />
         <img src="https://picsum.photos/400/300?random=3" className="w-1/3 h-full object-cover" alt="3" />
      </div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
    </div>
);

// LightboxTrigger
export const LightboxTrigger = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group cursor-zoom-in">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover transition-opacity group-hover:opacity-50" alt="Lightbox" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" /></svg>
      </div>
    </div>
);

// GridShuffle
export const GridShuffle = () => (
    <div className="grid grid-cols-2 gap-2 w-full h-48 group">
      <div className="bg-zinc-800 rounded transition-transform duration-500 group-hover:translate-x-[100%] z-10"><img src="https://picsum.photos/200/200?random=1" className="w-full h-full object-cover rounded" /></div>
      <div className="bg-zinc-800 rounded transition-transform duration-500 group-hover:translate-x-[-100%]"><img src="https://picsum.photos/200/200?random=2" className="w-full h-full object-cover rounded" /></div>
      <div className="bg-zinc-800 rounded transition-transform duration-500 group-hover:translate-y-[-100%]"><img src="https://picsum.photos/200/200?random=3" className="w-full h-full object-cover rounded" /></div>
      <div className="bg-zinc-800 rounded transition-transform duration-500 group-hover:translate-y-[-100%]"><img src="https://picsum.photos/200/200?random=4" className="w-full h-full object-cover rounded" /></div>
    </div>
);

// StackFan
export const StackFan = () => (
    <div className="relative w-full h-48 flex items-center justify-center group">
      <div className="absolute w-32 h-40 bg-zinc-700 rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-x-12 group-hover:-rotate-12 border-2 border-zinc-600 overflow-hidden"><img src="https://picsum.photos/200/300?random=1" className="w-full h-full object-cover" /></div>
      <div className="absolute w-32 h-40 bg-zinc-700 rounded-lg shadow-lg transition-transform duration-300 group-hover:translate-x-12 group-hover:rotate-12 border-2 border-zinc-600 overflow-hidden"><img src="https://picsum.photos/200/300?random=2" className="w-full h-full object-cover" /></div>
      <div className="absolute w-32 h-40 bg-zinc-700 rounded-lg shadow-xl transition-transform duration-300 group-hover:-translate-y-4 z-10 border-2 border-zinc-600 overflow-hidden"><img src="https://picsum.photos/200/300?random=3" className="w-full h-full object-cover" /></div>
    </div>
);

// BeforeAfterVertical
export const BeforeAfterVertical = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group cursor-row-resize">
      <img src="https://picsum.photos/400/300?grayscale" className="absolute inset-0 w-full h-full object-cover" alt="After" />
      <div className="absolute inset-0 h-1/2 w-full overflow-hidden border-b-2 border-white group-hover:h-3/4 transition-all duration-100 ease-linear">
         <img src="https://picsum.photos/400/300" className="absolute top-0 w-full h-48 object-cover max-w-none" alt="Before" />
      </div>
    </div>
);

// ImageHotspot
export const ImageHotspot = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity" alt="Product" />
      <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-white rounded-full shadow-lg cursor-pointer flex items-center justify-center group/spot animate-pulse hover:animate-none">
        <div className="w-2 h-2 bg-blue-600 rounded-full" />
        <div className="absolute left-full ml-2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap">Wool Blend</div>
      </div>
    </div>
);

// KenBurnsPan
export const KenBurnsPan = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative">
      <img src="https://picsum.photos/600/400" className="w-full h-full object-cover animate-[ken-burns_15s_infinite_alternate]" alt="Ken Burns" />
    </div>
);

// ImageTilt3D
export const ImageTilt3D = () => (
    <div className="w-40 h-40 mx-auto perspective-1000 group">
      <div className="w-full h-full bg-zinc-700 rounded-lg overflow-hidden transform transition-transform duration-500 group-hover:rotate-x-12 group-hover:rotate-y-12 shadow-2xl">
        <img src="https://picsum.photos/200/200" className="w-full h-full object-cover" alt="3D Tilt" />
      </div>
    </div>
);

// GlitchImageLoop
export const GlitchImageLoop = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover" alt="Base" />
      <img src="https://picsum.photos/400/300" className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-50 translate-x-1 animate-[glitch-1_2s_infinite]" alt="Glitch 1" />
      <img src="https://picsum.photos/400/300" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 -translate-x-1 animate-[glitch-2_3s_infinite]" alt="Glitch 2" />
    </div>
);

// DuotoneFilter
export const DuotoneFilter = () => (
    <div className="w-full h-48 bg-indigo-900 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover mix-blend-screen filter grayscale contrast-125 transition-all duration-500 group-hover:filter-none group-hover:mix-blend-normal" alt="Duotone" />
      <div className="absolute inset-0 bg-pink-500 mix-blend-multiply opacity-80 group-hover:opacity-0 transition-opacity duration-500" />
    </div>
);

// BlurToSharp
export const BlurToSharp = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover filter blur-md scale-110 group-hover:blur-0 group-hover:scale-100 transition-all duration-700 ease-out" alt="Focus" />
    </div>
);

// InvertHover
export const InvertHover = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover filter invert-0 group-hover:invert transition-all duration-300" alt="Invert" />
    </div>
);

// SepiaFade
export const SepiaFade = () => (
    <div className="w-full h-48 bg-[#704214] rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover filter sepia transition-all duration-500 group-hover:sepia-0" alt="Sepia" />
    </div>
);

// PixelateReveal
export const PixelateReveal = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      {/* Simulation: Pixelation usually requires canvas/SVG filters. Using blur+contrast hack for CSS-only sim */}
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover filter contrast-[100] blur-[2px] opacity-50 group-hover:filter-none group-hover:opacity-100 transition-all duration-500" alt="Pixelate" />
    </div>
);

// ImageCaptionUp
export const ImageCaptionUp = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Caption" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Beautiful Landscape</p>
      </div>
    </div>
);

// BorderFrame
export const BorderFrame = () => (
    <div className="w-full h-48 relative group p-2">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-colors duration-300 z-10 rounded-lg scale-95 group-hover:scale-100 transition-transform" />
      <div className="w-full h-full rounded-lg overflow-hidden">
        <img src="https://picsum.photos/400/300" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Frame" />
      </div>
    </div>
);

// ShineSweep
export const ShineSweep = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover" alt="Shine" />
      <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[200%] -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    </div>
);

// CircleClipExpand
export const CircleClipExpand = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group flex items-center justify-center">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover absolute inset-0 transition-all duration-500 clip-path-circle-[20%] group-hover:clip-path-circle-[100%]" alt="Clip" />
    </div>
);

// SaturateHover
export const SaturateHover = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover filter saturate-50 group-hover:saturate-150 transition-all duration-300" alt="Saturate" />
    </div>
);

// PatternReveal
export const PatternReveal = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover" alt="Pattern" />
    </div>
);

// SkewPan
export const SkewPan = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group perspective-500">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:skew-x-3 group-hover:rotate-1" alt="Skew" />
    </div>
);

// VideoPlayPreview
export const VideoPlayPreview = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group cursor-pointer">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" alt="Video" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
      </div>
    </div>
);

// VignetteFocus
export const VignetteFocus = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/300" className="w-full h-full object-cover" alt="Vignette" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.8)_120%)] group-hover:bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.5)_120%)] transition-all duration-500" />
    </div>
);

// ParallaxScrollMock
export const ParallaxScrollMock = () => (
    <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <img src="https://picsum.photos/400/600" className="w-full h-[150%] object-cover absolute top-0 group-hover:-top-24 transition-all duration-[2s] ease-in-out" alt="Scroll" />
    </div>
);
