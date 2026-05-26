'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Search, Upload, Mic, CreditCard, X, Check, Paperclip, Send } from 'lucide-react';

// 1. Floating Label Input (Enhanced) - Previously implemented simplified
export const FloatingLabelInput = () => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");
    return (
        <div className="relative w-full">
            <input 
                type="text" 
                className="peer w-full pt-5 pb-1 px-2 bg-transparent border-b border-white/20 text-white outline-none focus:border-primary transition-colors"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setValue(e.target.value)}
            />
            <label className={`absolute left-2 transition-all duration-300 pointer-events-none ${focused || value ? 'top-0 text-xs text-primary' : 'top-3 text-sm text-white/50'}`}>
                Username
            </label>
        </div>
    )
}

// 2. Shake on Error Input (Enhanced)
export const ShakeErrorInput = () => {
    const [error, setError] = useState(false);
    const shake = {
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.4 }
    };
    return (
        <div className="w-full">
            <motion.input 
                animate={error ? shake : {}}
                type="text"
                placeholder="Type 'error'..."
                className={`w-full px-4 py-2 rounded bg-surface-100 border ${error ? 'border-red-500 text-red-500' : 'border-white/10 text-white'} outline-none focus:border-primary`}
                onChange={(e) => e.target.value === 'error' ? setError(true) : setError(false)}
            />
        </div>
    )
}

// 3. Border Spread Input
export const BorderSpreadInput = () => {
    return (
        <div className="relative w-full group">
            <input type="text" placeholder="Border Spread" className="w-full px-4 py-2 bg-transparent border-b border-white/20 outline-none text-white placeholder-white/30" />
            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary group-focus-within:w-full group-focus-within:left-0 transition-all duration-300" />
        </div>
    )
}

// 4. Password Reveal
export const PasswordReveal = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative w-full flex items-center border border-white/10 rounded bg-surface-100 px-3">
            <input 
                type={show ? "text" : "password"} 
                placeholder="Password" 
                className="w-full py-2 bg-transparent outline-none text-white text-sm"
            />
            <button onClick={() => setShow(!show)} className="text-white/50 hover:text-white transition-colors">
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
        </div>
    )
}

// 5. Search Expand
export const SearchExpandInput = () => {
    const [expanded, setExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const toggle = () => {
        setExpanded(!expanded);
        if (!expanded) setTimeout(() => inputRef.current?.focus(), 100);
    }

    return (
        <div className={`flex items-center bg-surface-100 rounded-full overflow-hidden transition-all duration-300 ${expanded ? 'w-full px-3 border border-white/10' : 'w-10 border border-transparent'}`}>
            <button onClick={toggle} className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-white/70 hover:text-white">
                <Search size={18} />
            </button>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Search..." 
                className="w-full bg-transparent outline-none text-white text-sm ml-2"
            />
        </div>
    )
}

// 6. OTP Input
export const OTPInput = () => {
    return (
        <div className="flex gap-2 justify-center">
            {[1,2,3,4].map(i => (
                <input 
                    key={i}
                    type="text" 
                    maxLength={1}
                    className="w-10 h-12 text-center bg-surface-100 border border-white/10 rounded text-xl text-white focus:border-primary focus:bg-surface-200 outline-none transition-all"
                />
            ))}
        </div>
    )
}

// 7. Tag Input
export const TagInput = () => {
    const [tags, setTags] = useState(["React", "Motion"]);
    const addTag = (e: any) => {
        if (e.key === 'Enter' && e.target.value) {
            setTags([...tags, e.target.value]);
            e.target.value = '';
        }
    }
    return (
        <div className="flex flex-wrap gap-2 p-2 bg-surface-100 border border-white/10 rounded w-full min-h-[3rem]">
            {tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded flex items-center gap-1">
                    {tag} <button onClick={() => setTags(tags.filter(t => t !== tag))}><X size={12}/></button>
                </span>
            ))}
            <input type="text" placeholder="Add tag..." onKeyDown={addTag} className="bg-transparent outline-none text-sm text-white flex-1 min-w-[60px]" />
        </div>
    )
}

// 8. File Dropzone
export const FileDropzone = () => {
    return (
        <div className="w-full h-24 border-2 border-dashed border-white/20 rounded-lg flex flex-col items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer gap-2">
            <Upload size={24} />
            <span className="text-xs">Drop files here</span>
        </div>
    )
}

// 9. Voice Input Wave
export const VoiceInput = () => {
    const [recording, setRecording] = useState(false);
    return (
        <div className="flex items-center gap-2 w-full bg-surface-100 rounded-full px-4 py-2 border border-white/10">
            <input type="text" placeholder="Speak now..." className="bg-transparent outline-none text-white text-sm flex-1" disabled={recording} />
            <button 
                onClick={() => setRecording(!recording)}
                className={`p-2 rounded-full transition-colors ${recording ? 'bg-red-500 text-white' : 'text-white/50 hover:text-white'}`}
            >
                <Mic size={16} className={recording ? 'animate-pulse' : ''} />
            </button>
            {recording && (
                 <div className="flex gap-0.5 items-center h-4">
                    {[1,2,3,4,5].map(i => (
                        <motion.div 
                            key={i} 
                            className="w-1 bg-primary rounded-full"
                            animate={{ height: [4, 16, 4] }}
                            transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                        />
                    ))}
                 </div>
            )}
        </div>
    )
}

// 10. Credit Card Input (Flip logic simulated)
export const CreditCardInput = () => {
    return (
        <div className="relative w-full flex items-center border border-white/10 rounded bg-surface-100 px-3 group focus-within:border-secondary transition-colors">
            <CreditCard size={18} className="text-white/50 group-focus-within:text-secondary" />
            <input 
                type="text" 
                placeholder="Card Number" 
                className="w-full py-2 bg-transparent outline-none text-white text-sm ml-2 tracking-widest"
            />
            <div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center text-[8px] text-white/50">VISA</div>
        </div>
    )
}

// 11. Character Count
export const CharCountInput = () => {
    const [val, setVal] = useState("");
    const limit = 20;
    return (
        <div className="relative w-full">
            <input 
                type="text" 
                maxLength={limit}
                value={val}
                onChange={e => setVal(e.target.value)}
                className="w-full px-4 py-2 bg-surface-100 border border-white/10 rounded outline-none text-white focus:border-primary pr-12"
                placeholder="Limited text..."
            />
            <span className={`absolute right-3 top-2.5 text-xs ${val.length === limit ? 'text-red-500' : 'text-white/30'}`}>
                {val.length}/{limit}
            </span>
        </div>
    )
}

// 12. Material Filled Input
export const MaterialFilledInput = () => {
    return (
        <div className="relative w-full bg-white/5 rounded-t-lg px-3 pt-5 pb-1 border-b border-white/30 hover:bg-white/10 transition-colors group">
            <input type="text" className="w-full bg-transparent outline-none text-white peer placeholder-transparent" placeholder="Label" />
            <label className="absolute left-3 top-4 text-white/50 text-sm transition-all peer-focus:text-xs peer-focus:text-primary peer-focus:top-1 peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                Material Filled
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 peer-focus:w-full" />
        </div>
    )
}

// 13. Inline Submit
export const InlineSubmitInput = () => {
    const [val, setVal] = useState("");
    return (
        <div className="relative w-full">
            <input 
                type="email" 
                value={val}
                onChange={e => setVal(e.target.value)}
                placeholder="Email for newsletter"
                className="w-full px-4 py-2 bg-surface-100 border border-white/10 rounded-full outline-none text-white focus:border-primary pr-10"
            />
            <AnimatePresence>
                {val.length > 0 && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute right-1 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                    >
                        <Send size={14} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}

// 14. Auto-resize Textarea
export const AutoResizeTextarea = () => {
    return (
        <textarea 
            className="w-full p-3 bg-surface-100 border border-white/10 rounded text-white text-sm outline-none focus:border-primary resize-none overflow-hidden min-h-[3rem]"
            placeholder="Type and I grow..."
            onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = target.scrollHeight + "px";
            }}
        />
    )
}

// 15. Color Picker Input
export const ColorInput = () => {
    const [color, setColor] = useState("#00f3ff");
    return (
        <div className="flex items-center gap-3 w-full px-3 py-2 bg-surface-100 border border-white/10 rounded">
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/20 shadow-inner">
                <input 
                    type="color" 
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer p-0 border-0 opacity-0" 
                />
                <div className="w-full h-full" style={{ backgroundColor: color }} />
            </div>
            <span className="text-sm font-mono text-white uppercase">{color}</span>
        </div>
    )
}

// 16. Stepper Input
export const StepperInput = () => {
    const [val, setVal] = useState(1);
    return (
        <div className="flex items-center border border-white/10 rounded-lg overflow-hidden w-32">
            <button onClick={() => setVal(Math.max(0, val-1))} className="px-3 py-2 bg-surface-100 hover:bg-surface-200 text-white transition-colors">-</button>
            <div className="flex-1 text-center bg-surface-50 text-white py-2 text-sm">{val}</div>
            <button onClick={() => setVal(val+1)} className="px-3 py-2 bg-surface-100 hover:bg-surface-200 text-white transition-colors">+</button>
        </div>
    )
}

// 17. Copy to Clipboard
export const CopyInput = () => {
    const [copied, setCopied] = useState(false);
    const val = "npm i motionary";
    const copy = () => {
        navigator.clipboard.writeText(val);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    return (
        <div className="flex items-center w-full bg-black border border-white/10 rounded font-mono text-xs p-1 pl-3">
            <span className="flex-1 text-white/70">{val}</span>
            <button onClick={copy} className="px-3 py-1 bg-surface-200 hover:bg-primary hover:text-black rounded text-white transition-all">
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
    )
}

// 18. Slider Input (Range)
export const SliderInput = () => {
    const [val, setVal] = useState(50);
    return (
        <div className="w-full">
            <div className="flex justify-between text-xs text-white/50 mb-2">
                <span>Volume</span>
                <span>{val}%</span>
            </div>
            <input 
                type="range" 
                min="0" 
                max="100" 
                value={val}
                onChange={e => setVal(Number(e.target.value))}
                className="w-full h-1 bg-surface-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
        </div>
    )
}

// 19. Chat Input (with attachments)
export const ChatInput = () => {
    return (
        <div className="flex items-center gap-2 w-full bg-surface-100 p-2 rounded-lg border border-white/10">
            <button className="p-1 text-white/50 hover:text-white hover:bg-white/10 rounded"><Paperclip size={16}/></button>
            <input type="text" placeholder="Message..." className="bg-transparent outline-none text-white text-sm flex-1" />
            <button className="p-1.5 bg-primary text-black rounded hover:opacity-90"><Send size={14}/></button>
        </div>
    )
}

// 20. Mention Input (Simulated)
export const MentionInput = () => {
    return (
        <div className="w-full px-4 py-2 bg-surface-100 border border-white/10 rounded outline-none text-white text-sm">
            Hello <span className="text-primary font-bold">@Alice</span>, check this out!
        </div>
    )
}


// UnderlineInput
export const UnderlineInput = () => (
    <div className="relative w-64 group">
      <input type="text" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
      <label className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Floating Label
      </label>
    </div>
);

// SearchExpandIcon
export const SearchExpandIcon = () => (
    <div className="relative group">
      <input type="text" className="w-10 h-10 rounded-full bg-zinc-800 text-white pl-10 pr-4 focus:w-64 focus:bg-zinc-700 transition-all duration-300 outline-none cursor-pointer focus:cursor-text" placeholder="Search..." />
      <svg className="w-5 h-5 text-zinc-400 absolute left-2.5 top-2.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
);

// ValidationShake
export const ValidationShake = () => (
    <div className="w-64 relative group">
      <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-zinc-900 border border-red-500 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 animate-[shake_0.4s_ease-in-out]" defaultValue="invalid-email" />
      <span className="absolute right-3 top-2.5 text-red-500 text-xs">!</span>
      <p className="text-red-500 text-[10px] mt-1 opacity-0 animate-[fade-in_0.3s_delay-300ms_forwards]">Invalid email address</p>
    </div>
);

// GradientBorderInput
export const GradientBorderInput = () => (
    <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 group focus-within:animate-pulse">
      <input type="text" placeholder="Gradient Focus" className="w-64 px-4 py-2 bg-black rounded-md text-white focus:outline-none placeholder-zinc-600" />
    </div>
);

// MaterialOutline
export const MaterialOutline = () => (
    <div className="relative w-64">
      <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label htmlFor="floating_outlined" className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Outlined</label>
    </div>
);

// DayNightSwitch
export const DayNightSwitch = () => (
    <label className="relative inline-flex items-center cursor-pointer group">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-14 h-8 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 flex items-center justify-between px-1.5">
        <span className="text-[10px]">🌙</span>
        <span className="text-[10px]">☀️</span>
      </div>
    </label>
);

// ElasticToggle
export const ElasticToggle = () => (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="relative w-16 h-8 bg-zinc-700 rounded-full transition-all peer-checked:bg-green-500">
        <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-all duration-500 cubic-bezier(0.68,-0.55,0.265,1.55) peer-checked:left-9" />
      </div>
    </label>
);

// NeumorphicToggle
export const NeumorphicToggle = () => (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="w-16 h-8 bg-zinc-800 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.05)] relative">
        <input type="checkbox" className="sr-only peer" />
        <div className="absolute top-1 left-1 w-6 h-6 bg-zinc-700 rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.5)] transition-transform duration-300 peer-checked:translate-x-8 peer-checked:bg-blue-500" />
      </div>
    </label>
);

// FlipSwitch
export const FlipSwitch = () => (
    <label className="perspective-500 cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-16 h-8 bg-zinc-800 rounded-lg relative transform-style-3d transition-transform duration-500 peer-checked:rotate-x-180 border border-zinc-700">
        <div className="absolute inset-0 flex items-center justify-center backface-hidden text-[10px] text-zinc-400">OFF</div>
        <div className="absolute inset-0 flex items-center justify-center backface-hidden rotate-x-180 bg-green-600 rounded-lg text-[10px] text-white font-bold">ON</div>
      </div>
    </label>
);

// LiquidSwitch
export const LiquidSwitch = () => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-14 h-8 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all after:duration-500 peer-checked:bg-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-purple-500 scale-0 peer-checked:scale-150 transition-transform duration-500 rounded-full origin-left opacity-50" />
      </div>
    </label>
);

// BounceCheck
export const BounceCheck = () => (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-6 h-6 border-2 border-zinc-500 rounded transition-all duration-200 peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:scale-110 flex items-center justify-center">
        <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
      </div>
      <span className="text-zinc-400 group-hover:text-white transition-colors">Bounce</span>
    </label>
);

// RippleRadio
export const RippleRadio = () => (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <input type="radio" name="radio-demo" className="sr-only peer" />
      <div className="w-6 h-6 border-2 border-zinc-500 rounded-full relative flex items-center justify-center peer-checked:border-blue-500">
        <div className="w-3 h-3 bg-blue-500 rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200" />
        <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 peer-checked:animate-ping" />
      </div>
      <span className="text-zinc-400 group-hover:text-white transition-colors">Ripple</span>
    </label>
);

// NeonCheckbox
export const NeonCheckbox = () => (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-6 h-6 bg-black border border-zinc-700 rounded peer-checked:border-green-400 peer-checked:shadow-[0_0_10px_#4ade80] transition-all duration-300 flex items-center justify-center">
        <svg className="w-4 h-4 text-green-400 opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <span className="text-zinc-400 peer-checked:text-green-400 peer-checked:drop-shadow-[0_0_5px_#4ade80]">Neon</span>
    </label>
);

// StrikeThroughCheck
export const StrikeThroughCheck = () => (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-5 h-5 border border-zinc-500 rounded peer-checked:bg-zinc-700 peer-checked:border-zinc-700 transition-colors" />
      <span className="text-zinc-300 relative">
        Task Completed
        <span className="absolute left-0 top-1/2 w-0 h-[1px] bg-zinc-500 transition-all duration-300 peer-checked:w-full" />
      </span>
    </label>
);

// HeartCheckbox
export const HeartCheckbox = () => (
    <label className="cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <svg className="w-8 h-8 text-zinc-600 peer-checked:text-red-500 peer-checked:fill-current transition-colors hover:scale-110 active:scale-95 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </label>
);

// TooltipSlider
export const TooltipSlider = () => (
    <div className="w-64 relative group pt-8">
      <input type="range" min="0" max="100" className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-500" />
      <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity">
        50%
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-blue-600" />
      </div>
    </div>
);

// ThickRangeSlider
export const ThickRangeSlider = () => (
    <div className="w-64">
      <input type="range" className="w-full h-4 bg-zinc-800 rounded-full appearance-none cursor-pointer overflow-hidden focus:outline-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(59,130,246,1)] [&::-webkit-slider-thumb]:box-shadow-[0_0_0_100vh_#3b82f6]" />
    </div>
);

// VerticalSlider
export const VerticalSlider = () => (
    <div className="h-32 w-8 bg-zinc-800 rounded-full relative overflow-hidden group cursor-pointer flex items-end justify-center pb-1">
      <div className="absolute bottom-0 w-full bg-blue-500 h-1/2 transition-all duration-100 group-hover:bg-blue-400" />
      <div className="z-10 w-6 h-6 bg-white rounded-full shadow-md mb-[45%]" />
    </div>
);

// StepSlider
export const StepSlider = () => (
    <div className="w-64 relative">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-700 -translate-y-1/2 rounded" />
      <div className="flex justify-between relative z-10">
        {[0, 25, 50, 75, 100].map((v, i) => (
          <div key={i} className="w-3 h-3 bg-zinc-500 rounded-full cursor-pointer hover:bg-white hover:scale-125 transition-all" />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-blue-500 -translate-y-1/2 rounded pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-y-1/2 -translate-x-1/2 shadow hover:scale-110 transition-transform cursor-pointer" />
    </div>
);

// IconSlider
export const IconSlider = () => (
    <div className="w-64 flex items-center gap-4">
      <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
      <input type="range" className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-white hover:accent-blue-400 transition-colors" />
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
    </div>
);

// PinCodeInput
export const PinCodeInput = () => (
    <div className="flex gap-2">
      {[1, 2, 3, 4].map((i) => (
        <input key={i} type="text" maxLength={1} className="w-10 h-12 text-center text-xl bg-zinc-800 rounded border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder-transparent" placeholder="•" />
      ))}
    </div>
);

// DragDropZone
export const DragDropZone = () => (
    <div className="w-64 h-32 border-2 border-dashed border-zinc-600 rounded-xl flex flex-col items-center justify-center text-zinc-500 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all cursor-pointer group">
      <svg className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
      <span className="text-xs">Drag files here</span>
    </div>
);

// SignaturePad
export const SignaturePad = () => (
    <div className="w-64 h-24 bg-zinc-900 border-b border-zinc-700 relative group hover:bg-zinc-800 transition-colors cursor-crosshair">
      <span className="absolute bottom-2 right-2 text-[10px] text-zinc-600 group-hover:text-zinc-500">Sign Here</span>
      <div className="absolute top-1/2 left-1/2 w-32 h-1 bg-zinc-800 group-hover:bg-zinc-700" /> 
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <path d="M40 50 Q 60 20 90 50 T 150 50" stroke="white" strokeWidth="2" fill="none" className="animate-[draw_1s_ease-out_forwards]" strokeDasharray="100" strokeDashoffset="100" />
      </svg>
    </div>
);

// ChipSelect
export const ChipSelect = () => (
    <div className="flex flex-wrap gap-2 w-64">
      {['React', 'Vue', 'Svelte'].map((tag) => (
        <label key={tag} className="cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400 peer-checked:bg-indigo-600 peer-checked:text-white hover:bg-zinc-700 transition-all select-none">
            {tag}
          </span>
        </label>
      ))}
    </div>
);

// CurrencyInput
export const CurrencyInput = () => (
    <div className="relative w-40 group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-zinc-500 group-focus-within:text-green-500 transition-colors">$</span>
      </div>
      <input type="number" className="block w-full pl-7 pr-12 py-2 bg-zinc-900 border border-zinc-700 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" placeholder="0.00" />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <select className="h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-zinc-500 text-sm rounded-md focus:ring-0 focus:border-transparent group-focus-within:text-white transition-colors">
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
);

// MultiRangeSlider
export const MultiRangeSlider = () => (
    <div className="w-64 relative h-2 bg-zinc-700 rounded-full group">
      <div className="absolute left-[20%] right-[30%] top-0 bottom-0 bg-blue-500 rounded-full" />
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow cursor-pointer hover:scale-125 transition-transform" />
      <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow cursor-pointer hover:scale-125 transition-transform" />
    </div>
);

// KnobControl
export const KnobControl = () => (
    <div className="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] relative flex items-center justify-center cursor-pointer group hover:border-blue-500 transition-colors">
      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
      <div className="w-full h-full rounded-full transform rotate-45 transition-transform group-active:rotate-90 duration-200">
        <div className="w-1 h-3 bg-white mx-auto mt-1 rounded-full" />
      </div>
    </div>
);

// RatingStarInput
export const RatingStarInput = () => (
    <div className="flex gap-1 group">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-6 h-6 text-zinc-600 hover:text-yellow-400 cursor-pointer transition-colors peer-hover:text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
);

// ColorPaletteInput
export const ColorPaletteInput = () => (
    <div className="flex gap-2">
      {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'].map((color, i) => (
        <div key={i} className={`w-8 h-8 rounded-full ${color} cursor-pointer hover:scale-110 active:scale-95 transition-transform border-2 border-transparent hover:border-white`} />
      ))}
    </div>
);

// DatePickerSim
export const DatePickerSim = () => (
    <div className="relative w-40 group">
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md cursor-pointer hover:border-blue-500 transition-colors">
        <span className="text-zinc-400 text-sm">Select Date</span>
        <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      </div>
      <div className="absolute top-full left-0 w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-20">
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-zinc-400">
          {['S','M','T','W','T','F','S'].map(d => <span key={d}>{d}</span>)}
          {[...Array(31)].map((_, i) => (
            <div key={i} className="hover:bg-blue-600 hover:text-white rounded cursor-pointer p-1 transition-colors">{i+1}</div>
          ))}
        </div>
      </div>
    </div>
);

// MaterialLineInput
export const MaterialLineInput = () => (
    <div className="relative pt-4 w-48 group">
      <input type="text" className="w-full bg-transparent border-b border-zinc-600 focus:border-blue-500 outline-none py-1 transition-colors peer" placeholder=" " />
      <label className="absolute left-0 top-1 text-zinc-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500">Username</label>
    </div>
);

// OutlineCutInput
export const OutlineCutInput = () => (
    <div className="relative w-48 group">
      <input type="text" className="w-full bg-transparent border border-zinc-600 rounded px-3 py-2 outline-none focus:border-blue-500 peer" placeholder=" " />
      <label className="absolute left-2 -top-2 bg-[#111] px-1 text-xs text-zinc-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">Email</label>
    </div>
);

// BackgroundFillInput
export const BackgroundFillInput = () => (
    <div className="relative w-48 overflow-hidden rounded-t-lg bg-zinc-800/50 border-b border-zinc-500 group">
      <div className="absolute inset-0 bg-zinc-700/50 transform scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-300" />
      <input type="text" className="w-full bg-transparent px-3 py-2 outline-none relative z-10 text-white" placeholder="Search..." />
    </div>
);

// IconMorphInput
export const IconMorphInput = () => (
    <div className="flex items-center border border-zinc-700 rounded-full px-3 py-1 w-48 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all group">
      <svg className="w-4 h-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      <input type="text" className="bg-transparent outline-none ml-2 text-sm w-full" placeholder="Search" />
    </div>
);

// CardRadioSelect
export const CardRadioSelect = () => (
    <div className="flex gap-2">
      {[1, 2].map((i) => (
        <label key={i} className="cursor-pointer group relative">
          <input type="radio" name="card" className="sr-only peer" />
          <div className="w-20 h-24 border-2 border-zinc-700 rounded-lg p-2 flex flex-col justify-end peer-checked:border-blue-500 peer-checked:bg-blue-900/20 transition-all hover:bg-zinc-800">
            <div className="w-4 h-4 rounded-full border-2 border-zinc-500 mb-auto peer-checked:border-blue-500 peer-checked:bg-blue-500" />
            <span className="text-xs font-bold text-zinc-400 peer-checked:text-blue-400">Plan {i}</span>
          </div>
        </label>
      ))}
    </div>
);

// ImageCheckboxGrid
export const ImageCheckboxGrid = () => (
    <div className="grid grid-cols-2 gap-2 w-32">
      {[1, 2, 3, 4].map((i) => (
        <label key={i} className="cursor-pointer relative group">
          <input type="checkbox" className="sr-only peer" />
          <img src={`https://picsum.photos/100/100?random=${i}`} className="w-full h-16 object-cover rounded opacity-50 peer-checked:opacity-100 peer-checked:ring-2 peer-checked:ring-green-500 transition-all" />
          <div className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full scale-0 peer-checked:scale-100 transition-transform flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
        </label>
      ))}
    </div>
);

// TagCloudSelect
export const TagCloudSelect = () => (
    <div className="flex flex-wrap gap-1 w-48">
      {['Design', 'Code', 'UI', 'UX', 'Motion'].map((tag) => (
        <label key={tag} className="cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400 border border-transparent peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-400 hover:border-zinc-500 transition-all select-none">
            {tag}
          </span>
        </label>
      ))}
    </div>
);

// SegmentedControl
export const SegmentedControl = () => (
    <div className="bg-zinc-800 p-1 rounded-lg flex relative">
      <div className="w-1/3 h-full absolute left-0 bg-zinc-600 rounded-md transition-all duration-300 ease-out shadow-sm" style={{ transform: 'translateX(0%)' }} /> 
      {/* Note: In a real app, translate would be dynamic based on state */}
      {['Day', 'Week', 'Month'].map((t) => (
        <button key={t} className="flex-1 py-1 text-xs relative z-10 text-white hover:text-white/80">{t}</button>
      ))}
    </div>
);

// DropzoneBounce
export const DropzoneBounce = () => (
    <div className="w-full h-24 border-2 border-dashed border-zinc-600 rounded-lg flex flex-col items-center justify-center text-zinc-500 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all cursor-pointer group">
      <svg className="w-8 h-8 mb-2 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
      <span className="text-xs">Drop files here</span>
    </div>
);

// FilePreviewStack
export const FilePreviewStack = () => (
    <div className="relative w-24 h-24 group cursor-pointer">
      <div className="absolute top-0 left-0 w-20 h-20 bg-zinc-700 rounded border border-zinc-600 transform rotate-[-5deg] group-hover:rotate-[-10deg] group-hover:translate-x-[-5px] transition-all" />
      <div className="absolute top-0 left-0 w-20 h-20 bg-zinc-700 rounded border border-zinc-600 transform rotate-[5deg] group-hover:rotate-[10deg] group-hover:translate-x-[5px] transition-all" />
      <div className="absolute top-0 left-0 w-20 h-20 bg-zinc-800 rounded border border-zinc-500 flex items-center justify-center text-xs z-10 shadow-lg">
        3 Files
      </div>
    </div>
);

// MultiUploadList
export const MultiUploadList = () => (
    <div className="w-48 space-y-2">
      {[1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2 bg-zinc-800 p-2 rounded animate-[slide-in-right_0.3s_ease-out]" style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="w-8 h-8 bg-zinc-700 rounded flex items-center justify-center text-[10px]">JPG</div>
          <div className="flex-1">
            <div className="h-1 bg-zinc-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-full animate-[fill-width_1s_ease-out]" />
            </div>
          </div>
          <span className="text-green-500 text-xs">✓</span>
        </div>
      ))}
    </div>
);

// VerticalRangeSlider
export const VerticalRangeSlider = () => (
    <div className="h-32 w-8 bg-zinc-800 rounded-full relative group cursor-pointer">
      <div className="absolute bottom-0 w-full bg-blue-600 rounded-full group-hover:bg-blue-500 transition-all" style={{ height: '60%' }} />
      <div className="absolute bottom-[60%] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg group-hover:scale-125 transition-transform" />
    </div>
);

// KnobRotateControl
export const KnobRotateControl = () => (
    <div className="w-16 h-16 rounded-full bg-zinc-800 border-4 border-zinc-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center relative cursor-grab active:cursor-grabbing transform rotate-[-45deg] active:rotate-[45deg] transition-transform duration-500">
      <div className="w-1 h-3 bg-white absolute top-1 rounded-full" />
    </div>
);

// DatePickerFlip
export const DatePickerFlip = () => (
    <div className="w-32 h-10 bg-zinc-800 border border-zinc-600 rounded flex items-center justify-between px-2 cursor-pointer group hover:border-blue-500 transition-colors">
      <span className="text-sm">Oct 24, 2025</span>
      <svg className="w-4 h-4 text-zinc-400 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
    </div>
);

// ColorWheelPick
export const ColorWheelPick = () => (
    <div className="w-24 h-24 rounded-full bg-[conic-gradient(red,yellow,lime,aqua,blue,magenta,red)] relative cursor-crosshair shadow-xl group">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-white rounded-full bg-transparent group-hover:scale-150 transition-transform" />
    </div>
);

// PatternLock
export const PatternLock = () => (
    <div className="grid grid-cols-3 gap-4 w-24 h-24 cursor-pointer">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-2 h-2 bg-zinc-600 rounded-full hover:bg-blue-500 hover:scale-150 transition-all" />
      ))}
    </div>
);

// StepperButtons
export const StepperButtons = () => (
    <div className="flex items-center bg-zinc-800 rounded-lg p-1 gap-2">
      <button className="w-8 h-8 bg-zinc-700 rounded hover:bg-zinc-600 active:scale-90 transition-all">-</button>
      <span className="w-8 text-center font-mono">1</span>
      <button className="w-8 h-8 bg-zinc-700 rounded hover:bg-zinc-600 active:scale-90 transition-all">+</button>
    </div>
);

// DualRangeSlider
export const DualRangeSlider = () => (
    <div className="w-48 h-1 bg-zinc-700 rounded relative mt-4">
      <div className="absolute left-1/4 right-1/4 h-full bg-blue-500" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow cursor-ew-resize hover:scale-110 transition-transform" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow cursor-ew-resize hover:scale-110 transition-transform" />
    </div>
);

// VoiceRecordBtn
export const VoiceRecordBtn = () => (
    <button className="w-16 h-16 rounded-full bg-red-600 shadow-[0_0_0_4px_rgba(220,38,38,0.3)] hover:shadow-[0_0_0_8px_rgba(220,38,38,0.5)] active:scale-90 transition-all flex items-center justify-center">
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.43 6-6.92h-2z"/></svg>
    </button>
);

// CreditCardFlip
export const CreditCardFlip = () => (
    <div className="w-40 h-24 perspective-1000 group cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-lg border border-zinc-600 p-2 flex flex-col justify-between backface-hidden">
          <div className="w-8 h-5 bg-yellow-600 rounded" />
          <div className="text-xs tracking-widest text-zinc-400">•••• ••••</div>
        </div>
        <div className="absolute w-full h-full bg-zinc-800 rounded-lg border border-zinc-600 backface-hidden rotate-y-180 flex items-center justify-center">
          <div className="w-full h-4 bg-black absolute top-2" />
          <div className="w-8 h-4 bg-white text-black text-[8px] flex items-center justify-center mt-2">123</div>
        </div>
      </div>
    </div>
);

// AddressAutofill
export const AddressAutofill = () => (
    <div className="relative w-48 group">
      <input type="text" className="w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-1 text-sm outline-none focus:border-blue-500" placeholder="Address" />
      <div className="absolute top-full left-0 w-full bg-zinc-800 border border-zinc-700 rounded shadow-lg mt-1 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none group-focus-within:pointer-events-auto">
        <div className="p-2 hover:bg-zinc-700 cursor-pointer text-xs">123 Main St</div>
        <div className="p-2 hover:bg-zinc-700 cursor-pointer text-xs">456 Elm Ave</div>
      </div>
    </div>
);

// PasswordStrength
export const PasswordStrength = () => (
    <div className="w-48 space-y-1 group">
      <input type="password" className="w-full bg-zinc-800 border border-zinc-600 rounded px-2 py-1 text-sm outline-none focus:border-blue-500" value="password" readOnly />
      <div className="flex gap-1 h-1">
        <div className="flex-1 bg-red-500 rounded-full" />
        <div className="flex-1 bg-yellow-500 rounded-full" />
        <div className="flex-1 bg-green-500 rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
);

// CurrencyFlag
export const CurrencyFlag = () => (
    <div className="flex w-32 border border-zinc-600 rounded overflow-hidden group focus-within:border-green-500 transition-colors">
      <div className="bg-zinc-800 px-2 py-1 flex items-center gap-1 text-sm cursor-pointer hover:bg-zinc-700 border-r border-zinc-600">
        <span>🇺🇸</span>
        <span className="text-xs">USD</span>
      </div>
      <input type="number" className="w-full bg-transparent px-2 text-sm outline-none text-right" placeholder="0.00" />
    </div>
);

// MarkdownEditor
export const MarkdownEditor = () => (
    <div className="w-full h-24 bg-zinc-900 border border-zinc-700 rounded p-2 text-sm font-mono focus-within:ring-1 focus-within:ring-blue-500 transition-all">
      <span className="text-blue-400"># Title</span><br/>
      <span className="text-zinc-300">Some **bold** text.</span>
      <span className="w-0.5 h-4 bg-blue-500 inline-block align-middle animate-[blink_1s_infinite] ml-0.5" />
    </div>
);

// DragDropList
export const DragDropList = () => (
    <div className="flex flex-col gap-2 w-48">
      <div className="bg-zinc-800 p-2 rounded cursor-grab active:cursor-grabbing hover:bg-zinc-700 border border-transparent hover:border-zinc-500 transition-all">Item 1</div>
      <div className="bg-zinc-800 p-2 rounded cursor-grab active:cursor-grabbing hover:bg-zinc-700 border border-transparent hover:border-zinc-500 transition-all opacity-50 border-dashed">Item 2 (Dragging)</div>
      <div className="bg-zinc-800 p-2 rounded cursor-grab active:cursor-grabbing hover:bg-zinc-700 border border-transparent hover:border-zinc-500 transition-all">Item 3</div>
    </div>
);

// RichTextToolbar
export const RichTextToolbar = () => (
    <div className="flex gap-1 bg-zinc-800 p-1 rounded border border-zinc-700 mb-2 w-fit">
      {['B', 'I', 'U'].map((t) => (
        <button key={t} className="w-6 h-6 rounded hover:bg-zinc-600 text-sm font-bold text-zinc-400 hover:text-white transition-colors">{t}</button>
      ))}
    </div>
);

// EmojiPickerTrigger
export const EmojiPickerTrigger = () => (
    <button className="w-8 h-8 rounded-full hover:bg-zinc-800 flex items-center justify-center transition-colors group relative">
      <span className="grayscale group-hover:grayscale-0 transition-all">😀</span>
      <div className="absolute bottom-full mb-2 w-32 bg-zinc-800 p-2 rounded grid grid-cols-4 gap-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {['👍','❤️','😂','😮'].map(e=> <span key={e} className="hover:scale-125 cursor-pointer transition-transform text-center">{e}</span>)}
      </div>
    </button>
);

// InputClearButton
export const InputClearButton = () => (
    <div className="relative w-48 group">
      <input type="text" defaultValue="Search term" className="w-full bg-zinc-800 border border-zinc-600 rounded px-2 py-1 pr-8 text-sm outline-none" />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">✕</button>
    </div>
);

// ChipInput
export const ChipInput = () => (
    <div className="flex flex-wrap gap-1 p-1 bg-zinc-800 border border-zinc-600 rounded w-48 min-h-[2rem]">
      <span className="bg-blue-900 text-blue-200 text-xs px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer hover:bg-blue-800">React <span className="opacity-50">×</span></span>
      <span className="w-0.5 h-4 bg-zinc-500 animate-pulse my-auto ml-1" />
    </div>
);

// SignatureSign
export const SignatureSign = () => (
    <div className="w-full h-24 bg-zinc-50 border-b border-zinc-300 relative cursor-crosshair group">
      <span className="absolute bottom-2 left-2 text-xs text-zinc-400">Sign here</span>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path d="M20,50 Q50,20 80,60 T150,40" fill="none" stroke="#000" strokeWidth="2" className="opacity-0 group-hover:opacity-100 group-hover:animate-[draw-path_1s_ease-out_forwards]" strokeDasharray="200" strokeDashoffset="200" />
      </svg>
    </div>
);
