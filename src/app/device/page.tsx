import React from 'react';
import { PlaygroundCard } from "@/components/system/PlaygroundCard";
import { useFilterStore } from "@/store/useFilterStore";
import { HeroGradient } from "@/components/motionary/blocks/HeroGradient";
import { BentoGrid } from "@/components/motionary/blocks/BentoGrid";
import { PricingSection } from "@/components/motionary/blocks/PricingSection";
import { LandingPage } from "@/components/motionary/blocks/LandingPage";
import { ParticleCanvas } from "@/components/motionary/advanced/ParticleCanvas";
import { MagneticButton } from "@/components/motionary/atomic/MagneticButton";
import { LiquidButton } from "@/components/motionary/atomic/LiquidButton";
import { JellyButton } from "@/components/motionary/atomic/JellyButton";
import { KineticText } from "@/components/motionary/atomic/KineticText";
import { FloatingInput } from "@/components/motionary/atomic/FloatingInput";
import { ShakeInput } from "@/components/motionary/atomic/ShakeInput";
import { SwipeToDelete } from "@/components/motionary/mobile/SwipeToDelete";
import * as Buttons from "@/components/motionary/atomic/ButtonVariants";
import * as Text from "@/components/motionary/atomic/TextVariants";
import * as Cards from "@/components/motionary/atomic/CardVariants";
import * as Nav from "@/components/motionary/atomic/NavVariants";
import * as InputVars from "@/components/motionary/atomic/InputVariants";
import * as Loaders from "@/components/motionary/atomic/LoaderVariants";
import * as Images from "@/components/motionary/atomic/ImageVariants";
import * as Micro from "@/components/motionary/atomic/MicroVariants";
import * as Backgrounds from "@/components/motionary/atomic/BackgroundVariants";
import * as Data from "@/components/motionary/atomic/DataVariants";
import * as Feedback from "@/components/motionary/atomic/FeedbackVariants";
import * as Social from "@/components/motionary/atomic/SocialVariants";
import * as Ecom from "@/components/motionary/atomic/EcommerceVariants";
import * as Game from "@/components/motionary/atomic/GameVariants";
import * as Transitions from "@/components/motionary/atomic/TransitionVariants";
import * as Media from "@/components/motionary/atomic/MediaVariants";
import * as Device from "@/components/motionary/atomic/DeviceVariants";
import { useBubbleSound } from "@/hooks/useBubbleSound";
import { Footer } from "@/components/system/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Device UI Components for AI & Vibe Coding | Motionary",
  description: "Device and Mobile UI components. Phone frames, device mockups, and mobile interfaces designed for AI-assisted development.",
  keywords: ["react device ui","mobile components","ai coding","vibe coding","device mockups","mobile ui","responsive design","ui components"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function DevicePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">15.</span>Device UI</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Dynamic Island: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Dynamic Island" trigger="Click" codePath="atomic/DeviceVariants"><Device.DynamicIsland /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Notch Reveal: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Notch Reveal" trigger="Hover" codePath="atomic/DeviceVariants"><Device.NotchReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Phone Rotate: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Phone Rotate" trigger="Loop" codePath="atomic/DeviceVariants"><Device.PhoneRotate /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Laptop Hinge: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Laptop Hinge" trigger="Click" codePath="atomic/DeviceVariants"><Device.LaptopHinge /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Fingerprint: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Fingerprint" trigger="Loop" codePath="atomic/DeviceVariants"><Device.ScreenFingerprint /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Face ID: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Face ID" trigger="Loop" codePath="atomic/DeviceVariants"><Device.FaceID /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Battery Charge: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Battery Charge" trigger="Loop" codePath="atomic/DeviceVariants"><Device.BatteryCharge /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Airplane Mode: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Airplane Mode" trigger="Click" codePath="atomic/DeviceVariants"><Device.AirplaneToggle /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="App Icon: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="App Icon" trigger="Hover" codePath="atomic/DeviceVariants"><Device.AppSquircle /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Notification: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Notification" trigger="Click" codePath="atomic/DeviceVariants"><Device.NotificationStack /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Home Indicator: drag motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Home Indicator" trigger="Drag" codePath="atomic/DeviceVariants"><Device.HomeIndicator /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Camera Shutter: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Camera Shutter" trigger="Click" codePath="atomic/DeviceVariants"><Device.CameraShutter /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Keyboard: focus motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Keyboard" trigger="Focus" codePath="atomic/DeviceVariants"><Device.KeyboardPopup /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Dark Mode: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Dark Mode" trigger="Click" codePath="atomic/DeviceVariants"><Device.DeviceDarkMode /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Split Screen: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Split Screen" trigger="Hover" codePath="atomic/DeviceVariants"><Device.TabletSplit /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Watch Swipe: drag motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Watch Swipe" trigger="Drag" codePath="atomic/DeviceVariants"><Device.WatchSwipe /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Signal Search: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Signal Search" trigger="Loop" codePath="atomic/DeviceVariants"><Device.SignalSearch /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="App Library: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="App Library" trigger="Hover" codePath="atomic/DeviceVariants"><Device.AppLibrary /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Browser Tabs: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Browser Tabs" trigger="Click" codePath="atomic/DeviceVariants"><Device.BrowserTabs /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Lock Screen: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Lock Screen" trigger="Click" codePath="atomic/DeviceVariants"><Device.LockScreen /></PlaygroundCard>
        </div>
       
      </div>
    </div>
  );
}
