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
  title: "Typography Components for AI & Vibe Coding | Motionary",
  description: "Dynamic Typography components optimized for AI coding tools. Animated text effects, gradient fonts, and modern typographic designs for React apps.",
  keywords: ["react typography","animated text","ai coding","vibe coding","text effects","gradient fonts","modern typography","cursor components"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function TypographyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">03.</span>Typography</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard title="Kinetic" trigger="Hover" codePath="atomic/KineticText" promptDescription="Kinetic: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><KineticText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Typewriter: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Typewriter" trigger="Loop" codePath="atomic/TextVariants"><Text.TypewriterText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Scramble: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Scramble" trigger="Hover" codePath="atomic/TextVariants"><Text.ScrambleText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Gradient: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Gradient" trigger="Loop" codePath="atomic/TextVariants"><Text.GradientText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Stagger: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Stagger" trigger="Hover" codePath="atomic/TextVariants"><Text.StaggerText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Blur Reveal: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Blur Reveal" trigger="Hover" codePath="atomic/TextVariants"><Text.BlurText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Video Mask: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Video Mask" trigger="Loop" codePath="atomic/TextVariants"><Text.VideoText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Rotate 3D: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Rotate 3D" trigger="Hover" codePath="atomic/TextVariants"><Text.RotateText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Wavy: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Wavy" trigger="Loop" codePath="atomic/TextVariants"><Text.WavyText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Glitch: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Glitch" trigger="Hover" codePath="atomic/TextVariants"><Text.GlitchTextEffect /></PlaygroundCard>
                    <PlaygroundCard styleTags={['minimal','modern']} compType="element" promptDescription="Words Fade In: text entrance animation with staggered fade and slide up. Built with Tailwind CSS." title="Words Fade In" trigger="Load" codePath="atomic/TextVariants"><Text.WordsFadeIn /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber','minimal']} compType="element" promptDescription="Char Stagger: hover motion treatment with individual character offset. Built with Tailwind CSS." title="Char Stagger Reveal" trigger="Hover" codePath="atomic/TextVariants"><Text.CharStaggerReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal','glassmorphism']} compType="element" promptDescription="Blur In: hover motion treatment with blur removal. Built with Tailwind CSS." title="Blur In Text" trigger="Hover" codePath="atomic/TextVariants"><Text.BlurInText /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d','modern']} compType="element" promptDescription="Rotate 3D: hover motion treatment with perspective tilt and scale. Built with Tailwind CSS." title="Rotate3 D Text" trigger="Hover" codePath="atomic/TextVariants"><Text.Rotate3DText /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern','minimal']} compType="element" promptDescription="Mask Slide: hover motion treatment with vertical text swap. Built with Tailwind CSS." title="Mask Slide Text" trigger="Hover" codePath="atomic/TextVariants"><Text.MaskSlideText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal','neon']} compType="element" promptDescription="Hover Glow: hover motion treatment with text color and drop-shadow transition. Built with Tailwind CSS." title="Hover Glow Text" trigger="Hover" codePath="atomic/TextVariants"><Text.HoverGlowText /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Text Split: hover motion treatment with vertical split and line reveal. Built with Tailwind CSS." title="Text Split Effect" trigger="Hover" codePath="atomic/TextVariants"><Text.TextSplitEffect /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Magnetic Char: hover motion treatment with character scaling and spacing. Built with Tailwind CSS." title="Magnetic Char Text" trigger="Hover" codePath="atomic/TextVariants"><Text.MagneticCharText /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient','modern']} compType="element" promptDescription="Gradient Flow: loop motion treatment with animated background position gradient. Built with Tailwind CSS." title="Gradient Flow Text" trigger="Loop" codePath="atomic/TextVariants"><Text.GradientFlowText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Underline Fill: hover motion treatment with underline and background fill sequence. Built with Tailwind CSS." title="Underline Fill Text" trigger="Hover" codePath="atomic/TextVariants"><Text.UnderlineFillText /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber','retro']} compType="element" promptDescription="Glitch Decode: hover motion treatment with text swap and pulse. Built with Tailwind CSS." title="Glitch Decode Text" trigger="Hover" codePath="atomic/TextVariants"><Text.GlitchDecodeText /></PlaygroundCard>
            <PlaygroundCard styleTags={['neon','retro']} compType="element" promptDescription="Neon Flicker: hover motion treatment with outline to solid neon fill. Built with Tailwind CSS." title="Neon Flicker Text" trigger="Hover" codePath="atomic/TextVariants"><Text.NeonFlickerText /></PlaygroundCard>
            <PlaygroundCard styleTags={['texture','modern']} compType="element" promptDescription="Texture Mask: hover motion treatment with tracking expansion and noise texture. Built with Tailwind CSS." title="Texture Mask Text" trigger="Hover" codePath="atomic/TextVariants"><Text.TextureMaskText /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern','cyber']} compType="element" promptDescription="Double Layer: hover motion treatment with chromatic aberration split. Built with Tailwind CSS." title="Double Layer Text" trigger="Hover" codePath="atomic/TextVariants"><Text.DoubleLayerText /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro','minimal']} compType="element" promptDescription="Typewriter Loop: loop motion treatment with CSS steps animation. Built with Tailwind CSS." title="Typewriter Loop" trigger="Loop" codePath="atomic/TextVariants"><Text.TypewriterLoop /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Scale Up: load motion treatment with scale and slide entrance. Built with Tailwind CSS." title="Scale Up Reveal" trigger="Load" codePath="atomic/TextVariants"><Text.ScaleUpReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal','modern']} compType="element" promptDescription="Letter Spacing: hover motion treatment with dramatic tracking increase. Built with Tailwind CSS." title="Letter Spacing Text" trigger="Hover" codePath="atomic/TextVariants"><Text.LetterSpacingText /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Highlight Mark: hover motion treatment with skewed background highlight reveal. Built with Tailwind CSS." title="Highlight Mark Text" trigger="Hover" codePath="atomic/TextVariants"><Text.HighlightMarkText /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Skew Hover: hover motion treatment with skew and color change. Built with Tailwind CSS." title="Skew Text Hover" trigger="Hover" codePath="atomic/TextVariants"><Text.SkewTextHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Wave Text: loop motion treatment with staggered bounce animation. Built with Tailwind CSS." title="Wave Text" trigger="Loop" codePath="atomic/TextVariants"><Text.WaveText /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Elastic Text: hover motion treatment with springy bezier curve scale. Built with Tailwind CSS." title="Elastic Text" trigger="Hover" codePath="atomic/TextVariants"><Text.ElasticText /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Outline Fill: hover motion treatment with text stroke to fill transition. Built with Tailwind CSS." title="Outline Fill Text" trigger="Hover" codePath="atomic/TextVariants"><Text.OutlineFillText /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Shadow Pop: hover motion treatment with block shadow projection. Built with Tailwind CSS." title="Text Shadow Pop" trigger="Hover" codePath="atomic/TextVariants"><Text.TextShadowPop /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient','fun']} compType="element" promptDescription="Rainbow Text: hover motion treatment with hue rotation on gradient text. Built with Tailwind CSS." title="Rainbow Text" trigger="Hover" codePath="atomic/TextVariants"><Text.RainbowText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Vertical Scroll: loop motion treatment with vertical word ticker. Built with Tailwind CSS." title="Vertical Scroll Text" trigger="Loop" codePath="atomic/TextVariants"><Text.VerticalScrollText /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Clip Path: hover motion treatment with geometric clipping. Built with Tailwind CSS." title="Clip Path Text" trigger="Hover" codePath="atomic/TextVariants"><Text.ClipPathText /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Mirror Bottom: hover motion treatment with water reflection effect. Built with Tailwind CSS." title="Mirror Text Bottom" trigger="Hover" codePath="atomic/TextVariants"><Text.MirrorTextBottom /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Vibrate: hover motion treatment with rapid shake/spin. Built with Tailwind CSS." title="Vibrate Text" trigger="Hover" codePath="atomic/TextVariants"><Text.VibrateText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Focus Blur: hover motion treatment with blur to sharp focus. Built with Tailwind CSS." title="Focus Blur Text" trigger="Hover" codePath="atomic/TextVariants"><Text.FocusBlurText /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Perspective Text: hover motion treatment with side perspective straighten. Built with Tailwind CSS." title="Perspective Text" trigger="Hover" codePath="atomic/TextVariants"><Text.PerspectiveText /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Marquee Scroll: loop motion treatment with scrolling text. Built with Tailwind CSS." title="Marquee Scroll" trigger="Loop" codePath="atomic/TextVariants"><Text.MarqueeScroll /></PlaygroundCard>
            <PlaygroundCard styleTags={['experimental']} compType="element" promptDescription="Wave Text: loop motion treatment with distortion. Built with Tailwind CSS." title="Text Path Wave" trigger="Loop" codePath="atomic/TextVariants"><Text.TextPathWave /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Elastic Letters: hover motion treatment with individual char bounce. Built with Tailwind CSS." title="Elastic Letters" trigger="Hover" codePath="atomic/TextVariants"><Text.ElasticLetters /></PlaygroundCard>
            <PlaygroundCard styleTags={['badge']} compType="element" promptDescription="Circle Text: loop motion treatment with SVG path text. Built with Tailwind CSS." title="Circle Text Spin" trigger="Loop" codePath="atomic/TextVariants"><Text.CircleTextSpin /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Glitch Decode: hover motion treatment with cypher text. Built with Tailwind CSS." title="Glitch Decode" trigger="Hover" codePath="atomic/TextVariants"><Text.GlitchDecodeText /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Gradient Flow: loop motion treatment with continuous color shift. Built with Tailwind CSS." title="Gradient Flow Text" trigger="Loop" codePath="atomic/TextVariants"><Text.GradientFlowText /></PlaygroundCard>
            <PlaygroundCard styleTags={['texture']} compType="element" promptDescription="Texture Mask: hover motion treatment with image background clip. Built with Tailwind CSS." title="Texture Mask Text" trigger="Hover" codePath="atomic/TextVariants"><Text.TextureMaskText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Stroke Draw: load motion treatment with outline fill. Built with Tailwind CSS." title="Stroke Draw Text" trigger="Load" codePath="atomic/TextVariants"><Text.StrokeDrawText /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Isometric Text: hover motion treatment with 3D projection. Built with Tailwind CSS." title="Isometric Text" trigger="Hover" codePath="atomic/TextVariants"><Text.IsometricText /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Perspective Flip: hover motion treatment with vertical rotate. Built with Tailwind CSS." title="Perspective Flip Text" trigger="Hover" codePath="atomic/TextVariants"><Text.PerspectiveFlipText /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Floating Words: loop motion treatment with independent bobbing. Built with Tailwind CSS." title="Floating Words" trigger="Loop" codePath="atomic/TextVariants"><Text.FloatingWords /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Depth Layer: hover motion treatment with chromatic separation. Built with Tailwind CSS." title="Depth Layer Text" trigger="Hover" codePath="atomic/TextVariants"><Text.DepthLayerText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Hover Spacing: hover motion treatment with letter spacing grow. Built with Tailwind CSS." title="Hover Spacing" trigger="Hover" codePath="atomic/TextVariants"><Text.HoverSpacing /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Spotlight Text: hover motion treatment with fill reveal. Built with Tailwind CSS." title="Cursor Spotlight Text" trigger="Hover" codePath="atomic/TextVariants"><Text.CursorSpotlightText /></PlaygroundCard>
            <PlaygroundCard styleTags={['typography']} compType="element" promptDescription="Variable Weight: hover motion treatment with font weight shift. Built with Tailwind CSS." title="Variable Weight" trigger="Hover" codePath="atomic/TextVariants"><Text.VariableWeight /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Magnetic Text: hover motion treatment (simulated) with cursor pull. Built with Tailwind CSS." title="Magnetic Text" trigger="Hover" codePath="atomic/TextVariants"><Text.MagneticText /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Underline Sweep: hover motion treatment with directional line. Built with Tailwind CSS." title="Underline Sweep" trigger="Hover" codePath="atomic/TextVariants"><Text.UnderlineSweep /></PlaygroundCard>
            <PlaygroundCard styleTags={['creative']} compType="element" promptDescription="Box Highlight: hover motion treatment with marker style. Built with Tailwind CSS." title="Box Highlight Text" trigger="Hover" codePath="atomic/TextVariants"><Text.BoxHighlightText /></PlaygroundCard>
            <PlaygroundCard styleTags={['data']} compType="element" promptDescription="Vertical Ticker: loop motion treatment with step scroll. Built with Tailwind CSS." title="Vertical Ticker" trigger="Loop" codePath="atomic/TextVariants"><Text.VerticalTicker /></PlaygroundCard>
            <PlaygroundCard styleTags={['typography']} compType="element" promptDescription="Skew Italic: hover motion treatment with style morph. Built with Tailwind CSS." title="Skew Italic" trigger="Hover" codePath="atomic/TextVariants"><Text.SkewItalic /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Blur Reveal: hover motion treatment with unblur. Built with Tailwind CSS." title="Blur In Text" trigger="Hover" codePath="atomic/TextVariants"><Text.BlurInText /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Strikethrough: hover motion treatment with line cross. Built with Tailwind CSS." title="Strikethrough Hover" trigger="Hover" codePath="atomic/TextVariants"><Text.StrikethroughHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['neon']} compType="element" promptDescription="Neon Glow: hover motion treatment with light intensity. Built with Tailwind CSS." title="Neon Glow Text" trigger="Hover" codePath="atomic/TextVariants"><Text.NeonGlowText /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="Multiline Type: load motion treatment with sequenced typing. Built with Tailwind CSS." title="Typewriter Multiline" trigger="Load" codePath="atomic/TextVariants"><Text.TypewriterMultiline /></PlaygroundCard>
            <PlaygroundCard styleTags={['experimental']} compType="element" promptDescription="Vertical Rotate: hover motion treatment with orientation flip. Built with Tailwind CSS." title="Vertical Text Rotate" trigger="Hover" codePath="atomic/TextVariants"><Text.VerticalTextRotate /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Mirror Text: hover motion treatment with reflection fade. Built with Tailwind CSS." title="Mirror Text" trigger="Hover" codePath="atomic/TextVariants"><Text.MirrorTextBottom /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Text Scatter: hover motion treatment with chaotic dispersion. Built with Tailwind CSS." title="Text Scatter" trigger="Hover" codePath="atomic/TextVariants"><Text.TextScatter /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Gradient Border: hover motion treatment with outline fade. Built with Tailwind CSS." title="Gradient Border Text" trigger="Hover" codePath="atomic/TextVariants"><Text.GradientBorderText /></PlaygroundCard>
            <PlaygroundCard styleTags={['alert']} compType="element" promptDescription="Countdown Ping: load motion treatment (simulated) with number flash. Built with Tailwind CSS." title="Countdown Number" trigger="Load" codePath="atomic/TextVariants"><Text.CountdownNumber /></PlaygroundCard>
            <PlaygroundCard styleTags={['creative']} compType="element" promptDescription="Highlight Pen: hover motion treatment with marker swipe. Built with Tailwind CSS." title="Text Highlight Pen" trigger="Hover" codePath="atomic/TextVariants"><Text.TextHighlightPen /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="Code Block: loop motion treatment with terminal output. Built with Tailwind CSS." title="Code Block Typing" trigger="Loop" codePath="atomic/TextVariants"><Text.CodeBlockTyping /></PlaygroundCard>
            <PlaygroundCard styleTags={['classic']} compType="element" promptDescription="Drop Cap: loop motion treatment with bouncing initial. Built with Tailwind CSS." title="Drop Cap Anim" trigger="Loop" codePath="atomic/TextVariants"><Text.DropCapAnim /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Fade Chars: load motion treatment with sequential opacity. Built with Tailwind CSS." title="Fade In Chars" trigger="Load" codePath="atomic/TextVariants"><Text.FadeInChars /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Rainbow Hover: hover motion treatment with spectrum fill. Built with Tailwind CSS." title="Rainbow Text Hover" trigger="Hover" codePath="atomic/TextVariants"><Text.RainbowTextHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['feedback']} compType="element" promptDescription="Text Shake: hover motion treatment with error vibration. Built with Tailwind CSS." title="Text Shake Error" trigger="Hover" codePath="atomic/TextVariants"><Text.TextShakeError /></PlaygroundCard>
</div>
      
      </div>
    </div>
  );
}
