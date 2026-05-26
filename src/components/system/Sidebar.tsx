'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Atom, MousePointer2, Layers, LayoutGrid, Type, Navigation, Image as ImageIcon, 
  Database, MessageSquare, Share2, Keyboard, Loader2, ShoppingCart, Gamepad2, Play, 
  Smartphone, Move, MousePointerClick, Palette, Sparkles, LayoutTemplate, Cuboid, 
  LayoutForm, Ban, LayoutDashboard, Compass, Rocket, AppWindow, Bone, Wand2, ScrollText
} from 'lucide-react';

const CATEGORIES = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Nav Patterns', href: '/nav-patterns', icon: Compass },
  { label: 'Form Patterns', href: '/forms', icon: ScrollText },
  { label: 'Layout Patterns', href: '/layouts', icon: LayoutTemplate },
  { label: 'Building Blocks', href: '/blocks', icon: Cuboid },
  { label: 'Onboarding', href: '/onboarding', icon: Rocket },
  { label: 'Modals & Dialogs', href: '/modals', icon: AppWindow },
  { label: 'Skeletons', href: '/skeletons', icon: Bone },
  { label: 'Empty States', href: '/empty', icon: Ban },
  { label: 'Color Schemes', href: '/colors', icon: Palette },
  { label: 'Particle Effects', href: '/particles', icon: Sparkles },
  { label: 'Buttons', href: '/buttons', icon: MousePointer2 },
  { label: 'Cards', href: '/cards', icon: LayoutGrid },
  { label: 'Typography', href: '/typography', icon: Type },
  { label: 'Navigation', href: '/navigation', icon: Navigation },
  { label: 'Backgrounds', href: '/backgrounds', icon: Layers },
  { label: 'Data Viz', href: '/data', icon: Database },
  { label: 'Feedback', href: '/feedback', icon: MessageSquare },
  { label: 'Social', href: '/social', icon: Share2 },
  { label: 'Inputs', href: '/inputs', icon: Keyboard },
  { label: 'Loaders', href: '/loaders', icon: Loader2 },
  { label: 'Images', href: '/images', icon: ImageIcon },
  { label: 'Ecommerce', href: '/ecom', icon: ShoppingCart },
  { label: 'Gamification', href: '/game', icon: Gamepad2 },
  { label: 'Media', href: '/media', icon: Play },
  { label: 'Device UI', href: '/device', icon: Smartphone },
  { label: 'Transitions', href: '/transitions', icon: Move },
  { label: 'Micro-Interactions', href: '/micro', icon: MousePointerClick },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-surface-50 border border-white/10 rounded-lg text-white"
        onClick={() => {
          const sidebar = document.getElementById('mobile-sidebar');
          if (sidebar) sidebar.classList.toggle('-translate-x-full');
        }}
      >
        <Layers className="w-5 h-5" />
      </button>

      <aside
        id="mobile-sidebar"
        className="w-64 h-screen fixed left-0 top-0 bg-surface-50 border-r border-white/10 flex flex-col p-6 overflow-y-auto hide-scrollbar z-50 transition-transform duration-300 -translate-x-full lg:translate-x-0"
      >
        <Link href="/" className="flex items-center gap-3 mb-6 group">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Atom className="w-5 h-5 text-black animate-spin-slow" />
          </div>
          <h1 className="text-2xl font-bold tracking-tighter text-glow">
            Motionary
          </h1>
        </Link>

        {/* Wizard CTA - Redesigned to be subtle */}
        <Link href="/wizard" className="mb-8 block">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all group">
            <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:scale-105 transition-all">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-white group-hover:text-primary transition-colors">Design Wizard</div>
              <div className="text-[10px] text-white/40">Prompt Builder</div>
            </div>
          </div>
        </Link>

      <div className="space-y-8 flex-1">
          {/* Categories */}
          <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/50 text-sm uppercase tracking-widest font-medium">
              <Layers className="w-4 h-4" />
              <span>Categories</span>
              </div>
            <div className="flex flex-col gap-1">
              {CATEGORIES.map((cat) => {
                const isActive = pathname === cat.href;
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-xs transition-all duration-300 flex items-center gap-3",
                      isActive 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "text-white/70 hover:bg-white/5 hover:text-white border border-transparent"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.label}
                  </Link>
          );
        })}
            </div>
          </div>
      </div>

        <div className="pt-6 border-t border-white/10 text-xs text-white/30 text-center">
          © 2025 EasyMake.AI
      </div>
    </aside>
    </>
  );
};
