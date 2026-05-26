'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Tablet, Watch, Battery, Wifi, Signal, Bluetooth, Lock, Unlock, Camera, Bell, Moon, Sun, Grid, Search, ArrowLeft, Home } from 'lucide-react';

// 1. Dynamic Island Morph
export const DynamicIsland = () => {
    const [state, setState] = useState<'idle' | 'call' | 'music'>('idle');
    return (
        <div className="flex gap-2">
            <button onClick={() => setState('idle')} className="text-[10px] bg-surface-100 px-2 rounded">Idle</button>
            <button onClick={() => setState('call')} className="text-[10px] bg-surface-100 px-2 rounded">Call</button>
            <button onClick={() => setState('music')} className="text-[10px] bg-surface-100 px-2 rounded">Music</button>
            <motion.div 
                layout
                className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-full flex items-center justify-center text-white overflow-hidden"
                animate={{ 
                    width: state === 'idle' ? 80 : state === 'call' ? 200 : 150,
                    height: state === 'idle' ? 24 : state === 'call' ? 40 : 40,
                    borderRadius: 20
                }}
            >
                <motion.div layout className="flex items-center gap-4 px-4 w-full justify-between">
                     {state === 'call' && (
                        <>
                            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /><span className="text-xs">Incoming...</span></div>
                            <div className="flex gap-2"><div className="w-6 h-6 bg-red-500 rounded-full" /><div className="w-6 h-6 bg-green-500 rounded-full" /></div>
                        </>
                     )}
                     {state === 'music' && (
                        <>
                            <div className="w-4 h-4 bg-primary rounded" />
                            <div className="flex-1 h-1 bg-white/20 rounded overflow-hidden"><div className="w-1/2 h-full bg-white" /></div>
                        </>
                     )}
                </motion.div>
            </motion.div>
        </div>
    )
}

// 2. Mobile Notch Reveal
export const NotchReveal = () => (
    <div className="relative w-32 h-48 bg-black rounded-2xl border-4 border-surface-300 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-20" />
        <motion.div 
            className="w-full h-full bg-white text-black flex items-center justify-center pt-6"
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ type: "spring", damping: 20 }}
        >
            Swipe Up
        </motion.div>
    </div>
);

// 3. Phone Rotate Landscape
export const PhoneRotate = () => (
    <motion.div 
        className="w-10 h-16 border-2 border-white/50 rounded-lg flex items-center justify-center"
        animate={{ rotate: 90 }}
        transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
    >
        <Smartphone size={20} />
    </motion.div>
);

// 4. Laptop Open/Close
export const LaptopHinge = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="perspective-1000 cursor-pointer" onClick={() => setOpen(!open)}>
            <motion.div 
                className="w-24 h-16 bg-surface-200 rounded-t-lg border border-white/10 origin-bottom relative"
                animate={{ rotateX: open ? 0 : -90 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute inset-0 flex items-center justify-center"><span className="text-[8px]">Screen</span></div>
            </motion.div>
            <div className="w-24 h-2 bg-surface-300 rounded-b-lg" />
        </div>
    )
}

// 5. Fingerprint Scan (Screen)
export const ScreenFingerprint = () => (
    <div className="relative w-12 h-16 bg-black border border-white/10 rounded-lg flex items-center justify-center overflow-hidden group">
        <div className="w-6 h-8 border-2 border-white/20 rounded-full flex items-center justify-center">
            <motion.div 
                className="w-full h-[2px] bg-green-500 absolute top-0"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            <div className="w-4 h-5 border border-green-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    </div>
);

// 6. Face ID Scan
export const FaceID = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }} className="text-blue-500">
            <ScanFaceIcon />
        </motion.div>
    </div>
);
const ScanFaceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1z" />
    </svg>
)

// 7. Battery Charge
export const BatteryCharge = () => (
    <div className="relative">
        <Battery size={24} className="text-white/50" />
        <motion.div 
            className="absolute top-[3px] left-[2px] h-[10px] bg-green-500 rounded-sm"
            animate={{ width: ["0%", "80%"] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div className="absolute -right-2 top-0 text-green-500" animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity }}>
            <span className="text-xs">⚡</span>
        </motion.div>
    </div>
);

// 8. Airplane Mode
export const AirplaneToggle = () => {
    const [on, setOn] = useState(false);
    return (
        <button 
            onClick={() => setOn(!on)}
            className={`w-12 h-8 rounded-full flex items-center px-1 transition-colors ${on ? 'bg-orange-500 justify-end' : 'bg-surface-200 justify-start'}`}
        >
            <motion.div layout className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs">✈️</span>
            </motion.div>
        </button>
    )
}

// 9. App Icon Squircle
export const AppSquircle = () => (
    <motion.div 
        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white cursor-pointer"
        initial={{ borderRadius: "25%" }}
        whileHover={{ borderRadius: "40%", scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <Grid size={20} />
    </motion.div>
);

// 10. Notification Stack
export const NotificationStack = () => {
    const [count, setCount] = useState(3);
    return (
        <div className="relative w-full h-16 flex items-center justify-center cursor-pointer" onClick={() => setCount(c => c > 0 ? c - 1 : 3)}>
            {[...Array(count)].map((_, i) => (
                <motion.div 
                    key={i}
                    className="absolute w-32 h-10 bg-surface-100 rounded-lg border border-white/10 flex items-center px-2 gap-2 shadow-lg"
                    initial={{ scale: 0.8, y: 0 }}
                    animate={{ scale: 1 - i * 0.05, y: i * 5, zIndex: 10 - i }}
                >
                    <div className="w-4 h-4 bg-blue-500 rounded" />
                    <div className="h-2 w-16 bg-white/20 rounded" />
                </motion.div>
            ))}
             {count === 0 && <span className="text-xs text-white/30">No Notifications</span>}
        </div>
    )
}

// 11. Home Indicator Swipe
export const HomeIndicator = () => (
    <div className="w-full h-16 bg-black border border-white/10 rounded-b-xl relative flex justify-center items-end pb-2 overflow-hidden">
        <motion.div 
            className="w-1/3 h-1 bg-white rounded-full cursor-grab active:cursor-grabbing"
            drag="y"
            dragConstraints={{ top: -50, bottom: 0 }}
            whileDrag={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-white/10 text-[10px]">Swipe Up</div>
    </div>
);

// 12. Camera Shutter
export const CameraShutter = () => (
    <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors group">
        <motion.div 
            className="w-10 h-10 bg-white rounded-full"
            initial={{ scale: 0.8 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: [0.8, 0.85, 0.8] }}
            transition={{ repeat: Infinity, duration: 2 }}
        />
    </button>
);

// 13. Keyboard Popup
export const KeyboardPopup = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative w-full h-24 bg-surface-300 rounded overflow-hidden border border-white/5">
            <input 
                type="text" 
                placeholder="Tap to type..." 
                className="w-full bg-transparent p-2 text-xs outline-none"
                onFocus={() => setShow(true)}
                onBlur={() => setTimeout(() => setShow(false), 200)}
            />
            <motion.div 
                className="absolute bottom-0 left-0 w-full h-16 bg-surface-100 grid grid-cols-10 gap-[1px] p-1"
                initial={{ y: "100%" }}
                animate={{ y: show ? "0%" : "100%" }}
            >
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-sm" />
                ))}
            </motion.div>
        </div>
    )
}

// 14. Dark Mode Transition (Device)
export const DeviceDarkMode = () => {
    const [dark, setDark] = useState(true);
    return (
        <div 
            className={`w-full h-20 rounded-lg border transition-colors duration-500 flex items-center justify-center cursor-pointer ${dark ? 'bg-slate-900 border-slate-700' : 'bg-sky-100 border-sky-200'}`}
            onClick={() => setDark(!dark)}
        >
            <motion.div layout className="flex gap-4">
                <Moon size={20} className={dark ? "text-white" : "text-sky-300"} />
                <Sun size={20} className={dark ? "text-slate-700" : "text-yellow-500"} />
            </motion.div>
        </div>
    )
}

// 15. Tablet Split Screen
export const TabletSplit = () => (
    <div className="w-24 h-16 border-2 border-white/20 rounded flex overflow-hidden relative group">
        <motion.div className="w-1/2 h-full bg-blue-500/20" whileHover={{ width: "60%" }} />
        <div className="w-0.5 h-full bg-white/50 cursor-col-resize" />
        <motion.div className="flex-1 h-full bg-purple-500/20" />
    </div>
);

// 16. Watch Face Swipe
export const WatchSwipe = () => (
    <div className="w-16 h-16 rounded-full bg-black border-2 border-surface-200 overflow-hidden relative cursor-grab active:cursor-grabbing">
        <motion.div 
            className="flex h-full"
            drag="x"
            dragConstraints={{ left: -64, right: 0 }}
        >
            <div className="w-16 h-full flex-shrink-0 bg-red-900 flex items-center justify-center text-[10px]">Face 1</div>
            <div className="w-16 h-full flex-shrink-0 bg-blue-900 flex items-center justify-center text-[10px]">Face 2</div>
        </motion.div>
    </div>
);

// 17. Signal Search
export const SignalSearch = () => (
    <div className="flex items-end gap-1 h-4">
        {[...Array(4)].map((_, i) => (
            <motion.div 
                key={i} 
                className="w-1 bg-white rounded-sm"
                animate={{ height: ["20%", "100%", "20%"], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
        ))}
    </div>
);

// 18. App Library Grid
export const AppLibrary = () => (
    <div className="grid grid-cols-2 gap-1 w-16 p-2 bg-white/10 rounded-xl backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform">
        <div className="w-5 h-5 bg-orange-500 rounded-full" />
        <div className="w-5 h-5 bg-blue-500 rounded-full" />
        <div className="w-5 h-5 bg-green-500 rounded-full" />
        <div className="w-5 h-5 bg-purple-500 rounded-full" />
    </div>
);

// 19. Browser Tab Switch
export const BrowserTabs = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="w-full flex items-end border-b border-white/10">
            {[0, 1, 2].map(i => (
                <div 
                    key={i} 
                    onClick={() => setActive(i)}
                    className={`px-3 py-1 rounded-t-lg text-[10px] cursor-pointer transition-colors ${active === i ? 'bg-surface-200 text-white' : 'bg-transparent text-white/30 hover:bg-white/5'}`}
                >
                    Tab {i+1}
                </div>
            ))}
        </div>
    )
}

// 20. Lock Screen Unlock
export const LockScreen = () => {
    const [unlocked, setUnlocked] = useState(false);
    return (
        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => setUnlocked(!unlocked)}>
            <motion.div animate={{ y: unlocked ? -10 : 0, opacity: unlocked ? 0 : 1 }}>
                <Lock size={20} />
            </motion.div>
            <motion.div animate={{ y: unlocked ? 0 : 10, opacity: unlocked ? 1 : 0 }} className="absolute">
                <Unlock size={20} className="text-green-500" />
            </motion.div>
        </div>
    )
}


// FaceIDScan
export const FaceIDScan = () => (
    <div className="w-32 h-64 bg-black rounded-[2rem] border-4 border-zinc-800 relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-full z-20" />
      <div className="w-16 h-16 border-2 border-blue-500 rounded-lg relative">
        <div className="absolute inset-0 bg-blue-500/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-400 shadow-[0_0_10px_#60a5fa] animate-[scan-vertical_2s_infinite]" />
      </div>
      <span className="absolute bottom-8 text-[10px] text-zinc-500 animate-pulse">Scanning...</span>
    </div>
);

// SwipeHome
export const SwipeHome = () => (
    <div className="w-32 h-64 bg-zinc-900 rounded-[2rem] border-4 border-zinc-800 relative overflow-hidden group cursor-n-resize">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600 opacity-50 group-hover:scale-90 transition-transform duration-500 rounded-[1.5rem]" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white rounded-full transition-all duration-300 group-hover:bottom-4 group-hover:w-8" />
    </div>
);

// NotchNotify
export const NotchNotify = () => (
    <div className="w-64 h-8 bg-black relative flex justify-center group cursor-pointer">
      <div className="w-24 h-6 bg-black rounded-b-xl absolute top-0 transition-all duration-300 group-hover:w-56 group-hover:h-12 group-hover:rounded-xl group-hover:top-2 flex items-center justify-between px-4 overflow-hidden border border-zinc-800">
        <span className="text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100 whitespace-nowrap">AirPods Connected</span>
        <div className="w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
      </div>
    </div>
);

// AppIconShake
export const AppIconShake = () => (
    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center text-2xl text-white cursor-pointer hover:animate-[wiggle_0.3s_infinite]">
      A
      <div className="absolute -top-2 -left-2 w-5 h-5 bg-zinc-400 rounded-full flex items-center justify-center text-black text-xs font-bold opacity-0 hover:opacity-100 transition-opacity">x</div>
    </div>
);

// BatteryCharging
export const BatteryCharging = () => (
    <div className="w-16 h-8 border-2 border-zinc-600 rounded-lg p-1 relative flex items-center">
      <div className="h-full bg-green-500 w-full animate-[fill-width_3s_infinite] rounded-sm" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-4 h-4 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      </div>
      <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1 h-3 bg-zinc-600 rounded-r" />
    </div>
);

// WindowGenie
export const WindowGenie = () => (
    <div className="relative w-64 h-40 flex items-end justify-center group cursor-pointer">
      <div className="w-48 h-32 bg-zinc-800 rounded-lg border border-zinc-700 shadow-xl transition-all duration-500 group-hover:scale-0 group-hover:translate-y-20 group-hover:opacity-0 origin-bottom">
        <div className="h-6 bg-zinc-700 rounded-t-lg flex gap-1.5 items-center px-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white absolute bottom-0 shadow-lg">
        App
      </div>
    </div>
);

// DockBounce
export const DockBounce = () => (
    <div className="flex items-end gap-2 h-16 bg-white/10 backdrop-blur-md px-4 rounded-xl border border-white/20">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg cursor-pointer hover:-translate-y-4 hover:scale-110 transition-all duration-300 mb-2">
          {i===2 && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />}
        </div>
      ))}
    </div>
);

// SpotlightSearch
export const SpotlightSearch = () => (
    <div className="w-64 h-10 bg-zinc-800/80 backdrop-blur rounded-lg border border-zinc-600 flex items-center px-3 gap-2 shadow-2xl animate-[fade-in-scale_0.3s_ease-out]">
      <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      <span className="text-zinc-400 text-sm animate-[typing_2s_steps(10)_infinite]">Spotlight Search...</span>
    </div>
);

// FileDragDrop
export const FileDragDrop = () => (
    <div className="w-32 h-32 border-2 border-dashed border-zinc-600 rounded-lg flex flex-col items-center justify-center gap-2 group hover:border-blue-500 hover:bg-blue-500/10 transition-all cursor-copy">
      <div className="w-12 h-16 bg-zinc-700 rounded border border-zinc-500 group-hover:rotate-12 transition-transform shadow-md flex items-center justify-center">
        <span className="text-[8px] text-zinc-400">PDF</span>
      </div>
      <span className="text-xs text-zinc-500 group-hover:text-blue-400">Drop Here</span>
    </div>
);

// CursorFollow
export const CursorFollow = () => (
    <div className="w-full h-32 bg-zinc-900 rounded-lg relative overflow-hidden group cursor-none">
      <div className="absolute w-6 h-6 bg-white rounded-full mix-blend-difference pointer-events-none transition-transform duration-75 ease-out opacity-0 group-hover:opacity-100" style={{ left: '50%', top: '50%' }} />
      <div className="flex items-center justify-center h-full text-zinc-500">Hover Me</div>
    </div>
);

// ActivityRings
export const ActivityRings = () => (
    <div className="w-24 h-24 bg-black rounded-full relative flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        <circle cx="48" cy="48" r="40" stroke="#331111" strokeWidth="8" fill="none" />
        <circle cx="48" cy="48" r="40" stroke="#ef4444" strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="60" strokeLinecap="round" className="animate-[fill-ring_2s_ease-out_forwards]" />
        <circle cx="48" cy="48" r="28" stroke="#113311" strokeWidth="8" fill="none" />
        <circle cx="48" cy="48" r="28" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray="175" strokeDashoffset="80" strokeLinecap="round" className="animate-[fill-ring_2s_ease-out_forwards_delay-200ms]" />
      </svg>
    </div>
);

// HeartRateGraph
export const HeartRateGraph = () => (
    <div className="w-32 h-16 bg-black rounded-lg p-2 flex items-end gap-0.5 overflow-hidden">
      {[...Array(20)].map((_,i) => (
        <div key={i} className="w-1.5 bg-red-500 rounded-t-sm animate-[pulse-height_1s_infinite]" style={{ height: `${30 + Math.random() * 70}%`, animationDelay: `${i * 0.05}s` }} />
      ))}
      <div className="absolute top-2 right-2 flex items-center gap-1">
        <span className="text-red-500 text-xs font-bold animate-pulse">❤ 72</span>
      </div>
    </div>
);

// WatchNotification
export const WatchNotification = () => (
    <div className="w-32 h-40 bg-black rounded-[2rem] border-4 border-zinc-800 flex flex-col items-center justify-center p-2 relative overflow-hidden">
      <div className="absolute top-0 w-full h-full bg-red-500/20 animate-pulse" />
      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-2 z-10">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </div>
      <span className="text-white font-bold text-sm z-10">High HR</span>
      <span className="text-zinc-400 text-xs z-10">120 BPM</span>
    </div>
);

// BreathingApp
export const BreathingApp = () => (
    <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center relative overflow-hidden group cursor-pointer">
      <div className="absolute w-full h-full bg-cyan-500/30 rounded-full scale-50 group-hover:scale-100 transition-transform duration-[4s] ease-in-out" />
      <div className="absolute w-full h-full bg-cyan-500/30 rounded-full scale-0 group-hover:scale-75 transition-transform duration-[4s] delay-500 ease-in-out" />
      <span className="relative z-10 text-cyan-200 text-xs font-bold tracking-widest uppercase">Breathe</span>
    </div>
);

// ThermostatDial
export const ThermostatDial = () => (
    <div className="w-32 h-32 rounded-full bg-zinc-900 border-4 border-zinc-800 shadow-xl flex items-center justify-center relative group cursor-ew-resize">
      <div className="absolute inset-0 rounded-full border-t-4 border-orange-500 rotate-45" />
      <div className="text-3xl font-bold text-white">72°</div>
      <span className="absolute bottom-6 text-[10px] text-zinc-500">HEATING</span>
      <div className="absolute top-2 w-1 h-2 bg-orange-500 rounded-full transform rotate-[45deg] origin-[50%_3.5rem] transition-transform group-hover:rotate-[90deg] duration-500" />
    </div>
);

// LightDimmer
export const LightDimmer = () => (
    <div className="w-16 h-40 bg-zinc-800 rounded-2xl p-2 relative group cursor-n-resize overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full bg-yellow-500/50 h-1/2 transition-all duration-300 group-hover:h-3/4 group-hover:bg-yellow-400/80" />
      <div className="relative w-full h-full border border-zinc-600 rounded-xl flex items-center justify-center z-10 pointer-events-none">
        <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      </div>
    </div>
);

// SecurityCam
export const SecurityCam = () => (
    <div className="w-32 h-20 bg-zinc-900 rounded-lg border border-zinc-700 relative overflow-hidden group">
      <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse z-20" />
      <img src="https://picsum.photos/200/150" className="w-full h-full object-cover opacity-50 grayscale" />
      <div className="absolute inset-0 border-2 border-green-500/30 m-4 rounded flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-white rounded-full animate-[ping_2s_infinite]" />
      </div>
      <div className="absolute bottom-1 left-2 text-[8px] font-mono text-green-500">CAM 01 • REC</div>
    </div>
);

// SmartLock
export const SmartLock = () => (
    <div className="w-24 h-24 bg-zinc-200 rounded-full shadow-inner flex items-center justify-center cursor-pointer group border-4 border-zinc-300">
      <div className="w-12 h-16 border-4 border-zinc-800 rounded-t-full relative top-2">
        <div className="absolute inset-x-0 bottom-0 h-8 bg-zinc-800" />
      </div>
      <div className="absolute inset-0 bg-green-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
      <span className="absolute bottom-[-20px] text-xs font-bold text-zinc-500 group-hover:text-green-600">UNLOCKED</span>
    </div>
);

// WifiRouter
export const WifiRouter = () => (
    <div className="flex flex-col items-center">
      <div className="w-32 h-8 bg-zinc-800 rounded-t-lg relative flex justify-around px-4">
        <div className="w-1 h-12 bg-zinc-600 -mt-8 rounded-full" />
        <div className="w-1 h-12 bg-zinc-600 -mt-8 rounded-full" />
        <div className="w-1 h-12 bg-zinc-600 -mt-8 rounded-full" />
      </div>
      <div className="w-40 h-10 bg-zinc-900 rounded-lg shadow-lg flex items-center justify-center gap-4">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-75" />
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150" />
      </div>
    </div>
);

// PrinterPrint
export const PrinterPrint = () => (
    <div className="w-32 flex flex-col items-center group cursor-pointer">
      <div className="w-24 h-16 bg-white shadow-md border border-zinc-200 transition-transform duration-500 group-hover:translate-y-8 relative z-0 flex flex-col p-2 gap-1">
        <div className="w-full h-1 bg-zinc-200" />
        <div className="w-2/3 h-1 bg-zinc-200" />
        <div className="w-full h-1 bg-zinc-200" />
      </div>
      <div className="w-32 h-12 bg-zinc-800 rounded-lg relative z-10 flex items-center justify-center shadow-lg">
        <div className="w-20 h-1 bg-black rounded-full" />
      </div>
    </div>
);

// SimCardChip
export const SimCardChip = () => (
    <div className="w-24 h-16 bg-yellow-500 rounded-lg relative overflow-hidden group hover:rotate-y-12 transition-transform perspective-500 shadow-md border border-yellow-600">
      <div className="absolute top-0 right-0 w-6 h-6 bg-white transform rotate-45 translate-x-3 -translate-y-3" /> {/* Cut corner */}
      <div className="absolute inset-4 border border-yellow-700/50 grid grid-cols-2 grid-rows-2 gap-1 p-1">
        <div className="border border-yellow-700/50 rounded-sm" />
        <div className="border border-yellow-700/50 rounded-sm" />
        <div className="border border-yellow-700/50 rounded-sm" />
        <div className="border border-yellow-700/50 rounded-sm" />
      </div>
      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
    </div>
);

// ServerRack
export const ServerRack = () => (
    <div className="w-24 h-32 bg-zinc-900 border-2 border-zinc-700 rounded p-1 flex flex-col gap-1 shadow-2xl">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="w-full h-4 bg-zinc-800 rounded flex items-center px-1 gap-1">
          <div className={`w-1 h-1 rounded-full ${Math.random() > 0.5 ? 'bg-green-500 animate-pulse' : 'bg-green-900'}`} />
          <div className="w-1 h-1 rounded-full bg-blue-500" />
          <div className="flex-1 h-0.5 bg-zinc-700 ml-1" />
        </div>
      ))}
    </div>
);

// FingerprintScan
export const FingerprintScan = () => (
    <div className="w-16 h-20 border-2 border-zinc-700 rounded-t-full rounded-b-lg relative overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fingerprint.png')] opacity-20" />
      <div className="absolute top-0 w-full h-1 bg-red-500 shadow-[0_0_10px_#ef4444] animate-[scan-down_2s_infinite] group-hover:animate-none group-hover:top-full transition-all" />
      <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
);

// USBInsert
export const USBInsert = () => (
    <div className="flex items-center gap-0 group cursor-pointer">
      <div className="w-20 h-8 bg-zinc-400 rounded-l border border-zinc-500 flex items-center pl-2 shadow-sm group-hover:translate-x-2 transition-transform">
        <div className="w-2 h-2 bg-white/50 rounded-full" />
      </div>
      <div className="w-8 h-6 bg-zinc-300 border border-zinc-400 border-l-0 flex items-center justify-center">
        <div className="w-4 h-3 border-2 border-zinc-500" />
      </div>
      <div className="w-8 h-8 bg-zinc-800 rounded border-2 border-zinc-600 ml-2" />
    </div>
);

// DeviceRotate
export const DeviceRotate = () => (
    <div className="w-16 h-24 bg-zinc-800 border-2 border-zinc-600 rounded-lg flex items-center justify-center text-zinc-500 hover:rotate-90 transition-transform duration-500 origin-center cursor-pointer shadow-xl">
      <span className="transform group-hover:-rotate-90 transition-transform">16:9</span>
    </div>
);

// SignalStrengthBar
export const SignalStrengthBar = () => (
    <div className="flex items-end gap-1 h-6">
      <div className="w-1.5 h-2 bg-zinc-600 rounded-sm group-hover:bg-white transition-colors" />
      <div className="w-1.5 h-3 bg-zinc-600 rounded-sm group-hover:bg-white transition-colors delay-75" />
      <div className="w-1.5 h-4 bg-zinc-600 rounded-sm group-hover:bg-white transition-colors delay-150" />
      <div className="w-1.5 h-5 bg-zinc-600 rounded-sm group-hover:bg-white transition-colors delay-200" />
    </div>
);

// FaceIDUnlock
export const FaceIDUnlock = () => (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className="w-8 h-10 border-2 border-white rounded-t-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-white border-b-0 rounded-t-full origin-bottom-right transition-transform group-hover:rotate-[-45deg] group-hover:translate-y-[-2px]" />
      </div>
      <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">Unlocked</span>
    </div>
);

// BatteryLowWarn
export const BatteryLowWarn = () => (
    <div className="w-12 h-6 border-2 border-red-500 rounded px-0.5 flex items-center relative animate-pulse">
      <div className="h-4 w-2 bg-red-500 rounded-sm" />
      <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1 h-3 bg-red-500 rounded-r" />
    </div>
);

// BluetoothPairing
export const BluetoothPairing = () => (
    <div className="relative w-10 h-10 flex items-center justify-center group">
      <svg className="w-6 h-6 text-blue-500 z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.71,7.71L12,2h-1v7.59L6.41,5L5,6.41L10.59,12L5,17.59l1.41,1.41L11,14.41V22h1l5.71-5.71L13.41,12L17.71,7.71z M13,5.83l1.88,1.88L13,9.59V5.83z M13,18.17v-3.76l1.88,1.88L13,18.17z"/></svg>
      <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
    </div>
);

// AirplaneModeToggle
export const AirplaneModeToggle = () => (
    <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center cursor-pointer group hover:bg-orange-500 transition-colors">
      <svg className="w-6 h-6 text-white transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24"><path d="M21,16v-2l-8-5V3.5C13,2.67,12.33,2,11.5,2S10,2.67,10,3.5V9l-8,5v2l8-2.5V19l-2,1.5V22l3.5-1l3.5,1v-1.5L13,19v-5.5L21,16z"/></svg>
    </div>
);
