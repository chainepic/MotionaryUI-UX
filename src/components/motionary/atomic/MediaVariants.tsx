'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, SkipForward as SkipForwardIcon, SkipBack, Mic, Radio, Disc, Music, Maximize2, Cast, Airplay, List, Repeat, Shuffle } from 'lucide-react';

// 1. Play/Pause Morph
export const PlayPauseMorph = () => {
    const [playing, setPlaying] = useState(false);
    return (
        <button onClick={() => setPlaying(!playing)} className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black">
            <motion.div animate={{ rotate: playing ? 180 : 0 }}>
                {playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
            </motion.div>
        </button>
    )
}

// 2. Waveform Visualizer
export const Waveform = () => (
    <div className="flex items-end gap-1 h-10">
        {[...Array(10)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-1 bg-white rounded-full"
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{ 
                    duration: 0.5 + Math.random() * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.1 
                }}
            />
        ))}
    </div>
);

// 3. Vinyl Record Spin
export const VinylRecord = () => {
    const [spinning, setSpinning] = useState(false);
    return (
        <div 
            className="relative w-20 h-20 rounded-full bg-black border-4 border-surface-300 flex items-center justify-center cursor-pointer overflow-hidden"
            onMouseEnter={() => setSpinning(true)}
            onMouseLeave={() => setSpinning(false)}
        >
             <motion.div 
                className="absolute inset-0 rounded-full"
                style={{ background: 'conic-gradient(from 0deg, #111 0%, #333 50%, #111 100%)' }}
                animate={{ rotate: spinning ? 360 : 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
             <div className="w-8 h-8 bg-red-500 rounded-full z-10 flex items-center justify-center relative">
                <div className="w-2 h-2 bg-black rounded-full" />
             </div>
        </div>
    )
}

// 4. Volume Knob
export const VolumeKnob = () => {
    const [vol, setVol] = useState(0);
    return (
        <div className="relative w-16 h-16 bg-surface-200 rounded-full flex items-center justify-center border border-white/10 shadow-xl">
            <motion.div 
                className="w-full h-full rounded-full absolute"
                style={{ rotate: vol }}
                drag="x" // Simulate drag rotation loosely
                onDrag={(_, info) => setVol(v => v + info.delta.x)}
            >
                <div className="w-2 h-2 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
            </motion.div>
            <Volume2 size={20} className="text-white/50 pointer-events-none" />
        </div>
    )
}

// 5. Equalizer Bars (Color)
export const EqualizerColor = () => (
    <div className="flex items-end gap-[2px] h-12 bg-black/50 p-2 rounded">
        {[...Array(8)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-2 bg-gradient-to-t from-green-500 to-red-500 rounded-sm"
                animate={{ height: ["10%", "90%", "30%"] }}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
            />
        ))}
    </div>
);

// 6. Cassette Tape
export const CassetteTape = () => (
    <div className="w-24 h-16 bg-orange-500 rounded-lg relative flex items-center justify-center gap-4 px-2 border-b-4 border-orange-700 shadow-lg group cursor-pointer hover:translate-y-1 transition-transform">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-6 h-6 bg-white rounded-full border-2 border-black flex items-center justify-center"><div className="w-2 h-2 bg-black" /></motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-6 h-6 bg-white rounded-full border-2 border-black flex items-center justify-center"><div className="w-2 h-2 bg-black" /></motion.div>
        <div className="absolute bottom-1 w-full text-center text-[8px] font-mono text-black font-bold">AWESOME MIX VOL.1</div>
    </div>
);

// 7. Podcast Mic Pulse
export const PodcastMic = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
        <motion.div 
            className="absolute inset-0 bg-red-500 rounded-full opacity-20"
            animate={{ scale: [1, 1.5], opacity: [0.2, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
        />
        <Mic className="z-10 text-red-500" />
    </div>
);

// 8. Lyrics Highlight
export const LyricsKaraoke = () => (
    <div className="text-lg font-bold space-y-1 text-center">
        <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-white"
            animate={{ backgroundPosition: ["200% center", "0% center"] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ backgroundSize: "200% auto" }}
        >
            Hello World
        </motion.span>
    </div>
);

// 9. Album Cover 3D
export const AlbumCover3D = () => (
    <motion.div 
        className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded shadow-2xl flex items-center justify-center cursor-pointer"
        whileHover={{ rotateY: 25, rotateX: -10, scale: 1.1 }}
        style={{ transformStyle: "preserve-3d" }}
    >
        <Music size={32} className="text-white/50" />
    </motion.div>
);

// 10. Like Track
export const LikeTrack = () => {
    const [liked, setLiked] = useState(false);
    return (
        <button onClick={() => setLiked(!liked)} className="relative">
            <motion.div animate={liked ? { scale: [1, 1.4, 1] } : {}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? "#ef4444" : "none"} stroke={liked ? "#ef4444" : "white"} strokeWidth="2">
                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </motion.div>
        </button>
    )
}

// 11. Shuffle Toggle
export const ShuffleToggle = () => {
    const [on, setOn] = useState(false);
    return (
        <button onClick={() => setOn(!on)} className={`transition-colors ${on ? 'text-green-500' : 'text-white/30'}`}>
            <Shuffle size={20} />
            {on && <div className="w-1 h-1 bg-green-500 rounded-full mx-auto mt-1" />}
        </button>
    )
}

// 12. Airplay Cast
export const AirplayCast = () => {
    const [active, setActive] = useState(false);
    return (
        <button onClick={() => setActive(!active)} className={`transition-all ${active ? 'text-blue-500 animate-pulse' : 'text-white/50'}`}>
            <Airplay size={20} />
        </button>
    )
}

// 13. Scrubber Hover
export const VideoScrubber = () => (
    <div className="group w-full h-8 flex items-center cursor-pointer relative">
        <div className="w-full h-1 bg-surface-200 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-red-500" />
        </div>
        <div className="absolute left-1/3 w-3 h-3 bg-red-500 rounded-full scale-0 group-hover:scale-100 transition-transform" />
        <div className="absolute left-1/3 bottom-6 -translate-x-1/2 bg-black border border-white/20 px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
            01:23
        </div>
    </div>
);

// 14. Mute Toggle
export const MuteToggle = () => {
    const [muted, setMuted] = useState(false);
    return (
        <button onClick={() => setMuted(!muted)} className="p-2 bg-surface-100 rounded-full">
            {muted ? <VolumeX size={18} className="text-red-500" /> : <Volume2 size={18} />}
        </button>
    )
}

// 15. Radio Tuner
export const RadioTuner = () => (
    <div className="w-full h-10 bg-black border border-white/20 rounded flex items-center relative overflow-hidden">
        <div className="flex gap-2 absolute left-0 animate-marquee whitespace-nowrap text-[10px] font-mono text-white/50">
            <span>| 88.0</span><span>| 90.0</span><span>| 92.0</span><span>| 94.0</span><span>| 96.0</span><span>| 98.0</span><span>| 100.0</span><span>| 102.0</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-red-500 z-10" />
    </div>
);

// 16. Mini Player Expand
export const MiniPlayer = () => {
    const [expand, setExpand] = useState(false);
    return (
        <motion.div 
            layout 
            onClick={() => setExpand(!expand)}
            className={`bg-surface-200 rounded-xl overflow-hidden cursor-pointer border border-white/10 ${expand ? 'w-40 h-40 p-4' : 'w-40 h-12 flex items-center p-2 gap-2'}`}
        >
            <motion.div layout className={`bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg ${expand ? 'w-full h-24 mb-2' : 'w-8 h-8 flex-shrink-0'}`} />
            <motion.div layout className="flex-1 overflow-hidden">
                <div className="text-xs font-bold truncate">Song Title</div>
                <div className="text-[10px] text-white/50 truncate">Artist Name</div>
            </motion.div>
        </motion.div>
    )
}

// 17. Playback Speed
export const PlaybackSpeed = () => {
    const [speed, setSpeed] = useState(1);
    const speeds = [1, 1.25, 1.5, 2];
    return (
        <button onClick={() => setSpeed(speeds[(speeds.indexOf(speed) + 1) % speeds.length])} className="text-xs font-bold font-mono bg-surface-100 px-2 py-1 rounded hover:bg-white/10">
            {speed}x
        </button>
    )
}

// 18. Audio Spectrum 3D (Sim)
export const Spectrum3D = () => (
    <div className="flex items-center justify-center gap-1 perspective-500">
        {[...Array(5)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-4 h-16 bg-primary/50 border border-primary"
                animate={{ rotateX: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
            />
        ))}
    </div>
);

// 19. Playlist Reorder (Static Visual)
export const PlaylistDrag = () => (
    <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center gap-2 p-2 bg-surface-100 rounded border border-white/5 cursor-grab active:cursor-grabbing hover:bg-white/5">
            <List size={14} className="text-white/30" />
            <span className="text-xs">Top Hits 2024</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-surface-100 rounded border border-white/5 opacity-50">
            <List size={14} className="text-white/30" />
            <span className="text-xs">Chill Vibes</span>
        </div>
    </div>
);

// 20. CD Insert
export const CDInsert = () => (
    <div className="w-full h-1 bg-white/20 relative overflow-visible group cursor-pointer">
        <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-gray-200 to-gray-400 border-4 border-white shadow-xl"
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            whileHover={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-full" />
            </div>
        </motion.div>
    </div>
);


// WaveformVisualizer
export const WaveformVisualizer = () => (
    <div className="flex gap-1 items-center h-12">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="w-1 bg-pink-500 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ height: '20%', animationDelay: `${i * 0.1}s` }} />
      ))}
    </div>
);

// VinylSpinLP
export const VinylSpinLP = () => (
    <div className="w-24 h-24 rounded-full bg-black border-4 border-zinc-800 flex items-center justify-center animate-[spin_4s_linear_infinite] shadow-xl relative">
      <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white z-10" />
      <div className="absolute inset-0 rounded-full bg-[repeating-radial-gradient(#333_0,#333_2px,#000_3px,#000_4px)] opacity-50" />
    </div>
);

// CassetteLoop
export const CassetteLoop = () => (
    <div className="w-32 h-20 bg-zinc-800 rounded border-2 border-zinc-600 flex items-center justify-center gap-4 px-4 relative overflow-hidden">
      <div className="w-8 h-8 rounded-full border-4 border-white animate-[spin_2s_linear_infinite]" />
      <div className="w-8 h-8 rounded-full border-4 border-white animate-[spin_2s_linear_infinite]" />
      <div className="absolute top-2 left-2 text-[8px] text-zinc-500">C-60</div>
    </div>
);

// EqualizerSpectrum
export const EqualizerSpectrum = () => (
    <div className="flex items-end gap-0.5 h-16 w-32 bg-black p-2 rounded">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="flex-1 bg-gradient-to-t from-green-500 to-red-500 animate-[equalizer_0.8s_infinite]" style={{ height: `${Math.random() * 100}%`, animationDelay: `${Math.random()}s` }} />
      ))}
    </div>
);

// PlayPauseMorphBtn
export const PlayPauseMorphBtn = () => (
    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group hover:scale-110 transition-transform">
      <div className="w-4 h-5 border-l-4 border-r-4 border-black group-hover:h-4 group-hover:w-4 group-hover:border-0 group-hover:bg-black transition-all duration-300 clip-path-polygon-[0_0,100%_50%,0_100%]" />
      {/* Note: Complex morphs usually need SVG paths. This is a CSS approximation swap */}
      <svg className="w-6 h-6 absolute opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24"><path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </button>
);

// VolumeKnobTurn
export const VolumeKnobTurn = () => (
    <div className="w-20 h-20 rounded-full bg-zinc-200 border-4 border-zinc-300 shadow-inner flex items-center justify-center cursor-grab active:cursor-grabbing transform rotate-45 active:rotate-90 transition-transform duration-200">
      <div className="w-2 h-2 bg-black rounded-full mb-12" />
    </div>
);

// ScrubberHover
export const ScrubberHover = () => (
    <div className="w-64 h-8 flex items-center group cursor-pointer">
      <div className="w-full h-1 bg-zinc-700 rounded-full relative">
        <div className="absolute top-0 left-0 h-full w-1/3 bg-red-600 rounded-full" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform" />
        <div className="absolute -top-6 left-1/3 -translate-x-1/2 bg-black text-white text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">0:45</div>
      </div>
    </div>
);

// MuteToggleIcon
export const MuteToggleIcon = () => (
    <button className="p-2 rounded-full hover:bg-zinc-800 text-white group">
      <div className="relative w-6 h-6">
        <svg className="w-6 h-6 absolute transition-opacity group-hover:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
        <svg className="w-6 h-6 absolute opacity-0 group-hover:opacity-100 transition-opacity text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
      </div>
    </button>
);

// AlbumTilt
export const AlbumTilt = () => (
    <div className="w-32 h-32 perspective-500 group">
      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded shadow-xl transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-12 flex items-center justify-center text-white font-bold">
        Album
      </div>
    </div>
);

// LyricsScroll
export const LyricsScroll = () => (
    <div className="h-32 w-48 overflow-hidden relative mask-linear-fade">
      <div className="flex flex-col gap-4 text-center animate-[scroll-up_5s_linear_infinite]">
        <p className="text-zinc-500">Verse 1 line 1</p>
        <p className="text-white scale-110 font-bold">Chorus line highlight</p>
        <p className="text-zinc-500">Verse 2 line 1</p>
        <p className="text-zinc-500">Verse 2 line 2</p>
        <p className="text-zinc-500">Verse 2 line 3</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
    </div>
);

// PodcastPulse
export const PodcastPulse = () => (
    <div className="relative w-16 h-24 flex items-center justify-center">
      <div className="absolute inset-0 bg-pink-500/30 rounded-full animate-ping" />
      <div className="w-12 h-20 bg-zinc-800 border-2 border-zinc-600 rounded-full flex items-center justify-center z-10">
        <div className="w-8 h-16 border-2 border-zinc-500 rounded-full grid grid-rows-6 gap-1 p-1">
          {[...Array(6)].map((_,i)=> <div key={i} className="w-full h-0.5 bg-zinc-500" />)}
        </div>
      </div>
    </div>
);

// NowPlayingMarquee
export const NowPlayingMarquee = () => (
    <div className="w-48 overflow-hidden bg-black text-green-400 font-mono text-sm py-1 border border-green-900 rounded">
      <div className="animate-[marquee_5s_linear_infinite] whitespace-nowrap">
        Song Title - Artist Name  ///  Song Title - Artist Name
      </div>
    </div>
);

// PiPFloat
export const PiPFloat = () => (
    <div className="w-full h-32 relative bg-zinc-900 rounded-lg border border-zinc-800 group">
      <div className="absolute bottom-2 right-2 w-24 h-16 bg-blue-900 rounded border border-blue-500 shadow-lg group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform cursor-move">
        <div className="w-full h-full flex items-center justify-center text-[8px] text-white">Floating</div>
      </div>
    </div>
);

// TheatreExpand
export const TheatreExpand = () => (
    <div className="w-32 h-20 bg-black rounded border border-zinc-700 transition-all duration-500 group-hover:w-64 group-hover:h-32 flex items-center justify-center text-zinc-500 group-hover:text-white">
      <span className="group-hover:hidden">Small</span>
      <span className="hidden group-hover:inline">Theatre Mode</span>
    </div>
);

// BufferingSpinner
export const BufferingSpinner = () => (
    <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
);

// CaptionFloat
export const CaptionFloat = () => (
    <div className="relative w-48 h-32 bg-black rounded overflow-hidden group">
      <img src="https://picsum.photos/200/150" className="opacity-50" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-2 py-1 rounded text-white text-xs whitespace-nowrap translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        [Music playing]
      </div>
    </div>
);

// LiveStreamBadge
export const LiveStreamBadge = () => (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded text-xs font-bold uppercase tracking-wider">
      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
      Live
    </div>
);

// PlaylistShuffle
export const PlaylistShuffle = () => (
    <div className="flex flex-col gap-1 w-32 relative h-24 overflow-hidden">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-full h-6 bg-zinc-800 rounded border border-zinc-700 animate-[shuffle_2s_infinite]" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </div>
);

// SpeakerVibrate
export const SpeakerVibrate = () => (
    <div className="w-24 h-32 bg-zinc-900 rounded-lg border border-zinc-700 flex flex-col items-center justify-center gap-4 animate-[vibrate_0.2s_infinite]">
      <div className="w-12 h-12 bg-zinc-800 rounded-full border-4 border-zinc-700" />
      <div className="w-16 h-16 bg-zinc-800 rounded-full border-4 border-zinc-700" />
    </div>
);

// RecordArmMove
export const RecordArmMove = () => (
    <div className="w-24 h-24 bg-zinc-900 rounded relative overflow-hidden group">
      <div className="w-20 h-20 rounded-full bg-black border-2 border-zinc-700 m-2 animate-spin" />
      <div className="absolute top-2 right-2 w-1 h-12 bg-zinc-400 origin-top transform rotate-[-30deg] group-hover:rotate-[10deg] transition-transform duration-500" />
    </div>
);

// SoundWaveBars
export const SoundWaveBars = () => (
    <div className="flex items-center gap-0.5 h-10">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="w-0.5 bg-blue-500 animate-[soundwave_1s_ease-in-out_infinite]" style={{ height: `${Math.random() * 100}%`, animationDelay: `${Math.random()}s` }} />
      ))}
    </div>
);

// VideoThumbnailPlay
export const VideoThumbnailPlay = () => (
    <div className="w-32 h-20 bg-zinc-800 rounded relative overflow-hidden group cursor-pointer">
      <img src="https://picsum.photos/150/100" className="opacity-60 group-hover:opacity-40 transition-opacity" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-transform group-hover:scale-125">
          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
        </div>
      </div>
    </div>
);

// CastConnecting
export const CastConnecting = () => (
    <div className="flex flex-col items-center gap-2">
      <svg className="w-8 h-8 text-blue-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      <span className="text-[10px] text-zinc-500 animate-pulse">Connecting to TV...</span>
    </div>
);

// RecordingDot
export const RecordingDot = () => (
    <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
      <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
      <span className="text-xs font-mono">REC 00:12</span>
    </div>
);

// AudioJack
export const AudioJack = () => (
    <div className="w-32 h-10 flex items-center justify-center gap-0 group cursor-pointer">
      <div className="w-16 h-2 bg-zinc-500 rounded-l" />
      <div className="w-4 h-4 bg-zinc-400 rounded-r group-hover:translate-x-2 transition-transform duration-200" />
      <div className="w-4 h-4 rounded-full border-2 border-zinc-600 ml-2 group-hover:border-blue-500 transition-colors" />
    </div>
);

// VideoResolution
export const VideoResolution = () => (
    <div className="flex gap-1 text-xs font-bold text-zinc-600">
      <span className="hover:text-white cursor-pointer transition-colors">4K</span>
      <span className="hover:text-white cursor-pointer transition-colors">HD</span>
      <span className="text-white border-b-2 border-white">SD</span>
    </div>
);

// ClosedCaptions
export const ClosedCaptions = () => (
    <div className="w-8 h-6 border-2 border-zinc-500 rounded flex items-center justify-center text-[10px] font-bold text-zinc-500 cursor-pointer hover:border-white hover:text-white hover:bg-white/10 transition-all">
      CC
    </div>
);

// SkipForward
export const SkipForward = () => (
    <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer group">
      <svg className="w-6 h-6 text-white absolute opacity-100 group-hover:opacity-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" /></svg>
      <span className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">+15s</span>
    </div>
);

// MetronomeTick
export const MetronomeTick = () => (
    <div className="w-1 h-16 bg-zinc-700 mx-auto origin-bottom animate-[tick_1s_infinite_alternate_ease-in-out]">
      <div className="w-4 h-4 bg-white rounded-full -ml-1.5 mt-2" />
    </div>
);
