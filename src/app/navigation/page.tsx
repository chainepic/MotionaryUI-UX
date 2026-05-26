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
  title: "Navigation Components for AI & Vibe Coding | Motionary",
  description: "Modern Navigation components for AI-assisted development. Menus, breadcrumbs, and nav bars with smooth animations and interactive effects.",
  keywords: ["react navigation","ui menus","ai generated nav","vibe coding","animated menus","interactive navigation","responsive nav","component library"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function NavigationPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">04.</span>Navigation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Underline: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Underline" trigger="Hover" codePath="atomic/NavVariants"><Nav.UnderlineNav /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Pill Toggle: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Pill Toggle" trigger="Click" codePath="atomic/NavVariants"><Nav.PillNav /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Mac Dock: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Mac Dock" trigger="Hover" codePath="atomic/NavVariants"><Nav.DockMenu /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Sidebar Expand: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Sidebar Expand" trigger="Hover" codePath="atomic/NavVariants"><Nav.SidebarExpand /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Circular: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Circular" trigger="Click" codePath="atomic/NavVariants"><Nav.CircularMenu /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Stagger Drop: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Stagger Drop" trigger="Hover" codePath="atomic/NavVariants"><Nav.StaggerDropdown /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Tab Slide: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Tab Slide" trigger="Click" codePath="atomic/NavVariants"><Nav.TabIndicator /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Morph Burger: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Morph Burger" trigger="Click" codePath="atomic/NavVariants"><Nav.MorphingBurger /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Gooey: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Gooey" trigger="Click" codePath="atomic/NavVariants"><Nav.GooeyMenu /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Full Reveal: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Full Reveal" trigger="Click" codePath="atomic/NavVariants"><Nav.FullscreenReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Magnetic Link: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Magnetic Link" trigger="Hover" codePath="atomic/NavVariants"><Nav.MagneticLink /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Breadcrumb: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Breadcrumb" trigger="Hover" codePath="atomic/NavVariants"><Nav.Breadcrumb /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Steps: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Steps" trigger="Static" codePath="atomic/NavVariants"><Nav.StepNav /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Icon Bar: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Icon Bar" trigger="Hover" codePath="atomic/NavVariants"><Nav.IconBar /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Badge: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Badge" trigger="Static" codePath="atomic/NavVariants"><Nav.NotificationBadge /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Bottom Tab: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Bottom Tab" trigger="Click" codePath="atomic/NavVariants"><Nav.BottomTabBar /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Mega Menu: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Mega Menu" trigger="Hover" codePath="atomic/NavVariants"><Nav.MegaMenuCol /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Search Expand: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Search Expand" trigger="Click" codePath="atomic/NavVariants"><Nav.SearchExpand /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Lang Switch: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Lang Switch" trigger="Click" codePath="atomic/NavVariants"><Nav.LangSwitch /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Theme Toggle: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Theme Toggle" trigger="Click" codePath="atomic/NavVariants"><Nav.ThemeToggle /></PlaygroundCard>
                    <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Dropdown Morph: hover motion treatment with scale-y reveal. Built with Tailwind CSS." title="Dropdown Morph" trigger="Hover" codePath="atomic/NavVariants"><Nav.DropdownMorph /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Mega Menu Slide: hover motion treatment with full-width panel slide down. Built with Tailwind CSS." title="Mega Menu Slide" trigger="Hover" codePath="atomic/NavVariants"><Nav.MegaMenuSlide /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Sidebar Collapsible: hover motion treatment with width expansion and content fade. Built with Tailwind CSS." title="Sidebar Collapsible" trigger="Hover" codePath="atomic/NavVariants"><Nav.SidebarCollapsible /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Radial Menu: hover motion treatment with circular item dispersion. Built with Tailwind CSS." title="Radial Menu" trigger="Hover" codePath="atomic/NavVariants"><Nav.RadialMenu /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal','interaction']} compType="element" promptDescription="Elastic Tab: hover motion treatment (simulated) with springy indicator. Built with Tailwind CSS." title="Elastic Tab" trigger="Hover" codePath="atomic/NavVariants"><Nav.ElasticTab /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Underline Slide: hover motion treatment with moving bottom border. Built with Tailwind CSS." title="Underline Slide" trigger="Hover" codePath="atomic/NavVariants"><Nav.UnderlineSlide /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Pill Switch: static motion treatment with toggle state. Built with Tailwind CSS." title="Pill Switch" trigger="Static" codePath="atomic/NavVariants"><Nav.PillSwitch /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Vertical Tabs: hover motion treatment with left border indicator. Built with Tailwind CSS." title="Vertical Tabs" trigger="Hover" codePath="atomic/NavVariants"><Nav.VerticalTabs /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Pagination Scale: hover motion treatment with number circle zoom. Built with Tailwind CSS." title="Pagination Scale" trigger="Hover" codePath="atomic/NavVariants"><Nav.PaginationScale /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Dot Indicator: static motion treatment with active pill expansion. Built with Tailwind CSS." title="Dot Indicator" trigger="Static" codePath="atomic/NavVariants"><Nav.DotIndicator /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Infinite Scroll: loop motion treatment with loading dots at bottom. Built with Tailwind CSS." title="Infinite Scroll" trigger="Loop" codePath="atomic/NavVariants"><Nav.InfiniteScroll /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Path Reveal: load motion treatment with sequence fade in. Built with Tailwind CSS." title="Path Reveal" trigger="Load" codePath="atomic/NavVariants"><Nav.PathReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['glassmorphism']} compType="element" promptDescription="Glasscrumb: hover motion treatment with glassmorphism background. Built with Tailwind CSS." title="Glasscrumb" trigger="Hover" codePath="atomic/NavVariants"><Nav.Glasscrumb /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Sticky Header: hover motion treatment with bottom border shine. Built with Tailwind CSS." title="Sticky Header" trigger="Hover" codePath="atomic/NavVariants"><Nav.StickyHeader /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Accordion Nav: hover motion treatment with height expansion. Built with Tailwind CSS." title="Accordion Nav" trigger="Hover" codePath="atomic/NavVariants"><Nav.AccordionNav /></PlaygroundCard>
            <PlaygroundCard styleTags={['material']} compType="element" promptDescription="Floating Fab: hover motion treatment with rotation and scale. Built with Tailwind CSS." title="Floating Fab" trigger="Hover" codePath="atomic/NavVariants"><Nav.FloatingFab /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Dot Nav: hover motion treatment with tooltip reveal. Built with Tailwind CSS." title="Dot Nav" trigger="Hover" codePath="atomic/NavVariants"><Nav.DotNav /></PlaygroundCard>
            <PlaygroundCard styleTags={['brutalism']} compType="element" promptDescription="Skew Menu: hover motion treatment with slanted block highlights. Built with Tailwind CSS." title="Skew Menu" trigger="Hover" codePath="atomic/NavVariants"><Nav.SkewMenu /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Spotlight Nav: hover motion treatment with background fade. Built with Tailwind CSS." title="Spotlight Nav" trigger="Hover" codePath="atomic/NavVariants"><Nav.SpotlightNav /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Folder Tabs: hover motion treatment with overlapping tab style. Built with Tailwind CSS." title="Folder Tabs" trigger="Hover" codePath="atomic/NavVariants"><Nav.FolderTabs /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Filter Pills: hover motion treatment with invert color effect. Built with Tailwind CSS." title="Filter Pills" trigger="Hover" codePath="atomic/NavVariants"><Nav.FilterPills /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Context Popup: hover motion treatment (simulated) with menu reveal. Built with Tailwind CSS." title="Context Popup" trigger="Hover" codePath="atomic/NavVariants"><Nav.ContextPopup /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal','tech']} compType="element" promptDescription="Tree Nav: hover motion treatment with file tree highlight. Built with Tailwind CSS." title="Tree Nav" trigger="Hover" codePath="atomic/NavVariants"><Nav.TreeNav /></PlaygroundCard>
            <PlaygroundCard styleTags={['mobile']} compType="element" promptDescription="Swipe Tabs: hover motion treatment with content slide simulation. Built with Tailwind CSS." title="Swipe Tabs" trigger="Hover" codePath="atomic/NavVariants"><Nav.SwipeTabs /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Dock Stack: hover motion treatment with vertical jump. Built with Tailwind CSS." title="Dock Stack" trigger="Hover" codePath="atomic/NavVariants"><Nav.DockStack /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Split Menu: hover motion treatment with dual button group. Built with Tailwind CSS." title="Split Menu" trigger="Hover" codePath="atomic/NavVariants"><Nav.SplitMenu /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Timeline Nav: hover motion treatment with year markers. Built with Tailwind CSS." title="Timeline Nav" trigger="Hover" codePath="atomic/NavVariants"><Nav.TimelineNav /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Burger X: hover motion treatment with close icon transform. Built with Tailwind CSS." title="Burger X" trigger="Hover" codePath="atomic/NavVariants"><Nav.BurgerX /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Full Overlay: hover motion treatment with full screen cover reveal. Built with Tailwind CSS." title="Full Menu Overlay" trigger="Hover" codePath="atomic/NavVariants"><Nav.FullMenuOverlay /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Quick Action: hover motion treatment with icon to label expand. Built with Tailwind CSS." title="Quick Action" trigger="Hover" codePath="atomic/NavVariants"><Nav.QuickAction /></PlaygroundCard>
</div>
      
      </div>
    </div>
  );
}
