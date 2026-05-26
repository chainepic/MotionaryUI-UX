'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Ban, SearchX, ShoppingCart, WifiOff, FileX, Mail, BellOff, FolderOpen, CalendarX, UserX, Inbox, Slash, Trash2, ShieldAlert, Lock } from 'lucide-react';

// 1. Basic No Data
export const NoDataSimple = () => (
  <div className="flex flex-col items-center justify-center h-48 text-zinc-500">
    <Ban className="w-12 h-12 mb-4 opacity-50" />
    <p className="text-sm font-medium">No Data Available</p>
  </div>
);

// 2. Search Not Found
export const SearchNotFound = () => (
  <div className="flex flex-col items-center justify-center h-48 text-center p-6 bg-zinc-900/50 rounded-xl border border-dashed border-zinc-800">
    <SearchX className="w-12 h-12 text-zinc-600 mb-3" />
    <h4 className="text-white font-bold mb-1">No Results Found</h4>
    <p className="text-zinc-500 text-xs">Try adjusting your search terms.</p>
  </div>
);

// 3. Empty Cart
export const EmptyCart = () => (
  <div className="flex flex-col items-center justify-center h-48">
    <div className="bg-zinc-800 p-4 rounded-full mb-4">
      <ShoppingCart className="w-8 h-8 text-zinc-400" />
    </div>
    <h4 className="text-white font-bold mb-2">Your cart is empty</h4>
    <button className="text-primary text-xs hover:underline">Start Shopping</button>
  </div>
);

// 4. Offline State
export const OfflineState = () => (
  <div className="flex flex-col items-center justify-center h-48 text-center">
    <WifiOff className="w-12 h-12 text-red-500/50 mb-4 animate-pulse" />
    <h4 className="text-white font-bold">No Connection</h4>
    <p className="text-zinc-500 text-xs mt-1">Please check your internet.</p>
    <button className="mt-4 px-4 py-1 bg-zinc-800 text-white text-xs rounded hover:bg-zinc-700">Retry</button>
  </div>
);

// 5. File Not Found (404)
export const FileNotFound = () => (
  <div className="flex flex-col items-center justify-center h-48">
    <FileX className="w-16 h-16 text-zinc-700 mb-2" />
    <h1 className="text-4xl font-black text-zinc-800">404</h1>
    <p className="text-zinc-500 text-sm">File not found</p>
  </div>
);

// 6. No Messages
export const NoMessages = () => (
  <div className="flex flex-col items-center justify-center h-48">
    <div className="relative">
      <Mail className="w-12 h-12 text-zinc-600" />
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-600">
        <span className="text-[10px] text-zinc-500">0</span>
      </div>
    </div>
    <p className="text-zinc-400 text-sm mt-4">No new messages</p>
  </div>
);

// 7. No Notifications
export const NoNotifications = () => (
  <div className="flex flex-col items-center justify-center h-48 bg-zinc-900 rounded-xl">
    <BellOff className="w-10 h-10 text-zinc-500 mb-3" />
    <p className="text-zinc-300 font-medium">All caught up!</p>
    <p className="text-zinc-600 text-xs">No new notifications.</p>
  </div>
);

// 8. Empty Folder
export const EmptyFolder = () => (
  <div className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-zinc-800 rounded-xl bg-zinc-900/30">
    <FolderOpen className="w-12 h-12 text-zinc-700 mb-2" />
    <p className="text-zinc-500 text-sm">This folder is empty</p>
    <button className="mt-3 text-blue-500 text-xs font-bold">+ Upload File</button>
  </div>
);

// 9. No Events
export const NoEvents = () => (
  <div className="flex flex-col items-center justify-center h-48">
    <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-4 rotate-3">
      <CalendarX className="w-8 h-8 text-zinc-400" />
    </div>
    <h4 className="text-white font-bold">No Events</h4>
    <p className="text-zinc-500 text-xs">Your schedule is clear.</p>
  </div>
);

// 10. No Users
export const NoUsers = () => (
  <div className="flex flex-col items-center justify-center h-48 text-center">
    <div className="flex -space-x-4 mb-4 opacity-50 grayscale">
      {[1,2,3].map(i => (
        <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-900" />
      ))}
    </div>
    <p className="text-zinc-400 text-sm">No members yet</p>
    <button className="mt-2 bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-zinc-200">Invite Team</button>
  </div>
);

// 11. Empty Inbox (Zero State)
export const EmptyInbox = () => (
  <div className="flex flex-col items-center justify-center h-48 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl">
    <Inbox className="w-12 h-12 text-indigo-500/50 mb-4" />
    <h4 className="text-white font-bold">Inbox Zero</h4>
    <p className="text-zinc-500 text-xs">You've handled everything!</p>
  </div>
);

// 12. Broken Link
export const BrokenLink = () => (
  <div className="flex flex-col items-center justify-center h-48">
    <Slash className="w-12 h-12 text-zinc-600 mb-2" />
    <p className="text-zinc-400 font-mono">BROKEN_LINK</p>
  </div>
);

// 13. Trash Empty
export const TrashEmpty = () => (
  <div className="flex flex-col items-center justify-center h-48">
    <Trash2 className="w-12 h-12 text-zinc-700 mb-3" />
    <p className="text-zinc-500 text-sm">Trash is empty</p>
  </div>
);

// 14. Access Denied
export const AccessDenied = () => (
  <div className="flex flex-col items-center justify-center h-48 bg-red-900/10 border border-red-900/30 rounded-xl w-full">
    <ShieldAlert className="w-12 h-12 text-red-500 mb-2" />
    <h4 className="text-red-500 font-bold">Access Denied</h4>
    <p className="text-red-400/60 text-xs">You don't have permission.</p>
  </div>
);

// 15. Locked Content
export const LockedContent = () => (
  <div className="flex flex-col items-center justify-center h-48 bg-zinc-950 rounded-xl border border-zinc-800 relative overflow-hidden group">
    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
        <div className="p-3 bg-zinc-900 rounded-full border border-zinc-700 mb-3 group-hover:scale-110 transition-transform">
            <Lock className="w-6 h-6 text-white" />
        </div>
        <p className="text-white font-bold text-sm">Premium Content</p>
        <button className="mt-2 text-xs text-primary hover:underline">Upgrade to unlock</button>
    </div>
    {/* Background content simulation */}
    <div className="w-full h-full p-4 space-y-2 opacity-20">
        <div className="h-4 bg-zinc-700 rounded w-3/4" />
        <div className="h-4 bg-zinc-700 rounded w-full" />
        <div className="h-4 bg-zinc-700 rounded w-5/6" />
    </div>
  </div>
);

