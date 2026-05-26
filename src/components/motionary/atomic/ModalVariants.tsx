'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, AlertTriangle, Info, Trash2, Save, Download, Bell, Lock, Share2, Maximize2, Search } from 'lucide-react';

// Helper for modal overlay
const ModalBase = ({ children, onClose }: { children: React.ReactNode, onClose?: () => void }) => (
  <div className="absolute inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  </div>
);

// 1. Center Fade Modal
export const CenterFadeModal = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="bg-zinc-800 p-4 rounded-lg shadow-xl border border-zinc-700 w-full max-w-xs text-center">
        <h4 className="font-bold text-white">Welcome Back</h4>
        <p className="text-xs text-zinc-400 mt-1 mb-3">Good to see you again.</p>
        <button className="w-full py-1.5 bg-blue-600 rounded text-xs text-white">Continue</button>
      </div>
    </div>
  </div>
);

// 2. Bottom Sheet
export const BottomSheet = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 group">
    <div className="absolute bottom-0 left-0 right-0 bg-zinc-800 p-4 rounded-t-xl transform translate-y-[80%] group-hover:translate-y-0 transition-transform duration-300 border-t border-zinc-700">
      <div className="w-12 h-1 bg-zinc-600 rounded-full mx-auto mb-4" />
      <div className="space-y-2">
        <div className="h-8 bg-zinc-700/50 rounded" />
        <div className="h-8 bg-zinc-700/50 rounded" />
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs text-zinc-500 pb-8">
      Hover to open sheet
    </div>
  </div>
);

// 3. Side Drawer Right
export const SideDrawerRight = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 group">
    <div className="absolute top-0 right-0 bottom-0 w-32 bg-zinc-800 border-l border-zinc-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 p-4">
      <h5 className="text-sm font-bold text-white mb-2">Filters</h5>
      <div className="space-y-2">
        <div className="h-4 bg-zinc-700 rounded w-full" />
        <div className="h-4 bg-zinc-700 rounded w-3/4" />
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs text-zinc-500 pr-8">
      Hover right edge
    </div>
  </div>
);

// 4. Alert Error Shake
export const AlertErrorShake = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center">
    <motion.div 
      whileHover={{ x: [-5, 5, -5, 5, 0] }}
      className="bg-red-500/10 border border-red-500/50 p-4 rounded-lg flex items-center gap-3 max-w-xs"
    >
      <AlertTriangle className="w-5 h-5 text-red-500" />
      <div>
        <h5 className="text-xs font-bold text-red-400">Connection Failed</h5>
        <p className="text-[10px] text-red-300/70">Please check your internet.</p>
      </div>
    </motion.div>
  </div>
);

// 5. Success Toast
export const SuccessToast = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl overflow-hidden">
    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded shadow-lg flex items-center gap-2 text-xs animate-[slide-left_0.3s_ease-out]">
      <Check className="w-3 h-3" /> Saved successfully
    </div>
  </div>
);

// 6. Confirm Dialog
export const ConfirmDialog = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center">
    <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 w-48 text-center">
      <Trash2 className="w-8 h-8 text-red-500 mx-auto mb-2" />
      <h5 className="text-sm font-bold text-white mb-3">Delete Item?</h5>
      <div className="flex gap-2 justify-center">
        <button className="bg-zinc-700 text-xs px-3 py-1 rounded">Cancel</button>
        <button className="bg-red-600 text-xs px-3 py-1 rounded text-white">Delete</button>
      </div>
    </div>
  </div>
);

// 7. Fullscreen Takeover
export const FullscreenTakeover = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl overflow-hidden group">
    <div className="absolute inset-0 bg-blue-600 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
      <Maximize2 className="w-8 h-8 text-white mb-2" />
      <h4 className="text-white font-bold">Focus Mode</h4>
    </div>
    <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
      Content Content Content
    </div>
  </div>
);

// 8. Cookie Consent Banner
export const CookieConsent = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl overflow-hidden">
    <div className="absolute bottom-0 left-0 right-0 bg-zinc-800 p-3 border-t border-zinc-700 flex items-center justify-between gap-4">
      <p className="text-[10px] text-zinc-400">We use cookies to improve your experience.</p>
      <button className="text-[10px] bg-white text-black px-2 py-1 rounded font-bold whitespace-nowrap">Accept</button>
    </div>
  </div>
);

// 9. Search Spotlight
export const SearchSpotlight = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center">
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg w-56 flex items-center p-2 gap-2 shadow-2xl">
      <Search className="w-4 h-4 text-zinc-500" />
      <span className="text-xs text-zinc-500">Search commands...</span>
      <span className="ml-auto text-[10px] bg-zinc-700 px-1 rounded text-zinc-400">⌘K</span>
    </div>
  </div>
);

// 10. Image Lightbox
export const ImageLightbox = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center group cursor-zoom-in">
    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-150 transition-transform duration-300 z-10" />
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

// 11. Context Menu
export const ContextMenu = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center group cursor-context-menu">
    <span className="text-xs text-zinc-500">Right click area</span>
    <div className="absolute top-1/2 left-1/2 bg-zinc-800 border border-zinc-700 shadow-xl rounded-lg w-32 py-1 hidden group-hover:block">
      <div className="px-3 py-1.5 hover:bg-zinc-700 text-xs text-zinc-300 flex items-center gap-2"><Save className="w-3 h-3" /> Save</div>
      <div className="px-3 py-1.5 hover:bg-zinc-700 text-xs text-zinc-300 flex items-center gap-2"><Share2 className="w-3 h-3" /> Share</div>
      <div className="h-px bg-zinc-700 my-1" />
      <div className="px-3 py-1.5 hover:bg-zinc-700 text-xs text-red-400 flex items-center gap-2"><Trash2 className="w-3 h-3" /> Delete</div>
    </div>
  </div>
);

// 12. Notification Dropdown
export const NotificationDropdown = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex justify-center pt-4">
    <div className="relative">
      <Bell className="w-5 h-5 text-zinc-400" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl p-2">
        <div className="text-[10px] font-bold text-zinc-500 mb-2 uppercase">Notifications</div>
        <div className="flex gap-2 items-start mb-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 shrink-0" />
          <p className="text-xs text-zinc-300">New comment on your post</p>
        </div>
      </div>
    </div>
  </div>
);

// 13. Login Modal
export const LoginModal = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center">
    <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 w-48 space-y-2">
      <input type="text" placeholder="Email" className="w-full bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-xs" />
      <input type="password" placeholder="Password" className="w-full bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-xs" />
      <button className="w-full bg-blue-600 text-white rounded py-1 text-xs">Login</button>
    </div>
  </div>
);

// 14. Tooltip Hover
export const TooltipHover = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center">
    <div className="group relative">
      <Info className="w-5 h-5 text-zinc-400 cursor-help" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Useful information here
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black" />
      </div>
    </div>
  </div>
);

// 15. Download Progress
export const DownloadProgress = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center">
    <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 w-48">
      <div className="flex justify-between text-xs text-zinc-400 mb-1">
        <span>Downloading...</span>
        <span>45%</span>
      </div>
      <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 w-[45%]" />
      </div>
    </div>
  </div>
);

// 16. Share Sheet
export const ShareSheet = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center">
    <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 w-48 text-center">
      <h5 className="text-xs font-bold text-white mb-3">Share via</h5>
      <div className="flex justify-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white"><Share2 className="w-4 h-4" /></div>
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white"><Download className="w-4 h-4" /></div>
        <div className="w-8 h-8 rounded-full bg-zinc-600 flex items-center justify-center text-white"><Lock className="w-4 h-4" /></div>
      </div>
    </div>
  </div>
);

// 17. Lock Screen Overlay
export const LockScreenOverlay = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
      <Lock className="w-6 h-6 text-zinc-400 mb-2" />
      <span className="text-xs text-zinc-400">Content Locked</span>
    </div>
    <div className="text-zinc-600">Secret Content</div>
  </div>
);

// 18. Rating Popup
export const RatingPopup = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center">
    <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 text-center">
      <p className="text-xs text-zinc-300 mb-2">Enjoying the app?</p>
      <div className="flex gap-1 justify-center text-yellow-500 text-sm">
        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-zinc-600">★</span>
      </div>
    </div>
  </div>
);

// 19. Language Picker Modal
export const LanguagePickerModal = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center">
    <div className="bg-zinc-800 rounded-lg border border-zinc-700 w-40 overflow-hidden">
      {['English', 'Spanish', 'French'].map((lang, i) => (
        <div key={lang} className={`px-3 py-2 text-xs ${i===0 ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:bg-zinc-700'} cursor-pointer flex justify-between`}>
          {lang}
          {i===0 && <Check className="w-3 h-3" />}
        </div>
      ))}
    </div>
  </div>
);

// 20. Exit Intent (Simulated)
export const ExitIntent = () => (
  <div className="relative h-40 bg-zinc-900 rounded-xl flex items-center justify-center group overflow-hidden">
    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h5 className="text-sm font-bold text-white mb-1">Wait!</h5>
      <p className="text-[10px] text-zinc-300 mb-2">Don't leave without saving.</p>
      <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded">Save Changes</button>
    </div>
    <div className="text-zinc-600 text-xs">Hover to simulate exit</div>
  </div>
);

