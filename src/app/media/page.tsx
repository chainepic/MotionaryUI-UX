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
  title: "Media Components for AI & Vibe Coding | Motionary",
  description: "Media Player components with animations. Video players, audio controls, and media interfaces optimized for modern web applications.",
  keywords: ["react media","video players","ai generated media","vibe coding","audio controls","media ui","animated players","web media"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function MediaPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">14.</span>Media & Audio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Play/Pause Morph: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Play/Pause Morph" trigger="Click" codePath="atomic/MediaVariants"><Media.PlayPauseMorph /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Waveform: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Waveform" trigger="Loop" codePath="atomic/MediaVariants"><Media.Waveform /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Vinyl Record: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Vinyl Record" trigger="Hover" codePath="atomic/MediaVariants"><Media.VinylRecord /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Volume Knob: drag motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Volume Knob" trigger="Drag" codePath="atomic/MediaVariants"><Media.VolumeKnob /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Equalizer: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Equalizer" trigger="Loop" codePath="atomic/MediaVariants"><Media.EqualizerColor /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Cassette Tape: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Cassette Tape" trigger="Loop" codePath="atomic/MediaVariants"><Media.CassetteTape /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Podcast Mic: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Podcast Mic" trigger="Loop" codePath="atomic/MediaVariants"><Media.PodcastMic /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Lyrics Karaoke: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Lyrics Karaoke" trigger="Loop" codePath="atomic/MediaVariants"><Media.LyricsKaraoke /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Album 3D: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Album 3D" trigger="Hover" codePath="atomic/MediaVariants"><Media.AlbumCover3D /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Like Track: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Like Track" trigger="Click" codePath="atomic/MediaVariants"><Media.LikeTrack /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Shuffle: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Shuffle" trigger="Click" codePath="atomic/MediaVariants"><Media.ShuffleToggle /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Airplay: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Airplay" trigger="Click" codePath="atomic/MediaVariants"><Media.AirplayCast /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Video Scrubber: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Video Scrubber" trigger="Hover" codePath="atomic/MediaVariants"><Media.VideoScrubber /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Mute Toggle: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Mute Toggle" trigger="Click" codePath="atomic/MediaVariants"><Media.MuteToggle /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Radio Tuner: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Radio Tuner" trigger="Loop" codePath="atomic/MediaVariants"><Media.RadioTuner /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Mini Player: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Mini Player" trigger="Click" codePath="atomic/MediaVariants"><Media.MiniPlayer /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Playback Speed: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Playback Speed" trigger="Click" codePath="atomic/MediaVariants"><Media.PlaybackSpeed /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Spectrum 3D: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Spectrum 3D" trigger="Loop" codePath="atomic/MediaVariants"><Media.Spectrum3D /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="Playlist Drag: drag motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Playlist Drag" trigger="Drag" codePath="atomic/MediaVariants"><Media.PlaylistDrag /></PlaygroundCard>
            <PlaygroundCard styleTags={['gradient']} compType="element" promptDescription="CD Insert: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="CD Insert" trigger="Hover" codePath="atomic/MediaVariants"><Media.CDInsert /></PlaygroundCard>
                    <PlaygroundCard styleTags={['audio']} compType="element" promptDescription="Waveform Vis: loop motion treatment with bar wave. Built with Tailwind CSS." title="Waveform Visualizer" trigger="Loop" codePath="atomic/MediaVariants"><Media.WaveformVisualizer /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Vinyl Spin: loop motion treatment with record rotation. Built with Tailwind CSS." title="Vinyl Spin L P" trigger="Loop" codePath="atomic/MediaVariants"><Media.VinylSpinLP /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Cassette Loop: loop motion treatment with tape reel spin. Built with Tailwind CSS." title="Cassette Loop" trigger="Loop" codePath="atomic/MediaVariants"><Media.CassetteLoop /></PlaygroundCard>
            <PlaygroundCard styleTags={['audio']} compType="element" promptDescription="Equalizer Spectrum: loop motion treatment with multi-bar levels. Built with Tailwind CSS." title="Equalizer Spectrum" trigger="Loop" codePath="atomic/MediaVariants"><Media.EqualizerSpectrum /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Play Pause Morph: hover motion treatment (simulated) with icon swap. Built with Tailwind CSS." title="Play Pause Morph Btn" trigger="Hover" codePath="atomic/MediaVariants"><Media.PlayPauseMorphBtn /></PlaygroundCard>
            <PlaygroundCard styleTags={['skeuomorphic']} compType="element" promptDescription="Volume Knob Turn: drag motion treatment with rotation feedback. Built with Tailwind CSS." title="Volume Knob Turn" trigger="Drag" codePath="atomic/MediaVariants"><Media.VolumeKnobTurn /></PlaygroundCard>
            <PlaygroundCard styleTags={['video']} compType="element" promptDescription="Scrubber Hover: hover motion treatment with time tooltip. Built with Tailwind CSS." title="Scrubber Hover" trigger="Hover" codePath="atomic/MediaVariants"><Media.ScrubberHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Mute Toggle Icon: hover motion treatment with icon swap. Built with Tailwind CSS." title="Mute Toggle Icon" trigger="Hover" codePath="atomic/MediaVariants"><Media.MuteToggleIcon /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Album Tilt: hover motion treatment with 3D cover skew. Built with Tailwind CSS." title="Album Tilt" trigger="Hover" codePath="atomic/MediaVariants"><Media.AlbumTilt /></PlaygroundCard>
            <PlaygroundCard styleTags={['karaoke']} compType="element" promptDescription="Lyrics Scroll: loop motion treatment with vertical text crawl. Built with Tailwind CSS." title="Lyrics Scroll" trigger="Loop" codePath="atomic/MediaVariants"><Media.LyricsScroll /></PlaygroundCard>
            <PlaygroundCard styleTags={['podcast']} compType="element" promptDescription="Podcast Pulse: loop motion treatment with mic signal. Built with Tailwind CSS." title="Podcast Pulse" trigger="Loop" codePath="atomic/MediaVariants"><Media.PodcastPulse /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Now Playing: loop motion treatment with digital scrolling text. Built with Tailwind CSS." title="Now Playing Marquee" trigger="Loop" codePath="atomic/MediaVariants"><Media.NowPlayingMarquee /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="PiP Float: hover motion treatment with overlay positioning. Built with Tailwind CSS." title="Pi P Float" trigger="Hover" codePath="atomic/MediaVariants"><Media.PiPFloat /></PlaygroundCard>
            <PlaygroundCard styleTags={['layout']} compType="element" promptDescription="Theatre Expand: hover motion treatment with frame resize. Built with Tailwind CSS." title="Theatre Expand" trigger="Hover" codePath="atomic/MediaVariants"><Media.TheatreExpand /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Buffering Spinner: loop motion treatment with standard load ring. Built with Tailwind CSS." title="Buffering Spinner" trigger="Loop" codePath="atomic/MediaVariants"><Media.BufferingSpinner /></PlaygroundCard>
            <PlaygroundCard styleTags={['accessibility']} compType="element" promptDescription="Caption Float: hover motion treatment with subtitle pop-up. Built with Tailwind CSS." title="Caption Float" trigger="Hover" codePath="atomic/MediaVariants"><Media.CaptionFloat /></PlaygroundCard>
            <PlaygroundCard styleTags={['broadcast']} compType="element" promptDescription="Live Badge: loop motion treatment with recording dot. Built with Tailwind CSS." title="Live Stream Badge" trigger="Loop" codePath="atomic/MediaVariants"><Media.LiveStreamBadge /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Playlist Shuffle: loop motion treatment with list reorder simulation. Built with Tailwind CSS." title="Playlist Shuffle" trigger="Loop" codePath="atomic/MediaVariants"><Media.PlaylistShuffle /></PlaygroundCard>
            <PlaygroundCard styleTags={['audio']} compType="element" promptDescription="Speaker Vibrate: loop motion treatment with rapid shake. Built with Tailwind CSS." title="Speaker Vibrate" trigger="Loop" codePath="atomic/MediaVariants"><Media.SpeakerVibrate /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Record Arm: hover motion treatment with needle drop. Built with Tailwind CSS." title="Record Arm Move" trigger="Hover" codePath="atomic/MediaVariants"><Media.RecordArmMove /></PlaygroundCard>
            <PlaygroundCard styleTags={['audio']} compType="element" promptDescription="Sound Wave: loop motion treatment with detailed spectrum. Built with Tailwind CSS." title="Sound Wave Bars" trigger="Loop" codePath="atomic/MediaVariants"><Media.SoundWaveBars /></PlaygroundCard>
            <PlaygroundCard styleTags={['youtube']} compType="element" promptDescription="Thumb Play: hover motion treatment with play button focus. Built with Tailwind CSS." title="Video Thumbnail Play" trigger="Hover" codePath="atomic/MediaVariants"><Media.VideoThumbnailPlay /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Cast Connect: loop motion treatment with device pulse. Built with Tailwind CSS." title="Cast Connecting" trigger="Loop" codePath="atomic/MediaVariants"><Media.CastConnecting /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Recording Dot: loop motion treatment with timer status. Built with Tailwind CSS." title="Recording Dot" trigger="Loop" codePath="atomic/MediaVariants"><Media.RecordingDot /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Audio Jack: hover motion treatment with plug insert simulation. Built with Tailwind CSS." title="Audio Jack" trigger="Hover" codePath="atomic/MediaVariants"><Media.AudioJack /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Resolution: static motion treatment with quality selection. Built with Tailwind CSS." title="Video Resolution" trigger="Static" codePath="atomic/MediaVariants"><Media.VideoResolution /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="CC Button: hover motion treatment with toggle feedback. Built with Tailwind CSS." title="Closed Captions" trigger="Hover" codePath="atomic/MediaVariants"><Media.ClosedCaptions /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Skip Forward: hover motion treatment with time reveal. Built with Tailwind CSS." title="Skip Forward" trigger="Hover" codePath="atomic/MediaVariants"><Media.SkipForward /></PlaygroundCard>
            <PlaygroundCard styleTags={['music']} compType="element" promptDescription="Metronome: loop motion treatment with timing swing. Built with Tailwind CSS." title="Metronome Tick" trigger="Loop" codePath="atomic/MediaVariants"><Media.MetronomeTick /></PlaygroundCard>
</div>
       
      </div>
    </div>
  );
}
