'use client';

import React from 'react';
import Link from 'next/link';
import { ParticleCanvas } from "@/components/motionary/advanced/ParticleCanvas";
import { useBubbleSound } from "@/hooks/useBubbleSound";
import { Footer } from "@/components/system/Footer";
import { 
  MousePointer2, LayoutGrid, Type, Navigation, Layers, Database, 
  MessageSquare, Share2, Keyboard, Loader2, Image as ImageIcon, 
  ShoppingCart, Gamepad2, Play, Smartphone, Move, MousePointerClick, 
  ArrowRight, Palette, Sparkles, LayoutTemplate, Cuboid, ScrollText, Ban,
  LayoutDashboard, Compass, Rocket, AppWindow, Bone, Wand2
} from 'lucide-react';

const CATEGORIES = [
  { label: 'Onboarding', href: '/onboarding', icon: Rocket, count: '20+', desc: 'Carousels, tours, checklists' },
  { label: 'Modals & Dialogs', href: '/modals', icon: AppWindow, count: '20+', desc: 'Popups, alerts, drawers' },
  { label: 'Skeletons', href: '/skeletons', icon: Bone, count: '20+', desc: 'Loading placeholders' },
  { label: 'Dashboard Widgets', href: '/dashboard', icon: LayoutDashboard, count: '4+', desc: 'Stats, charts, activity feeds' },
  { label: 'Navigation Patterns', href: '/nav-patterns', icon: Compass, count: '3+', desc: 'Mega menus, sidebars, tabs' },
  { label: 'Layout Patterns', href: '/layouts', icon: LayoutTemplate, count: '3+', desc: 'Page structure templates' },
  { label: 'Building Blocks', href: '/blocks', icon: Cuboid, count: '4+', desc: 'Hero, Features, Pricing sections' },
  { label: 'Form Patterns', href: '/forms', icon: ScrollText, count: '3+', desc: 'Login, Multi-step, Newsletter' },
  { label: 'Empty States', href: '/empty', icon: Ban, count: '3+', desc: 'No data, 404, Success screens' },
  { label: 'Color Schemes', href: '/colors', icon: Palette, count: '100+', desc: 'Curated palettes for UI/UX' },
  { label: 'Particle Effects', href: '/particles', icon: Sparkles, count: '10+', desc: 'Canvas & CSS visual effects' },
  { label: 'Buttons', href: '/buttons', icon: MousePointer2, count: '50+', desc: 'Triggers, styles, and interactions' },
  { label: 'Cards', href: '/cards', icon: LayoutGrid, count: '50+', desc: 'Layouts, hovers, and reveals' },
  { label: 'Typography', href: '/typography', icon: Type, count: '50+', desc: 'Text effects and animations' },
  { label: 'Navigation', href: '/navigation', icon: Navigation, count: '40+', desc: 'Menus, tabs, and breadcrumbs' },
  { label: 'Backgrounds', href: '/backgrounds', icon: Layers, count: '40+', desc: 'Animated backgrounds and patterns' },
  { label: 'Data Viz', href: '/data', icon: Database, count: '30+', desc: 'Charts, graphs, and stats' },
  { label: 'Feedback', href: '/feedback', icon: MessageSquare, count: '30+', desc: 'Toasts, alerts, and success states' },
  { label: 'Social', href: '/social', icon: Share2, count: '30+', desc: 'Share, like, and comment UIs' },
  { label: 'Inputs', href: '/inputs', icon: Keyboard, count: '30+', desc: 'Forms, fields, and toggles' },
  { label: 'Loaders', href: '/loaders', icon: Loader2, count: '30+', desc: 'Spinners, bars, and skeletons' },
  { label: 'Images', href: '/images', icon: ImageIcon, count: '30+', desc: 'Galleries, sliders, and effects' },
  { label: 'Ecommerce', href: '/ecom', icon: ShoppingCart, count: '30+', desc: 'Carts, products, and checkout' },
  { label: 'Gamification', href: '/game', icon: Gamepad2, count: '30+', desc: 'XP bars, badges, and rewards' },
  { label: 'Media', href: '/media', icon: Play, count: '30+', desc: 'Audio/Video players and controls' },
  { label: 'Device UI', href: '/device', icon: Smartphone, count: '30+', desc: 'Mockups and OS interactions' },
  { label: 'Transitions', href: '/transitions', icon: Move, count: '30+', desc: 'Page and element transitions' },
  { label: 'Micro-Interactions', href: '/micro', icon: MousePointerClick, count: '30+', desc: 'Small delightful details' },
];

export default function Home() {
  const playPop = useBubbleSound();
  
  return (
    <div className="min-h-screen bg-background" onMouseEnter={playPop}>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-black group shadow-2xl shadow-primary/5 mx-6 mt-6 md:mx-12 md:mt-12">
         <div className="absolute inset-0 z-0">
            <ParticleCanvas />
         </div>
         <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center p-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-white/70">SYSTEM ONLINE • 1000+ VARIANTS</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 mix-blend-overlay">
                MOTIONARY
            </h1>
            <p className="max-w-xl text-white/60 font-mono text-xs md:text-sm leading-relaxed mb-8">
                THE ULTIMATE INTERACTIVE ENCYCLOPEDIA OF MOTION DESIGN
            </p>
            <Link 
              href="/wizard" 
              className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform shadow-lg shadow-white/10 group/btn"
            >
              <Wand2 className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              Start Design Wizard
            </Link>
         </div>
      </section>

      {/* CATEGORY GRID */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link 
                key={cat.href} 
                href={cat.href}
                className="group relative p-6 bg-surface-50 border border-white/5 rounded-2xl hover:border-primary/50 hover:bg-surface-100 transition-all duration-300 flex flex-col h-48 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 transform rotate-12 translate-x-4 translate-y-4" />
        </div>
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <Icon className="w-6 h-6" />
        </div>
                  <span className="text-xs font-mono text-white/40 group-hover:text-primary/70">{cat.count}</span>
        </div>
                
                <div className="mt-auto relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                    {cat.label}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-sm text-white/50 line-clamp-2">
                    {cat.desc}
                  </p>
        </div>
              </Link>
            );
          })}
        </div>
        </div>

      <Footer />
    </div>
  );
}
