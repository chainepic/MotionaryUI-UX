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
  title: "Gamification Components for AI & Vibe Coding | Motionary",
  description: "Gamification UI components for modern apps. Badges, progress indicators, and game-like elements designed for AI code generation.",
  keywords: ["react gamification","game ui","ai coding","vibe coding","progress indicators","badges","game components","interactive ui"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function GamePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">13.</span>Gamification</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="XP Bar: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="XP Bar" trigger="Click" codePath="atomic/GameVariants"><Game.XPBar /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Badge Unlock: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Badge Unlock" trigger="Click" codePath="atomic/GameVariants"><Game.BadgeUnlock /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Card Flip: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Card Flip" trigger="Click" codePath="atomic/GameVariants"><Game.GameCardFlip /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Coin Spin: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Coin Spin" trigger="Loop" codePath="atomic/GameVariants"><Game.CoinSpin /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Health Shake: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Health Shake" trigger="Click" codePath="atomic/GameVariants"><Game.HealthBar /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Level Up: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Level Up" trigger="Click" codePath="atomic/GameVariants"><Game.LevelUp /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Loot Box: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Loot Box" trigger="Hover" codePath="atomic/GameVariants"><Game.LootBox /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Streak: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Streak" trigger="Loop" codePath="atomic/GameVariants"><Game.StreakFlame /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Mana Orb: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Mana Orb" trigger="Loop" codePath="atomic/GameVariants"><Game.ManaOrb /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Quest Item: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Quest Item" trigger="Hover" codePath="atomic/GameVariants"><Game.QuestItem /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Achievement: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Achievement" trigger="Click" codePath="atomic/GameVariants"><Game.AchievementToast /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Char Select: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Char Select" trigger="Hover" codePath="atomic/GameVariants"><Game.CharacterSelect /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Cooldown: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Cooldown" trigger="Click" codePath="atomic/GameVariants"><Game.SkillCooldown /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Inventory: drag motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Inventory" trigger="Drag" codePath="atomic/GameVariants"><Game.InventorySlot /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Map Marker: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Map Marker" trigger="Loop" codePath="atomic/GameVariants"><Game.MapMarker /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Combo: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Combo" trigger="Click" codePath="atomic/GameVariants"><Game.ComboCounter /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Rank: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Rank" trigger="Hover" codePath="atomic/GameVariants"><Game.RankRow /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Boss Warning: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Boss Warning" trigger="Loop" codePath="atomic/GameVariants"><Game.BossWarning /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Lock/Unlock: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Lock/Unlock" trigger="Click" codePath="atomic/GameVariants"><Game.LockUnlock /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Enemy HP: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Enemy HP" trigger="Static" codePath="atomic/GameVariants"><Game.EnemyHealth /></PlaygroundCard>
                    <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="XP Bar Fill: loop motion treatment with shine animation. Built with Tailwind CSS." title="X P Bar Fill" trigger="Loop" codePath="atomic/GameVariants"><Game.XPBarFill /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Streak Flame: loop motion treatment with fire pulse. Built with Tailwind CSS." title="Streak Flame" trigger="Loop" codePath="atomic/GameVariants"><Game.StreakFlame /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Level Up Burst: loop motion treatment with radial ping. Built with Tailwind CSS." title="Level Up Burst" trigger="Loop" codePath="atomic/GameVariants"><Game.LevelUpBurst /></PlaygroundCard>
            <PlaygroundCard styleTags={['cyber']} compType="element" promptDescription="Health Bar Shake: hover motion treatment with low health warning. Built with Tailwind CSS." title="Health Bar Shake" trigger="Hover" codePath="atomic/GameVariants"><Game.HealthBarShake /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Badge Unlock: hover motion treatment with color restore. Built with Tailwind CSS." title="Badge Unlock" trigger="Hover" codePath="atomic/GameVariants"><Game.BadgeUnlock /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Coin Spin 3D: loop motion treatment with y-axis rotation. Built with Tailwind CSS." title="Coin Spin3 D" trigger="Loop" codePath="atomic/GameVariants"><Game.CoinSpin3D /></PlaygroundCard>
            <PlaygroundCard styleTags={['fun']} compType="element" promptDescription="Loot Box Shake: hover motion treatment with anticipation shake. Built with Tailwind CSS." title="Loot Box Shake" trigger="Hover" codePath="atomic/GameVariants"><Game.LootBoxShake /></PlaygroundCard>
            <PlaygroundCard styleTags={['modern']} compType="element" promptDescription="Achievement Toast: hover motion treatment with shine sweep. Built with Tailwind CSS." title="Achievement Toast" trigger="Hover" codePath="atomic/GameVariants"><Game.AchievementToast /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d','card']} compType="element" promptDescription="Card Flip RPG: hover motion treatment with 3D reveal. Built with Tailwind CSS." title="Card Flip R P G" trigger="Hover" codePath="atomic/GameVariants"><Game.CardFlipRPG /></PlaygroundCard>
            <PlaygroundCard styleTags={['action']} compType="element" promptDescription="Combo Counter: loop motion treatment with energetic bounce. Built with Tailwind CSS." title="Combo Counter" trigger="Loop" codePath="atomic/GameVariants"><Game.ComboCounter /></PlaygroundCard>
            <PlaygroundCard styleTags={['magic']} compType="element" promptDescription="Mana Orb: loop motion treatment with liquid fill. Built with Tailwind CSS." title="Mana Orb Pulse" trigger="Loop" codePath="atomic/GameVariants"><Game.ManaOrbPulse /></PlaygroundCard>
            <PlaygroundCard styleTags={['rpg']} compType="element" promptDescription="Quest Item: hover motion treatment with glow and notification. Built with Tailwind CSS." title="Quest Item Hover" trigger="Hover" codePath="atomic/GameVariants"><Game.QuestItemHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Char Select: hover motion treatment with card lift. Built with Tailwind CSS." title="Char Select" trigger="Hover" codePath="atomic/GameVariants"><Game.CharSelect /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Inventory Drag: hover motion treatment with slot interaction. Built with Tailwind CSS." title="Inventory Drag" trigger="Hover" codePath="atomic/GameVariants"><Game.InventoryDrag /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Map Marker: hover motion treatment with pin jump. Built with Tailwind CSS." title="Map Marker Bounce" trigger="Hover" codePath="atomic/GameVariants"><Game.MapMarkerBounce /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Skill Cooldown: click motion treatment with radial overlay. Built with Tailwind CSS." title="Skill Cooldown" trigger="Click" codePath="atomic/GameVariants"><Game.SkillCooldown /></PlaygroundCard>
            <PlaygroundCard styleTags={['alert']} compType="element" promptDescription="Boss Warning: loop motion treatment with marquee alert. Built with Tailwind CSS." title="Boss Warning" trigger="Loop" codePath="atomic/GameVariants"><Game.BossWarning /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Daily Reward: static motion treatment with highlighted day. Built with Tailwind CSS." title="Daily Reward" trigger="Static" codePath="atomic/GameVariants"><Game.DailyReward /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Rank Badge: hover motion treatment with ring progress. Built with Tailwind CSS." title="Rank Badge" trigger="Hover" codePath="atomic/GameVariants"><Game.RankBadge /></PlaygroundCard>
            <PlaygroundCard styleTags={['retro']} compType="element" promptDescription="Dialogue Typing: loop motion treatment with typewriter text. Built with Tailwind CSS." title="Dialogue Typing" trigger="Loop" codePath="atomic/GameVariants"><Game.DialogueTyping /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Lock Unlock: hover motion treatment with shackle pivot. Built with Tailwind CSS." title="Lock Unlock" trigger="Hover" codePath="atomic/GameVariants"><Game.LockUnlock /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Enemy Health: hover motion treatment with damage simulation. Built with Tailwind CSS." title="Enemy Health" trigger="Hover" codePath="atomic/GameVariants"><Game.EnemyHealth /></PlaygroundCard>
            <PlaygroundCard styleTags={['magic']} compType="element" promptDescription="Power Up: loop motion treatment with glowing orb. Built with Tailwind CSS." title="Power Up Orb" trigger="Loop" codePath="atomic/GameVariants"><Game.PowerUpOrb /></PlaygroundCard>
            <PlaygroundCard styleTags={['party']} compType="element" promptDescription="Victory Confetti: loop motion treatment with falling particles. Built with Tailwind CSS." title="Victory Confetti" trigger="Loop" codePath="atomic/GameVariants"><Game.VictoryConfetti /></PlaygroundCard>
            <PlaygroundCard styleTags={['action']} compType="element" promptDescription="Start Button: hover motion treatment with brutalist skew. Built with Tailwind CSS." title="Start Button" trigger="Hover" codePath="atomic/GameVariants"><Game.StartButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Objective List: loop motion treatment with active task pulse. Built with Tailwind CSS." title="Objective List" trigger="Loop" codePath="atomic/GameVariants"><Game.ObjectiveList /></PlaygroundCard>
            <PlaygroundCard styleTags={['scifi']} compType="element" promptDescription="Save Point: hover motion treatment with rotating crystal. Built with Tailwind CSS." title="Save Point" trigger="Hover" codePath="atomic/GameVariants"><Game.SavePoint /></PlaygroundCard>
            <PlaygroundCard styleTags={['action']} compType="element" promptDescription="Damage Number: loop motion treatment with floating text. Built with Tailwind CSS." title="Damage Number" trigger="Loop" codePath="atomic/GameVariants"><Game.DamageNumber /></PlaygroundCard>
            <PlaygroundCard styleTags={['magic']} compType="element" promptDescription="Portal Gate: loop motion treatment with vortex spin. Built with Tailwind CSS." title="Portal Gate" trigger="Loop" codePath="atomic/GameVariants"><Game.PortalGate /></PlaygroundCard>
            <PlaygroundCard styleTags={['fantasy']} compType="element" promptDescription="Potion Bottle: hover motion treatment with liquid fill level. Built with Tailwind CSS." title="Potion Bottle" trigger="Hover" codePath="atomic/GameVariants"><Game.PotionBottle /></PlaygroundCard>
</div>
       
      </div>
    </div>
  );
}
