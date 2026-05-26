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
  title: "Loading Components for AI & Vibe Coding | Motionary",
  description: "Beautiful Loading and Spinner components. Skeleton loaders, progress bars, and loading states designed for modern AI-generated interfaces.",
  keywords: ["react loaders","loading animations","ai generated loaders","vibe coding","spinner components","skeleton loaders","progress bars","ui loading"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function LoadersPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">10.</span>Loaders</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Classic Spinner: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Classic Spinner" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.ClassicSpinner /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Pulse Dots: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Pulse Dots" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.PulseDots /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Bouncing Ball: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Bouncing Ball" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.BouncingBall /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Orbit: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Orbit" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.OrbitLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Liquid: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Liquid" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.LiquidLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Skeleton: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Skeleton" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.SkeletonLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Text Typing: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Text Typing" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.TextLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="WiFi: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="WiFi" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.WifiLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Equalizer: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Equalizer" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.EqualizerLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Hourglass: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Hourglass" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.HourglassLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="DNA: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="DNA" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.DNALoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Infinity: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Infinity" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.InfinityLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Radar: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Radar" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.RadarLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Battery: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Battery" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.BatteryLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Gear: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Gear" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.GearLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Striped: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Striped" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.StripedProgress /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Ripple: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Ripple" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.RippleLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Flip Square: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Flip Square" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.FlipSquareLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Glitch: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Glitch" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.GlitchLoader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Circle: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Circle" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.CircularNumberLoader /></PlaygroundCard>
                    <PlaygroundCard styleTags={['scientific']} compType="element" promptDescription="DNA Spiral: loop motion treatment with staggered bounce wave. Built with Tailwind CSS." title="D N A Spiral" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.DNASpiral /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Cube Rotate: loop motion treatment with simple square spin. Built with Tailwind CSS." title="Cube Rotate" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.CubeRotate /></PlaygroundCard>
            <PlaygroundCard styleTags={['organic']} compType="element" promptDescription="Liquid Blob: loop motion treatment with organic shape morph. Built with Tailwind CSS." title="Liquid Blob" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.LiquidBlob /></PlaygroundCard>
            <PlaygroundCard styleTags={['neon']} compType="element" promptDescription="Neon Ring: loop motion treatment with glowing arc spin. Built with Tailwind CSS." title="Neon Ring" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.NeonRing /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Square Fill: loop motion treatment with vertical fill animation. Built with Tailwind CSS." title="Square Fill" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.SquareFill /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Twin Circles: loop motion treatment with counter-rotating rings. Built with Tailwind CSS." title="Twin Circles" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.TwinCircles /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Pulse Radar: loop motion treatment with single ping. Built with Tailwind CSS." title="Pulse Radar" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.PulseRadar /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Bouncing Dots: loop motion treatment with classic three-dot bounce. Built with Tailwind CSS." title="Bouncing Dots" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.BouncingDots /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Circular Dash: loop motion treatment with SVG stroke dash. Built with Tailwind CSS." title="Circular Dash" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.CircularDash /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Bar Scanner: loop motion treatment with horizontal scanning bar. Built with Tailwind CSS." title="Bar Scanner" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.BarScanner /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Segment Load: loop motion treatment with vertical segment pulse. Built with Tailwind CSS." title="Segment Load" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.SegmentLoad /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Gradient Bar: loop motion treatment with scale-x fill. Built with Tailwind CSS." title="Gradient Fill Bar" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.GradientFillBar /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Steps Vertical: loop motion treatment with dropping dots. Built with Tailwind CSS." title="Steps Vertical" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.StepsVertical /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Orbit Moon: loop motion treatment with satellite spin. Built with Tailwind CSS." title="Orbit Moon" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.OrbitMoon /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Typing Cursor: loop motion treatment with text cursor blink. Built with Tailwind CSS." title="Typing Cursor" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.TypingCursor /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Scramble Load: loop motion treatment with glitch text placeholder. Built with Tailwind CSS." title="Scramble Load" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.ScrambleLoad /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Gradient Text: loop motion treatment with text shimmer. Built with Tailwind CSS." title="Gradient Text Load" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.GradientTextLoad /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Coffee Fill: loop motion treatment with liquid rise in cup. Built with Tailwind CSS." title="Coffee Fill" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.CoffeeFill /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Hourglass Flip: loop motion treatment with emoji rotation. Built with Tailwind CSS." title="Hourglass Flip" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.HourglassFlip /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Battery Loop: loop motion treatment with charging pulse. Built with Tailwind CSS." title="Battery Charge Loop" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.BatteryChargeLoop /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Wifi Signal: loop motion treatment with bar height sequence. Built with Tailwind CSS." title="Wifi Signal" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.WifiSignal /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Uploading Cloud: loop motion treatment with bottom bar loading. Built with Tailwind CSS." title="Uploading Cloud" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.UploadingCloud /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="Server Blink: loop motion treatment with stack pulse. Built with Tailwind CSS." title="Server Blink" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.ServerBlink /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Pacman Eat: loop motion treatment (simulated) with chomp animation. Built with Tailwind CSS." title="Pacman Eat" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.PacmanEat /></PlaygroundCard>
            <PlaygroundCard styleTags={['audio']} compType="element" promptDescription="Equalizer Bars: loop motion treatment with random height bounce. Built with Tailwind CSS." title="Equalizer Bars" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.EqualizerBars /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Globe Spin: loop motion treatment with emoji rotation. Built with Tailwind CSS." title="Globe Spin" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.GlobeSpin /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="Search Radar: loop motion treatment with sweep line scan. Built with Tailwind CSS." title="Search Radar" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.SearchRadar /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Refresh Spin: loop motion treatment with SVG icon rotation. Built with Tailwind CSS." title="Refresh Spin" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.RefreshSpin /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Infinity Loop: loop motion treatment with text pulse. Built with Tailwind CSS." title="Infinity Loop" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.InfinityLoop /></PlaygroundCard>
            <PlaygroundCard styleTags={['physics']} compType="element" promptDescription="Pendulum Swing: loop motion treatment with physical swing. Built with Tailwind CSS." title="Pendulum Swing" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.PendulumSwing /></PlaygroundCard>
</div>
       
      </div>
    </div>
  );
}
