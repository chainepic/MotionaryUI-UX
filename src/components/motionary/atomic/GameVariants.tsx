'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Shield, Star, Crown, Zap, Lock, Unlock, Coins, Target, Flame, Swords, Map, Gift, Ghost, Skull } from 'lucide-react';

// 1. XP Bar Gain
export const XPBar = () => {
    const [xp, setXp] = useState(30);
    return (
        <div onClick={() => setXp(Math.min(100, xp+20))} className="w-full cursor-pointer">
            <div className="flex justify-between text-[10px] mb-1 font-bold text-yellow-400">
                <span>LVL 5</span>
                <span>{xp}/100 XP</span>
            </div>
            <div className="h-2 bg-surface-100 rounded-full overflow-hidden border border-white/10">
                <motion.div 
                    className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400"
                    initial={{ width: "30%" }}
                    animate={{ width: `${xp}%` }}
                    transition={{ type: "spring", stiffness: 50 }}
                />
            </div>
        </div>
    )
}

// 2. Badge Unlock
export const BadgeUnlock = () => {
    const [unlocked, setUnlocked] = useState(false);
    return (
        <div 
            onClick={() => setUnlocked(true)}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all cursor-pointer ${unlocked ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'bg-surface-100 border-white/10 text-white/20'}`}
        >
            <Award size={24} />
            {unlocked && (
                <motion.div 
                    className="absolute inset-0 border-2 border-yellow-500 rounded-full"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                />
            )}
        </div>
    )
}

// 3. Card Flip (Game)
export const GameCardFlip = () => (
    <div className="group w-24 h-32 perspective-1000 cursor-pointer">
        <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-indigo-900 rounded-lg backface-hidden border-2 border-indigo-500 flex items-center justify-center">
                <span className="text-2xl">?</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg backface-hidden rotate-y-180 flex items-center justify-center border-2 border-yellow-200">
                <Crown size={32} className="text-white drop-shadow-md" />
            </div>
        </div>
    </div>
);

// 4. Coin Spin
export const CoinSpin = () => (
    <div className="w-10 h-10 rounded-full bg-yellow-400 border-4 border-yellow-600 flex items-center justify-center shadow-lg animate-[spin_3s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(0deg)' }}>
        <span className="font-bold text-yellow-700">$</span>
    </div>
);

// 5. Health Bar Shake
export const HealthBar = () => {
    const [hp, setHp] = useState(100);
    return (
        <div onClick={() => setHp(Math.max(0, hp-20))} className="w-full cursor-pointer group">
            <motion.div 
                className="h-4 bg-surface-100 rounded border border-white/10 overflow-hidden relative"
                animate={hp < 30 ? { x: [-2, 2, -2, 2, 0] } : {}}
                transition={{ repeat: Infinity, duration: 0.2 }}
            >
                <motion.div 
                    className={`h-full ${hp < 30 ? 'bg-red-500' : 'bg-green-500'}`}
                    initial={{ width: "100%" }}
                    animate={{ width: `${hp}%` }}
                />
            </motion.div>
        </div>
    )
}

// 6. Level Up Burst
export const LevelUp = () => {
    const [lvl, setLvl] = useState(false);
    return (
        <button onClick={() => { setLvl(true); setTimeout(() => setLvl(false), 2000); }} className="relative font-black italic text-2xl text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-white">
            LEVEL UP
            {lvl && (
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-4xl">✨</span>
                </motion.div>
            )}
        </button>
    )
}

// 7. Loot Box Shake
export const LootBox = () => (
    <motion.div 
        className="w-12 h-12 bg-gradient-to-b from-purple-600 to-indigo-900 rounded-lg border border-purple-400 flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        whileHover={{ 
            rotate: [0, -10, 10, -10, 10, 0],
            scale: 1.1 
        }}
        transition={{ duration: 0.5 }}
    >
        <Gift size={24} className="text-white" />
    </motion.div>
);

// 8. Daily Streak Flame
export const StreakFlame = () => (
    <div className="flex flex-col items-center">
        <motion.div 
            animate={{ scale: [1, 1.1, 1], filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]"
        >
            <Flame size={32} className="fill-orange-500" />
        </motion.div>
        <span className="text-[10px] font-bold text-orange-400">5 DAYS</span>
    </div>
);

// 9. Mana Orb (Liquid)
export const ManaOrb = () => (
    <div className="relative w-12 h-12 rounded-full border-2 border-blue-400 bg-blue-900 overflow-hidden shadow-[0_0_10px_#60a5fa]">
        <motion.div 
            className="absolute bottom-0 w-full bg-blue-400"
            animate={{ height: ["40%", "60%", "40%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
    </div>
);

// 10. Quest Item Shine
export const QuestItem = () => (
    <div className="relative w-10 h-10 bg-surface-200 rounded border border-white/20 flex items-center justify-center overflow-hidden group">
        <Swords size={20} className="text-white/50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </div>
);

// 11. Achievement Popup
export const AchievementToast = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setShow(true)} className="text-xs bg-surface-100 px-2 py-1 rounded hover:bg-white/10">Unlock</button>
            <AnimatePresence>
                {show && (
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-40 bg-black/90 border border-yellow-500/50 rounded p-2 flex items-center gap-2 z-20"
                    >
                        <Trophy size={16} className="text-yellow-500" />
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-yellow-500">ACHIEVEMENT</span>
                            <span className="text-[10px]">First Blood</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// 12. Character Select Hover
export const CharacterSelect = () => (
    <div className="w-12 h-16 bg-surface-200 rounded border-2 border-transparent hover:border-primary hover:bg-surface-300 transition-all cursor-pointer relative overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
            <Ghost size={24} />
        </div>
    </div>
);

// 13. Skill Cooldown
export const SkillCooldown = () => {
    const [cd, setCd] = useState(false);
    return (
        <button 
            disabled={cd}
            onClick={() => { setCd(true); setTimeout(() => setCd(false), 3000); }}
            className="relative w-10 h-10 bg-surface-200 rounded border border-white/20 overflow-hidden flex items-center justify-center"
        >
            <Zap size={20} className={cd ? 'text-white/20' : 'text-yellow-400'} />
            {cd && (
                <motion.div 
                    className="absolute inset-0 bg-black/70 origin-bottom"
                    initial={{ height: "100%" }}
                    animate={{ height: "0%" }}
                    transition={{ duration: 3, ease: "linear" }}
                />
            )}
        </button>
    )
}

// 14. Inventory Slot Drop
export const InventorySlot = () => (
    <div className="w-10 h-10 bg-black/50 border border-white/10 rounded flex items-center justify-center hover:border-white/50 transition-colors cursor-grab active:cursor-grabbing">
        <Shield size={18} className="text-gray-400" />
    </div>
);

// 15. Map Marker Bounce
export const MapMarker = () => (
    <div className="flex flex-col items-center cursor-pointer group">
        <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-red-500"
        >
            <Map size={24} className="fill-red-500" />
        </motion.div>
        <div className="w-4 h-1 bg-black/50 rounded-full blur-[1px] group-hover:w-6 transition-all" />
    </div>
);

// 16. Combo Counter
export const ComboCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(c => c + 1)} className="font-black text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 relative">
            {count}x
            <motion.span 
                key={count}
                className="absolute -top-4 -right-4 text-xs text-white not-italic"
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            >
                COMBO!
            </motion.span>
        </button>
    )
}

// 17. Leaderboard Rank
export const RankRow = () => (
    <div className="flex items-center gap-2 w-full bg-surface-100 p-1 rounded border border-white/5 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-colors cursor-pointer">
        <div className="w-6 h-6 bg-yellow-500 text-black font-bold flex items-center justify-center rounded text-xs">1</div>
        <div className="w-6 h-6 bg-white/20 rounded-full" />
        <span className="text-xs font-bold">PlayerOne</span>
    </div>
);

// 18. Boss Warning
export const BossWarning = () => (
    <div className="w-full h-8 bg-red-900/50 border-y border-red-500 flex items-center justify-center overflow-hidden relative">
        <div className="flex gap-4 animate-marquee text-red-500 font-bold text-xs tracking-widest">
            <span>WARNING</span><span>BOSS APPROACHING</span><span>WARNING</span><span>BOSS APPROACHING</span>
        </div>
    </div>
);

// 19. Lock/Unlock Anim
export const LockUnlock = () => {
    const [locked, setLocked] = useState(true);
    return (
        <button onClick={() => setLocked(!locked)} className="p-2 bg-surface-200 rounded-full">
            <AnimatePresence mode='wait'>
                {locked ? (
                    <motion.div key="lock" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }}>
                        <Lock size={18} className="text-red-400" />
                    </motion.div>
                ) : (
                    <motion.div key="unlock" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }}>
                        <Unlock size={18} className="text-green-400" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}

// 20. Enemy Health Segment
export const EnemyHealth = () => (
    <div className="w-full h-3 bg-black border border-red-900 rounded flex gap-[1px]">
        {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-1 bg-red-600" />
        ))}
    </div>
);


// XPBarFill
export const XPBarFill = () => (
    <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden relative group">
      <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 w-3/4 animate-[shimmer_2s_infinite] relative">
        <div className="absolute inset-0 bg-white/30 skew-x-[-20deg] w-10 animate-[shine_1.5s_infinite]" />
      </div>
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white drop-shadow-md">750 / 1000 XP</span>
    </div>
);

// LevelUpBurst
export const LevelUpBurst = () => (
    <div className="relative flex items-center justify-center w-24 h-24 group cursor-pointer">
      <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-20 animate-ping group-hover:animation-none" />
      <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-20 animate-[ping_1.5s_infinite_delay-300ms]" />
      <div className="relative z-10 font-black text-2xl text-yellow-400 group-hover:scale-125 transition-transform duration-300">LVL 5</div>
    </div>
);

// HealthBarShake
export const HealthBarShake = () => (
    <div className="w-48 h-6 bg-zinc-900 border-2 border-zinc-700 rounded relative overflow-hidden group cursor-pointer hover:animate-[shake_0.4s_ease-in-out]">
      <div className="h-full bg-red-600 w-[30%] transition-all duration-300 group-hover:bg-red-500" />
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-white">CRITICAL</span>
    </div>
);

// CoinSpin3D
export const CoinSpin3D = () => (
    <div className="w-16 h-16 rounded-full bg-yellow-400 border-4 border-yellow-600 flex items-center justify-center text-yellow-700 font-bold text-2xl shadow-lg animate-[spin-y_3s_infinite_linear]">
      $
    </div>
);

// LootBoxShake
export const LootBoxShake = () => (
    <div className="text-5xl cursor-pointer hover:animate-[shake_0.5s_infinite] transition-transform active:scale-110">
      🎁
    </div>
);

// CardFlipRPG
export const CardFlipRPG = () => (
    <div className="w-32 h-48 perspective-1000 group cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full bg-indigo-900 rounded-lg border-2 border-indigo-500 flex items-center justify-center backface-hidden">
          <span className="text-4xl">?</span>
        </div>
        <div className="absolute w-full h-full bg-indigo-600 rounded-lg border-2 border-white flex flex-col items-center justify-center backface-hidden rotate-y-180 text-white">
          <span className="text-4xl mb-2">⚔️</span>
          <span className="font-bold">Attack</span>
          <span className="text-sm">+10 DMG</span>
        </div>
      </div>
    </div>
);

// ManaOrbPulse
export const ManaOrbPulse = () => (
    <div className="w-20 h-20 rounded-full bg-blue-500 relative overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.6)] group">
      <div className="absolute bottom-0 w-full bg-blue-400 animate-[wave_3s_infinite_linear] h-[80%] opacity-80" />
      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
    </div>
);

// QuestItemHover
export const QuestItemHover = () => (
    <div className="w-16 h-16 bg-zinc-800 border-2 border-zinc-600 rounded-lg flex items-center justify-center text-3xl group hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all cursor-pointer relative">
      📜
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-bounce" />
    </div>
);

// CharSelect
export const CharSelect = () => (
    <div className="flex gap-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-16 h-24 bg-zinc-800 rounded-lg border-2 border-transparent hover:border-white hover:-translate-y-2 hover:shadow-xl transition-all cursor-pointer flex items-end justify-center pb-2 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="w-8 h-8 rounded-full bg-zinc-600 mb-4 group-hover:scale-110 transition-transform" />
        </div>
      ))}
    </div>
);

// InventoryDrag
export const InventoryDrag = () => (
    <div className="grid grid-cols-2 gap-2 w-32">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-14 h-14 bg-zinc-800/50 border border-zinc-700 rounded flex items-center justify-center hover:bg-zinc-700 cursor-grab active:cursor-grabbing transition-colors">
          {i === 1 && <span className="text-xl hover:scale-110 transition-transform">🛡️</span>}
        </div>
      ))}
    </div>
);

// MapMarkerBounce
export const MapMarkerBounce = () => (
    <div className="relative w-8 h-8 group cursor-pointer">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/50 rounded-full filter blur-[1px] group-hover:scale-75 transition-transform" />
      <svg className="w-8 h-8 text-red-500 absolute bottom-1 left-0 group-hover:translate-y-[-8px] transition-transform duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275)" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
    </div>
);

// DailyReward
export const DailyReward = () => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5, 6, 7].map((d) => (
        <div key={d} className={`w-8 h-10 rounded border ${d===7 ? 'border-yellow-500 bg-yellow-500/10' : 'border-zinc-700 bg-zinc-800'} flex items-center justify-center text-xs relative group cursor-pointer`}>
          {d}
          {d===7 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full animate-ping" />}
        </div>
      ))}
    </div>
);

// RankBadge
export const RankBadge = () => (
    <div className="w-16 h-16 relative flex items-center justify-center group">
      <div className="absolute inset-0 border-4 border-zinc-700 rounded-full" />
      <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent border-l-transparent -rotate-45 group-hover:rotate-[315deg] transition-transform duration-700" />
      <span className="font-bold text-xl text-blue-400">IV</span>
    </div>
);

// DialogueTyping
export const DialogueTyping = () => (
    <div className="w-64 bg-zinc-900 border border-zinc-700 p-3 rounded-lg relative">
      <div className="absolute -bottom-2 left-4 w-4 h-4 bg-zinc-900 border-b border-r border-zinc-700 transform rotate-45" />
      <p className="text-sm font-mono text-green-400 overflow-hidden whitespace-nowrap animate-[typing_3s_steps(20)_infinite]">It's dangerous to go alone...</p>
    </div>
);

// PowerUpOrb
export const PowerUpOrb = () => (
    <div className="w-12 h-12 bg-purple-600 rounded-full blur-md animate-pulse relative flex items-center justify-center cursor-pointer hover:scale-125 transition-transform duration-200">
      <div className="w-8 h-8 bg-white rounded-full opacity-50" />
    </div>
);

// VictoryConfetti
export const VictoryConfetti = () => (
    <div className="relative w-full h-32 overflow-hidden flex items-center justify-center">
      <h2 className="text-3xl font-black text-yellow-400 z-10 drop-shadow-md">VICTORY</h2>
      {[...Array(10)].map((_,i) => (
        <div key={i} className="absolute w-2 h-2 bg-random rounded-sm animate-[confetti_2s_infinite]" style={{ left: `${Math.random()*100}%`, animationDelay: `${Math.random()*2}s`, backgroundColor: ['#f00','#0f0','#00f','#ff0'][i%4] }} />
      ))}
    </div>
);

// StartButton
export const StartButton = () => (
    <button className="px-8 py-3 bg-green-500 text-black font-black text-xl uppercase tracking-widest skew-x-[-10deg] hover:skew-x-[-20deg] hover:bg-green-400 hover:scale-105 transition-all shadow-[4px_4px_0_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0_rgba(0,0,0,0.5)]">
      Start
    </button>
);

// ObjectiveList
export const ObjectiveList = () => (
    <div className="flex flex-col gap-2 w-48 font-mono text-sm">
      <div className="flex items-center gap-2 text-zinc-500 line-through decoration-2">
        <span>☑</span> Find the key
      </div>
      <div className="flex items-center gap-2 text-white animate-pulse">
        <span>☐</span> Defeat the boss
      </div>
    </div>
);

// SavePoint
export const SavePoint = () => (
    <div className="w-16 h-16 relative flex items-center justify-center cursor-pointer group">
      <div className="absolute inset-0 bg-blue-500/20 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
      <div className="w-8 h-8 bg-blue-400 rotate-45 shadow-[0_0_15px_#60a5fa]" />
      <span className="absolute -bottom-6 text-[10px] text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">Saving...</span>
    </div>
);

// DamageNumber
export const DamageNumber = () => (
    <div className="relative h-20 w-full flex items-center justify-center overflow-hidden">
      <span className="text-red-500 font-bold text-2xl animate-[float-up_1s_ease-out_infinite] opacity-0 absolute bottom-0">-120</span>
    </div>
);

// PortalGate
export const PortalGate = () => (
    <div className="w-24 h-32 rounded-full border-4 border-purple-600 bg-black relative overflow-hidden flex items-center justify-center shadow-[0_0_20px_#9333ea]">
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,purple)] animate-[spin_2s_linear_infinite] opacity-50" />
      <div className="w-full h-full bg-purple-900/20 backdrop-blur-sm z-10" />
    </div>
);

// PotionBottle
export const PotionBottle = () => (
    <div className="w-10 h-14 bg-white/10 border border-white/30 rounded-b-xl rounded-t-sm relative overflow-hidden cursor-pointer group">
      <div className="absolute bottom-0 inset-x-0 h-2/3 bg-red-500/80 group-hover:h-full transition-all duration-500 ease-in-out" />
      <div className="absolute top-1 left-1 w-1 h-8 bg-white/20 rounded-full" />
    </div>
);
