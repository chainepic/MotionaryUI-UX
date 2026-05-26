'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Heart, Star, Volume2, ThumbsUp, Share2, Trash2, MoreHorizontal, Check, X, Upload } from 'lucide-react';

// 1. Day/Night Toggle
export const DayNightToggle = () => {
    const [isDark, setIsDark] = useState(true);
    return (
        <button 
            onClick={() => setIsDark(!isDark)}
            className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 ${isDark ? 'bg-surface-300' : 'bg-blue-400'}`}
        >
            <motion.div 
                layout
                className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${isDark ? 'bg-black' : 'bg-white'}`}
            >
                {isDark ? <Moon size={12} className="text-white" /> : <Sun size={12} className="text-yellow-500" />}
            </motion.div>
        </button>
    )
}

// 2. Elastic Toggle
export const ElasticToggle = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <div className="flex items-center cursor-pointer" onClick={() => setIsOn(!isOn)}>
            <div className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ${isOn ? 'bg-primary' : 'bg-surface-200'}`}>
                <motion.div 
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                    className="bg-white w-6 h-6 rounded-full shadow-md"
                />
            </div>
        </div>
    )
}

// 3. Checkmark Draw
export const CheckDraw = () => {
    const [checked, setChecked] = useState(false);
    return (
        <button onClick={() => setChecked(!checked)} className={`w-8 h-8 border-2 rounded flex items-center justify-center transition-colors ${checked ? 'border-primary bg-primary' : 'border-white/30'}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                {checked && <motion.path d="M20 6L9 17l-5-5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.2 }} />}
            </svg>
        </button>
    )
}

// 4. Heart Like (Explosion)
export const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    return (
        <button onClick={() => setLiked(!liked)} className="relative p-2">
            <Heart 
                className={`w-8 h-8 transition-colors ${liked ? 'fill-red-500 text-red-500' : 'text-white/50'}`} 
            />
            {liked && (
                <>
                    <motion.div className="absolute inset-0 border-2 border-red-500 rounded-full" initial={{ scale: 0, opacity: 1 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ duration: 0.5 }} />
                    {[...Array(6)].map((_, i) => (
                         <motion.div 
                            key={i} 
                            className="absolute w-1 h-1 bg-red-500 rounded-full left-1/2 top-1/2" 
                            initial={{ x: 0, y: 0, opacity: 1 }}
                            animate={{ x: Math.cos(i * 60 * Math.PI / 180) * 20, y: Math.sin(i * 60 * Math.PI / 180) * 20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    ))}
                </>
            )}
        </button>
    )
}

// 5. Star Rating
export const StarRating = () => {
    const [rating, setRating] = useState(0);
    return (
        <div className="flex gap-1">
            {[1,2,3,4,5].map(star => (
                <motion.button
                    key={star}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setRating(star)}
                    className={`transition-colors ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}`}
                >
                    <Star size={20} />
                </motion.button>
            ))}
        </div>
    )
}

// 6. Volume Slider (Vertical)
export const VolumeSlider = () => {
    const [vol, setVol] = useState(50);
    return (
        <div className="h-32 w-8 bg-surface-100 rounded-full relative flex items-end justify-center pb-2 overflow-hidden border border-white/10">
            <div className="absolute bottom-0 w-full bg-white/10 rounded-b-full" style={{ height: `${vol}%` }} />
            <input 
                type="range" 
                min="0" max="100" 
                value={vol} onChange={e => setVol(Number(e.target.value))} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-ns-resize" 
                orient="vertical" 
                style={{ appearance: 'slider-vertical' } as any}
            />
            <Volume2 size={16} className="text-white/70 z-10" />
        </div>
    )
}

// 7. Delete Animation
export const TrashDelete = () => {
    const [deleted, setDeleted] = useState(false);
    return (
        <button 
            onClick={() => { setDeleted(true); setTimeout(() => setDeleted(false), 2000); }}
            className="w-10 h-10 bg-surface-100 rounded-full flex items-center justify-center hover:bg-red-500/20 hover:text-red-500 transition-colors"
        >
            <AnimatePresence mode='wait'>
                {!deleted ? (
                    <motion.div key="trash" exit={{ scale: 0, rotate: 180 }}><Trash2 size={18} /></motion.div>
                ) : (
                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }}><Check size={18} /></motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}

// 8. Share Fan
export const ShareFan = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center z-20 relative">
                <Share2 size={18} />
            </button>
            {[1,2,3].map((i) => (
                <motion.button
                    key={i}
                    className="absolute top-0 left-0 w-10 h-10 bg-surface-200 rounded-full flex items-center justify-center border border-white/10 -z-10"
                    animate={{ x: open ? i * 50 : 0, opacity: open ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.05 }}
                >
                    <span className="text-xs">{i}</span>
                </motion.button>
            ))}
        </div>
    )
}

// 9. More Options (Dots)
export const MoreOptions = () => (
    <button className="group w-10 h-6 flex items-center justify-center gap-1 hover:gap-2 transition-all duration-300 bg-surface-100 rounded-full">
        <div className="w-1 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-white rounded-full" />
    </button>
);

// 10. Circular Slider (Simulated)
export const CircularSlider = () => (
    <div className="w-16 h-16 rounded-full border-4 border-surface-200 relative flex items-center justify-center">
         <div className="absolute inset-0 border-4 border-primary rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 50% 50%)' }} />
         <div className="w-4 h-4 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 translate-y-1/2 shadow-md cursor-pointer" />
         <span className="text-xs font-bold">75%</span>
    </div>
);

// 11. Download Button
export const DownloadButton = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
    return (
        <button 
            onClick={() => {
                if(status === 'idle') {
                    setStatus('loading');
                    setTimeout(() => setStatus('done'), 2000);
                    setTimeout(() => setStatus('idle'), 4000);
                }
            }}
            className={`relative px-6 py-2 rounded-full overflow-hidden transition-all duration-300 ${status === 'done' ? 'bg-green-500' : 'bg-surface-200 border border-white/10'}`}
        >
            <span className="relative z-10 text-sm font-medium">
                {status === 'idle' && "Download"}
                {status === 'loading' && "Downloading..."}
                {status === 'done' && "Complete"}
            </span>
            {status === 'loading' && (
                <motion.div 
                    className="absolute inset-0 bg-primary/20"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                />
            )}
        </button>
    )
}

// 12. Copy Feedback (Icon)
export const CopyIcon = () => {
    const [copied, setCopied] = useState(false);
    return (
        <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }}>
            <AnimatePresence mode='wait'>
                {copied ? (
                    <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-green-500 font-bold">✓</motion.span>
                ) : (
                    <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-white/50 hover:text-white font-mono text-xs">CPY</motion.span>
                )}
            </AnimatePresence>
        </button>
    )
}

// 13. Sortable Item (Drag Handle)
export const DragHandle = () => (
    <div className="flex items-center gap-3 p-3 bg-surface-100 rounded border border-white/5 w-full cursor-grab active:cursor-grabbing hover:border-white/20 transition-colors">
        <div className="flex flex-col gap-0.5 opacity-50">
            <div className="w-4 h-0.5 bg-white" />
            <div className="w-4 h-0.5 bg-white" />
            <div className="w-4 h-0.5 bg-white" />
        </div>
        <span className="text-sm">Drag Me</span>
    </div>
);

// 14. Swipe Switch
export const SwipeSwitch = () => {
    const [on, setOn] = useState(false);
    return (
        <motion.div 
            className={`w-20 h-8 rounded-full flex items-center px-1 cursor-pointer ${on ? 'bg-green-500 justify-end' : 'bg-red-500 justify-start'}`}
            onClick={() => setOn(!on)}
            layout
        >
            <motion.div layout className="w-6 h-6 bg-white rounded-full shadow-sm" />
        </motion.div>
    )
}

// 15. Reaction Picker
export const ReactionPicker = () => (
    <div className="group relative">
        <button className="w-8 h-8 bg-surface-100 rounded-full text-white/50 hover:text-white">☺</button>
        <div className="absolute bottom-full left-0 mb-2 flex gap-1 bg-surface-200 p-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none group-hover:pointer-events-auto">
            <button className="hover:scale-125 transition-transform">👍</button>
            <button className="hover:scale-125 transition-transform">❤️</button>
            <button className="hover:scale-125 transition-transform">😂</button>
        </div>
    </div>
);

// 16. Accordion Chevron
export const AccordionChevron = () => {
    const [open, setOpen] = useState(false);
    return (
        <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-2 bg-surface-100 rounded text-sm">
            <span>Details</span>
            <motion.span animate={{ rotate: open ? 180 : 0 }}>▼</motion.span>
        </button>
    )
}

// 17. Upload Progress Ring
export const UploadRing = () => (
    <div className="relative w-10 h-10 flex items-center justify-center">
        <Upload size={14} className="text-white/50" />
        <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle cx="20" cy="20" r="18" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
            <motion.circle 
                cx="20" cy="20" r="18" stroke="#00f3ff" strokeWidth="2" fill="none" 
                strokeDasharray="113"
                strokeDashoffset="113"
                animate={{ strokeDashoffset: 20 }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </svg>
    </div>
);

// 18. Pin/Unpin
export const PinToggle = () => {
    const [pinned, setPinned] = useState(false);
    return (
        <button onClick={() => setPinned(!pinned)} className={`transition-all ${pinned ? 'text-primary -rotate-45' : 'text-white/30'}`}>
            📌
        </button>
    )
}

// 19. Brightness Control
export const BrightnessControl = () => (
    <div className="flex items-center gap-2 text-white/50">
        <Sun size={14} />
        <div className="w-24 h-1 bg-surface-200 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-white rounded-full" />
        </div>
        <Sun size={18} className="text-white" />
    </div>
);

// 20. Confetti Button
export const ConfettiBtn = () => (
    <button className="px-4 py-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs font-bold rounded hover:scale-105 transition-transform">
        PARTY
    </button>
);


// DeleteShred
export const DeleteShred = () => (
    <div className="w-10 h-10 text-zinc-400 hover:text-red-500 cursor-pointer overflow-hidden group relative">
      <svg className="w-6 h-6 absolute top-2 left-2 group-hover:translate-y-10 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
      <div className="absolute top-0 w-full h-full flex flex-col justify-end opacity-0 group-hover:opacity-100">
        <div className="w-full h-1 bg-red-500 animate-[shred_0.5s_infinite]" />
      </div>
    </div>
);

// DownloadProgressBtn
export const DownloadProgressBtn = () => (
    <button className="relative w-32 h-10 bg-blue-600 rounded-full overflow-hidden group active:w-10 transition-all duration-300">
      <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold group-active:opacity-0 transition-opacity">Download</span>
      <div className="absolute inset-0 bg-green-500 w-0 group-hover:w-full transition-all duration-[2s] ease-linear opacity-50" />
      <svg className="w-5 h-5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-active:opacity-100 group-active:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
    </button>
);

// UploadCloudIcon
export const UploadCloudIcon = () => (
    <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-zinc-700 transition-colors">
      <div className="relative">
        <svg className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-3 bg-blue-400 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 rounded-full" />
      </div>
    </div>
);

// SaveCheckMark
export const SaveCheckMark = () => (
    <button className="flex items-center gap-2 text-zinc-400 hover:text-green-500 transition-colors group">
      <div className="w-5 h-5 border-2 border-current rounded-sm flex items-center justify-center">
        <svg className="w-3 h-3 scale-0 group-focus:scale-100 transition-transform duration-200 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
      </div>
      <span>Save</span>
    </button>
);

// WarningPulseIcon
export const WarningPulseIcon = () => (
    <div className="relative w-8 h-8 flex items-center justify-center">
      <span className="absolute inset-0 bg-yellow-500 rounded-full opacity-25 animate-ping" />
      <span className="relative text-yellow-500 text-xl font-bold">!</span>
    </div>
);

// SuccessConfettiBtn
export const SuccessConfettiBtn = () => (
    <button className="bg-green-600 text-white px-4 py-2 rounded shadow-lg active:scale-95 transition-transform relative overflow-hidden group">
      Success
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(5)].map((_,i) => (
          <div key={i} className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-focus:opacity-100 group-focus:animate-[confetti_0.5s_ease-out]" style={{ transform: `rotate(${i*72}deg) translate(20px)` }} />
        ))}
      </div>
    </button>
);

// InfoToastSlide
export const InfoToastSlide = () => (
    <div className="w-64 bg-blue-900/20 border border-blue-500/50 p-3 rounded flex gap-3 items-start animate-[slide-in-right_0.5s_ease-out]">
      <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <p className="text-sm text-blue-200">Did you know? You can hover for more details.</p>
    </div>
);

// ErrorShakeInput
export const ErrorShakeInput = () => (
    <div className="relative group">
      <input type="text" value="invalid" className="bg-red-900/10 border border-red-500 text-red-400 px-3 py-1 rounded w-32 group-hover:animate-[shake_0.4s_ease-in-out]" readOnly />
      <span className="absolute right-2 top-1.5 text-red-500 text-xs">✕</span>
    </div>
);

// SwitchGooey
export const SwitchGooey = () => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-12 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-500 peer-checked:bg-purple-600 transition-colors after:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"></div>
    </label>
);

// RadioWaveSelect
export const RadioWaveSelect = () => (
    <label className="flex items-center gap-2 cursor-pointer group">
      <div className="relative w-5 h-5 flex items-center justify-center">
        <input type="radio" name="wave" className="sr-only peer" />
        <div className="w-5 h-5 border-2 border-zinc-500 rounded-full peer-checked:border-blue-500 transition-colors" />
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full scale-0 peer-checked:scale-100 transition-transform duration-300" />
        <div className="absolute inset-0 border border-blue-500 rounded-full scale-100 opacity-0 peer-checked:animate-ping" />
      </div>
      <span className="text-zinc-400 group-hover:text-white">Option A</span>
    </label>
);

// CheckboxMorphCheck
export const CheckboxMorphCheck = () => (
    <label className="cursor-pointer group">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-6 h-6 border-2 border-zinc-500 rounded transition-all duration-300 peer-checked:bg-green-500 peer-checked:border-green-500 peer-checked:rotate-12 flex items-center justify-center">
        <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
      </div>
    </label>
);

// TogglePillSlide
export const TogglePillSlide = () => (
    <div className="bg-zinc-800 p-1 rounded-full inline-flex relative cursor-pointer">
      <div className="w-1/2 h-full absolute left-0 bg-zinc-600 rounded-full transition-transform duration-300 transform group-hover:translate-x-full" />
      <span className="px-4 py-1 text-xs z-10 text-white">Off</span>
      <span className="px-4 py-1 text-xs z-10 text-zinc-400">On</span>
    </div>
);

// MenuBurgerX
export const MenuBurgerX = () => (
    <button className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 group">
      <span className="w-6 h-0.5 bg-white transition-all group-hover:rotate-45 group-hover:translate-y-2" />
      <span className="w-6 h-0.5 bg-white transition-all group-hover:opacity-0" />
      <span className="w-6 h-0.5 bg-white transition-all group-hover:-rotate-45 group-hover:-translate-y-2" />
    </button>
);

// TabSlideUnder
export const TabSlideUnder = () => (
    <div className="flex gap-4 border-b border-zinc-700 relative w-fit">
      <div className="pb-2 text-zinc-400 hover:text-white cursor-pointer">Tab 1</div>
      <div className="pb-2 text-zinc-400 hover:text-white cursor-pointer">Tab 2</div>
      <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full hover:left-0" />
    </div>
);

// PaginationDotJump
export const PaginationDotJump = () => (
    <div className="flex gap-2">
      <div className="w-2 h-2 bg-zinc-600 rounded-full" />
      <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
      <div className="w-2 h-2 bg-zinc-600 rounded-full" />
    </div>
);

// BreadcrumbHover
export const BreadcrumbHover = () => (
    <div className="flex items-center gap-2 text-sm text-zinc-500">
      <span className="hover:text-white hover:underline cursor-pointer transition-colors">Home</span>
      <span>/</span>
      <span className="hover:text-white hover:underline cursor-pointer transition-colors">Section</span>
    </div>
);

// SearchExpandBar
export const SearchExpandBar = () => (
    <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:w-48 group">
      <svg className="w-4 h-4 text-zinc-400 min-w-[2rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      <input type="text" placeholder="Search..." className="bg-transparent text-white text-sm outline-none opacity-0 group-hover:opacity-100 transition-opacity w-full pr-4" />
    </div>
);

// CopyFeedback
export const CopyFeedback = () => (
    <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
      <span className="group-focus:hidden">Copy</span>
      <span className="hidden group-focus:inline text-green-500">Copied!</span>
    </button>
);

// DragHandleDots
export const DragHandleDots = () => (
    <div className="w-6 h-10 flex flex-wrap gap-1 p-1 cursor-grab hover:bg-zinc-800 rounded group">
      {[...Array(6)].map((_,i) => <div key={i} className="w-1 h-1 bg-zinc-500 rounded-full group-hover:bg-zinc-300" />)}
    </div>
);

// LikeHeartExplode
export const LikeHeartExplode = () => (
    <button className="text-zinc-500 hover:text-red-500 transition-colors group relative">
      <svg className="w-6 h-6 group-active:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      <div className="absolute inset-0 bg-red-500 rounded-full scale-0 group-active:animate-ping opacity-50" />
    </button>
);

// NotificationBellShake
export const NotificationBellShake = () => (
    <div className="relative cursor-pointer group">
      <svg className="w-6 h-6 text-zinc-400 group-hover:text-white group-hover:animate-[wiggle_0.5s_ease-in-out]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
    </div>
);

// SortAscDesc
export const SortAscDesc = () => (
    <div className="flex items-center gap-1 cursor-pointer text-sm text-zinc-400 hover:text-white group">
      Sort
      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
    </div>
);

// RatingStarsFill
export const RatingStarsFill = () => (
    <div className="flex gap-0.5 group">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4 text-zinc-600 group-hover:text-yellow-400 hover:!text-yellow-400 peer-hover:text-yellow-400 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
      ))}
    </div>
);

// FilterTagClose
export const FilterTagClose = () => (
    <div className="inline-flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded border border-zinc-700 text-xs text-zinc-300 group cursor-pointer hover:border-red-500 hover:text-red-400 transition-colors">
      <span>Tag</span>
      <span className="group-hover:rotate-90 transition-transform">✕</span>
    </div>
);

// RefreshPull
export const RefreshPull = () => (
    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center cursor-pointer hover:rotate-180 transition-transform duration-500">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
    </div>
);

// TooltipFadeUp
export const TooltipFadeUp = () => (
    <div className="relative inline-block group">
      <span className="border-b border-dashed border-zinc-500 cursor-help">Hover</span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-xs rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap">
        Tooltip Text
      </div>
    </div>
);

// AvatarGroupHover
export const AvatarGroupHover = () => (
    <div className="flex -space-x-2 hover:space-x-1 transition-all duration-300">
      <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-black" />
      <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-black" />
      <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-black" />
    </div>
);

// MoreMenuDots
export const MoreMenuDots = () => (
    <div className="flex gap-1 cursor-pointer p-2 rounded hover:bg-zinc-800 group">
      <div className="w-1 h-1 bg-zinc-400 rounded-full group-hover:bg-white" />
      <div className="w-1 h-1 bg-zinc-400 rounded-full group-hover:bg-white" />
      <div className="w-1 h-1 bg-zinc-400 rounded-full group-hover:bg-white" />
    </div>
);

// PinToggleSwitch
export const PinToggleSwitch = () => (
    <div className="w-6 h-6 border border-zinc-600 rounded flex items-center justify-center cursor-pointer hover:bg-zinc-800 group active:scale-90 transition-transform">
      <span className="text-zinc-500 group-hover:text-white transition-colors">📌</span>
    </div>
);

// ColorSwatchSelect
export const ColorSwatchSelect = () => (
    <div className="flex gap-2">
      <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-offset-black ring-red-500 transition-all" />
      <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-offset-black ring-blue-500 transition-all" />
    </div>
);
