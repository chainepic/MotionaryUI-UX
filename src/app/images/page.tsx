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
  title: "Image Components for AI & Vibe Coding | Motionary",
  description: "Image and Gallery components with hover effects and animations. Optimized for AI coding workflows and modern responsive design.",
  keywords: ["react images","image galleries","ai coding","vibe coding","hover effects","responsive images","animated galleries","ui images"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function ImagesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">11.</span>Images</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Zoom Hover: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Zoom Hover" trigger="Hover" codePath="atomic/ImageVariants"><Images.ImageZoom /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="B&W to Color: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="B&W to Color" trigger="Hover" codePath="atomic/ImageVariants"><Images.GrayToColor /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Blur Reveal: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Blur Reveal" trigger="Hover" codePath="atomic/ImageVariants"><Images.BlurRevealImage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Slide Caption: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Slide Caption" trigger="Hover" codePath="atomic/ImageVariants"><Images.SlideCaption /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Ken Burns: auto motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Ken Burns" trigger="Auto" codePath="atomic/ImageVariants"><Images.KenBurns /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="3D Tilt: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="3D Tilt" trigger="Hover" codePath="atomic/ImageVariants"><Images.TiltImage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Glitch: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Glitch" trigger="Hover" codePath="atomic/ImageVariants"><Images.GlitchImage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Circle Reveal: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Circle Reveal" trigger="Hover" codePath="atomic/ImageVariants"><Images.CircleReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Before/After: drag motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Before/After" trigger="Drag" codePath="atomic/ImageVariants"><Images.BeforeAfter /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Polaroid Stack: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Polaroid Stack" trigger="Hover" codePath="atomic/ImageVariants"><Images.PolaroidStack /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Reflection: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Reflection" trigger="Hover" codePath="atomic/ImageVariants"><Images.ReflectionImage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Parallax: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Parallax" trigger="Hover" codePath="atomic/ImageVariants"><Images.ParallaxHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Pixelate: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Pixelate" trigger="Hover" codePath="atomic/ImageVariants"><Images.PixelateImage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Overlay Fade: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Overlay Fade" trigger="Hover" codePath="atomic/ImageVariants"><Images.OverlayFade /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Border Draw: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Border Draw" trigger="Hover" codePath="atomic/ImageVariants"><Images.BorderDrawImage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Rotate In: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Rotate In" trigger="Hover" codePath="atomic/ImageVariants"><Images.RotateInImage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Split Clip: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Split Clip" trigger="Hover" codePath="atomic/ImageVariants"><Images.SplitImage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Gallery Stack: auto motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Gallery Stack" trigger="Auto" codePath="atomic/ImageVariants"><Images.GalleryStack /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Ink Spread: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Ink Spread" trigger="Hover" codePath="atomic/ImageVariants"><Images.InkSpread /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Lens Flare: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Lens Flare" trigger="Hover" codePath="atomic/ImageVariants"><Images.LensFlare /></PlaygroundCard>
                    <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Lens Zoom: hover motion treatment with magnifying scale. Built with Tailwind CSS." title="Lens Zoom" trigger="Hover" codePath="atomic/ImageVariants"><Images.LensZoom /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Colorize: hover motion treatment with grayscale to color shift. Built with Tailwind CSS." title="Colorize Hover" trigger="Hover" codePath="atomic/ImageVariants"><Images.ColorizeHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['cinematic']} compType="element" promptDescription="Directional Pan: hover motion treatment with image movement within frame. Built with Tailwind CSS." title="Directional Pan" trigger="Hover" codePath="atomic/ImageVariants"><Images.DirectionalPan /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Split Reveal: hover motion treatment with curtain opening effect. Built with Tailwind CSS." title="Split Reveal" trigger="Hover" codePath="atomic/ImageVariants"><Images.SplitReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Overlay Slide: hover motion treatment with cover slide up. Built with Tailwind CSS." title="Overlay Slide" trigger="Hover" codePath="atomic/ImageVariants"><Images.OverlaySlide /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Masonry Fade: load motion treatment with staggered grid entrance. Built with Tailwind CSS." title="Masonry Fade" trigger="Load" codePath="atomic/ImageVariants"><Images.MasonryFade /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Carousel Slide: loop motion treatment with continuous horizontal scroll. Built with Tailwind CSS." title="Carousel Slide" trigger="Loop" codePath="atomic/ImageVariants"><Images.CarouselSlide /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Lightbox Trigger: hover motion treatment with zoom icon reveal. Built with Tailwind CSS." title="Lightbox Trigger" trigger="Hover" codePath="atomic/ImageVariants"><Images.LightboxTrigger /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Grid Shuffle: hover motion treatment with tile swap animation. Built with Tailwind CSS." title="Grid Shuffle" trigger="Hover" codePath="atomic/ImageVariants"><Images.GridShuffle /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Stack Fan: hover motion treatment with card deck spread. Built with Tailwind CSS." title="Stack Fan" trigger="Hover" codePath="atomic/ImageVariants"><Images.StackFan /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Before After Vertical: hover motion treatment with vertical wipe. Built with Tailwind CSS." title="Before After Vertical" trigger="Hover" codePath="atomic/ImageVariants"><Images.BeforeAfterVertical /></PlaygroundCard>
            <PlaygroundCard styleTags={['e-commerce']} compType="element" promptDescription="Image Hotspot: hover motion treatment with pulsing dot and tooltip. Built with Tailwind CSS." title="Image Hotspot" trigger="Hover" codePath="atomic/ImageVariants"><Images.ImageHotspot /></PlaygroundCard>
            <PlaygroundCard styleTags={['cinematic']} compType="element" promptDescription="Ken Burns Pan: loop motion treatment with slow scale and pan. Built with Tailwind CSS." title="Ken Burns Pan" trigger="Loop" codePath="atomic/ImageVariants"><Images.KenBurnsPan /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Image Tilt 3D: hover motion treatment with perspective rotation. Built with Tailwind CSS." title="Image Tilt3 D" trigger="Hover" codePath="atomic/ImageVariants"><Images.ImageTilt3D /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Glitch Image Loop: loop motion treatment with chromatic offset. Built with Tailwind CSS." title="Glitch Image Loop" trigger="Loop" codePath="atomic/ImageVariants"><Images.GlitchImageLoop /></PlaygroundCard>
            <PlaygroundCard styleTags={['artistic']} compType="element" promptDescription="Duotone Filter: hover motion treatment with color overlay removal. Built with Tailwind CSS." title="Duotone Filter" trigger="Hover" codePath="atomic/ImageVariants"><Images.DuotoneFilter /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Blur To Sharp: hover motion treatment with focus transition. Built with Tailwind CSS." title="Blur To Sharp" trigger="Hover" codePath="atomic/ImageVariants"><Images.BlurToSharp /></PlaygroundCard>
            <PlaygroundCard styleTags={['experimental']} compType="element" promptDescription="Invert Hover: hover motion treatment with negative color flip. Built with Tailwind CSS." title="Invert Hover" trigger="Hover" codePath="atomic/ImageVariants"><Images.InvertHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Sepia Fade: hover motion treatment with vintage to modern color. Built with Tailwind CSS." title="Sepia Fade" trigger="Hover" codePath="atomic/ImageVariants"><Images.SepiaFade /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Pixelate Reveal: hover motion treatment (simulated) with sharp transition. Built with Tailwind CSS." title="Pixelate Reveal" trigger="Hover" codePath="atomic/ImageVariants"><Images.PixelateReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Caption Up: hover motion treatment with gradient and text slide. Built with Tailwind CSS." title="Image Caption Up" trigger="Hover" codePath="atomic/ImageVariants"><Images.ImageCaptionUp /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Border Frame: hover motion treatment with outline scale. Built with Tailwind CSS." title="Border Frame" trigger="Hover" codePath="atomic/ImageVariants"><Images.BorderFrame /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Shine Sweep: hover motion treatment with light reflection pass. Built with Tailwind CSS." title="Shine Sweep" trigger="Hover" codePath="atomic/ImageVariants"><Images.ShineSweep /></PlaygroundCard>
            <PlaygroundCard styleTags={['experimental']} compType="element" promptDescription="Circle Clip: hover motion treatment with circular reveal mask. Built with Tailwind CSS." title="Circle Clip Expand" trigger="Hover" codePath="atomic/ImageVariants"><Images.CircleClipExpand /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Saturate Hover: hover motion treatment with color intensity boost. Built with Tailwind CSS." title="Saturate Hover" trigger="Hover" codePath="atomic/ImageVariants"><Images.SaturateHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['texture']} compType="element" promptDescription="Pattern Reveal: hover motion treatment with texture fade out. Built with Tailwind CSS." title="Pattern Reveal" trigger="Hover" codePath="atomic/ImageVariants"><Images.PatternReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Skew Pan: hover motion treatment with distortion move. Built with Tailwind CSS." title="Skew Pan" trigger="Hover" codePath="atomic/ImageVariants"><Images.SkewPan /></PlaygroundCard>
            <PlaygroundCard styleTags={['media']} compType="element" promptDescription="Video Play: hover motion treatment with button scale. Built with Tailwind CSS." title="Video Play Preview" trigger="Hover" codePath="atomic/ImageVariants"><Images.VideoPlayPreview /></PlaygroundCard>
            <PlaygroundCard styleTags={['cinematic']} compType="element" promptDescription="Vignette Focus: hover motion treatment with light opening up. Built with Tailwind CSS." title="Vignette Focus" trigger="Hover" codePath="atomic/ImageVariants"><Images.VignetteFocus /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Parallax Scroll: hover motion treatment with vertical image panning. Built with Tailwind CSS." title="Parallax Scroll Mock" trigger="Hover" codePath="atomic/ImageVariants"><Images.ParallaxScrollMock /></PlaygroundCard>
</div>
       
      </div>
    </div>
  );
}
