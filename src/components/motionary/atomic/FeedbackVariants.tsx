'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertTriangle, Info, Bell } from 'lucide-react';

// 1. Success Checkmark (Modal)
export const SuccessModal = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setShow(true)} className="px-4 py-2 bg-green-500/20 text-green-500 rounded hover:bg-green-500/30">Success</button>
            <AnimatePresence>
                {show && (
                    <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
                        className="absolute top-full mt-2 left-0 w-full bg-surface-200 p-4 rounded border border-green-500/50 flex flex-col items-center z-20"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2 text-black">
                            <Check size={20} />
                        </div>
                        <span className="text-sm font-bold text-green-500">Complete!</span>
                        <button onClick={(e) => { e.stopPropagation(); setShow(false); }} className="mt-2 text-xs text-white/50 hover:text-white">Close</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// 2. Error Shake Toast
export const ErrorToast = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setShow(true)} className="px-4 py-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30">Error</button>
            <AnimatePresence>
                {show && (
                    <motion.div 
                        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute top-0 left-full ml-2 bg-red-900 border border-red-500 text-white px-3 py-2 rounded flex items-center gap-2 whitespace-nowrap z-20"
                    >
                        <X size={14} /> Failed
                        <motion.div 
                            animate={{ width: 0 }} 
                            transition={{ duration: 2 }} 
                            className="absolute bottom-0 left-0 h-0.5 bg-white"
                            onAnimationComplete={() => setShow(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// 3. Warning Pulsing Alert
export const WarningAlert = () => (
    <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/50 rounded text-yellow-500">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
            <AlertTriangle size={16} />
        </motion.div>
        <span className="text-xs font-medium">Warning</span>
    </div>
);

// 4. Info Slide Down
export const InfoBanner = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="overflow-hidden">
            <AnimatePresence>
                {open && (
                    <motion.div 
                        initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                        className="bg-blue-500/20 border-l-4 border-blue-500 p-2 text-xs text-blue-200 flex justify-between items-center"
                    >
                        <span>System Update Available</span>
                        <button onClick={() => setOpen(false)}><X size={12}/></button>
                    </motion.div>
                )}
            </AnimatePresence>
            {!open && <button onClick={() => setOpen(true)} className="text-xs text-blue-500 mt-2">Show Info</button>}
        </div>
    )
}

// 5. Notification Bell Shake
export const BellShake = () => (
    <motion.div 
        className="relative"
        whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
    >
        <Bell size={24} />
        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
    </motion.div>
);

// 6. Confetti Burst (CSS)
export const ConfettiBurst = () => {
    const [burst, setBurst] = useState(false);
    return (
        <button onClick={() => { setBurst(true); setTimeout(() => setBurst(false), 1000); }} className="relative px-4 py-2 bg-primary text-black rounded font-bold">
            Celebrate
            {burst && [...Array(12)].map((_, i) => (
                <motion.div 
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-1/2"
                    initial={{ scale: 0 }}
                    animate={{ 
                        x: (Math.random() - 0.5) * 100, 
                        y: (Math.random() - 0.5) * 100, 
                        scale: 0, 
                        opacity: 0 
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            ))}
        </button>
    )
}

// 7. Typing Indicator (Chat)
export const TypingIndicator = () => (
    <div className="flex gap-1 p-2 bg-surface-100 rounded-full w-fit">
        {[0, 1, 2].map(i => (
            <motion.div 
                key={i} 
                className="w-1.5 h-1.5 bg-white/50 rounded-full"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
            />
        ))}
    </div>
);

// 8. Signal Strength
export const SignalStrength = () => (
    <div className="flex items-end gap-0.5">
        {[1,2,3,4].map(i => (
            <div key={i} className={`w-1 bg-white ${i > 2 ? 'opacity-20' : ''}`} style={{ height: i * 4 }} />
        ))}
    </div>
);

// 9. 404 Glitch Text
export const Error404 = () => (
    <div className="font-mono font-bold text-2xl relative group cursor-default">
        404
        <span className="absolute top-0 left-0 text-red-500 opacity-0 group-hover:opacity-50 translate-x-[-2px] animate-pulse">404</span>
        <span className="absolute top-0 left-0 text-blue-500 opacity-0 group-hover:opacity-50 translate-x-[2px] animate-pulse delay-75">404</span>
    </div>
);

// 10. Empty State (Box Open)
export const EmptyBox = () => (
    <div className="w-12 h-12 border-2 border-dashed border-white/20 rounded flex items-center justify-center">
        <span className="text-xs text-white/20">Empty</span>
    </div>
);

// 11. Pulse Beacon
export const PulseBeacon = () => (
    <div className="relative w-4 h-4 bg-green-500 rounded-full">
        <motion.div 
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={{ scale: [1, 3], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
        />
    </div>
);

// 12. Lock Shake (Access Denied)
export const LockShake = () => {
    const [denied, setDenied] = useState(false);
    return (
        <button 
            onClick={() => { setDenied(true); setTimeout(() => setDenied(false), 500); }}
            className="p-2 bg-surface-100 rounded border border-white/10"
        >
            <motion.div animate={denied ? { x: [-5, 5, -5, 5, 0] } : {}}>
                🔒
            </motion.div>
        </button>
    )
}

// 13. Countdown Timer (Urgency)
export const UrgencyTimer = () => (
    <div className="text-red-500 font-mono font-bold border border-red-500/30 px-2 py-1 rounded bg-red-500/10">
        00:59
    </div>
);

// 14. Online Badge
export const OnlineBadge = () => (
    <div className="relative inline-block">
        <div className="w-8 h-8 bg-gray-500 rounded-full" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full" />
    </div>
);

// 15. Offline Overlay
export const OfflineOverlay = () => (
    <div className="w-full h-16 bg-surface-100 relative rounded overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
            <span className="text-xs font-bold text-white">OFFLINE</span>
        </div>
        <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-600" />
    </div>
);

// 16. Skeleton Card Loading
export const SkeletonCard = () => (
    <div className="w-full p-2 bg-surface-100 rounded border border-white/5 space-y-2">
        <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse" />
        <div className="h-2 bg-white/10 rounded w-3/4 animate-pulse" />
    </div>
);

// 17. Upload Complete Check
export const UploadComplete = () => (
    <div className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500">
        <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <motion.path d="M20 6L9 17l-5-5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
        </motion.svg>
    </div>
);

// 18. Battery Low Alert
export const BatteryLow = () => (
    <div className="w-8 h-4 border border-red-500 rounded-sm p-0.5 relative">
        <div className="h-full w-[10%] bg-red-500 animate-pulse" />
        <div className="absolute top-1/2 -right-1 w-0.5 h-2 bg-red-500 -translate-y-1/2 rounded-r-sm" />
    </div>
);

// 19. Fingerprint Scan
export const FingerprintScan = () => (
    <div className="w-10 h-12 border border-white/20 rounded-full relative overflow-hidden flex items-center justify-center">
        <div className="text-2xl text-white/20">ID</div>
        <motion.div className="absolute inset-0 bg-primary/20 border-b-2 border-primary" animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 2, repeat: Infinity }} />
    </div>
);

// 20. Eye Tracking (Privacy)
export const EyeTracking = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    return (
        <div className="w-12 h-6 bg-white rounded-full border-2 border-black relative overflow-hidden" onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setX((e.clientX - rect.left - 24) / 5);
            setY((e.clientY - rect.top - 12) / 5);
        }}>
            <div className="w-4 h-4 bg-black rounded-full absolute top-1 left-4 transition-transform duration-75" style={{ transform: `translate(${x}px, ${y}px)` }} />
        </div>
    )
}


// StackedToast
export const StackedToast = () => (
    <div className="relative w-full h-32 flex flex-col items-center justify-end overflow-hidden group">
      <div className="absolute w-64 h-12 bg-zinc-800 rounded-lg shadow-lg translate-y-4 scale-90 opacity-50 transition-all duration-300 group-hover:translate-y-0 group-hover:scale-95 group-hover:opacity-70" />
      <div className="absolute w-64 h-12 bg-zinc-800 rounded-lg shadow-lg translate-y-2 scale-95 opacity-70 transition-all duration-300 group-hover:-translate-y-4 group-hover:scale-100 group-hover:opacity-100 border border-zinc-700 flex items-center px-4">
        <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
        <span className="text-sm text-white">Message Sent</span>
      </div>
    </div>
);

// ProgressToast
export const ProgressToast = () => (
    <div className="w-64 h-14 bg-zinc-900 rounded-lg border border-zinc-800 flex flex-col justify-center px-4 relative overflow-hidden group cursor-pointer">
      <div className="flex justify-between items-center text-sm text-white relative z-10">
        <span>Uploading...</span>
        <span>45%</span>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-blue-500 w-[45%] group-hover:w-full transition-all duration-1000 ease-out" />
    </div>
);

// SlideInNotify
export const SlideInNotify = () => (
    <div className="w-full h-20 overflow-hidden relative">
      <div className="absolute right-0 top-4 w-64 bg-white text-black p-3 rounded-l-lg shadow-xl translate-x-full group-hover:translate-x-0 transition-transform duration-300 flex gap-3 items-center cursor-pointer">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">i</div>
        <div className="text-sm font-medium">New update available</div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-sm group-hover:opacity-0 transition-opacity">Hover right edge -&gt;</div>
    </div>
);

// SkeletonShimmer
export const SkeletonShimmer = () => (
    <div className="w-64 p-4 bg-zinc-900 rounded-xl space-y-3">
      <div className="h-4 bg-zinc-800 rounded w-3/4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
      </div>
      <div className="h-4 bg-zinc-800 rounded w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer delay-75" style={{ backgroundSize: '200% 100%' }} />
      </div>
      <div className="h-4 bg-zinc-800 rounded w-5/6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer delay-150" style={{ backgroundSize: '200% 100%' }} />
      </div>
    </div>
);

// OrbitSpinner
export const OrbitSpinner = () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-2 border-zinc-800" />
      <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin" />
      <div className="absolute inset-2 rounded-full border-b-2 border-purple-500 animate-[spin_1.5s_linear_infinite_reverse]" />
    </div>
);

// DotPulseWave
export const DotPulseWave = () => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-1.5 h-8 bg-indigo-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]" style={{ animationDelay: `${i * 100}ms` }} />
      ))}
    </div>
);

// LiquidProgress
export const LiquidProgress = () => (
    <div className="w-64 h-2 bg-zinc-800 rounded-full overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 animate-[slide-right_2s_ease-in-out_infinite_alternate]" />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm w-full h-full mix-blend-overlay" />
    </div>
);

// SuccessCheck
export const SuccessCheck = () => (
    <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-transform group">
      <svg className="w-8 h-8 text-white stroke-[3] stroke-current" fill="none" viewBox="0 0 24 24">
        <path className="group-hover:animate-[draw_0.5s_ease-out_forwards]" strokeDasharray="100" strokeDashoffset="100" d="M5 13l4 4L19 7" />
      </svg>
    </div>
);

// ErrorShakeBox
export const ErrorShakeBox = () => (
    <div className="w-64 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm font-medium flex items-center gap-3 cursor-pointer hover:animate-[shake_0.5s_ease-in-out]">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      Connection Failed
    </div>
);

// WifiSearching
export const WifiSearching = () => (
    <div className="flex flex-col items-center gap-1 group cursor-pointer">
      <div className="w-8 h-8 relative">
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 border-t-2 border-white rounded-full opacity-30 group-hover:animate-[ping_1.5s_infinite]" />
        <span className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-8 h-8 border-t-2 border-white rounded-full opacity-30 group-hover:animate-[ping_1.5s_infinite_delay-200]" style={{ animationDelay: '200ms' }} />
      </div>
      <span className="text-xs text-zinc-500">Searching...</span>
    </div>
);

// BatteryCharge
export const BatteryCharge = () => (
    <div className="w-12 h-6 border-2 border-zinc-600 rounded p-0.5 relative group hover:border-green-500 transition-colors">
      <div className="h-full bg-green-500 w-0 group-hover:w-full transition-all duration-1000 ease-linear rounded-[1px]" />
      <div className="absolute -right-1.5 top-1.5 w-1 h-2 bg-zinc-600 rounded-r group-hover:bg-green-500 transition-colors" />
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">100%</span>
    </div>
);

// FloatingGhost
export const FloatingGhost = () => (
    <div className="flex flex-col items-center gap-4 group cursor-pointer">
      <div className="text-4xl animate-[bounce_3s_infinite]">👻</div>
      <p className="text-zinc-500 text-sm group-hover:text-white transition-colors">No results found</p>
    </div>
);

// SearchMagnifier
export const SearchMagnifier = () => (
    <div className="relative w-16 h-16 flex items-center justify-center group">
      <svg className="w-10 h-10 text-zinc-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-2 right-2 scale-0 group-hover:scale-100 transition-transform delay-100" />
    </div>
);

// DeleteConfirm
export const DeleteConfirm = () => (
    <button className="relative px-6 py-2 bg-red-900/30 text-red-400 border border-red-900/50 rounded hover:bg-red-600 hover:text-white transition-all overflow-hidden group">
      <span className="relative z-10 group-hover:hidden">Delete Item</span>
      <span className="relative z-10 hidden group-hover:inline">Are you sure?</span>
      <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
    </button>
);

// CopySuccess
export const CopySuccess = () => (
    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition-colors group focus:bg-green-900/30 focus:text-green-400 focus:border-green-900">
      <span className="group-focus:hidden">Copy Code</span>
      <span className="hidden group-focus:inline flex items-center gap-1"><span className="text-xl">✓</span> Copied!</span>
    </button>
);

// DownloadBtn
export const DownloadBtn = () => (
    <button className="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white overflow-hidden group hover:w-32 transition-all duration-300">
      <svg className="w-5 h-5 flex-shrink-0 group-hover:-translate-y-8 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity delay-100 whitespace-nowrap font-medium text-sm">Download</span>
      <svg className="w-5 h-5 absolute top-12 group-hover:top-3.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
    </button>
);

// LikeReaction
export const LikeReaction = () => (
    <div className="group cursor-pointer p-2 relative">
      <svg className="w-8 h-8 text-zinc-500 group-hover:text-pink-500 transition-colors group-active:scale-125 duration-200" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-active:opacity-100 group-active:-translate-y-4 transition-all duration-500 text-pink-500 font-bold">+1</div>
    </div>
);

// TypingDots
export const TypingDots = () => (
    <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-tl-none inline-flex items-center gap-1 w-16 h-10">
      <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
);

// BadgePulse
export const BadgePulse = () => (
    <div className="relative inline-block">
      <span className="px-3 py-1 bg-zinc-800 rounded text-sm text-white">Notifications</span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </div>
);

// CloudUpload
export const CloudUpload = () => (
    <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 group hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
      <svg className="w-8 h-8 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
    </div>
);

// SaveSpinner
export const SaveSpinner = () => (
    <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
      <svg className="w-4 h-4 group-hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      <span>Syncing</span>
    </button>
);

// LockAccess
export const LockAccess = () => (
    <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-900/30 transition-colors group">
      <svg className="w-6 h-6 text-zinc-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path className="group-hover:translate-y-[-2px] transition-transform duration-300 origin-bottom" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    </div>
);

// PlayPause
export const PlayPause = () => (
    <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform group">
      <div className="w-4 h-5 border-l-4 border-r-4 border-black group-hover:h-6 transition-all duration-300" />
    </button>
);

// HoverTooltip
export const HoverTooltip = () => (
    <div className="relative group inline-block cursor-help">
      <span className="border-b border-dotted border-zinc-500">Tooltip</span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-xs text-white rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap">
        Helpful Information
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black" />
      </div>
    </div>
);

// PulseRing
export const PulseRing = () => (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <div className="absolute w-full h-full bg-blue-500/30 rounded-full animate-ping" />
      <div className="relative w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">GO</div>
    </div>
);

// StepProgress
export const StepProgress = () => (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-green-500 rounded-full" />
      <div className="w-8 h-1 bg-green-500 rounded-full" />
      <div className="w-3 h-3 bg-green-500 rounded-full" />
      <div className="w-8 h-1 bg-zinc-700 overflow-hidden rounded-full">
        <div className="h-full bg-green-500 w-1/2 animate-[loading_2s_ease-in-out_infinite]" />
      </div>
      <div className="w-3 h-3 bg-zinc-700 rounded-full border border-zinc-600" />
    </div>
);

// GlitchWarning
export const GlitchWarning = () => (
    <div className="px-4 py-2 bg-yellow-900/20 text-yellow-500 border border-yellow-500/20 rounded font-mono text-sm relative overflow-hidden group hover:border-yellow-500/50 transition-colors">
      <span className="relative z-10 group-hover:animate-pulse">⚠️ SYSTEM_WARNING</span>
      <div className="absolute inset-0 bg-yellow-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
    </div>
);

// FileUploading
export const FileUploading = () => (
    <div className="w-64 bg-zinc-800 rounded-lg p-3 flex items-center gap-3">
      <div className="w-8 h-8 bg-zinc-700 rounded flex items-center justify-center">
        <svg className="w-4 h-4 text-zinc-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      </div>
      <div className="flex-1">
        <div className="h-1.5 w-full bg-zinc-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 w-2/3 rounded-full relative overflow-hidden">
             <div className="absolute inset-0 bg-white/20 animate-[shimmer_1s_infinite]" />
          </div>
        </div>
      </div>
    </div>
);

// CardSelect
export const CardSelect = () => (
    <div className="w-64 h-16 border-2 border-zinc-700 rounded-xl flex items-center px-4 cursor-pointer hover:border-blue-500 hover:bg-blue-500/5 transition-all group relative">
      <div className="w-4 h-4 rounded-full border-2 border-zinc-500 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors mr-3 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform" />
      </div>
      <span className="text-zinc-400 group-hover:text-blue-400 transition-colors">Select Option</span>
    </div>
);

// StatusOrb
export const StatusOrb = () => (
    <div className="w-32 h-32 relative flex items-center justify-center">
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
      <div className="w-24 h-24 bg-black rounded-full border border-cyan-500/50 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
        <span className="text-cyan-400 font-bold tracking-wider">ONLINE</span>
      </div>
    </div>
);

// BannerSlideDown
export const BannerSlideDown = () => (
    <div className="w-64 h-16 bg-zinc-900 border border-zinc-700 rounded overflow-hidden relative group">
      <div className="absolute top-0 left-0 w-full h-8 bg-blue-600 flex items-center justify-center text-xs text-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        New Update Available
      </div>
      <div className="p-2 pt-4 text-center text-xs text-zinc-400 group-hover:pt-10 transition-all">
        System Status: Normal
      </div>
    </div>
);

// ModalPopCenter
export const ModalPopCenter = () => (
    <div className="w-full h-32 flex items-center justify-center bg-zinc-900 rounded relative group">
      <button className="text-sm text-zinc-400">Trigger</button>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white text-black px-4 py-2 rounded shadow-xl scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          Pop!
        </div>
      </div>
    </div>
);

// InlineMessageFade
export const InlineMessageFade = () => (
    <div className="w-full">
      <input type="text" className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm outline-none focus:border-red-500 peer" placeholder="Username" />
      <div className="h-0 overflow-hidden peer-focus:h-6 transition-all duration-300">
        <p className="text-red-500 text-xs mt-1 animate-[fade-in_0.3s_ease-out]">Username already taken</p>
      </div>
    </div>
);

// NotificationBadgeCount
export const NotificationBadgeCount = () => (
    <div className="relative inline-block group cursor-pointer">
      <span className="text-2xl">🔔</span>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white items-center justify-center">3</span>
      </span>
    </div>
);

// CircularTimer
export const CircularTimer = () => (
    <div className="relative w-12 h-12">
      <svg className="w-full h-full -rotate-90">
        <circle cx="24" cy="24" r="20" stroke="#333" strokeWidth="4" fill="none" />
        <circle cx="24" cy="24" r="20" stroke="#fff" strokeWidth="4" fill="none" strokeDasharray="125" strokeDashoffset="0" className="animate-[countdown_5s_linear_infinite]" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-mono">5s</div>
    </div>
);

// SkeletonListLoad
export const SkeletonListLoad = () => (
    <div className="w-48 space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3 animate-pulse">
          <div className="w-8 h-8 bg-zinc-700 rounded-full" />
          <div className="flex-1 space-y-1">
            <div className="h-2 bg-zinc-700 rounded w-3/4" />
            <div className="h-2 bg-zinc-700 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
);

// LiquidLoaderFill
export const LiquidLoaderFill = () => (
    <div className="w-12 h-16 border-2 border-white rounded-b-xl relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full bg-blue-500 animate-[fill-up-liquid_3s_infinite_ease-in-out]" style={{ height: '0%' }}>
        <div className="w-[200%] h-4 bg-blue-400 opacity-50 absolute -top-2 animate-[wave_2s_linear_infinite]" />
      </div>
    </div>
);

// StepTrackerVertical
export const StepTrackerVertical = () => (
    <div className="flex flex-col gap-4 relative pl-4 border-l-2 border-zinc-800">
      <div className="absolute top-0 left-[-5px] w-2 h-full bg-blue-500 origin-top animate-[scale-y_3s_ease-out_forwards]" />
      <div className="relative text-xs text-zinc-400 animate-[fade-in_0.5s_delay-0ms_forwards] opacity-0">Step 1</div>
      <div className="relative text-xs text-zinc-400 animate-[fade-in_0.5s_delay-1000ms_forwards] opacity-0">Step 2</div>
      <div className="relative text-xs text-zinc-400 animate-[fade-in_0.5s_delay-2000ms_forwards] opacity-0">Step 3</div>
    </div>
);

// OnlineDotPulse
export const OnlineDotPulse = () => (
    <div className="relative">
      <img src="https://picsum.photos/50/50" className="w-10 h-10 rounded-full" />
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
      </div>
    </div>
);

// SyncRefreshIcon
export const SyncRefreshIcon = () => (
    <div className="flex items-center gap-2 text-zinc-400">
      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      <span className="text-xs">Syncing...</span>
    </div>
);

// BatteryChargeCable
export const BatteryChargeCable = () => (
    <div className="flex items-center gap-0">
      <div className="w-8 h-1 bg-white animate-[slide-right_1s_infinite]" />
      <div className="w-10 h-5 border-2 border-white rounded px-0.5 flex items-center">
        <div className="h-3 bg-green-500 w-full animate-[pulse_2s_infinite]" />
      </div>
    </div>
);

// WifiSignalWaves
export const WifiSignalWaves = () => (
    <div className="relative w-8 h-8 flex justify-center items-end overflow-hidden">
      <div className="absolute bottom-0 w-1 h-1 bg-white rounded-full" />
      <div className="absolute bottom-[-4px] w-4 h-4 border-t-2 border-white rounded-full animate-[ping_1.5s_infinite]" />
      <div className="absolute bottom-[-8px] w-8 h-8 border-t-2 border-white rounded-full animate-[ping_1.5s_infinite_delay-200ms]" />
    </div>
);

// HapticShakeBtn
export const HapticShakeBtn = () => (
    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 active:animate-[shake_0.2s_ease-in-out]">
      Delete
    </button>
);

// RippleTapEffect
export const RippleTapEffect = () => (
    <div className="w-full h-32 bg-zinc-800 relative overflow-hidden cursor-pointer active:after:content-[''] active:after:absolute active:after:w-full active:after:pt-[100%] active:after:bg-white/10 active:after:rounded-full active:after:left-1/2 active:after:top-1/2 active:after:-translate-x-1/2 active:after:-translate-y-1/2 active:after:animate-[ripple_0.6s_linear]">
      <span className="absolute inset-0 flex items-center justify-center text-zinc-500 pointer-events-none">Click Anywhere</span>
    </div>
);

// GlowSuccessCard
export const GlowSuccessCard = () => (
    <div className="w-32 h-20 bg-zinc-900 border border-zinc-700 rounded flex items-center justify-center group cursor-pointer">
      <div className="absolute inset-0 rounded bg-green-500/0 group-active:bg-green-500/20 transition-colors duration-100" />
      <div className="w-full h-full absolute inset-0 rounded shadow-[0_0_0_0_rgba(34,197,94,0)] group-active:shadow-[0_0_20px_0_rgba(34,197,94,0.5)] transition-shadow duration-300" />
      <span className="text-sm font-bold group-active:text-green-500 transition-colors">Confirm</span>
    </div>
);

// ConfettiBurstIcon
export const ConfettiBurstIcon = () => (
    <div className="relative w-10 h-10 group cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center text-2xl group-active:scale-90 transition-transform">🎉</div>
      {[...Array(8)].map((_, i) => (
        <div key={i} className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-active:opacity-100 group-active:animate-[confetti_0.5s_ease-out]" style={{ transform: `rotate(${i * 45}deg) translate(0px)` }} />
      ))}
    </div>
);

// TypingIndicatorBubble
export const TypingIndicatorBubble = () => (
    <div className="bg-zinc-800 px-4 py-2 rounded-full rounded-bl-none w-fit flex gap-1">
      <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
);

// ConnectionStatus
export const ConnectionStatus = () => (
    <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
      <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
      <span className="text-xs text-zinc-400">Connecting...</span>
    </div>
);

// EmptyStateFloat
export const EmptyStateFloat = () => (
    <div className="flex flex-col items-center gap-2 opacity-50">
      <div className="w-16 h-16 bg-zinc-800 rounded-full animate-[float_3s_infinite_ease-in-out]" />
      <div className="w-8 h-1 bg-black/50 rounded-full blur-sm animate-[shadow-scale_3s_infinite_ease-in-out]" />
      <span className="text-xs">Nothing here yet</span>
    </div>
);

// DragDropZoneActive
export const DragDropZoneActive = () => (
    <div className="w-full h-24 border-2 border-dashed border-zinc-600 rounded flex items-center justify-center text-zinc-500 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-[1.02] transition-all duration-300 cursor-copy">
      Drag files here
    </div>
);

// SystemUpdateBar
export const SystemUpdateBar = () => (
    <div className="w-full bg-zinc-800 rounded-full h-1 overflow-hidden">
      <div className="h-full bg-blue-500 w-1/3 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_1s_infinite]" />
      </div>
    </div>
);

// MicrophoneListening
export const MicrophoneListening = () => (
    <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center relative">
      <div className="w-8 h-8 bg-red-500 rounded-full animate-pulse" />
      <div className="absolute inset-0 border-2 border-red-500 rounded-full animate-ping opacity-50" />
    </div>
);

// FaceScanFrame
export const FaceScanFrame = () => (
    <div className="w-24 h-24 border-2 border-dashed border-blue-500 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 w-full h-1 bg-blue-400 shadow-[0_0_10px_#60a5fa] animate-[scan-vertical_1.5s_infinite]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-16 border-2 border-white/20 rounded-full" />
      </div>
    </div>
);

// PasswordHidden
export const PasswordHidden = () => (
    <div className="flex gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-2 h-2 bg-zinc-500 rounded-full animate-[bounce_0.5s_infinite]" style={{ animationDelay: `${i * 0.1}s` }} />
      ))}
    </div>
);

// ScrollIndicator
export const ScrollIndicator = () => (
    <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center p-1">
      <div className="w-1 h-2 bg-white rounded-full animate-[scroll-down_1.5s_infinite]" />
    </div>
);

// FocusRingExpand
export const FocusRingExpand = () => (
    <button className="px-4 py-2 bg-zinc-800 rounded relative group focus:outline-none">
      Focus Me
      <div className="absolute inset-0 border-2 border-blue-500 rounded opacity-0 scale-110 group-focus:opacity-100 group-focus:scale-100 transition-all duration-300" />
    </button>
);

// HoverSpotlightCard
export const HoverSpotlightCard = () => (
    <div className="w-32 h-20 bg-zinc-900 border border-zinc-800 rounded relative overflow-hidden group">
      <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 flex items-center justify-center z-10">Card</div>
    </div>
);

// ClickRippleText
export const ClickRippleText = () => (
    <span className="relative cursor-pointer overflow-hidden group">
      Click Text
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-active:scale-x-100 transition-transform duration-300" />
    </span>
);

// TooltipDelay
export const TooltipDelay = () => (
    <div className="relative inline-block group">
      <span className="text-zinc-400">?</span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-zinc-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500">
        Delayed info
      </div>
    </div>
);

// MenuCloseButton
export const MenuCloseButton = () => (
    <button className="w-8 h-8 rounded hover:bg-zinc-800 flex items-center justify-center group">
      <div className="relative w-4 h-4">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform rotate-45 transition-transform group-hover:rotate-0" />
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -rotate-45 transition-transform group-hover:rotate-0" />
      </div>
    </button>
);
