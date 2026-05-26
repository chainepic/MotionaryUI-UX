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
  title: "Social Components for AI & Vibe Coding | Motionary",
  description: "Social Media components for modern web apps. Share buttons, social feeds, and interaction elements designed for AI-assisted coding.",
  keywords: ["react social","social media ui","ai generated social","vibe coding","share buttons","social feeds","interactive social","web components"],
};

const BLOCK_STYLE = ["gradient", "glassmorphism"];
const MICRO_STYLE = ["minimal", "cyber"];

export default function SocialPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-8">
        
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">08.</span>Social</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Heart Burst: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Heart Burst" trigger="Click" codePath="atomic/SocialVariants"><Social.HeartBurst /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Follow: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Follow" trigger="Click" codePath="atomic/SocialVariants"><Social.FollowButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Comment Expand: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Comment Expand" trigger="Click" codePath="atomic/SocialVariants"><Social.CommentExpand /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Share Nodes: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Share Nodes" trigger="Click" codePath="atomic/SocialVariants"><Social.ShareNodes /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Avatar Stack: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Avatar Stack" trigger="Hover" codePath="atomic/SocialVariants"><Social.AvatarStack /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Live Count: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Live Count" trigger="Loop" codePath="atomic/SocialVariants"><Social.LiveCount /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Bookmark: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Bookmark" trigger="Click" codePath="atomic/SocialVariants"><Social.BookmarkRibbon /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Reaction Bar: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Reaction Bar" trigger="Hover" codePath="atomic/SocialVariants"><Social.ReactionBar /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="User Plus: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="User Plus" trigger="Click" codePath="atomic/SocialVariants"><Social.UserPlusAnim /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Voting: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Voting" trigger="Click" codePath="atomic/SocialVariants"><Social.VotingArrows /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Retweet: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Retweet" trigger="Click" codePath="atomic/SocialVariants"><Social.RetweetButton /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Story Ring: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Story Ring" trigger="Static" codePath="atomic/SocialVariants"><Social.StoryRing /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Chat Bubble: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Chat Bubble" trigger="Static" codePath="atomic/SocialVariants"><Social.ChatBubble /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Typing Dots: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Typing Dots" trigger="Loop" codePath="atomic/SocialVariants"><Social.TypingDotsMessage /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Send Plane: click motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Send Plane" trigger="Click" codePath="atomic/SocialVariants"><Social.SendPlane /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Verified: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Verified" trigger="Static" codePath="atomic/SocialVariants"><Social.VerifiedBadge /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Profile Hover: hover motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Profile Hover" trigger="Hover" codePath="atomic/SocialVariants"><Social.ProfileHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Swipe Reply: drag motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Swipe Reply" trigger="Drag" codePath="atomic/SocialVariants"><Social.SwipeReply /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Group Chat: static motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Group Chat" trigger="Static" codePath="atomic/SocialVariants"><Social.GroupChatIcon /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Notification: loop motion treatment built with React + Tailwind + framer-motion. Include its signature visual/interaction cues true to the name." title="Notification" trigger="Loop" codePath="atomic/SocialVariants"><Social.NotifDot /></PlaygroundCard>
                    <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Heart Burst: click motion treatment with flying count. Built with Tailwind CSS." title="Heart Burst Click" trigger="Click" codePath="atomic/SocialVariants"><Social.HeartBurstClick /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Follow Button: hover motion treatment with text swap. Built with Tailwind CSS." title="Follow Unfollow" trigger="Hover" codePath="atomic/SocialVariants"><Social.FollowUnfollow /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Share Network: hover motion treatment with node expansion. Built with Tailwind CSS." title="Share Network" trigger="Hover" codePath="atomic/SocialVariants"><Social.ShareNetwork /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Bookmark Ribbon: hover motion treatment with fill animation. Built with Tailwind CSS." title="Bookmark Ribbon" trigger="Hover" codePath="atomic/SocialVariants"><Social.BookmarkRibbon /></PlaygroundCard>
            <PlaygroundCard styleTags={['3d']} compType="element" promptDescription="Avatar Stack 3D: hover motion treatment with perspective spread. Built with Tailwind CSS." title="Avatar Stack3 D" trigger="Hover" codePath="atomic/SocialVariants"><Social.AvatarStack3D /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Story Ring Pulse: loop motion treatment with instagram style glow. Built with Tailwind CSS." title="Story Ring Pulse" trigger="Loop" codePath="atomic/SocialVariants"><Social.StoryRingPulse /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Live Count: loop motion treatment with ticker pulse. Built with Tailwind CSS." title="Live Count Ticker" trigger="Loop" codePath="atomic/SocialVariants"><Social.LiveCountTicker /></PlaygroundCard>
            <PlaygroundCard styleTags={['status']} compType="element" promptDescription="Online Status: loop motion treatment with active ping. Built with Tailwind CSS." title="Online Status Dot" trigger="Loop" codePath="atomic/SocialVariants"><Social.OnlineStatusDot /></PlaygroundCard>
            <PlaygroundCard styleTags={['chat']} compType="element" promptDescription="Typing Wave: loop motion treatment with message indicator. Built with Tailwind CSS." title="Typing Bubble Wave" trigger="Loop" codePath="atomic/SocialVariants"><Social.TypingBubbleWave /></PlaygroundCard>
            <PlaygroundCard styleTags={['chat']} compType="element" promptDescription="Message Slide: load motion treatment with chat history. Built with Tailwind CSS." title="Message Slide In" trigger="Load" codePath="atomic/SocialVariants"><Social.MessageSlideIn /></PlaygroundCard>
            <PlaygroundCard styleTags={['mobile']} compType="element" promptDescription="Swipe Reply: hover motion treatment with gesture hint. Built with Tailwind CSS." title="Swipe Reply" trigger="Hover" codePath="atomic/SocialVariants"><Social.SwipeReply /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Group Chat: hover motion treatment with icon scatter. Built with Tailwind CSS." title="Group Chat Icon" trigger="Hover" codePath="atomic/SocialVariants"><Social.GroupChatIcon /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Post Fade: load motion treatment with feed entry. Built with Tailwind CSS." title="Post Fade In" trigger="Load" codePath="atomic/SocialVariants"><Social.PostFadeIn /></PlaygroundCard>
            <PlaygroundCard styleTags={['media']} compType="element" promptDescription="Image Carousel: hover motion treatment with navigation controls. Built with Tailwind CSS." title="Image Carousel Dots" trigger="Hover" codePath="atomic/SocialVariants"><Social.ImageCarouselDots /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Comment Expand: focus motion treatment (simulated) with accordion reveal. Built with Tailwind CSS." title="Comment Expand" trigger="Focus" codePath="atomic/SocialVariants"><Social.CommentExpand /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Retweet Cycle: hover motion treatment with spin interaction. Built with Tailwind CSS." title="Retweet Cycle" trigger="Hover" codePath="atomic/SocialVariants"><Social.RetweetCycle /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="User Tag: hover motion treatment with profile preview. Built with Tailwind CSS." title="User Tag" trigger="Hover" codePath="atomic/SocialVariants"><Social.UserTag /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Reaction Bar: hover motion treatment with emoji zoom. Built with Tailwind CSS." title="Reaction Bar" trigger="Hover" codePath="atomic/SocialVariants"><Social.ReactionBar /></PlaygroundCard>
            <PlaygroundCard styleTags={['data']} compType="element" promptDescription="Poll Results: hover motion treatment with bar fill. Built with Tailwind CSS." title="Poll Results" trigger="Hover" codePath="atomic/SocialVariants"><Social.PollResults /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Friend Request: hover motion treatment with action buttons. Built with Tailwind CSS." title="Friend Request" trigger="Hover" codePath="atomic/SocialVariants"><Social.FriendRequest /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Online List: hover motion treatment with avatar focus. Built with Tailwind CSS." title="User Online List" trigger="Hover" codePath="atomic/SocialVariants"><Social.UserOnlineList /></PlaygroundCard>
            <PlaygroundCard styleTags={['chat']} compType="element" promptDescription="Typing Message: loop motion treatment with waiting dots. Built with Tailwind CSS." title="Typing Dots Message" trigger="Loop" codePath="atomic/SocialVariants"><Social.TypingDotsMessage /></PlaygroundCard>
            <PlaygroundCard styleTags={['interaction']} compType="element" promptDescription="Send Plane: hover motion treatment with launch icon. Built with Tailwind CSS." title="Send Plane" trigger="Hover" codePath="atomic/SocialVariants"><Social.SendPlane /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Verified Badge: static motion treatment with checkmark. Built with Tailwind CSS." title="Verified Badge" trigger="Static" codePath="atomic/SocialVariants"><Social.VerifiedBadge /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Profile Hover: hover motion treatment with border expansion. Built with Tailwind CSS." title="Profile Hover" trigger="Hover" codePath="atomic/SocialVariants"><Social.ProfileHover /></PlaygroundCard>
            <PlaygroundCard styleTags={['chat']} compType="element" promptDescription="Mention Highlight: hover motion treatment with text background. Built with Tailwind CSS." title="Mention Highlight" trigger="Hover" codePath="atomic/SocialVariants"><Social.MentionHighlight /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="Status Update: hover motion treatment with input field hint. Built with Tailwind CSS." title="Status Update" trigger="Hover" codePath="atomic/SocialVariants"><Social.StatusUpdate /></PlaygroundCard>
            <PlaygroundCard styleTags={['chat']} compType="element" promptDescription="Reply Thread: hover motion treatment with visual connection. Built with Tailwind CSS." title="Reply Thread" trigger="Hover" codePath="atomic/SocialVariants"><Social.ReplyThread /></PlaygroundCard>
            <PlaygroundCard styleTags={['ui']} compType="element" promptDescription="User Dropdown: hover motion treatment with menu list. Built with Tailwind CSS." title="User Dropdown" trigger="Hover" codePath="atomic/SocialVariants"><Social.UserDropdown /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Video Call: loop motion treatment with incoming alert. Built with Tailwind CSS." title="Video Call Request" trigger="Loop" codePath="atomic/SocialVariants"><Social.VideoCallRequest /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Event Invite: hover motion treatment with calendar date. Built with Tailwind CSS." title="Event Invite" trigger="Hover" codePath="atomic/SocialVariants"><Social.EventInvite /></PlaygroundCard>
            <PlaygroundCard styleTags={['chat']} compType="element" promptDescription="Chat Typing: loop motion treatment with text indicator. Built with Tailwind CSS." title="Chat Typing User" trigger="Loop" codePath="atomic/SocialVariants"><Social.ChatTypingUser /></PlaygroundCard>
            <PlaygroundCard styleTags={['minimal']} compType="element" promptDescription="Unread Dot: static motion treatment with status marker. Built with Tailwind CSS." title="Unread Dot" trigger="Static" codePath="atomic/SocialVariants"><Social.UnreadDot /></PlaygroundCard>
            <PlaygroundCard styleTags={['chat']} compType="element" promptDescription="Audio Message: static motion treatment with waveform. Built with Tailwind CSS." title="Audio Message Player" trigger="Static" codePath="atomic/SocialVariants"><Social.AudioMessagePlayer /></PlaygroundCard>
            <PlaygroundCard styleTags={['social']} compType="element" promptDescription="Story Upload: hover motion treatment with add placeholder. Built with Tailwind CSS." title="Story Upload" trigger="Hover" codePath="atomic/SocialVariants"><Social.StoryUpload /></PlaygroundCard>
</div>
      
      </div>
    </div>
  );
}
