'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Rocket, Map, CheckCircle2, UserPlus, PlayCircle } from 'lucide-react';
import { Footer } from '@/components/system/Footer';
import { PlaygroundCard } from "@/components/system/PlaygroundCard";
import * as Onboard from "@/components/motionary/atomic/OnboardingVariants";

export default function OnboardingPage() {
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
            <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400">
              <Rocket className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Onboarding
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            Flows and components to welcome, guide, and setup new users.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           <PlaygroundCard title="Dot Carousel" trigger="Click" codePath="atomic/OnboardingVariants" promptDescription="Simple carousel dots" styleTags={['minimal']}><Onboard.SimpleDotCarousel /></PlaygroundCard>
           <PlaygroundCard title="Progress Walkthrough" trigger="Click" codePath="atomic/OnboardingVariants" promptDescription="Step progress bar" styleTags={['ui']}><Onboard.ProgressWalkthrough /></PlaygroundCard>
           <PlaygroundCard title="Swipe Cards" trigger="Hover" codePath="atomic/OnboardingVariants" promptDescription="Tinder-like cards" styleTags={['mobile']}><Onboard.SwipeCards /></PlaygroundCard>
           <PlaygroundCard title="Feature Spotlight" trigger="Hover" codePath="atomic/OnboardingVariants" promptDescription="Spotlight highlight" styleTags={['interaction']}><Onboard.FeatureSpotlight /></PlaygroundCard>
           <PlaygroundCard title="Gamified Checklist" trigger="Click" codePath="atomic/OnboardingVariants" promptDescription="Checklist with rewards" styleTags={['gamification']}><Onboard.ChecklistGamified /></PlaygroundCard>
           <PlaygroundCard title="Tooltip Tour" trigger="Static" codePath="atomic/OnboardingVariants" promptDescription="Floating tooltip" styleTags={['minimal']}><Onboard.TooltipTour /></PlaygroundCard>
           <PlaygroundCard title="Welcome Mascot" trigger="Loop" codePath="atomic/OnboardingVariants" promptDescription="Friendly avatar" styleTags={['fun']}><Onboard.WelcomeMascot /></PlaygroundCard>
           <PlaygroundCard title="Hotspot Pulse" trigger="Loop" codePath="atomic/OnboardingVariants" promptDescription="Pulsing dot" styleTags={['minimal']}><Onboard.HotspotPulse /></PlaygroundCard>
           <PlaygroundCard title="Split Hero" trigger="Static" codePath="atomic/OnboardingVariants" promptDescription="Split layout intro" styleTags={['layout']}><Onboard.SplitHeroWelcome /></PlaygroundCard>
           <PlaygroundCard title="Video Intro" trigger="Hover" codePath="atomic/OnboardingVariants" promptDescription="Video background card" styleTags={['media']}><Onboard.VideoBgIntro /></PlaygroundCard>
           <PlaygroundCard title="Playground" trigger="Drag" codePath="atomic/OnboardingVariants" promptDescription="Interactive demo area" styleTags={['interaction']}><Onboard.InteractivePlayground /></PlaygroundCard>
           <PlaygroundCard title="Skeleton Preview" trigger="Static" codePath="atomic/OnboardingVariants" promptDescription="Loading state preview" styleTags={['minimal']}><Onboard.SkeletonPreview /></PlaygroundCard>
           <PlaygroundCard title="Role Select" trigger="Click" codePath="atomic/OnboardingVariants" promptDescription="User role picker" styleTags={['form']}><Onboard.RoleSelection /></PlaygroundCard>
           <PlaygroundCard title="Linear Steps" trigger="Static" codePath="atomic/OnboardingVariants" promptDescription="Horizontal steps" styleTags={['ui']}><Onboard.LinearStepGuide /></PlaygroundCard>
           <PlaygroundCard title="Notify Request" trigger="Static" codePath="atomic/OnboardingVariants" promptDescription="Permission prompt" styleTags={['alert']}><Onboard.NotificationPermission /></PlaygroundCard>
           <PlaygroundCard title="Success Confetti" trigger="Static" codePath="atomic/OnboardingVariants" promptDescription="Completion celebration" styleTags={['fun']}><Onboard.ConfettiSuccess /></PlaygroundCard>
           <PlaygroundCard title="Theme Picker" trigger="Click" codePath="atomic/OnboardingVariants" promptDescription="Color theme selection" styleTags={['settings']}><Onboard.ThemePicker /></PlaygroundCard>
           <PlaygroundCard title="Timeline Setup" trigger="Static" codePath="atomic/OnboardingVariants" promptDescription="Vertical timeline" styleTags={['ui']}><Onboard.VerticalTimelineSetup /></PlaygroundCard>
           <PlaygroundCard title="Start Button" trigger="Hover" codePath="atomic/OnboardingVariants" promptDescription="Floating CTA" styleTags={['marketing']}><Onboard.FloatingStartBtn /></PlaygroundCard>
           <PlaygroundCard title="Feature Grid" trigger="Hover" codePath="atomic/OnboardingVariants" promptDescription="Grid of icons" styleTags={['layout']}><Onboard.AppFeatureGrid /></PlaygroundCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}

