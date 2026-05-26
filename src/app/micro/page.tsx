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
  title: "Micro-Interactions for AI & Vibe Coding | Motionary",
  description: "Micro-Interaction components for detailed UI polish. Hover states, click feedback, and subtle animations optimized for AI coding workflows.",
  keywords: ["micro interactions","ui animations","ai coding","vibe coding","hover states","click feedback","subtle animations","react components"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function MicroPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">17.</span>Micro-Interaction</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard title="Day/Night" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Day/Night: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.DayNightToggle /></PlaygroundCard>
            <PlaygroundCard title="Elastic Switch" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Elastic Switch: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.ElasticToggle /></PlaygroundCard>
            <PlaygroundCard title="Check Draw" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Check Draw: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.CheckDraw /></PlaygroundCard>
            <PlaygroundCard title="Heart Pop" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Heart Pop: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.LikeButton /></PlaygroundCard>
            <PlaygroundCard title="Star Rating" trigger="Hover" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Star Rating: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.StarRating /></PlaygroundCard>
            <PlaygroundCard title="Volume" trigger="Drag" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Volume: drag motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.VolumeSlider /></PlaygroundCard>
            <PlaygroundCard title="Trash Delete" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Trash Delete: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.TrashDelete /></PlaygroundCard>
            <PlaygroundCard title="Share Fan" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Share Fan: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.ShareFan /></PlaygroundCard>
            <PlaygroundCard title="More Options" trigger="Hover" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="More Options: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.MoreOptions /></PlaygroundCard>
            <PlaygroundCard title="Circular Slider" trigger="Static" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Circular Slider: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.CircularSlider /></PlaygroundCard>
            <PlaygroundCard title="Download" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Download: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.DownloadButton /></PlaygroundCard>
            <PlaygroundCard title="Copy Icon" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Copy Icon: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.CopyIcon /></PlaygroundCard>
            <PlaygroundCard title="Drag Handle" trigger="Hover" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Drag Handle: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.DragHandle /></PlaygroundCard>
            <PlaygroundCard title="Swipe Switch" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Swipe Switch: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.SwipeSwitch /></PlaygroundCard>
            <PlaygroundCard title="Reactions" trigger="Hover" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Reactions: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.ReactionPicker /></PlaygroundCard>
            <PlaygroundCard title="Accordion" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Accordion: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.AccordionChevron /></PlaygroundCard>
            <PlaygroundCard title="Upload Ring" trigger="Auto" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Upload Ring: auto motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.UploadRing /></PlaygroundCard>
            <PlaygroundCard title="Pin" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Pin: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.PinToggle /></PlaygroundCard>
            <PlaygroundCard title="Brightness" trigger="Static" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Brightness: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.BrightnessControl /></PlaygroundCard>
            <PlaygroundCard title="Confetti" trigger="Click" codePath="atomic/MicroVariants" styleTags={MICRO_STYLE} compType="animation" promptDescription="Confetti: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name."><Micro.ConfettiBtn /></PlaygroundCard>
                    <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Delete Shred: hover motion treatment with paper shredder. Built with Tailwind CSS." title="Delete Shred" trigger="Hover" codePath="atomic/MicroVariants"><Micro.DeleteShred /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Download Progress: click motion treatment with button fill. Built with Tailwind CSS." title="Download Progress Btn" trigger="Click" codePath="atomic/MicroVariants"><Micro.DownloadProgressBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Upload Cloud: hover motion treatment with arrow launch. Built with Tailwind CSS." title="Upload Cloud Icon" trigger="Hover" codePath="atomic/MicroVariants"><Micro.UploadCloudIcon /></PlaygroundCard>
            <PlaygroundCard styleTags={['form']} compType="element" promptDescription="Save Check: click motion treatment with checkbox confirmation. Built with Tailwind CSS." title="Save Check Mark" trigger="Click" codePath="atomic/MicroVariants"><Micro.SaveCheckMark /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Warning Pulse: loop motion treatment with attention ping. Built with Tailwind CSS." title="Warning Pulse Icon" trigger="Loop" codePath="atomic/MicroVariants"><Micro.WarningPulseIcon /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Success Confetti: click motion treatment with particle burst. Built with Tailwind CSS." title="Success Confetti Btn" trigger="Click" codePath="atomic/MicroVariants"><Micro.SuccessConfettiBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['alert']} compType="element" promptDescription="Info Toast: load motion treatment with slide entrance. Built with Tailwind CSS." title="Info Toast Slide" trigger="Load" codePath="atomic/MicroVariants"><Micro.InfoToastSlide /></PlaygroundCard>
            <PlaygroundCard styleTags={['form']} compType="element" promptDescription="Error Shake: hover motion treatment with validation fail. Built with Tailwind CSS." title="Error Shake Input" trigger="Hover" codePath="atomic/MicroVariants"><Micro.ErrorShakeInput /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Gooey Switch: click motion treatment with elastic knob. Built with Tailwind CSS." title="Switch Gooey" trigger="Click" codePath="atomic/MicroVariants"><Micro.SwitchGooey /></PlaygroundCard>
            <PlaygroundCard styleTags={['form']} compType="element" promptDescription="Radio Wave: click motion treatment with ripple selection. Built with Tailwind CSS." title="Radio Wave Select" trigger="Click" codePath="atomic/MicroVariants"><Micro.RadioWaveSelect /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Checkbox Morph: click motion treatment with rotation and fill. Built with Tailwind CSS." title="Checkbox Morph Check" trigger="Click" codePath="atomic/MicroVariants"><Micro.CheckboxMorphCheck /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Pill Slide: hover motion treatment (simulated) with background shift. Built with Tailwind CSS." title="Toggle Pill Slide" trigger="Hover" codePath="atomic/MicroVariants"><Micro.TogglePillSlide /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Menu Burger X: hover motion treatment with close transformation. Built with Tailwind CSS." title="Menu Burger X" trigger="Hover" codePath="atomic/MicroVariants"><Micro.MenuBurgerX /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Tab Slide Under: hover motion treatment with indicator movement. Built with Tailwind CSS." title="Tab Slide Under" trigger="Hover" codePath="atomic/MicroVariants"><Micro.TabSlideUnder /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Dot Jump: loop motion treatment with active page bounce. Built with Tailwind CSS." title="Pagination Dot Jump" trigger="Loop" codePath="atomic/MicroVariants"><Micro.PaginationDotJump /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Breadcrumb Hover: hover motion treatment with text highlight. Built with Tailwind CSS." title="Breadcrumb Hover" trigger="Hover" codePath="atomic/MicroVariants"><Micro.BreadcrumbHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Search Expand: hover motion treatment with input reveal. Built with Tailwind CSS." title="Search Expand Bar" trigger="Hover" codePath="atomic/MicroVariants"><Micro.SearchExpandBar /></PlaygroundCard>
            <PlaygroundCard styleTags={['utility']} compType="element" promptDescription="Copy Feedback: click motion treatment with text swap. Built with Tailwind CSS." title="Copy Feedback" trigger="Click" codePath="atomic/MicroVariants"><Micro.CopyFeedback /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Drag Handle: hover motion treatment with grip dots. Built with Tailwind CSS." title="Drag Handle Dots" trigger="Hover" codePath="atomic/MicroVariants"><Micro.DragHandleDots /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Like Explode: click motion treatment with heart burst. Built with Tailwind CSS." title="Like Heart Explode" trigger="Click" codePath="atomic/MicroVariants"><Micro.LikeHeartExplode /></PlaygroundCard>
            <PlaygroundCard styleTags={['alert']} compType="element" promptDescription="Bell Shake: hover motion treatment with notification ring. Built with Tailwind CSS." title="Notification Bell Shake" trigger="Hover" codePath="atomic/MicroVariants"><Micro.NotificationBellShake /></PlaygroundCard>
            <PlaygroundCard styleTags={['utility']} compType="element" promptDescription="Sort Arrow: hover motion treatment with direction flip. Built with Tailwind CSS." title="Sort Asc Desc" trigger="Hover" codePath="atomic/MicroVariants"><Micro.SortAscDesc /></PlaygroundCard>
            <PlaygroundCard styleTags={['feedback']} compType="element" promptDescription="Rating Fill: hover motion treatment with star trail. Built with Tailwind CSS." title="Rating Stars Fill" trigger="Hover" codePath="atomic/MicroVariants"><Micro.RatingStarsFill /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Filter Close: hover motion treatment with remove hint. Built with Tailwind CSS." title="Filter Tag Close" trigger="Hover" codePath="atomic/MicroVariants"><Micro.FilterTagClose /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Refresh Pull: hover motion treatment with reload spin. Built with Tailwind CSS." title="Refresh Pull" trigger="Hover" codePath="atomic/MicroVariants"><Micro.RefreshPull /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Tooltip Fade: hover motion treatment with slight rise. Built with Tailwind CSS." title="Tooltip Fade Up" trigger="Hover" codePath="atomic/MicroVariants"><Micro.TooltipFadeUp /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Avatar Group: hover motion treatment with stack expansion. Built with Tailwind CSS." title="Avatar Group Hover" trigger="Hover" codePath="atomic/MicroVariants"><Micro.AvatarGroupHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="More Dots: hover motion treatment with active state. Built with Tailwind CSS." title="More Menu Dots" trigger="Hover" codePath="atomic/MicroVariants"><Micro.MoreMenuDots /></PlaygroundCard>
            <PlaygroundCard styleTags={['utility']} compType="element" promptDescription="Pin Toggle: click motion treatment with press feedback. Built with Tailwind CSS." title="Pin Toggle Switch" trigger="Click" codePath="atomic/MicroVariants"><Micro.PinToggleSwitch /></PlaygroundCard>
            <PlaygroundCard styleTags={['form']} compType="element" promptDescription="Color Swatch: hover motion treatment with selection ring. Built with Tailwind CSS." title="Color Swatch Select" trigger="Hover" codePath="atomic/MicroVariants"><Micro.ColorSwatchSelect /></PlaygroundCard>
</div>
       
      </div>
    </div>
  );
}
