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
  title: "Data Visualization Components for AI & Vibe Coding | Motionary",
  description: "Interactive Data Visualization components for AI coding. Charts, graphs, and data displays with smooth animations and modern aesthetics.",
  keywords: ["data visualization","react charts","ai generated viz","vibe coding","interactive charts","animated graphs","ui data","visual components"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function DataPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">06.</span>Data Viz</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Bar Grow: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Bar Grow" trigger="Load" codePath="atomic/DataVariants"><Data.BarChartGrow /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Circle Progress: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Circle Progress" trigger="Load" codePath="atomic/DataVariants"><Data.CircleProgress /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Count Up: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Count Up" trigger="Load" codePath="atomic/DataVariants"><Data.CountUp /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Line Draw: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Line Draw" trigger="Load" codePath="atomic/DataVariants"><Data.LineChart /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Pie Spin: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Pie Spin" trigger="Load" codePath="atomic/DataVariants"><Data.PieChart /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Area Fill: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Area Fill" trigger="Load" codePath="atomic/DataVariants"><Data.AreaChart /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Scatter Pop: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Scatter Pop" trigger="Load" codePath="atomic/DataVariants"><Data.ScatterPlot /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Vertical Bar: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Vertical Bar" trigger="Load" codePath="atomic/DataVariants"><Data.VerticalProgress /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Radar Draw: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Radar Draw" trigger="Load" codePath="atomic/DataVariants"><Data.RadarChart /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Stacked Bar: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Stacked Bar" trigger="Load" codePath="atomic/DataVariants"><Data.StackedBar /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Live Stream: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Live Stream" trigger="Loop" codePath="atomic/DataVariants"><Data.LiveData /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Donut Chart: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Donut Chart" trigger="Load" codePath="atomic/DataVariants"><Data.DonutChart /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Heatmap: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Heatmap" trigger="Load" codePath="atomic/DataVariants"><Data.Heatmap /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Funnel: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Funnel" trigger="Load" codePath="atomic/DataVariants"><Data.FunnelChart /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Gauge: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Gauge" trigger="Load" codePath="atomic/DataVariants"><Data.GaugeChart /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Network: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Network" trigger="Load" codePath="atomic/DataVariants"><Data.NetworkGraph /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Comparison: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Comparison" trigger="Load" codePath="atomic/DataVariants"><Data.ComparisonBars /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Step Tracker: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Step Tracker" trigger="Load" codePath="atomic/DataVariants"><Data.StepTracker /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Candle Stick: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Candle Stick" trigger="Static" codePath="atomic/DataVariants"><Data.CandleStick /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Mini Ring: load motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Mini Ring" trigger="Load" codePath="atomic/DataVariants"><Data.MiniRing /></PlaygroundCard>
                    <PlaygroundCard styleTags={['data']} compType="element" promptDescription="Bar Race: loop motion treatment with changing widths. Built with Tailwind CSS." title="Bar Chart Race" trigger="Loop" codePath="atomic/DataVariants"><Data.BarChartRace /></PlaygroundCard>
            <PlaygroundCard styleTags={['data']} compType="element" promptDescription="Line Draw: load motion treatment with path trace and fill. Built with Tailwind CSS." title="Line Graph Draw" trigger="Load" codePath="atomic/DataVariants"><Data.LineGraphDraw /></PlaygroundCard>
            <PlaygroundCard styleTags={['data']} compType="element" promptDescription="Pie Slice: hover motion treatment with segment pop. Built with Tailwind CSS." title="Pie Chart Slice" trigger="Hover" codePath="atomic/DataVariants"><Data.PieChartSlice /></PlaygroundCard>
            <PlaygroundCard styleTags={['data']} compType="element" promptDescription="Radar Poly: loop motion treatment with area pulse. Built with Tailwind CSS." title="Radar Polygon" trigger="Loop" codePath="atomic/DataVariants"><Data.RadarPolygon /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Counter Jump: loop motion treatment (simulated) with number slot machine. Built with Tailwind CSS." title="Counter Jump" trigger="Loop" codePath="atomic/DataVariants"><Data.CounterJump /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Percent Circle: load motion treatment with ring fill. Built with Tailwind CSS." title="Percentage Circle" trigger="Load" codePath="atomic/DataVariants"><Data.PercentageCircle /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Striped Progress: loop motion treatment with barber pole effect. Built with Tailwind CSS." title="Progress Striped" trigger="Loop" codePath="atomic/DataVariants"><Data.ProgressStriped /></PlaygroundCard>
            <PlaygroundCard styleTags={['dashboard']} compType="element" promptDescription="Stat Hover: hover motion treatment with value highlight. Built with Tailwind CSS." title="Stat Card Hover" trigger="Hover" codePath="atomic/DataVariants"><Data.StatCardHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['map']} compType="element" promptDescription="Heatmap Pulse: loop motion treatment with blurred blobs. Built with Tailwind CSS." title="Heatmap Pulse" trigger="Loop" codePath="atomic/DataVariants"><Data.HeatmapPulse /></PlaygroundCard>
            <PlaygroundCard styleTags={['map']} compType="element" promptDescription="Pin Drop: loop motion treatment with bounce landing. Built with Tailwind CSS." title="Location Pin Drop" trigger="Loop" codePath="atomic/DataVariants"><Data.LocationPinDrop /></PlaygroundCard>
            <PlaygroundCard styleTags={['map']} compType="element" promptDescription="Route Trace: loop motion treatment with SVG dot follow. Built with Tailwind CSS." title="Route Path Trace" trigger="Loop" codePath="atomic/DataVariants"><Data.RoutePathTrace /></PlaygroundCard>
            <PlaygroundCard styleTags={['map']} compType="element" promptDescription="Map Zoom: hover motion treatment with scale focus. Built with Tailwind CSS." title="Map Zoom In" trigger="Hover" codePath="atomic/DataVariants"><Data.MapZoomIn /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Particle Cloud: loop motion treatment with random float. Built with Tailwind CSS." title="Particle Cloud" trigger="Loop" codePath="atomic/DataVariants"><Data.ParticleCloud /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="Network Nodes: loop motion treatment with connected points. Built with Tailwind CSS." title="Network Nodes" trigger="Loop" codePath="atomic/DataVariants"><Data.NetworkNodes /></PlaygroundCard>
            <PlaygroundCard styleTags={['audio']} compType="element" promptDescription="Wave Spectrum: loop motion treatment with sinusoidal flow. Built with Tailwind CSS." title="Wave Spectrum" trigger="Loop" codePath="atomic/DataVariants"><Data.WaveSpectrum /></PlaygroundCard>
            <PlaygroundCard styleTags={['scifi']} compType="element" promptDescription="Orbital Data: loop motion treatment with satellite spin. Built with Tailwind CSS." title="Orbital Data" trigger="Loop" codePath="atomic/DataVariants"><Data.OrbitalData /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Trend Arrow: hover motion treatment with growth indicator. Built with Tailwind CSS." title="Trend Arrow" trigger="Hover" codePath="atomic/DataVariants"><Data.TrendArrow /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Donut Hover: hover motion treatment with spin reveal. Built with Tailwind CSS." title="Donut Hover" trigger="Hover" codePath="atomic/DataVariants"><Data.DonutHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Bar Stack: hover motion treatment with segment highlight. Built with Tailwind CSS." title="Bar Stack Hover" trigger="Hover" codePath="atomic/DataVariants"><Data.BarStackHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Number Pulse: hover motion treatment with value attention. Built with Tailwind CSS." title="Number Counter" trigger="Hover" codePath="atomic/DataVariants"><Data.NumberCounter /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Skill Bar: hover motion treatment with refill animation. Built with Tailwind CSS." title="Skill Proficiency" trigger="Hover" codePath="atomic/DataVariants"><Data.SkillProficiency /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Timeline Dot: hover motion treatment with active point. Built with Tailwind CSS." title="Timeline Dot" trigger="Hover" codePath="atomic/DataVariants"><Data.TimelineDot /></PlaygroundCard>
            <PlaygroundCard styleTags={['data']} compType="element" promptDescription="Bubble Chart: loop motion treatment with floating data points. Built with Tailwind CSS." title="Bubble Chart" trigger="Loop" codePath="atomic/DataVariants"><Data.BubbleChart /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Data Stream: loop motion treatment with packet flow. Built with Tailwind CSS." title="Data Stream" trigger="Loop" codePath="atomic/DataVariants"><Data.DataStream /></PlaygroundCard>
            <PlaygroundCard styleTags={['tech']} compType="element" promptDescription="Server Load: loop motion treatment with capacity status. Built with Tailwind CSS." title="Server Load" trigger="Loop" codePath="atomic/DataVariants"><Data.ServerLoad /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Live Users: loop motion treatment with pulse count. Built with Tailwind CSS." title="Live Users" trigger="Loop" codePath="atomic/DataVariants"><Data.LiveUsers /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Pie Segment: hover motion treatment with highlight arc. Built with Tailwind CSS." title="Pie Segment Hover" trigger="Hover" codePath="atomic/DataVariants"><Data.PieSegmentHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Grid Data: load motion treatment with cell sequence. Built with Tailwind CSS." title="Grid Data Reveal" trigger="Load" codePath="atomic/DataVariants"><Data.GridDataReveal /></PlaygroundCard>
            <PlaygroundCard styleTags={['data']} compType="element" promptDescription="Scatter Plot: hover motion treatment with point zoom. Built with Tailwind CSS." title="Scatter Plot Dot" trigger="Hover" codePath="atomic/DataVariants"><Data.ScatterPlotDot /></PlaygroundCard>
</div>
      
      </div>
    </div>
  );
}
