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
  title: "React Buttons for AI & Vibe Coding | Motionary",
  description: "Copy-paste production-ready Button components optimized for Cursor, v0, and AI code generation. Interactive buttons with hover effects, click animations, and modern UI.",
  keywords: ["react buttons","tailwind button","ai coding","vibe coding","cursor compatible","interactive buttons","hover effects","click animations","ui components"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function ButtonsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">01.</span>Buttons</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <PlaygroundCard title="Magnetic" trigger="Hover" codePath="atomic/MagneticButton" styleTags={["cyber","minimal"]} compType="element" promptDescription="Magnetic: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><MagneticButton /></PlaygroundCard>
          <PlaygroundCard title="Liquid" trigger="Hover" codePath="atomic/LiquidButton" styleTags={["cyber","minimal"]} compType="element" promptDescription="Liquid: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><LiquidButton /></PlaygroundCard>
          <PlaygroundCard title="Jelly" trigger="Click" codePath="atomic/JellyButton" styleTags={["cyber","minimal"]} compType="element" promptDescription="Jelly: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><JellyButton /></PlaygroundCard>
          <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Neon: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Neon" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.NeonButton /></PlaygroundCard>
          <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Glitch: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Glitch" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.GlitchButton /></PlaygroundCard>
          <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Cyberpunk: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Cyberpunk" trigger="Static" codePath="atomic/ButtonVariants"><Buttons.CyberButton /></PlaygroundCard>
          <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Spotlight: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Spotlight" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.SpotLightButton /></PlaygroundCard>
          <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Elastic: tap motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Elastic" trigger="Tap" codePath="atomic/ButtonVariants"><Buttons.ElasticButton /></PlaygroundCard>
          <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Shimmer: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Shimmer" trigger="Loop" codePath="atomic/ButtonVariants"><Buttons.ShimmerButton /></PlaygroundCard>
          <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Blob: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Blob" trigger="Loop" codePath="atomic/ButtonVariants"><Buttons.BlobButton /></PlaygroundCard>
          <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Ghost: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Ghost" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.GhostButton /></PlaygroundCard>
          <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Send: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Send" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.SendButton /></PlaygroundCard>
          <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="3D Tilt: mouse motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="3D Tilt" trigger="Mouse" codePath="atomic/ButtonVariants"><Buttons.TiltButton /></PlaygroundCard>
                    <PlaygroundCard styleTags={['modern','gradient']} compType="element" promptDescription="AI Sparkle: hover motion treatment with gradient opacity shift and pulsing star icon. Built with Tailwind CSS." title="Ai Sparkle Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.AiSparkleButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Neural Link: hover motion treatment with mono font and expanding bottom border. Built with Tailwind CSS." title="Neural Link Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.NeuralLinkButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber','gradient']} compType="element" promptDescription="Data Stream: hover motion treatment with rotating conic gradient background. Built with Tailwind CSS." title="Data Stream Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.DataStreamButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Holo Ghost: hover motion treatment with scaling background circle reveal. Built with Tailwind CSS." title="Holo Ghost Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.HoloGhostButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern','texture']} compType="element" promptDescription="Cosmic Dust: hover motion treatment with noise texture and tracking expansion. Built with Tailwind CSS." title="Cosmic Dust Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.CosmicDustButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Frosty Glass: hover motion treatment with backdrop blur and scale effect. Built with Tailwind CSS." title="Frosty Glass Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.FrostyGlassButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Crystal Prism: hover motion treatment with shimmer slide effect on glass background. Built with Tailwind CSS." title="Crystal Prism Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.CrystalPrismButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Blur Reveal: hover motion treatment with blurred background intensification. Built with Tailwind CSS." title="Blur Reveal Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.BlurRevealButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism','cyber']} compType="element" promptDescription="Ice Layer: hover motion treatment with layered skew and blur effect. Built with Tailwind CSS." title="Ice Layer Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.IceLayerButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Mirror Reflect: hover motion treatment with top-down gradient reveal. Built with Tailwind CSS." title="Mirror Reflect Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.MirrorReflectButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Hard Shadow: click motion treatment with neo-brutalist offset shadow press effect. Built with Tailwind CSS." title="Hard Shadow Button" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.HardShadowButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Retro Pop: hover motion treatment with vibrant color and mono font. Built with Tailwind CSS." title="Retro Pop Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.RetroPopButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro','modern']} compType="element" promptDescription="Offset Border: hover motion treatment with expanding border offset. Built with Tailwind CSS." title="Offset Border Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.OffsetBorderButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Brutal Underline: hover motion treatment with rising background fill. Built with Tailwind CSS." title="Brutal Underline Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.BrutalUnderlineButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Pixel Press: click motion treatment with border-bottom depression. Built with Tailwind CSS." title="Pixel Press Button" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.PixelPressButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Dot Indicator: hover motion treatment with scaling dot element. Built with Tailwind CSS." title="Dot Indicator Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.DotIndicatorButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Line Expand: hover motion treatment with center-out underline expansion. Built with Tailwind CSS." title="Line Expand Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.LineExpandButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Icon Morph: hover motion treatment with rotating icon. Built with Tailwind CSS." title="Icon Morph Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.IconMorphButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Text Shift: hover motion treatment with vertical text slide. Built with Tailwind CSS." title="Text Shift Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.TextShiftButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Status Ring: loop motion treatment with pinging ring animation. Built with Tailwind CSS." title="Status Ring Button" trigger="Loop" codePath="atomic/ButtonVariants"><Buttons.StatusRingButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Flip Layer: hover motion treatment with 3D card flip effect. Built with Tailwind CSS." title="Flip Layer Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.FlipLayerButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d','minimal']} compType="element" promptDescription="Depth Press: click motion treatment with physical button depth simulation. Built with Tailwind CSS." title="Depth Press Button" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.DepthPressButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Iso Tilt: hover motion treatment with isometric tilt and scale. Built with Tailwind CSS." title="Iso Tilt Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.IsoTiltButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro','3d']} compType="element" promptDescription="Layered Shadow: hover motion treatment with multi-layer shadow effect. Built with Tailwind CSS." title="Layered Shadow Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.LayeredShadowButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Float Elevation: hover motion treatment with shadow expansion and lift. Built with Tailwind CSS." title="Float Elevation Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.FloatElevationButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['organic']} compType="element" promptDescription="Morph Blob: hover motion treatment with organic border-radius morphing. Built with Tailwind CSS." title="Morph Blob Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.MorphBlobButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['organic']} compType="element" promptDescription="Gooey Trail: hover motion treatment with circular fill expansion. Built with Tailwind CSS." title="Gooey Trail Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.GooeyTrailButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['organic']} compType="element" promptDescription="Ripple Pulse: click motion treatment with ring scaling. Built with Tailwind CSS." title="Ripple Pulse Button" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.RipplePulseButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['organic']} compType="element" promptDescription="Liquid Border: hover motion treatment with gradient mask border reveal. Built with Tailwind CSS." title="Liquid Border Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.LiquidBorderButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['organic']} compType="element" promptDescription="Organic Outline: hover motion treatment with corner radius swapping. Built with Tailwind CSS." title="Organic Outline Button" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.OrganicOutlineButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['neumorphism']} compType="element" promptDescription="Neumorphic Soft: click motion treatment with soft shadow press. Built with Tailwind CSS." title="Neumorphic Soft" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.NeumorphicSoft /></PlaygroundCard>
            <PlaygroundCard styleTags={['glass']} compType="element" promptDescription="Glass Blur: hover motion treatment with frosted effect. Built with Tailwind CSS." title="Glassmorphism Blur" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.GlassmorphismBlur /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Retro Pixel: click motion treatment with 8-bit press. Built with Tailwind CSS." title="Retro Pixel Btn" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.RetroPixelBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Clay Style: hover motion treatment with soft 3D look. Built with Tailwind CSS." title="Claymorphism Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.ClaymorphismBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Liquid Fill: hover motion treatment with side sweep. Built with Tailwind CSS." title="Liquid Fill Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.LiquidFillBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Magnetic Pull: hover motion treatment (simulated) with cursor attraction. Built with Tailwind CSS." title="Magnetic Pull Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.MagneticPullBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="3D Press: click motion treatment with depth collapse. Built with Tailwind CSS." title="Three D Press Btn" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.ThreeDPressBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="Border Beam: hover motion treatment with moving outline. Built with Tailwind CSS." title="Border Beam Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.BorderBeamBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Loading State: loop motion treatment with spinner. Built with Tailwind CSS." title="Loading Spinner Btn" trigger="Loop" codePath="atomic/ButtonVariants"><Buttons.LoadingSpinnerBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Success Check: static motion treatment with ping icon. Built with Tailwind CSS." title="Success Check Btn" trigger="Static" codePath="atomic/ButtonVariants"><Buttons.SuccessCheckBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['feedback']} compType="element" promptDescription="Error Shake: hover motion treatment with vibration. Built with Tailwind CSS." title="Error Shake Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.ErrorShakeBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Disabled Lock: hover motion treatment with tooltip. Built with Tailwind CSS." title="Disabled Lock Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.DisabledLockBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Blob Morph: hover motion treatment with shape shift. Built with Tailwind CSS." title="Blob Morph Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.BlobMorphBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Glitch Effect: hover motion treatment with chromatic aberration. Built with Tailwind CSS." title="Glitch Effect Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.GlitchEffectBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Shine Sweep: hover motion treatment with light pass. Built with Tailwind CSS." title="Shine Sweep Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.ShineSweepBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Confetti Pop: click motion treatment with particle burst. Built with Tailwind CSS." title="Confetti Btn" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.ConfettiBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Gradient Run: hover motion treatment with spinning border. Built with Tailwind CSS." title="Gradient Border Run" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.GradientBorderRun /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Icon Fly: hover motion treatment with icon swap. Built with Tailwind CSS." title="Send Icon Fly" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.SendIconFly /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Spotlight Fill: hover motion treatment with center expand. Built with Tailwind CSS." title="Spotlight Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.SpotlightBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['material']} compType="element" promptDescription="Ripple Click: click motion treatment with material wave. Built with Tailwind CSS." title="Ripple Click Btn" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.RippleClickBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Ghost Button: hover motion treatment with solid fill. Built with Tailwind CSS." title="Ghost Outline Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.GhostOutlineBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Underline Grow: hover motion treatment with line expand. Built with Tailwind CSS." title="Underline Grow Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.UnderlineGrowBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Pill Toggle: hover motion treatment with switch slide. Built with Tailwind CSS." title="Pill Toggle Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.PillToggleBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Download Bar: loop motion treatment with progress fill. Built with Tailwind CSS." title="Download Progress Btn" trigger="Loop" codePath="atomic/ButtonVariants"><Buttons.DownloadProgressBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['ecommerce']} compType="element" promptDescription="Cart Add: hover motion treatment with icon tilt. Built with Tailwind CSS." title="Cart Add Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.CartAddBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['media']} compType="element" promptDescription="Play Pause: hover motion treatment with scale interaction. Built with Tailwind CSS." title="Play Pause Morph" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.PlayPauseMorph /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Social Share: hover motion treatment with width expand. Built with Tailwind CSS." title="Social Share Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.SocialShareBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Delete Slide: hover motion treatment with text reveal. Built with Tailwind CSS." title="Delete Confirm Slide" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.DeleteConfirmSlide /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Upload Cloud: hover motion treatment with icon bounce. Built with Tailwind CSS." title="Upload Cloud Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.UploadCloudBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Favorite Heart: click motion treatment with scale pulse. Built with Tailwind CSS." title="Favorite Heart Btn" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.FavoriteHeartBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Pulse Ring: loop motion treatment with radar ping. Built with Tailwind CSS." title="Pulse Ring Btn" trigger="Loop" codePath="atomic/ButtonVariants"><Buttons.PulseRingBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['nav']} compType="element" promptDescription="Swipe Arrow: hover motion treatment with direction hint. Built with Tailwind CSS." title="Swipe Arrow Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.SwipeArrowBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['nav']} compType="element" promptDescription="Burger Menu: hover motion treatment with x morph. Built with Tailwind CSS." title="Burger Menu Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.BurgerMenuBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Copy Clip: click motion treatment with active color. Built with Tailwind CSS." title="Copy Clipboard Btn" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.CopyClipboardBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Theme Toggle: hover motion treatment with switch animation. Built with Tailwind CSS." title="Theme Toggle Btn" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.ThemeToggleBtn /></PlaygroundCard>
</div>
      
      </div>
    </div>
  );
}
