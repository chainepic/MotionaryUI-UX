'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Star, Zap, Shield, User, Bell, Search, Settings } from 'lucide-react';

// 1. Simple Dot Carousel
export const SimpleDotCarousel = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="w-full aspect-video bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-500">
        Slide {step + 1}
      </div>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <button 
            key={i}
            onClick={() => setStep(i)}
            className={`w-2 h-2 rounded-full transition-all ${step === i ? 'bg-white w-6' : 'bg-zinc-600'}`} 
          />
        ))}
      </div>
    </div>
  );
};

// 2. Progress Bar Walkthrough
export const ProgressWalkthrough = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-blue-500" 
          initial={{ width: 0 }}
          animate={{ width: `${(step / 3) * 100}%` }}
        />
      </div>
      <div className="h-32 bg-zinc-800/50 rounded-lg p-4 flex items-center justify-center">
        Step {step} Content
      </div>
      <div className="flex justify-between">
        <button disabled={step===1} onClick={() => setStep(s => s-1)} className="text-sm text-zinc-500 disabled:opacity-30">Back</button>
        <button disabled={step===3} onClick={() => setStep(s => s+1)} className="text-sm text-blue-400 disabled:opacity-30">Next</button>
      </div>
    </div>
  );
};

// 3. Swipe Cards (Simulated)
export const SwipeCards = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute w-4/5 h-full bg-zinc-800 rounded-xl border border-zinc-700 shadow-xl flex items-center justify-center"
        style={{ 
          zIndex: 3-i, 
          scale: 1 - i*0.05, 
          y: i*10 
        }}
        whileHover={i===0 ? { x: 100, rotate: 10, opacity: 0.5 } : {}}
      >
        Card {i}
      </motion.div>
    ))}
  </div>
);

// 4. Feature Spotlight
export const FeatureSpotlight = () => (
  <div className="relative w-full h-40 bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-black/50 z-10" />
    <div className="relative z-20 bg-zinc-800 p-2 rounded border border-white/20">
      <Settings className="w-6 h-6 text-white" />
    </div>
    <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 translate-y-8 bg-blue-600 text-white text-xs px-3 py-1 rounded-full animate-bounce">
      Click Settings
    </div>
    <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-blue-500 animate-ping" />
  </div>
);

// 5. Checklist Gamified
export const ChecklistGamified = () => {
  const [checked, setChecked] = useState([true, false, false]);
  return (
    <div className="space-y-2">
      <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Setup Progress</div>
      {['Create Account', 'Verify Email', 'First Project'].map((task, i) => (
        <div 
          key={i} 
          onClick={() => {
            const newC = [...checked];
            newC[i] = !newC[i];
            setChecked(newC);
          }}
          className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${checked[i] ? 'bg-green-500/10' : 'hover:bg-zinc-800'}`}
        >
          <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${checked[i] ? 'bg-green-500 border-green-500' : 'border-zinc-600'}`}>
            {checked[i] && <Check className="w-3 h-3 text-white" />}
          </div>
          <span className={checked[i] ? 'text-green-400 line-through' : 'text-zinc-300'}>{task}</span>
        </div>
      ))}
    </div>
  );
};

// 6. Tooltip Tour
export const TooltipTour = () => (
  <div className="relative p-4 border border-zinc-700 rounded-lg">
    <button className="px-4 py-2 bg-zinc-800 rounded text-sm">Action</button>
    <div className="absolute top-16 left-4 bg-blue-600 text-white text-xs p-2 rounded w-32 shadow-lg">
      <div className="absolute -top-1 left-4 w-2 h-2 bg-blue-600 rotate-45" />
      Start here to create your first item.
    </div>
  </div>
);

// 7. Welcome Mascot
export const WelcomeMascot = () => (
  <div className="flex gap-4 items-center bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
      👋
    </div>
    <div>
      <h4 className="font-bold text-white">Hi there!</h4>
      <p className="text-xs text-zinc-400">I'm your guide. Let's get you set up in 2 mins.</p>
    </div>
  </div>
);

// 8. Hotspot Pulse
export const HotspotPulse = () => (
  <div className="relative w-full h-32 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center">
    <div className="relative">
      <div className="w-2 h-2 bg-blue-500 rounded-full" />
      <div className="absolute inset-0 w-full h-full bg-blue-500 rounded-full animate-ping opacity-75" />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-24 h-px bg-white/20" />
      <div className="absolute left-28 top-1/2 -translate-y-1/2 text-xs text-white/50">New Feature</div>
    </div>
  </div>
);

// 9. Split Hero Welcome
export const SplitHeroWelcome = () => (
  <div className="flex h-40 rounded-xl overflow-hidden border border-zinc-800">
    <div className="w-1/2 bg-zinc-900 p-4 flex flex-col justify-center">
      <h4 className="font-bold text-white text-lg">Motionary</h4>
      <p className="text-xs text-zinc-500 mt-1">Design system for AI</p>
    </div>
    <div className="w-1/2 bg-blue-600/20 flex items-center justify-center">
      <Zap className="w-8 h-8 text-blue-400" />
    </div>
  </div>
);

// 10. Video Background Intro
export const VideoBgIntro = () => (
  <div className="relative h-40 rounded-xl overflow-hidden flex items-center justify-center group">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 group-hover:opacity-30 transition-opacity" />
    <div className="relative z-10 text-center">
      <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-2">
        <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-white/70">Watch Intro</span>
    </div>
  </div>
);

// 11. Interactive Playground
export const InteractivePlayground = () => (
  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center">
    <p className="text-xs text-zinc-400 mb-3">Try dragging the box</p>
    <div className="h-20 bg-zinc-800 rounded-lg relative overflow-hidden">
      <motion.div 
        drag 
        dragConstraints={{ left: 0, right: 200, top: 0, bottom: 0 }}
        className="w-8 h-8 bg-blue-500 rounded cursor-grab active:cursor-grabbing absolute top-1/2 -translate-y-1/2 left-4" 
      />
    </div>
  </div>
);

// 12. Skeleton Preview
export const SkeletonPreview = () => (
  <div className="space-y-3 opacity-50">
    <div className="flex gap-3">
      <div className="w-10 h-10 bg-zinc-700 rounded-full" />
      <div className="flex-1 space-y-2 py-1">
        <div className="h-2 bg-zinc-700 rounded w-1/2" />
        <div className="h-2 bg-zinc-700 rounded w-3/4" />
      </div>
    </div>
    <div className="h-20 bg-zinc-700/30 rounded-lg flex items-center justify-center text-xs">
      Content loads here...
    </div>
  </div>
);

// 13. Role Selection
export const RoleSelection = () => (
  <div className="grid grid-cols-2 gap-2">
    {['Designer', 'Developer'].map(role => (
      <button key={role} className="p-3 rounded-lg border border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all text-center">
        <div className="w-8 h-8 bg-zinc-800 rounded-full mx-auto mb-2 flex items-center justify-center">
          {role === 'Designer' ? <Zap className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
        </div>
        <span className="text-xs font-medium text-zinc-300">{role}</span>
      </button>
    ))}
  </div>
);

// 14. Linear Step Guide
export const LinearStepGuide = () => (
  <div className="flex justify-between items-center text-xs text-zinc-500">
    {['Sign Up', 'Profile', 'Invite'].map((step, i) => (
      <div key={step} className="flex flex-col items-center gap-1">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${i===0 ? 'bg-blue-600 border-blue-600 text-white' : 'border-zinc-700'}`}>
          {i+1}
        </div>
        <span>{step}</span>
      </div>
    ))}
  </div>
);

// 15. Notification Permission
export const NotificationPermission = () => (
  <div className="bg-zinc-800 p-4 rounded-xl flex items-center gap-4">
    <div className="w-10 h-10 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center">
      <Bell className="w-5 h-5" />
    </div>
    <div className="flex-1">
      <h5 className="text-sm font-bold text-white">Enable Notifications</h5>
      <p className="text-[10px] text-zinc-400">Stay updated on new features.</p>
    </div>
    <button className="text-xs bg-white text-black px-3 py-1.5 rounded font-bold">Allow</button>
  </div>
);

// 16. Confetti Success
export const ConfettiSuccess = () => (
  <div className="text-center py-6">
    <div className="inline-flex w-12 h-12 bg-green-500 rounded-full items-center justify-center mb-2 animate-bounce">
      <Check className="w-6 h-6 text-white" />
    </div>
    <h4 className="font-bold text-white">All Done!</h4>
    <p className="text-xs text-zinc-500">Welcome to the platform.</p>
  </div>
);

// 17. Theme Picker
export const ThemePicker = () => (
  <div className="flex gap-2 justify-center">
    {['#000', '#1e1e1e', '#fff'].map((color, i) => (
      <button 
        key={i}
        className="w-8 h-8 rounded-full border border-zinc-600 relative"
        style={{ backgroundColor: color }}
      >
        {i===0 && <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
      </button>
    ))}
  </div>
);

// 18. Vertical Timeline Setup
export const VerticalTimelineSetup = () => (
  <div className="pl-2 border-l border-zinc-800 space-y-4">
    {['Import Data', 'Configure', 'Launch'].map((step, i) => (
      <div key={step} className="relative pl-4">
        <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${i===0 ? 'bg-blue-500' : 'bg-zinc-800 border border-zinc-600'}`} />
        <span className={`text-sm ${i===0 ? 'text-white' : 'text-zinc-500'}`}>{step}</span>
      </div>
    ))}
  </div>
);

// 19. Floating Start Button
export const FloatingStartBtn = () => (
  <div className="relative h-20 flex items-center justify-center">
    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
      Get Started 🚀
    </button>
  </div>
);

// 20. App Feature Grid
export const AppFeatureGrid = () => (
  <div className="grid grid-cols-2 gap-2">
    {[1, 2, 3, 4].map(i => (
      <div key={i} className="aspect-square bg-zinc-800/50 rounded flex items-center justify-center hover:bg-zinc-800 transition-colors">
        <Star className="w-4 h-4 text-zinc-600" />
      </div>
    ))}
  </div>
);

