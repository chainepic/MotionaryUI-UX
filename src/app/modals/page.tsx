'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AppWindow, Search, PanelTop, PanelBottom, AlertCircle, Maximize } from 'lucide-react';
import { Footer } from '@/components/system/Footer';
import { PlaygroundCard } from "@/components/system/PlaygroundCard";
import * as Modals from "@/components/motionary/atomic/ModalVariants";

export default function ModalsPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-12">
        <header className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hub
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-red-500/10 rounded-xl text-red-400">
              <AppWindow className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Modals & Dialogs
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            Overlays, popups, and dialog interactions for focused tasks.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           <PlaygroundCard title="Center Fade" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Standard modal" styleTags={['minimal']}><Modals.CenterFadeModal /></PlaygroundCard>
           <PlaygroundCard title="Bottom Sheet" trigger="Hover" codePath="atomic/ModalVariants" promptDescription="Mobile drawer" styleTags={['mobile']}><Modals.BottomSheet /></PlaygroundCard>
           <PlaygroundCard title="Side Drawer" trigger="Hover" codePath="atomic/ModalVariants" promptDescription="Right panel" styleTags={['layout']}><Modals.SideDrawerRight /></PlaygroundCard>
           <PlaygroundCard title="Error Shake" trigger="Hover" codePath="atomic/ModalVariants" promptDescription="Alert validation" styleTags={['alert']}><Modals.AlertErrorShake /></PlaygroundCard>
           <PlaygroundCard title="Success Toast" trigger="Load" codePath="atomic/ModalVariants" promptDescription="Notification popup" styleTags={['ui']}><Modals.SuccessToast /></PlaygroundCard>
           <PlaygroundCard title="Confirm Dialog" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Delete confirmation" styleTags={['alert']}><Modals.ConfirmDialog /></PlaygroundCard>
           <PlaygroundCard title="Fullscreen" trigger="Hover" codePath="atomic/ModalVariants" promptDescription="Screen takeover" styleTags={['layout']}><Modals.FullscreenTakeover /></PlaygroundCard>
           <PlaygroundCard title="Cookie Banner" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Consent strip" styleTags={['legal']}><Modals.CookieConsent /></PlaygroundCard>
           <PlaygroundCard title="Search Spot" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Command palette" styleTags={['ui']}><Modals.SearchSpotlight /></PlaygroundCard>
           <PlaygroundCard title="Lightbox" trigger="Hover" codePath="atomic/ModalVariants" promptDescription="Image zoom" styleTags={['media']}><Modals.ImageLightbox /></PlaygroundCard>
           <PlaygroundCard title="Context Menu" trigger="Hover" codePath="atomic/ModalVariants" promptDescription="Right click menu" styleTags={['ui']}><Modals.ContextMenu /></PlaygroundCard>
           <PlaygroundCard title="Notification" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Bell dropdown" styleTags={['ui']}><Modals.NotificationDropdown /></PlaygroundCard>
           <PlaygroundCard title="Login Modal" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Auth popup" styleTags={['form']}><Modals.LoginModal /></PlaygroundCard>
           <PlaygroundCard title="Tooltip Hover" trigger="Hover" codePath="atomic/ModalVariants" promptDescription="Info popup" styleTags={['ui']}><Modals.TooltipHover /></PlaygroundCard>
           <PlaygroundCard title="Download" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Progress popup" styleTags={['status']}><Modals.DownloadProgress /></PlaygroundCard>
           <PlaygroundCard title="Share Sheet" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Social share" styleTags={['social']}><Modals.ShareSheet /></PlaygroundCard>
           <PlaygroundCard title="Lock Screen" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Gated content" styleTags={['security']}><Modals.LockScreenOverlay /></PlaygroundCard>
           <PlaygroundCard title="Rating Popup" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Star review" styleTags={['feedback']}><Modals.RatingPopup /></PlaygroundCard>
           <PlaygroundCard title="Language Pick" trigger="Static" codePath="atomic/ModalVariants" promptDescription="Selection modal" styleTags={['form']}><Modals.LanguagePickerModal /></PlaygroundCard>
           <PlaygroundCard title="Exit Intent" trigger="Hover" codePath="atomic/ModalVariants" promptDescription="Leave popup" styleTags={['marketing']}><Modals.ExitIntent /></PlaygroundCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}

