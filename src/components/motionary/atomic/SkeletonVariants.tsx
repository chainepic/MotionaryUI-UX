'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Base Shimmer Effect
const Shimmer = () => (
  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
);

const SkeletonBox = ({ className = "" }: { className?: string }) => (
  <div className={`bg-zinc-800 relative overflow-hidden ${className}`}>
    <Shimmer />
  </div>
);

// 1. Text Lines
export const TextLines = () => (
  <div className="space-y-2 w-full p-4">
    <SkeletonBox className="h-4 w-3/4 rounded" />
    <SkeletonBox className="h-4 w-full rounded" />
    <SkeletonBox className="h-4 w-5/6 rounded" />
  </div>
);

// 2. Avatar Profile
export const AvatarProfile = () => (
  <div className="flex items-center gap-4 p-4">
    <SkeletonBox className="w-12 h-12 rounded-full shrink-0" />
    <div className="space-y-2 flex-1">
      <SkeletonBox className="h-4 w-1/3 rounded" />
      <SkeletonBox className="h-3 w-1/4 rounded" />
    </div>
  </div>
);

// 3. Card Vertical
export const CardVertical = () => (
  <div className="p-4 w-48 border border-zinc-800 rounded-xl bg-zinc-900/50">
    <SkeletonBox className="h-32 w-full rounded-lg mb-4" />
    <SkeletonBox className="h-4 w-3/4 rounded mb-2" />
    <SkeletonBox className="h-3 w-1/2 rounded" />
  </div>
);

// 4. Card Horizontal
export const CardHorizontal = () => (
  <div className="flex gap-4 p-4 border border-zinc-800 rounded-xl bg-zinc-900/50">
    <SkeletonBox className="w-24 h-24 rounded-lg shrink-0" />
    <div className="flex-1 space-y-2 py-2">
      <SkeletonBox className="h-4 w-3/4 rounded" />
      <SkeletonBox className="h-3 w-full rounded" />
      <SkeletonBox className="h-3 w-5/6 rounded" />
    </div>
  </div>
);

// 5. Table Row
export const TableRow = () => (
  <div className="flex items-center gap-4 p-4 border-b border-zinc-800">
    <SkeletonBox className="w-8 h-8 rounded shrink-0" />
    <SkeletonBox className="h-4 w-1/4 rounded" />
    <SkeletonBox className="h-4 w-1/4 rounded" />
    <SkeletonBox className="h-4 w-1/4 rounded ml-auto" />
  </div>
);

// 6. Image Gallery
export const ImageGallery = () => (
  <div className="grid grid-cols-3 gap-2 p-2">
    <SkeletonBox className="aspect-square rounded" />
    <SkeletonBox className="aspect-square rounded" />
    <SkeletonBox className="aspect-square rounded" />
    <SkeletonBox className="aspect-square rounded" />
    <SkeletonBox className="aspect-square rounded" />
    <SkeletonBox className="aspect-square rounded" />
  </div>
);

// 7. Dashboard Stats
export const DashboardStats = () => (
  <div className="grid grid-cols-2 gap-4 p-4">
    <div className="p-3 bg-zinc-800/50 rounded border border-zinc-800">
      <SkeletonBox className="h-3 w-1/2 rounded mb-2" />
      <SkeletonBox className="h-6 w-3/4 rounded" />
    </div>
    <div className="p-3 bg-zinc-800/50 rounded border border-zinc-800">
      <SkeletonBox className="h-3 w-1/2 rounded mb-2" />
      <SkeletonBox className="h-6 w-3/4 rounded" />
    </div>
  </div>
);

// 8. Chat Message
export const ChatMessage = () => (
  <div className="p-4 space-y-4">
    <div className="flex gap-3">
      <SkeletonBox className="w-8 h-8 rounded-full" />
      <SkeletonBox className="h-10 w-2/3 rounded-r-lg rounded-bl-lg" />
    </div>
    <div className="flex gap-3 flex-row-reverse">
      <SkeletonBox className="w-8 h-8 rounded-full" />
      <SkeletonBox className="h-10 w-2/3 rounded-l-lg rounded-br-lg" />
    </div>
  </div>
);

// 9. Video Player
export const VideoPlayer = () => (
  <div className="p-4">
    <SkeletonBox className="aspect-video w-full rounded-lg mb-4 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-white/10 rounded-full" />
      </div>
    </SkeletonBox>
    <SkeletonBox className="h-4 w-2/3 rounded mb-2" />
    <SkeletonBox className="h-3 w-1/3 rounded" />
  </div>
);

// 10. Comment Thread
export const CommentThread = () => (
  <div className="p-4 space-y-4">
    <div className="flex gap-3">
      <SkeletonBox className="w-8 h-8 rounded-full" />
      <div className="flex-1 space-y-2">
        <SkeletonBox className="h-3 w-1/4 rounded" />
        <SkeletonBox className="h-12 w-full rounded" />
      </div>
    </div>
  </div>
);

// 11. Product Grid
export const ProductGrid = () => (
  <div className="grid grid-cols-2 gap-3 p-3">
    {[1,2].map(i => (
      <div key={i} className="space-y-2">
        <SkeletonBox className="aspect-[3/4] rounded-lg" />
        <SkeletonBox className="h-3 w-full rounded" />
        <SkeletonBox className="h-3 w-1/2 rounded" />
      </div>
    ))}
  </div>
);

// 12. Circle Graph
export const CircleGraph = () => (
  <div className="flex items-center justify-center p-4">
    <div className="relative w-24 h-24">
      <SkeletonBox className="w-full h-full rounded-full" />
      <div className="absolute inset-2 bg-zinc-900 rounded-full" />
    </div>
  </div>
);

// 13. Bar Chart
export const BarChart = () => (
  <div className="flex items-end gap-2 h-32 p-4 justify-center">
    <SkeletonBox className="w-4 h-1/3 rounded-t" />
    <SkeletonBox className="w-4 h-2/3 rounded-t" />
    <SkeletonBox className="w-4 h-full rounded-t" />
    <SkeletonBox className="w-4 h-1/2 rounded-t" />
    <SkeletonBox className="w-4 h-3/4 rounded-t" />
  </div>
);

// 14. Activity Feed
export const ActivityFeed = () => (
  <div className="p-4 space-y-4">
    {[1,2,3].map(i => (
      <div key={i} className="flex gap-3">
        <div className="flex flex-col items-center gap-1">
          <SkeletonBox className="w-3 h-3 rounded-full" />
          {i!==3 && <SkeletonBox className="w-0.5 h-full" />}
        </div>
        <div className="flex-1 pb-4">
          <SkeletonBox className="h-3 w-3/4 rounded mb-1" />
          <SkeletonBox className="h-2 w-1/4 rounded" />
        </div>
      </div>
    ))}
  </div>
);

// 15. Search Results
export const SearchResults = () => (
  <div className="p-4 space-y-3">
    {[1,2,3].map(i => (
      <div key={i} className="flex gap-3 items-center">
        <SkeletonBox className="w-10 h-10 rounded shrink-0" />
        <div className="flex-1 space-y-1">
          <SkeletonBox className="h-3 w-1/2 rounded" />
          <SkeletonBox className="h-2 w-full rounded" />
        </div>
      </div>
    ))}
  </div>
);

// 16. Form Inputs
export const FormInputs = () => (
  <div className="p-4 space-y-4">
    <div className="space-y-1">
      <SkeletonBox className="h-3 w-16 rounded" />
      <SkeletonBox className="h-10 w-full rounded" />
    </div>
    <div className="space-y-1">
      <SkeletonBox className="h-3 w-16 rounded" />
      <SkeletonBox className="h-10 w-full rounded" />
    </div>
  </div>
);

// 17. Notifications
export const Notifications = () => (
  <div className="p-4 space-y-3">
    {[1,2].map(i => (
      <div key={i} className="p-2 border border-zinc-800 rounded flex gap-3">
        <SkeletonBox className="w-2 h-2 rounded-full mt-1.5 shrink-0" />
        <div className="flex-1 space-y-1">
          <SkeletonBox className="h-3 w-full rounded" />
          <SkeletonBox className="h-2 w-1/2 rounded" />
        </div>
      </div>
    ))}
  </div>
);

// 18. Calendar Days
export const CalendarDays = () => (
  <div className="p-4">
    <div className="grid grid-cols-7 gap-2">
      {Array.from({length: 14}).map((_, i) => (
        <SkeletonBox key={i} className="aspect-square rounded-sm" />
      ))}
    </div>
  </div>
);

// 19. File List
export const FileList = () => (
  <div className="p-4 grid grid-cols-3 gap-4">
    {[1,2,3].map(i => (
      <div key={i} className="flex flex-col items-center gap-2">
        <SkeletonBox className="w-12 h-16 rounded" />
        <SkeletonBox className="h-2 w-12 rounded" />
      </div>
    ))}
  </div>
);

// 20. Code Block
export const CodeBlock = () => (
  <div className="p-4 bg-zinc-900 rounded-lg m-2">
    <div className="space-y-2 font-mono">
      <SkeletonBox className="h-3 w-1/3 rounded" />
      <div className="pl-4 space-y-2">
        <SkeletonBox className="h-3 w-2/3 rounded" />
        <SkeletonBox className="h-3 w-1/2 rounded" />
      </div>
      <SkeletonBox className="h-3 w-1/4 rounded" />
    </div>
  </div>
);

