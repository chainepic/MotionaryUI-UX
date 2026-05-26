'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Fade Transition
export const FadePage = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-200 text-white"
                >
                    Page {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 2. Slide Left
export const SlideLeft = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='popLayout'>
                <motion.div 
                    key={key}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-100 border border-white/5"
                >
                    Slide {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 3. Scale Up
export const ScaleUp = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-primary/20 text-primary font-bold"
                >
                    Scale {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 4. Wipe Reveal
export const WipeReveal = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence>
                <motion.div 
                    key={key}
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0 0 0)" }}
                    exit={{ clipPath: "inset(0 0 0 100%)", zIndex: 10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center bg-secondary text-white"
                >
                    Wipe {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 5. Flip Transition
export const FlipTransition = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden perspective-1000 cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-300 border border-white/10"
                >
                    Flip {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 6. Circle Mask
export const CircleMask = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ clipPath: "circle(0% at 50% 50%)" }}
                    animate={{ clipPath: "circle(100% at 50% 50%)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center bg-accent/20 text-accent"
                >
                    Circle {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 7. Blinds Effect
export const BlindsEffect = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer flex" onClick={() => setKey(k => k+1)}>
            {[0,1,2,3,4].map(i => (
                <motion.div 
                    key={`${key}-${i}`}
                    className="h-full flex-1 bg-white/10 border-r border-black"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                />
            ))}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">Blinds {key}</div>
        </div>
    )
}

// 8. Dissolve Pixel
export const DissolvePixel = () => {
    const [key, setKey] = useState(0);
    // Simplified CSS dissolve simulation
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center bg-[url('/grid.svg')] bg-cover"
                >
                    <span className="bg-black p-1">Dissolve {key}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 9. Drawer Up
export const DrawerUp = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence>
                <motion.div 
                    key={key}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }} // Or stay and get covered
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-200 border-t border-white/20"
                >
                    Drawer {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 10. Curtain Open
export const CurtainOpen = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer flex" onClick={() => setOpen(!open)}>
            <motion.div className="h-full w-1/2 bg-red-900 z-10" animate={{ x: open ? "-100%" : "0%" }} transition={{ duration: 0.8 }} />
            <motion.div className="h-full w-1/2 bg-red-900 z-10" animate={{ x: open ? "100%" : "0%" }} transition={{ duration: 0.8 }} />
            <div className="absolute inset-0 flex items-center justify-center">Showtime!</div>
        </div>
    )
}

// 11. Zoom Out Fade
export const ZoomOutFade = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-blue-900/20"
                >
                    Zoom {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 12. Folder Tab
export const FolderTab = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer pt-4" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    className="absolute inset-0 top-4 flex items-center justify-center bg-surface-100 rounded-t-xl border-t border-x border-white/10"
                >
                    Tab {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 13. Glitch Transition
export const GlitchTransition = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ x: -100, opacity: 0, skewX: 20 }}
                    animate={{ x: 0, opacity: 1, skewX: 0 }}
                    exit={{ x: 100, opacity: 0, skewX: -20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-200"
                >
                    Glitch {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 14. Morph Shape
export const MorphPage = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer flex items-center justify-center" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ borderRadius: "100%", width: 10, height: 10 }}
                    animate={{ borderRadius: "0%", width: "100%", height: "100%" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 flex items-center justify-center"
                >
                    <span className="text-white">Morph {key}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 15. Tiles Reveal
export const TilesReveal = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer grid grid-cols-4 grid-rows-2" onClick={() => setKey(k => k+1)}>
            {[...Array(8)].map((_, i) => (
                <motion.div 
                    key={`${key}-${i}`}
                    className="bg-primary/20 border border-black"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                />
            ))}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">Tiles {key}</div>
        </div>
    )
}

// 16. Clock Wipe
export const ClockWipe = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ clipPath: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 0deg)" }}
                    animate={{ clipPath: "conic-gradient(from 0deg at 50% 50%, black 0deg, black 360deg)" }} // Simulate wipe with CSS not fully possible, fallback to circle or use specialized SVG
                    className="absolute inset-0 flex items-center justify-center bg-surface-200"
                >
                    Clock {key} (Sim)
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 17. Crossfade Blur
export const CrossfadeBlur = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    exit={{ filter: "blur(20px)", opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-900 to-black"
                >
                    Blur {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 18. Lines Slide
export const LinesSlide = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer flex flex-col" onClick={() => setKey(k => k+1)}>
            {[0,1,2,3].map(i => (
                <motion.div 
                    key={`${key}-${i}`}
                    className="w-full flex-1 bg-surface-100 border-b border-black"
                    initial={{ x: i % 2 === 0 ? "-100%" : "100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                />
            ))}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">Lines {key}</div>
        </div>
    )
}

// 19. Rotate Cube
export const RotateCube = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden perspective-1000 cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-300"
                >
                    Cube {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 20. Elastic Snap
export const ElasticSnap = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="absolute inset-0 flex items-center justify-center bg-primary/10 border border-primary/30"
                >
                    Snap {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}


// CircleRevealPage
export const CircleRevealPage = () => (
    <div className="w-full h-48 bg-black relative overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center text-zinc-500">Next Page</div>
      <div className="absolute inset-0 bg-white clip-path-circle-[0%] group-hover:clip-path-circle-[150%] transition-all duration-700 ease-in-out flex items-center justify-center">
        <span className="text-black font-bold text-xl">Welcome</span>
      </div>
    </div>
);

// PixelDissolve
export const PixelDissolve = () => (
    <div className="w-full h-48 bg-zinc-800 relative group cursor-pointer grid grid-cols-10 grid-rows-6">
      {[...Array(60)].map((_, i) => (
        <div key={i} className="bg-zinc-800 group-hover:opacity-0 transition-opacity duration-500" style={{ transitionDelay: `${Math.random() * 500}ms` }} />
      ))}
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-blue-600 text-white">Revealed</div>
    </div>
);

// CurtainWipe
export const CurtainWipe = () => (
    <div className="w-full h-48 bg-zinc-800 relative overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full bg-zinc-700 transition-transform duration-700 group-hover:-translate-x-full" />
        <div className="w-1/2 h-full bg-zinc-700 transition-transform duration-700 group-hover:translate-x-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <span className="text-2xl">🎭</span>
      </div>
    </div>
);

// BookFlipPage
export const BookFlipPage = () => (
    <div className="w-32 h-40 perspective-1000 group cursor-pointer relative mx-auto">
      <div className="absolute inset-0 bg-zinc-700 rounded-r-lg origin-left transition-transform duration-700 group-hover:-rotate-y-180 z-10 border border-zinc-600 flex items-center justify-center backface-hidden">
        Cover
      </div>
      <div className="absolute inset-0 bg-white rounded-r-lg border border-zinc-200 flex items-center justify-center text-black">
        Page 1
      </div>
    </div>
);

// SharedHero
export const SharedHero = () => (
    <div className="w-full h-48 bg-zinc-900 p-4 group cursor-pointer">
      <div className="w-12 h-12 bg-blue-500 rounded-lg group-hover:w-full group-hover:h-32 group-hover:rounded-xl transition-all duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] mb-2" />
      <div className="h-4 w-24 bg-zinc-700 rounded group-hover:translate-y-4 transition-transform duration-300" />
    </div>
);

// ListToDetail
export const ListToDetail = () => (
    <div className="w-full h-48 overflow-hidden relative group">
      <div className="space-y-2 p-4 transition-opacity duration-300 group-hover:opacity-0">
        <div className="h-8 bg-zinc-800 rounded w-full" />
        <div className="h-8 bg-zinc-800 rounded w-full" />
        <div className="h-8 bg-zinc-800 rounded w-full" />
      </div>
      <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4">
        <div className="h-32 bg-zinc-700 rounded w-full" />
      </div>
    </div>
);

// CardExpansion
export const CardExpansion = () => (
    <div className="w-full h-48 flex items-center justify-center">
      <div className="w-32 h-20 bg-zinc-800 rounded-lg transition-all duration-500 group hover:w-64 hover:h-40 hover:bg-zinc-700 shadow-xl flex flex-col items-center justify-center overflow-hidden cursor-pointer">
        <span className="font-bold">Card</span>
        <p className="text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity delay-200 mt-2">More details revealed...</p>
      </div>
    </div>
);

// ParallaxHeader
export const ParallaxHeader = () => (
    <div className="w-full h-48 overflow-hidden relative group cursor-ns-resize">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/600/400')] bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:translate-y-4" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-3xl font-black text-white drop-shadow-lg group-hover:-translate-y-8 transition-transform duration-1000">PARALLAX</h2>
      </div>
    </div>
);

// StickySection
export const StickySection = () => (
    <div className="h-48 overflow-y-auto bg-zinc-900 border border-zinc-700 rounded relative no-scrollbar group">
      <div className="sticky top-0 bg-blue-600 text-white p-2 z-10 shadow-md">Sticky Header</div>
      <div className="p-4 space-y-4">
        <p className="text-zinc-400">Scroll content...</p>
        <p className="text-zinc-400">More content...</p>
        <p className="text-zinc-400">Keep going...</p>
        <p className="text-zinc-400">Almost there...</p>
        <p className="text-zinc-400">End.</p>
      </div>
      <div className="absolute bottom-2 right-2 text-[10px] text-zinc-500 animate-bounce">Scroll me</div>
    </div>
);

// HorizontalSnap
export const HorizontalSnap = () => (
    <div className="flex gap-4 overflow-x-auto w-full p-4 snap-x snap-mandatory scroll-smooth no-scrollbar">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="min-w-[80%] h-32 bg-zinc-800 rounded-lg snap-center flex items-center justify-center text-2xl font-bold text-zinc-600 border border-zinc-700">
          {i}
        </div>
      ))}
    </div>
);

// ModalScaleUp
export const ModalScaleUp = () => (
    <div className="relative w-full h-48 bg-zinc-900 flex items-center justify-center group">
      <button className="px-4 py-2 bg-zinc-800 rounded text-sm">Open Modal</button>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-zinc-800 p-6 rounded-xl scale-50 group-hover:scale-100 transition-all duration-300 shadow-2xl border border-zinc-700">
          <h3 className="font-bold mb-2">Modal Title</h3>
          <p className="text-sm text-zinc-400">Modal content goes here.</p>
        </div>
      </div>
    </div>
);

// DrawerSlideRight
export const DrawerSlideRight = () => (
    <div className="relative w-full h-48 bg-zinc-900 overflow-hidden group">
      <div className="absolute right-0 top-0 h-full w-48 bg-zinc-800 border-l border-zinc-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300 shadow-xl p-4">
        <h4 className="font-bold mb-4">Drawer</h4>
        <div className="space-y-2">
          <div className="h-2 bg-zinc-700 rounded" />
          <div className="h-2 bg-zinc-700 rounded w-2/3" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-zinc-500 group-hover:translate-x-[-20px] transition-transform">
        Hover Right Edge -&gt;
      </div>
    </div>
);

// ToastStackUp
export const ToastStackUp = () => (
    <div className="relative w-full h-48 bg-zinc-900 flex flex-col-reverse items-center pb-4 gap-2 overflow-hidden group cursor-pointer">
      <div className="w-48 h-10 bg-green-600 rounded shadow-lg flex items-center px-3 text-xs text-white translate-y-20 group-hover:translate-y-0 transition-transform duration-300 delay-200">Success!</div>
      <div className="w-48 h-10 bg-blue-600 rounded shadow-lg flex items-center px-3 text-xs text-white translate-y-20 group-hover:translate-y-0 transition-transform duration-300 delay-100">Info message</div>
      <div className="w-48 h-10 bg-zinc-700 rounded shadow-lg flex items-center px-3 text-xs text-white translate-y-20 group-hover:translate-y-0 transition-transform duration-300">New notification</div>
    </div>
);

// RippleButton
export const RippleButton = () => (
    <button className="relative px-6 py-3 bg-indigo-600 text-white rounded overflow-hidden group">
      <span className="relative z-10">Ripple Effect</span>
      <span className="absolute w-0 h-0 bg-white/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-active:w-64 group-active:h-64 transition-all duration-500 ease-out" />
    </button>
);

// BorderDrawBox
export const BorderDrawBox = () => (
    <div className="relative p-6 text-center group cursor-pointer">
      <span className="relative z-10">Border Draw</span>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className="absolute top-0 right-0 w-0.5 h-full bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-100 origin-top" />
      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-200 origin-right" />
      <div className="absolute bottom-0 left-0 w-0.5 h-full bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-300 origin-bottom" />
    </div>
);

// UnderlineGrow
export const UnderlineGrow = () => (
    <a href="#" className="relative text-lg text-white group">
      Hover Link
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </a>
);

// ImageGreyscaleColor
export const ImageGreyscaleColor = () => (
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-800 group cursor-pointer">
      <img src="https://picsum.photos/200/200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
    </div>
);

// TextGradientPan
export const TextGradientPan = () => (
    <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-[shimmer_3s_infinite] bg-[length:200%_auto]">
      Gradient
    </h1>
);

// SkewButton
export const SkewButton = () => (
    <button className="px-6 py-2 bg-yellow-400 text-black font-bold transform skew-x-[-10deg] hover:skew-x-[-20deg] transition-transform active:scale-95">
      <span className="inline-block transform skew-x-[10deg] group-hover:skew-x-[20deg] transition-transform">Skew</span>
    </button>
);

// FloatingCard
export const FloatingCard = () => (
    <div className="w-32 h-20 bg-zinc-800 rounded shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-sm cursor-pointer">
      Float
    </div>
);

// RotateIcon
export const RotateIcon = () => (
    <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center hover:rotate-180 transition-transform duration-500 cursor-pointer">
      <span className="text-xl">⚙️</span>
    </div>
);

// PulseBadge
export const PulseBadge = () => (
    <span className="relative inline-flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
);

// TypewriterSimple
export const TypewriterSimple = () => (
    <div className="font-mono border-r-2 border-white pr-1 animate-[blink_1s_infinite] w-fit">
      Typing...
    </div>
);

// BlurFadeIn
export const BlurFadeIn = () => (
    <div className="text-2xl font-bold animate-[fade-in-blur_1s_ease-out]">
      Blur Fade
    </div>
);

// SlideUpReveal
export const SlideUpReveal = () => (
    <div className="overflow-hidden h-8">
      <div className="animate-[slide-up_0.5s_ease-out] text-xl">
        Slide Up
      </div>
    </div>
);

// ShakeErrorInput
export const ShakeErrorInput = () => (
    <input type="text" placeholder="Error" className="bg-red-900/20 border border-red-500 text-red-200 px-3 py-1 rounded w-32 animate-[shake_0.4s_ease-in-out]" />
);

// BounceLoading
export const BounceLoading = () => (
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
      <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
      <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
    </div>
);

// FlipText
export const FlipText = () => (
    <div className="group cursor-pointer perspective-500">
      <div className="transition-transform duration-500 transform-style-3d group-hover:rotate-x-180 h-6">
        <div className="absolute inset-0 backface-hidden">Front</div>
        <div className="absolute inset-0 backface-hidden rotate-x-180 bg-red-500 text-white px-1">Back</div>
      </div>
    </div>
);

// GlowBorder
export const GlowBorder = () => (
    <div className="p-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg group hover:animate-pulse cursor-pointer">
      <div className="bg-black px-4 py-2 rounded-md text-white">
        Glow
      </div>
    </div>
);

// ExpandSearch
export const ExpandSearch = () => (
    <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center pl-2 overflow-hidden transition-all duration-300 hover:w-32 group cursor-pointer">
      <span className="text-lg">🔍</span>
      <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Search</span>
    </div>
);
