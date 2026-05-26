'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. Typewriter Effect
export const TypewriterText = ({ text = "Coding the future..." }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i === text.length) clearInterval(timer);
        }, 100);
        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="font-mono text-xl">
            {displayedText}
            <motion.span 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
            />
        </span>
    );
};

// 2. Scramble Text (Hacker Effect)
export const ScrambleText = ({ text = "DECRYPTING" }) => {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    const scramble = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(text.split("").map((letter, index) => {
                if (index < iterations) return text[index];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join(""));
            
            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    };

    return (
        <span 
            onMouseEnter={scramble}
            className="font-mono text-xl cursor-default hover:text-primary transition-colors"
        >
            {display}
        </span>
    );
};

// 3. Gradient Text
export const GradientText = ({ text = "Unicorn Power" }) => (
    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
        {text}
    </span>
);

// 4. Staggered Letter Reveal
export const StaggerText = ({ text = "Staggered Reveal" }) => (
    <div className="overflow-hidden">
        {text.split("").map((char, i) => (
            <motion.span
                key={i}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ delay: i * 0.05, ease: "backOut" }}
                className="inline-block text-2xl font-bold"
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
    </div>
);

// 5. Blur Reveal
export const BlurText = ({ text = "Focusing..." }) => (
    <motion.h2
        initial={{ filter: "blur(20px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-3xl font-light"
    >
        {text}
    </motion.h2>
);

// 6. Masked Video Text
export const VideoText = ({ text = "OCEAN" }) => (
    <div className="relative">
         <h1 className="text-8xl font-black text-transparent bg-clip-text bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODliZTViODliZTViODliZTViODliZTViODliZTViODliZTVi/3o6Zt481isNVuQI1l6/giphy.gif')] bg-cover bg-center tracking-tighter">
            {text}
        </h1>
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
    </div>
);

// 7. 3D Rotate Text
export const RotateText = ({ text = "Flip Me" }) => (
    <motion.div
        whileHover={{ rotateX: 360 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-secondary perspective-1000 cursor-pointer"
    >
        {text}
    </motion.div>
);

// 8. Wavy Text
export const WavyText = ({ text = "Wavy Vibes" }) => (
    <div className="flex">
        {text.split("").map((char, i) => (
            <motion.span
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 1.5, 
                    delay: i * 0.1,
                    ease: "easeInOut" 
                }}
                className="text-2xl font-medium"
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
    </div>
);

// 9. Spotlight Text (CSS Mask)
export const SpotlightText = () => (
    <div className="relative text-4xl font-bold text-[#333] cursor-default group">
        <span className="block">Hidden in Dark</span>
        <span 
            className="absolute top-0 left-0 text-white clip-path-circle transition-all duration-300 group-hover:clip-path-circle-open"
            style={{ 
                clipPath: "circle(0% at 50% 50%)", 
                backgroundImage: "linear-gradient(45deg, #ff00cc, #3333ff)", 
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent" 
            }} 
        >
            Hidden in Dark
        </span>
        <style jsx>{`
            .group:hover span:last-child {
                clip-path: circle(100% at 50% 50%) !important;
            }
        `}</style>
    </div>
);

// 10. Glitch Text
export const GlitchTextEffect = ({ text = "System Failure" }) => (
    <div className="relative inline-block text-4xl font-black text-white group cursor-pointer">
        <span className="relative z-10">{text}</span>
        <span className="absolute top-0 left-0 -ml-[2px] text-red-500 opacity-0 group-hover:opacity-70 animate-pulse">{text}</span>
        <span className="absolute top-0 left-0 ml-[2px] text-blue-500 opacity-0 group-hover:opacity-70 animate-pulse delay-75">{text}</span>
    </div>
);


// WordsFadeIn
export const WordsFadeIn = () => (
    <h1 className="text-4xl font-bold text-white flex gap-2 overflow-hidden">
      {["Hello", "World", "Design"].map((word, i) => (
        <span key={i} className="animate-[fade-in-up_0.5s_ease-out_forwards] opacity-0 translate-y-4" style={{ animationDelay: `${i * 200}ms` }}>
          {word}
        </span>
      ))}
    </h1>
);

// CharStaggerReveal
export const CharStaggerReveal = () => (
    <h2 className="text-4xl font-mono text-cyan-400 cursor-default group">
      {"CYBERPUNK".split("").map((char, i) => (
        <span key={i} className="inline-block hover:-translate-y-2 hover:text-white transition-all duration-200" style={{ transitionDelay: `${i * 50}ms` }}>
          {char}
        </span>
      ))}
    </h2>
);

// BlurInText
export const BlurInText = () => (
    <div className="group cursor-pointer">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 blur-sm group-hover:blur-0 transition-all duration-700 ease-out">
        Focus Reveal
      </h2>
    </div>
);

// Rotate3DText
export const Rotate3DText = () => (
    <div className="perspective-1000 group">
      <h2 className="text-5xl font-black text-white transform transition-transform duration-500 group-hover:rotate-x-12 group-hover:scale-110 cursor-pointer origin-bottom bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
        3D IMPACT
      </h2>
    </div>
);

// MaskSlideText
export const MaskSlideText = () => (
    <div className="relative overflow-hidden cursor-pointer group">
      <h2 className="text-4xl font-bold text-white translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
        Original
      </h2>
      <h2 className="absolute top-0 left-0 text-4xl font-bold text-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        Revealed
      </h2>
    </div>
);

// HoverGlowText
export const HoverGlowText = () => (
    <h2 className="text-4xl font-bold text-zinc-600 transition-colors duration-300 hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] cursor-pointer">
      Glowing Text
    </h2>
);

// TextSplitEffect
export const TextSplitEffect = () => (
    <div className="group relative cursor-pointer overflow-hidden">
      <div className="text-4xl font-bold text-white transition-transform duration-500 group-hover:-translate-y-[150%]">
        Split Up
      </div>
      <div className="text-4xl font-bold text-white absolute top-0 left-0 transition-transform duration-500 translate-y-[150%] group-hover:translate-y-0">
        Split Up
      </div>
      <div className="h-[1px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 absolute top-1/2 left-0" />
    </div>
);

// MagneticCharText
export const MagneticCharText = () => (
    <h2 className="text-4xl font-bold text-white flex gap-1 cursor-default">
      {"MAGNETIC".split("").map((char, i) => (
        <span key={i} className="hover:scale-150 hover:mx-2 hover:text-blue-400 transition-all duration-200 cursor-pointer">
          {char}
        </span>
      ))}
    </h2>
);

// GradientFlowText
export const GradientFlowText = () => (
    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
      Gradient Flow
    </h2>
);

// UnderlineFillText
export const UnderlineFillText = () => (
    <span className="relative text-3xl font-bold text-white cursor-pointer group">
      Hover Me
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <span className="absolute left-0 bottom-0 w-full h-full bg-white/10 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom delay-100 -z-10" />
    </span>
);

// GlitchDecodeText
export const GlitchDecodeText = () => (
    <div className="font-mono text-2xl text-green-500 cursor-pointer group relative">
      <span className="group-hover:opacity-0 transition-opacity">System.Ready</span>
      <span className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse text-red-500">
        System.Error
      </span>
    </div>
);

// NeonFlickerText
export const NeonFlickerText = () => (
    <h2 className="text-6xl font-black text-transparent -webkit-text-stroke-2 -webkit-text-stroke-white hover:text-yellow-300 hover:drop-shadow-[0_0_20px_rgba(253,224,71,0.8)] transition-all duration-100 cursor-pointer">
      FLICKER
    </h2>
);

// TextureMaskText
export const TextureMaskText = () => (
    <h2 className="text-6xl font-black text-transparent bg-clip-text bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover tracking-tighter hover:tracking-widest transition-all duration-700 cursor-pointer text-white/50 hover:text-white/80">
      TEXTURE
    </h2>
);

// DoubleLayerText
export const DoubleLayerText = () => (
    <div className="relative text-5xl font-bold text-white cursor-pointer group">
      <span className="absolute top-0 left-0 text-red-500 mix-blend-screen translate-x-[2px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">DOUBLE</span>
      <span className="absolute top-0 left-0 text-blue-500 mix-blend-screen -translate-x-[2px] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all">DOUBLE</span>
      <span className="relative z-10">DOUBLE</span>
    </div>
);

// TypewriterLoop
export const TypewriterLoop = () => (
    <div className="font-mono text-xl text-white border-r-2 border-white pr-1 animate-[typing_3s_steps(30,end)_infinite,blink_1s_step-end_infinite] overflow-hidden whitespace-nowrap w-[14ch]">
      Typing effect...
    </div>
);

// ScaleUpReveal
export const ScaleUpReveal = () => (
    <div className="overflow-hidden">
      <h2 className="text-4xl font-bold text-white transform translate-y-full scale-50 opacity-0 animate-[fade-in-up_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        Scale Up
      </h2>
    </div>
);

// LetterSpacingText
export const LetterSpacingText = () => (
    <h2 className="text-3xl font-light text-white tracking-tighter hover:tracking-[1em] transition-all duration-1000 cursor-pointer whitespace-nowrap">
      EXPANSION
    </h2>
);

// HighlightMarkText
export const HighlightMarkText = () => (
    <span className="relative z-10 text-3xl font-bold text-white px-1 cursor-pointer group">
      Highlight
      <span className="absolute inset-0 bg-yellow-500 -z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left skew-x-12" />
    </span>
);

// SkewTextHover
export const SkewTextHover = () => (
    <h2 className="text-5xl font-black text-white cursor-pointer hover:skew-x-12 hover:scale-110 hover:text-pink-500 transition-all duration-300 origin-bottom-left">
      SKEW IT
    </h2>
);

// WaveText
export const WaveText = () => (
    <h2 className="text-4xl font-bold text-white flex cursor-default">
      {"WAVING".split("").map((char, i) => (
        <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 100}ms` }}>{char}</span>
      ))}
    </h2>
);

// ElasticText
export const ElasticText = () => (
    <h2 className="text-4xl font-bold text-white hover:scale-[1.2] active:scale-[0.9] transition-transform duration-500 cubic-bezier(0.68,-0.55,0.265,1.55) cursor-pointer">
      Elastic
    </h2>
);

// OutlineFillText
export const OutlineFillText = () => (
    <h2 className="text-5xl font-bold text-transparent -webkit-text-stroke-1 -webkit-text-stroke-white bg-white bg-clip-text hover:text-white transition-all duration-500 cursor-pointer">
      OUTLINE
    </h2>
);

// TextShadowPop
export const TextShadowPop = () => (
    <h2 className="text-4xl font-bold text-white transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#3b82f6] cursor-pointer bg-zinc-800 px-4 py-2 inline-block">
      Shadow Pop
    </h2>
);

// RainbowText
export const RainbowText = () => (
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 hover:hue-rotate-90 transition-all duration-1000 cursor-pointer">
      Rainbow
    </h2>
);

// VerticalScrollText
export const VerticalScrollText = () => (
    <div className="h-8 overflow-hidden text-2xl font-bold text-white">
      <div className="animate-[slide-up_2s_linear_infinite]">
        <div className="h-8">Designing</div>
        <div className="h-8">Building</div>
        <div className="h-8">Shipping</div>
        <div className="h-8">Designing</div>
      </div>
    </div>
);

// ClipPathText
export const ClipPathText = () => (
    <h2 className="text-5xl font-bold text-white hover:[clip-path:polygon(0_0,100%_0,100%_50%,0_50%)] transition-all duration-300 cursor-pointer">
      Sliced
    </h2>
);

// MirrorTextBottom
export const MirrorTextBottom = () => (
    <div className="relative group cursor-pointer">
      <h2 className="text-4xl font-bold text-white">Reflected</h2>
      <h2 className="text-4xl font-bold text-white/20 transform scale-y-[-1] origin-top blur-[2px] transition-all group-hover:blur-0 group-hover:text-white/40">Reflected</h2>
    </div>
);

// VibrateText
export const VibrateText = () => (
    <h2 className="text-4xl font-bold text-red-500 hover:animate-[spin_0.1s_linear_infinite] cursor-pointer inline-block">
      DANGER
    </h2>
);

// FocusBlurText
export const FocusBlurText = () => (
    <h2 className="text-4xl font-bold text-white/20 hover:text-white hover:blur-none blur-sm transition-all duration-500 cursor-pointer">
      Focus Me
    </h2>
);

// PerspectiveText
export const PerspectiveText = () => (
    <div className="perspective-500 group cursor-pointer">
      <h2 className="text-5xl font-black text-white transform rotate-y-12 group-hover:rotate-y-0 transition-transform duration-500 origin-left text-shadow-lg">
        DEPTH
      </h2>
    </div>
);

// MarqueeScroll
export const MarqueeScroll = () => (
    <div className="w-full overflow-hidden bg-black py-2">
      <div className="animate-[marquee_5s_linear_infinite] whitespace-nowrap text-white font-bold text-xl uppercase tracking-widest">
        Breaking News • Breaking News • Breaking News • Breaking News •
      </div>
    </div>
);

// TextPathWave
export const TextPathWave = () => (
    <div className="w-full h-20 flex items-center justify-center overflow-hidden">
      <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-[wave-text_2s_ease-in-out_infinite] transform skew-x-12">
        WAVY TEXT
      </h2>
    </div>
);

// ElasticLetters
export const ElasticLetters = () => (
    <div className="flex gap-1 text-3xl font-bold cursor-default group">
      {['E','L','A','S','T','I','C'].map((l, i) => (
        <span key={i} className="hover:scale-125 hover:-translate-y-2 transition-transform duration-300 inline-block text-zinc-300 hover:text-white">{l}</span>
      ))}
    </div>
);

// CircleTextSpin
export const CircleTextSpin = () => (
    <div className="relative w-32 h-32 flex items-center justify-center animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" width="100" height="100">
        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
        <text fontSize="12" fill="white" letterSpacing="2">
          <textPath href="#circlePath">ROTATING TEXT CIRCLE •</textPath>
        </text>
      </svg>
    </div>
);

// StrokeDrawText
export const StrokeDrawText = () => (
    <svg className="w-64 h-16">
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="40" fill="none" stroke="white" strokeWidth="2" strokeDasharray="200" strokeDashoffset="200" className="animate-[stroke-draw_2s_ease-out_forwards]">
        STROKE
      </text>
    </svg>
);

// IsometricText
export const IsometricText = () => (
    <div className="transform rotate-x-60 rotate-z-[-45deg] skew-x-12 text-4xl font-bold text-zinc-400 drop-shadow-[1px_1px_0_#fff] group cursor-pointer hover:-translate-y-4 transition-transform duration-300">
      ISOMETRIC
    </div>
);

// PerspectiveFlipText
export const PerspectiveFlipText = () => (
    <div className="perspective-1000 group cursor-pointer">
      <div className="text-4xl font-bold transition-transform duration-500 transform-style-3d group-hover:rotate-x-180 h-10 relative">
        <span className="absolute inset-0 backface-hidden text-white">FRONT</span>
        <span className="absolute inset-0 backface-hidden rotate-x-180 text-red-500">BACK</span>
      </div>
    </div>
);

// FloatingWords
export const FloatingWords = () => (
    <div className="h-20 flex items-center gap-2 text-xl font-bold">
      <span className="animate-[float_2s_infinite_ease-in-out]">Float</span>
      <span className="animate-[float_2.5s_infinite_ease-in-out_delay-100ms]">Like</span>
      <span className="animate-[float_3s_infinite_ease-in-out_delay-200ms]">A</span>
      <span className="animate-[float_2.2s_infinite_ease-in-out_delay-300ms]">Feather</span>
    </div>
);

// DepthLayerText
export const DepthLayerText = () => (
    <div className="relative text-5xl font-black uppercase group cursor-pointer">
      <span className="absolute inset-0 text-red-500 opacity-50 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">DEPTH</span>
      <span className="absolute inset-0 text-blue-500 opacity-50 -translate-x-1 -translate-y-1 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">DEPTH</span>
      <span className="relative text-white z-10">DEPTH</span>
    </div>
);

// HoverSpacing
export const HoverSpacing = () => (
    <h2 className="text-3xl font-bold tracking-normal hover:tracking-[0.5em] transition-all duration-500 cursor-pointer">
      EXPAND
    </h2>
);

// CursorSpotlightText
export const CursorSpotlightText = () => (
    <h1 className="text-4xl font-black text-zinc-800 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-white hover:to-zinc-500 transition-all duration-300 cursor-default">
      SPOTLIGHT
    </h1>
);

// VariableWeight
export const VariableWeight = () => (
    <h2 className="text-4xl font-thin hover:font-black transition-all duration-300 cursor-pointer">
      WEIGHT
    </h2>
);

// MagneticText
export const MagneticText = () => (
    <div className="p-4 border border-zinc-700 rounded-lg hover:border-white transition-colors group cursor-none">
      <span className="inline-block group-hover:translate-x-2 group-hover:translate-y-1 transition-transform duration-100 ease-out text-xl">🧲 Magnetic</span>
    </div>
);

// UnderlineSweep
export const UnderlineSweep = () => (
    <a href="#" className="relative text-xl font-bold text-white group">
      Sweep Left
      <span className="absolute bottom-0 right-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
    </a>
);

// BoxHighlightText
export const BoxHighlightText = () => (
    <span className="text-xl font-bold relative z-10 group cursor-pointer">
      Highlight Me
      <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500 -z-10 group-hover:h-full transition-all duration-300 opacity-50" />
    </span>
);

// VerticalTicker
export const VerticalTicker = () => (
    <div className="h-8 overflow-hidden text-xl font-bold text-green-400 border border-zinc-800 px-2 rounded">
      <div className="flex flex-col animate-[scroll-up-snap_2s_infinite_steps(3)]">
        <span>$100.00</span>
        <span>$105.50</span>
        <span>$110.25</span>
        <span>$100.00</span>
      </div>
    </div>
);

// SkewItalic
export const SkewItalic = () => (
    <h2 className="text-3xl font-bold hover:italic hover:-skew-x-12 transition-all duration-300 cursor-pointer origin-left">
      ITALICIZE
    </h2>
);

// StrikethroughHover
export const StrikethroughHover = () => (
    <span className="text-xl text-zinc-400 group cursor-pointer relative">
      Complete
      <span className="absolute top-1/2 left-0 w-0 h-0.5 bg-zinc-400 group-hover:w-full transition-all duration-300" />
    </span>
);

// NeonGlowText
export const NeonGlowText = () => (
    <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] group hover:drop-shadow-[0_0_20px_#f0f] hover:text-fuchsia-200 transition-all duration-300 cursor-pointer">
      NEON
    </h1>
);

// TypewriterMultiline
export const TypewriterMultiline = () => (
    <div className="font-mono text-sm w-48 border-l-2 border-green-500 pl-2">
      <p className="overflow-hidden whitespace-nowrap animate-[typing_2s_steps(20)]">First line code...</p>
      <p className="overflow-hidden whitespace-nowrap animate-[typing_2s_steps(20)_delay-2s_forwards] opacity-0 w-0">Second line run...</p>
    </div>
);

// VerticalTextRotate
export const VerticalTextRotate = () => (
    <div className="flex h-32 items-center">
      <span className="text-4xl font-bold writing-vertical-rl rotate-180 hover:rotate-0 transition-transform duration-500 cursor-pointer border border-white p-2">
        VERTICAL
      </span>
    </div>
);

// TextScatter
export const TextScatter = () => (
    <div className="flex gap-1 text-2xl font-bold group cursor-pointer">
      {['S','C','A','T','T','E','R'].map((l,i) => (
        <span key={i} className="group-hover:translate-y-[-10px] group-hover:rotate-[20deg] transition-transform duration-300 inline-block" style={{ transitionDelay: `${i * 50}ms` }}>{l}</span>
      ))}
    </div>
);

// GradientBorderText
export const GradientBorderText = () => (
    <span className="relative inline-block text-xl font-bold text-white px-2 py-1 group">
      <span className="relative z-10">Bordered</span>
      <span className="absolute inset-0 border-2 border-transparent rounded bg-gradient-to-r from-red-500 to-blue-500 bg-origin-border mask-linear-fade opacity-0 group-hover:opacity-100 transition-opacity" />
    </span>
);

// CountdownNumber
export const CountdownNumber = () => (
    <div className="text-5xl font-mono font-bold animate-[ping_1s_3_reverse]">
      3
    </div>
);

// TextHighlightPen
export const TextHighlightPen = () => (
    <span className="text-xl relative inline-block group cursor-pointer">
      Important
      <span className="absolute top-1/2 left-0 w-full h-3 bg-yellow-400/50 -z-10 -rotate-2 scale-x-0 group-hover:scale-x-110 transition-transform duration-300 origin-left rounded-sm" />
    </span>
);

// CodeBlockTyping
export const CodeBlockTyping = () => (
    <div className="bg-black p-2 rounded text-xs font-mono text-green-400 w-40">
      <span className="animate-[typing_2s_steps(15)_infinite] overflow-hidden whitespace-nowrap border-r-2 border-green-400 pr-1">console.log('Hi');</span>
    </div>
);

// DropCapAnim
export const DropCapAnim = () => (
    <div className="text-sm w-48">
      <span className="float-left text-4xl font-bold mr-1 line-height-1 animate-[bounce_1s_infinite]">O</span>
      nce upon a time in a digital land...
    </div>
);

// FadeInChars
export const FadeInChars = () => (
    <div className="flex gap-0.5 text-lg font-bold">
      {['L','O','A','D','I','N','G'].map((l,i) => (
        <span key={i} className="animate-[fade-in_0.5s_ease-out_forwards] opacity-0" style={{ animationDelay: `${i * 100}ms` }}>{l}</span>
      ))}
    </div>
);

// RainbowTextHover
export const RainbowTextHover = () => (
    <h1 className="text-3xl font-black text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-blue-500 transition-all duration-500 cursor-pointer">
      RAINBOW
    </h1>
);

// TextShakeError
export const TextShakeError = () => (
    <div className="text-red-500 font-bold hover:animate-[shake_0.4s_ease-in-out] cursor-pointer">
      INVALID INPUT
    </div>
);
