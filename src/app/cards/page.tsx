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
  title: "React Cards for AI & Vibe Coding | Motionary",
  description: "Beautiful Card components for AI-assisted development. Copy-paste React & Tailwind cards with animations, hover effects, and responsive design.",
  keywords: ["react cards","tailwind cards","ai generated cards","vibe coding","ui cards","animated cards","responsive design","component library"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function CardsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-secondary mr-4 font-mono text-2xl">02.</span>Cards</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="3D Flip: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="3D Flip" trigger="Hover" codePath="atomic/CardVariants"><Cards.FlipCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Glow Border: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Glow Border" trigger="Hover" codePath="atomic/CardVariants"><Cards.GlowCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Parallax Tilt: mouse motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Parallax Tilt" trigger="Mouse" codePath="atomic/CardVariants"><Cards.TiltCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Slide Reveal: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Slide Reveal" trigger="Hover" codePath="atomic/CardVariants"><Cards.RevealCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Glassmorphism: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Glassmorphism" trigger="Static" codePath="atomic/CardVariants"><Cards.GlassCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Curtain Drop: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Curtain Drop" trigger="Hover" codePath="atomic/CardVariants"><Cards.CurtainCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Stacking: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Stacking" trigger="Hover" codePath="atomic/CardVariants"><Cards.StackCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Pattern Slide: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Pattern Slide" trigger="Hover" codePath="atomic/CardVariants"><Cards.PatternCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Border Beam: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Border Beam" trigger="Loop" codePath="atomic/CardVariants"><Cards.BorderBeamCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Floating Icon: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Floating Icon" trigger="Hover" codePath="atomic/CardVariants"><Cards.FloatingIconCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Noise Texture: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Noise Texture" trigger="Hover" codePath="atomic/CardVariants"><Cards.NoiseCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Spotlight Gradient: mouse motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Spotlight Gradient" trigger="Mouse" codePath="atomic/CardVariants"><Cards.SpotlightGradientCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Directional: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Directional" trigger="Hover" codePath="atomic/CardVariants"><Cards.DirectionalCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Zoom Background: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Zoom Background" trigger="Hover" codePath="atomic/CardVariants"><Cards.ZoomBgCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Blob Morph: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Blob Morph" trigger="Loop" codePath="atomic/CardVariants"><Cards.BlobMorphCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Perspective Skew: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Perspective Skew" trigger="Hover" codePath="atomic/CardVariants"><Cards.SkewCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Content Slide: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Content Slide" trigger="Hover" codePath="atomic/CardVariants"><Cards.SlideUpCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Glitch Border: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Glitch Border" trigger="Hover" codePath="atomic/CardVariants"><Cards.GlitchBorderCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Magnetic Element: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Magnetic Element" trigger="Hover" codePath="atomic/CardVariants"><Cards.MagneticElementCard /></PlaygroundCard>
           <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Video Hover: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Video Hover" trigger="Hover" codePath="atomic/CardVariants"><Cards.VideoHoverCard /></PlaygroundCard>
                    <PlaygroundCard styleTags={['3d','glassmorphism']} compType="element" promptDescription="Holo Tilt: mouse motion treatment with 3D perspective tilt and shine. Built with Tailwind CSS." title="Holo Tilt Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.HoloTiltCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d','modern']} compType="element" promptDescription="Depth Map: hover motion treatment with radial gradient depth feel. Built with Tailwind CSS." title="Depth Map Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.DepthMapCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern','minimal']} compType="element" promptDescription="Layered Parallax: hover motion treatment with floating background blobs. Built with Tailwind CSS." title="Layered Parallax Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.LayeredParallaxCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber','neon']} compType="element" promptDescription="Neon Frame: hover motion treatment with rotating border gradient. Built with Tailwind CSS." title="Neon Frame Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.NeonFrameCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro','3d']} compType="element" promptDescription="Iso Stack: hover motion treatment with multi-layer isometric stack expansion. Built with Tailwind CSS." title="Iso Stack Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.IsoStackCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Frosted Pane: hover motion treatment with backdrop blur overlay. Built with Tailwind CSS." title="Frosted Pane Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.FrostedPaneCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Blur Overlay: hover motion treatment with full card blur and button reveal. Built with Tailwind CSS." title="Blur Overlay Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.BlurOverlayCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism','minimal']} compType="element" promptDescription="Crystal Edge: hover motion treatment with divider line expansion. Built with Tailwind CSS." title="Crystal Edge Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.CrystalEdgeCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Glacier: hover motion treatment with icy gradient overlay. Built with Tailwind CSS." title="Glacier Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.GlacierCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism','gradient']} compType="element" promptDescription="Prism Refract: hover motion treatment with multi-color gradient shimmer. Built with Tailwind CSS." title="Prism Refract Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.PrismRefractCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['bento','modern']} compType="element" promptDescription="Bento Box: hover motion treatment with grid item scaling and color shift. Built with Tailwind CSS." title="Bento Box Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.BentoBoxCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['bento','minimal']} compType="element" promptDescription="Grid Reveal: hover motion treatment with interactive grid cells. Built with Tailwind CSS." title="Grid Reveal Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.GridRevealCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['bento','modern']} compType="element" promptDescription="Tile Expand: hover motion treatment with flex-grow expansion. Built with Tailwind CSS." title="Tile Expand Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.TileExpandCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal','modern']} compType="element" promptDescription="Stat Card: hover motion treatment with scaling and text color shift. Built with Tailwind CSS." title="Stat Card Metric" trigger="Hover" codePath="atomic/CardVariants"><Cards.StatCardMetric /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Profile Card: hover motion treatment with avatar rotation. Built with Tailwind CSS." title="Profile Card Mini" trigger="Hover" codePath="atomic/CardVariants"><Cards.ProfileCardMini /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Video Preview: hover motion treatment with play button scale and overlay lighten. Built with Tailwind CSS." title="Video Preview Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.VideoPreviewCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern','minimal']} compType="element" promptDescription="Album Art: hover motion treatment with vinyl/cover offset. Built with Tailwind CSS." title="Album Art Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.AlbumArtCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Live Indicator: hover motion treatment with pulsing badge. Built with Tailwind CSS." title="Live Indicator Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.LiveIndicatorCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['mobile','interaction']} compType="element" promptDescription="Swipe Action: hover motion treatment with slide-to-reveal action. Built with Tailwind CSS." title="Swipe Action Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.SwipeActionCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern','interaction']} compType="element" promptDescription="Expand Detail: hover motion treatment with height expansion. Built with Tailwind CSS." title="Expand Detail Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.ExpandDetailCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d','interaction']} compType="element" promptDescription="Flip Info: hover motion treatment with 180-degree y-axis flip. Built with Tailwind CSS." title="Flip Info Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.FlipInfoCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern','texture']} compType="element" promptDescription="Noise Gradient: hover motion treatment with grainy texture and mix-blend mode. Built with Tailwind CSS." title="Noise Gradient Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.NoiseGradientCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern','organic']} compType="element" promptDescription="Shape Morph: hover motion treatment with background blob movement and center shape change. Built with Tailwind CSS." title="Shape Morph Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.ShapeMorphCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber','retro']} compType="element" promptDescription="Glitch Card: hover motion treatment with rapid color overlay shifts. Built with Tailwind CSS." title="Glitch Card Effect" trigger="Hover" codePath="atomic/CardVariants"><Cards.GlitchCardEffect /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Hollow Card: hover motion treatment with dashed to solid border transition. Built with Tailwind CSS." title="Hollow Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.HollowCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism','modern']} compType="element" promptDescription="Glass Credit Card: hover motion treatment with shine sweep and backdrop blur. Built with Tailwind CSS." title="Glass Credit Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.GlassCreditCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Feature List: hover motion treatment with staggered list item slide. Built with Tailwind CSS." title="Feature List Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.FeatureListCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern','ecommerce']} compType="element" promptDescription="Pricing Tier: hover motion treatment with scale up and button color change. Built with Tailwind CSS." title="Pricing Tier Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.PricingTierCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Notification Stack: hover motion treatment with stacked cards depth. Built with Tailwind CSS." title="Notification Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.NotificationCard /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal','cyber']} compType="element" promptDescription="Code Snippet: hover motion treatment with syntax highlight shift. Built with Tailwind CSS." title="Code Snippet Card" trigger="Hover" codePath="atomic/CardVariants"><Cards.CodeSnippetCard /></PlaygroundCard>
</div>
      
      </div>
    </div>
  );
}
