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
  title: "Transition Components for AI & Vibe Coding | Motionary",
  description: "Page Transition and Animation components. Smooth transitions, page loaders, and navigation animations for modern React apps.",
  keywords: ["react transitions","page transitions","ai generated animations","vibe coding","smooth transitions","navigation animations","ui transitions","component library"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function TransitionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-secondary mr-4 font-mono text-2xl">16.</span>Transitions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Fade: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Fade" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.FadePage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Slide Left: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Slide Left" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.SlideLeft /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Scale Up: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Scale Up" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.ScaleUp /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Wipe: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Wipe" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.WipeReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Flip: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Flip" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.FlipTransition /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Circle Mask: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Circle Mask" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.CircleMask /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Blinds: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Blinds" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.BlindsEffect /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Dissolve: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Dissolve" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.DissolvePixel /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Drawer: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Drawer" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.DrawerUp /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Curtain: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Curtain" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.CurtainOpen /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Zoom Out: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Zoom Out" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.ZoomOutFade /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Folder Tab: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Folder Tab" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.FolderTab /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Glitch: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Glitch" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.GlitchTransition /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Morph: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Morph" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.MorphPage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Tiles: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Tiles" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.TilesReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Clock Wipe: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Clock Wipe" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.ClockWipe /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Crossfade: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Crossfade" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.CrossfadeBlur /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Lines: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Lines" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.LinesSlide /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Cube Rotate: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Cube Rotate" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.RotateCube /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="animation" promptDescription="Elastic Snap: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Elastic Snap" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.ElasticSnap /></PlaygroundCard>
                    <PlaygroundCard styleTags={['ios']} compType="element" promptDescription="Face ID: loop motion treatment with scanning face lock. Built with Tailwind CSS." title="Face I D Scan" trigger="Loop" codePath="atomic/DeviceVariants"><Device.FaceIDScan /></PlaygroundCard>
            <PlaygroundCard styleTags={['mobile']} compType="element" promptDescription="Swipe Home: hover motion treatment with app minimize gesture. Built with Tailwind CSS." title="Swipe Home" trigger="Hover" codePath="atomic/DeviceVariants"><Device.SwipeHome /></PlaygroundCard>
            <PlaygroundCard styleTags={['ios','modern']} compType="element" promptDescription="Notch Notify: hover motion treatment with dynamic island expansion. Built with Tailwind CSS." title="Notch Notify" trigger="Hover" codePath="atomic/DeviceVariants"><Device.NotchNotify /></PlaygroundCard>
            <PlaygroundCard styleTags={['ios']} compType="element" promptDescription="App Shake: hover motion treatment with edit mode wiggle. Built with Tailwind CSS." title="App Icon Shake" trigger="Hover" codePath="atomic/DeviceVariants"><Device.AppIconShake /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Battery Charging: loop motion treatment with bolt fill. Built with Tailwind CSS." title="Battery Charging" trigger="Loop" codePath="atomic/DeviceVariants"><Device.BatteryCharging /></PlaygroundCard>
            <PlaygroundCard styleTags={['macos']} compType="element" promptDescription="Window Genie: hover motion treatment with minimize effect. Built with Tailwind CSS." title="Window Genie" trigger="Hover" codePath="atomic/DeviceVariants"><Device.WindowGenie /></PlaygroundCard>
            <PlaygroundCard styleTags={['macos']} compType="element" promptDescription="Dock Bounce: hover motion treatment with icon jump. Built with Tailwind CSS." title="Dock Bounce" trigger="Hover" codePath="atomic/DeviceVariants"><Device.DockBounce /></PlaygroundCard>
            <PlaygroundCard styleTags={['macos','ui']} compType="element" promptDescription="Spotlight Search: loop motion treatment with floating bar. Built with Tailwind CSS." title="Spotlight Search" trigger="Loop" codePath="atomic/DeviceVariants"><Device.SpotlightSearch /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="File Drag: hover motion treatment with document tilt. Built with Tailwind CSS." title="File Drag Drop" trigger="Hover" codePath="atomic/DeviceVariants"><Device.FileDragDrop /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Cursor Follow: hover motion treatment with custom pointer (simulated center). Built with Tailwind CSS." title="Cursor Follow" trigger="Hover" codePath="atomic/DeviceVariants"><Device.CursorFollow /></PlaygroundCard>
            <PlaygroundCard styleTags={['wearable']} compType="element" promptDescription="Activity Rings: load motion treatment with concentric progress. Built with Tailwind CSS." title="Activity Rings" trigger="Load" codePath="atomic/DeviceVariants"><Device.ActivityRings /></PlaygroundCard>
            <PlaygroundCard styleTags={['health']} compType="element" promptDescription="Heart Rate: loop motion treatment with ECG bars. Built with Tailwind CSS." title="Heart Rate Graph" trigger="Loop" codePath="atomic/DeviceVariants"><Device.HeartRateGraph /></PlaygroundCard>
            <PlaygroundCard styleTags={['wearable']} compType="element" promptDescription="Watch Notify: loop motion treatment with full screen alert. Built with Tailwind CSS." title="Watch Notification" trigger="Loop" codePath="atomic/DeviceVariants"><Device.WatchNotification /></PlaygroundCard>
            <PlaygroundCard styleTags={['health']} compType="element" promptDescription="Breathing App: hover motion treatment with mindfulness expansion. Built with Tailwind CSS." title="Breathing App" trigger="Hover" codePath="atomic/DeviceVariants"><Device.BreathingApp /></PlaygroundCard>
            <PlaygroundCard styleTags={['iot']} compType="element" promptDescription="Thermostat: hover motion treatment with dial rotation. Built with Tailwind CSS." title="Thermostat Dial" trigger="Hover" codePath="atomic/DeviceVariants"><Device.ThermostatDial /></PlaygroundCard>
            <PlaygroundCard styleTags={['iot']} compType="element" promptDescription="Light Dimmer: hover motion treatment with vertical slide fill. Built with Tailwind CSS." title="Light Dimmer" trigger="Hover" codePath="atomic/DeviceVariants"><Device.LightDimmer /></PlaygroundCard>
            <PlaygroundCard styleTags={['security']} compType="element" promptDescription="Security Cam: loop motion treatment with recording overlay. Built with Tailwind CSS." title="Security Cam" trigger="Loop" codePath="atomic/DeviceVariants"><Device.SecurityCam /></PlaygroundCard>
            <PlaygroundCard styleTags={['iot']} compType="element" promptDescription="Smart Lock: hover motion treatment with state feedback. Built with Tailwind CSS." title="Smart Lock" trigger="Hover" codePath="atomic/DeviceVariants"><Device.SmartLock /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="Wifi Router: loop motion treatment with antenna status. Built with Tailwind CSS." title="Wifi Router" trigger="Loop" codePath="atomic/DeviceVariants"><Device.WifiRouter /></PlaygroundCard>
            <PlaygroundCard styleTags={['skeuomorphic']} compType="element" promptDescription="Printer Print: hover motion treatment with paper feed. Built with Tailwind CSS." title="Printer Print" trigger="Hover" codePath="atomic/DeviceVariants"><Device.PrinterPrint /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="Sim Card: hover motion treatment with metallic shine. Built with Tailwind CSS." title="Sim Card Chip" trigger="Hover" codePath="atomic/DeviceVariants"><Device.SimCardChip /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="Server Rack: loop motion treatment with random blinking lights. Built with Tailwind CSS." title="Server Rack" trigger="Loop" codePath="atomic/DeviceVariants"><Device.ServerRack /></PlaygroundCard>
            <PlaygroundCard styleTags={['security']} compType="element" promptDescription="Fingerprint: loop motion treatment with scanner bar. Built with Tailwind CSS." title="Fingerprint Scan" trigger="Loop" codePath="atomic/DeviceVariants"><Device.FingerprintScan /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="USB Insert: hover motion treatment with plug connection. Built with Tailwind CSS." title="U S B Insert" trigger="Hover" codePath="atomic/DeviceVariants"><Device.USBInsert /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Device Rotate: hover motion treatment with orientation change. Built with Tailwind CSS." title="Device Rotate" trigger="Hover" codePath="atomic/DeviceVariants"><Device.DeviceRotate /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Signal Bar: hover motion treatment with signal strength build. Built with Tailwind CSS." title="Signal Strength Bar" trigger="Hover" codePath="atomic/DeviceVariants"><Device.SignalStrengthBar /></PlaygroundCard>
            <PlaygroundCard styleTags={['security']} compType="element" promptDescription="Face Unlock: hover motion treatment with lock shackle open. Built with Tailwind CSS." title="Face I D Unlock" trigger="Hover" codePath="atomic/DeviceVariants"><Device.FaceIDUnlock /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Battery Low: loop motion treatment with red pulse. Built with Tailwind CSS." title="Battery Low Warn" trigger="Loop" codePath="atomic/DeviceVariants"><Device.BatteryLowWarn /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Bluetooth Pair: hover motion treatment with signal ping. Built with Tailwind CSS." title="Bluetooth Pairing" trigger="Hover" codePath="atomic/DeviceVariants"><Device.BluetoothPairing /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Airplane Mode: hover motion treatment with flight path. Built with Tailwind CSS." title="Airplane Mode Toggle" trigger="Hover" codePath="atomic/DeviceVariants"><Device.AirplaneModeToggle /></PlaygroundCard>
            <PlaygroundCard styleTags={['transition']} compType="element" promptDescription="Circle Reveal Page: hover motion treatment with circular expand. Built with Tailwind CSS." title="Circle Reveal Page" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.CircleRevealPage /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Pixel Dissolve: hover motion treatment with random block fade. Built with Tailwind CSS." title="Pixel Dissolve" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.PixelDissolve /></PlaygroundCard>
            <PlaygroundCard styleTags={['theatre']} compType="element" promptDescription="Curtain Wipe: hover motion treatment with center split. Built with Tailwind CSS." title="Curtain Wipe" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.CurtainWipe /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Book Flip: hover motion treatment with page turn. Built with Tailwind CSS." title="Book Flip Page" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.BookFlipPage /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Shared Hero: hover motion treatment with layout expansion. Built with Tailwind CSS." title="Shared Hero" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.SharedHero /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="List Detail: hover motion treatment with view swap. Built with Tailwind CSS." title="List To Detail" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.ListToDetail /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Card Expansion: hover motion treatment with size grow. Built with Tailwind CSS." title="Card Expansion" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.CardExpansion /></PlaygroundCard>
            <PlaygroundCard styleTags={['scroll']} compType="element" promptDescription="Parallax Header: hover motion treatment with layer depth. Built with Tailwind CSS." title="Parallax Header" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.ParallaxHeader /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Sticky Section: scroll motion treatment with fixed header. Built with Tailwind CSS." title="Sticky Section" trigger="Scroll" codePath="atomic/TransitionVariants"><Transitions.StickySection /></PlaygroundCard>
            <PlaygroundCard styleTags={['mobile']} compType="element" promptDescription="Horizontal Snap: scroll motion treatment with card carousel. Built with Tailwind CSS." title="Horizontal Snap" trigger="Scroll" codePath="atomic/TransitionVariants"><Transitions.HorizontalSnap /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Modal Scale: hover motion treatment with popup zoom. Built with Tailwind CSS." title="Modal Scale Up" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.ModalScaleUp /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Drawer Slide: hover motion treatment with side panel. Built with Tailwind CSS." title="Drawer Slide Right" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.DrawerSlideRight /></PlaygroundCard>
            <PlaygroundCard styleTags={['alert']} compType="element" promptDescription="Toast Stack: hover motion treatment with vertical notification build. Built with Tailwind CSS." title="Toast Stack Up" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.ToastStackUp /></PlaygroundCard>
            <PlaygroundCard styleTags={['material']} compType="element" promptDescription="Ripple Button: click motion treatment with radial spread. Built with Tailwind CSS." title="Ripple Button" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.RippleButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Border Draw: hover motion treatment with path trace. Built with Tailwind CSS." title="Border Draw Box" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.BorderDrawBox /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Underline Grow: hover motion treatment with line expansion. Built with Tailwind CSS." title="Underline Grow" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.UnderlineGrow /></PlaygroundCard>
            <PlaygroundCard styleTags={['classic']} compType="element" promptDescription="Greyscale Color: hover motion treatment with saturation restore. Built with Tailwind CSS." title="Image Greyscale Color" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.ImageGreyscaleColor /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Gradient Pan: loop motion treatment with text fill animation. Built with Tailwind CSS." title="Text Gradient Pan" trigger="Loop" codePath="atomic/TransitionVariants"><Transitions.TextGradientPan /></PlaygroundCard>
            <PlaygroundCard styleTags={['brutalism']} compType="element" promptDescription="Skew Button: hover motion treatment with shape distortion. Built with Tailwind CSS." title="Skew Button" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.SkewButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Floating Card: hover motion treatment with lift and shadow. Built with Tailwind CSS." title="Floating Card" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.FloatingCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Rotate Icon: hover motion treatment with spin interaction. Built with Tailwind CSS." title="Rotate Icon" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.RotateIcon /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Pulse Badge: loop motion treatment with radar ping. Built with Tailwind CSS." title="Pulse Badge" trigger="Loop" codePath="atomic/TransitionVariants"><Transitions.PulseBadge /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Typewriter Simple: loop motion treatment with cursor blink. Built with Tailwind CSS." title="Typewriter Simple" trigger="Loop" codePath="atomic/TransitionVariants"><Transitions.TypewriterSimple /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Blur Fade In: load motion treatment with focus entrance. Built with Tailwind CSS." title="Blur Fade In" trigger="Load" codePath="atomic/TransitionVariants"><Transitions.BlurFadeIn /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Slide Up: load motion treatment with masked entrance. Built with Tailwind CSS." title="Slide Up Reveal" trigger="Load" codePath="atomic/TransitionVariants"><Transitions.SlideUpReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['form']} compType="element" promptDescription="Shake Error: load motion treatment with vibration alert. Built with Tailwind CSS." title="Shake Error Input" trigger="Load" codePath="atomic/TransitionVariants"><Transitions.ShakeErrorInput /></PlaygroundCard>
            <PlaygroundCard styleTags={['loader']} compType="element" promptDescription="Bounce Loading: loop motion treatment with jumping dots. Built with Tailwind CSS." title="Bounce Loading" trigger="Loop" codePath="atomic/TransitionVariants"><Transitions.BounceLoading /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Flip Text: hover motion treatment with 3D word swap. Built with Tailwind CSS." title="Flip Text" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.FlipText /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Glow Border: hover motion treatment with rainbow pulse. Built with Tailwind CSS." title="Glow Border" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.GlowBorder /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Expand Search: hover motion treatment with pill grow. Built with Tailwind CSS." title="Expand Search" trigger="Hover" codePath="atomic/TransitionVariants"><Transitions.ExpandSearch /></PlaygroundCard>
</div>
       
      </div>
    </div>
  );
}
