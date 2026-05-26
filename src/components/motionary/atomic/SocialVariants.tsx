'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, UserPlus, Bookmark, ThumbsUp, ThumbsDown, Repeat, Send } from 'lucide-react';

// 1. Like Heart Burst
export const HeartBurst = () => {
    const [liked, setLiked] = useState(false);
    return (
        <button onClick={() => setLiked(!liked)} className="group relative">
            <Heart className={`w-6 h-6 transition-colors ${liked ? 'fill-red-500 text-red-500' : 'text-white/50 group-hover:text-white'}`} />
            {liked && (
                <motion.div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div 
                            key={i} 
                            className="absolute w-1 h-1 bg-red-500 rounded-full top-1/2 left-1/2"
                            initial={{ scale: 0 }}
                            animate={{ 
                                x: Math.cos(i * 45 * Math.PI / 180) * 20, 
                                y: Math.sin(i * 45 * Math.PI / 180) * 20, 
                                opacity: 0 
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    ))}
                </motion.div>
            )}
        </button>
    )
}

// 2. Follow Button (Optimistic UI)
export const FollowButton = () => {
    const [followed, setFollowed] = useState(false);
    return (
        <button 
            onClick={() => setFollowed(!followed)}
            className={`px-4 py-1 rounded-full text-sm font-bold transition-all duration-300 border ${followed ? 'bg-transparent border-white/20 text-white' : 'bg-white text-black border-white'}`}
        >
            {followed ? "Following" : "Follow"}
        </button>
    )
}

// 3. Comment Expand
export const CommentExpand = () => {
    const [expand, setExpand] = useState(false);
    return (
        <div className="flex items-center gap-2">
            <button onClick={() => setExpand(!expand)}><MessageCircle size={20} className="text-white/50 hover:text-white" /></button>
            <AnimatePresence>
                {expand && (
                    <motion.div 
                        initial={{ width: 0, opacity: 0 }} animate={{ width: "auto", opacity: 1 }} exit={{ width: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <input type="text" placeholder="Reply..." className="bg-surface-100 px-2 py-1 rounded text-sm outline-none w-32 border border-white/10" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// 4. Share Nodes
export const ShareNodes = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="bg-surface-100 p-2 rounded-full hover:bg-white/10"><Share2 size={18}/></button>
            <AnimatePresence>
                {open && (
                    <>
                        <motion.button initial={{ y: 0, x: 0, opacity: 0 }} animate={{ y: -40, x: -20, opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-0 left-0 bg-blue-500 p-2 rounded-full w-8 h-8 flex items-center justify-center text-xs">F</motion.button>
                        <motion.button initial={{ y: 0, x: 0, opacity: 0 }} animate={{ y: -40, x: 20, opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-0 left-0 bg-sky-400 p-2 rounded-full w-8 h-8 flex items-center justify-center text-xs">T</motion.button>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

// 5. Avatar Stack
export const AvatarStack = () => (
    <div className="flex pl-2">
        {[1,2,3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full bg-surface-300 border-2 border-black -ml-2 hover:-translate-y-1 transition-transform cursor-pointer" style={{ zIndex: i }} />
        ))}
        <div className="w-8 h-8 rounded-full bg-surface-100 border-2 border-black -ml-2 flex items-center justify-center text-[10px] z-10 hover:-translate-y-1 cursor-pointer">+5</div>
    </div>
);

// 6. Live Viewer Count
export const LiveCount = () => (
    <div className="flex items-center gap-2 bg-black/50 px-2 py-1 rounded text-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span>1.2k</span>
    </div>
);

// 7. Bookmark Ribbon
export const BookmarkRibbon = () => {
    const [saved, setSaved] = useState(false);
    return (
        <button onClick={() => setSaved(!saved)}>
            <Bookmark className={`transition-all ${saved ? 'fill-white text-white' : 'text-white/50'}`} />
        </button>
    )
}

// 8. Reaction Bar
export const ReactionBar = () => (
    <div className="flex gap-4 p-2 bg-surface-100 rounded-full border border-white/10">
        <motion.button whileHover={{ scale: 1.2 }}>🔥</motion.button>
        <motion.button whileHover={{ scale: 1.2 }}>🚀</motion.button>
        <motion.button whileHover={{ scale: 1.2 }}>🤯</motion.button>
    </div>
);

// 9. User Plus Animation
export const UserPlusAnim = () => {
    const [added, setAdded] = useState(false);
    return (
        <button onClick={() => setAdded(!added)} className="flex items-center gap-1 text-sm text-white/70 hover:text-white">
            <UserPlus size={16} />
            {added ? "Request Sent" : "Add Friend"}
        </button>
    )
}

// 10. Upvote/Downvote
export const VotingArrows = () => {
    const [score, setScore] = useState(0);
    return (
        <div className="flex flex-col items-center bg-surface-100 rounded p-1 gap-1">
            <button onClick={() => setScore(1)} className={score===1 ? "text-orange-500" : "text-white/20 hover:text-white"}><ThumbsUp size={14}/></button>
            <span className="text-xs font-bold">{142 + score}</span>
            <button onClick={() => setScore(-1)} className={score===-1 ? "text-blue-500" : "text-white/20 hover:text-white"}><ThumbsDown size={14}/></button>
        </div>
    )
}

// 11. Retweet Spin
export const RetweetButton = () => {
    const [rt, setRt] = useState(false);
    return (
        <button onClick={() => setRt(!rt)} className={`group flex items-center gap-1 transition-colors ${rt ? 'text-green-500' : 'text-white/50 hover:text-green-500'}`}>
            <motion.div animate={rt ? { rotate: 180 } : { rotate: 0 }}>
                <Repeat size={18} />
            </motion.div>
        </button>
    )
}

// 12. Story Ring
export const StoryRing = () => (
    <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 to-purple-500 cursor-pointer">
        <div className="w-10 h-10 bg-black rounded-full border-2 border-black" />
    </div>
);

// 13. Chat Bubble Pop
export const ChatBubble = () => (
    <div className="relative">
        <div className="bg-primary text-black px-3 py-1 rounded-t-lg rounded-br-lg text-sm">Hey!</div>
        <div className="absolute -bottom-1 left-0 w-2 h-2 bg-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
    </div>
);

// 14. Typing Dots (Message)
export const TypingDotsMessage = () => (
    <div className="bg-surface-200 px-3 py-2 rounded-full w-fit flex gap-1">
        {[0, 1, 2].map(i => (
            <motion.div 
                key={i}
                className="w-1.5 h-1.5 bg-white/50 rounded-full"
                animate={{ y: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: i*0.1 }}
            />
        ))}
    </div>
);

// 15. Send Plane Fly
export const SendPlane = () => {
    const [sent, setSent] = useState(false);
    return (
        <button onClick={() => { setSent(true); setTimeout(() => setSent(false), 1500); }} className="text-primary hover:text-white transition-colors">
            <motion.div animate={sent ? { x: 50, y: -50, opacity: 0 } : { x: 0, y: 0, opacity: 1 }}>
                <Send size={20} />
            </motion.div>
        </button>
    )
}

// 16. Verified Badge
export const VerifiedBadge = () => (
    <div className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full text-white text-[8px] ml-1">
        ✓
    </div>
);

// 17. Profile Card Hover
export const ProfileHover = () => (
    <div className="relative group">
        <span className="font-bold underline cursor-pointer decoration-white/30 hover:decoration-white">@username</span>
        <div className="absolute bottom-full left-0 mb-2 w-48 bg-surface-200 p-3 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-10">
            <div className="flex gap-3 mb-2">
                <div className="w-10 h-10 bg-white/10 rounded-full" />
                <div>
                    <div className="font-bold">User Name</div>
                    <div className="text-xs text-white/50">Bio description...</div>
                </div>
            </div>
            <div className="flex gap-4 text-xs">
                <span><b>100</b> Following</span>
                <span><b>500</b> Followers</span>
            </div>
        </div>
    </div>
);

// 18. Message Swipe Reply
export const SwipeReply = () => (
    <div className="w-full bg-surface-100 p-2 rounded flex justify-end group cursor-ew-resize hover:-translate-x-2 transition-transform">
        <span className="text-sm">Swipe left to reply</span>
    </div>
);

// 19. Group Chat Pile
export const GroupChatIcon = () => (
    <div className="relative w-10 h-10">
        <div className="absolute top-0 left-0 w-6 h-6 bg-red-500 rounded-full border border-black" />
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full border border-black" />
    </div>
);

// 20. Notification Dot Pulse
export const NotifDot = () => (
    <div className="relative">
        <div className="w-8 h-8 bg-surface-200 rounded-full" />
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
        </span>
    </div>
);


// HeartBurstClick
export const HeartBurstClick = () => (
    <button className="group relative">
      <svg className="w-8 h-8 text-zinc-600 group-hover:text-red-500 transition-colors group-active:scale-90" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      <div className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-active:animate-[ping_0.5s_ease-out]" />
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-500 text-xs font-bold opacity-0 group-active:opacity-100 group-active:translate-y-[-10px] transition-all duration-500">+1</div>
    </button>
);

// FollowUnfollow
export const FollowUnfollow = () => (
    <button className="px-6 py-2 bg-blue-600 hover:bg-red-600 text-white rounded-full transition-colors group min-w-[100px]">
      <span className="group-hover:hidden">Follow</span>
      <span className="hidden group-hover:inline">Unfollow</span>
    </button>
);

// ShareNetwork
export const ShareNetwork = () => (
    <div className="relative w-12 h-12 flex items-center justify-center group">
      <button className="w-10 h-10 bg-zinc-800 rounded-full z-10 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
      </button>
      <div className="absolute w-8 h-8 bg-blue-500 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-40px]">FB</div>
      <div className="absolute w-8 h-8 bg-sky-400 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-[35px] group-hover:translate-y-[-20px] delay-75">TW</div>
      <div className="absolute w-8 h-8 bg-pink-500 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-35px] group-hover:translate-y-[-20px] delay-150">IG</div>
    </div>
);

// AvatarStack3D
export const AvatarStack3D = () => (
    <div className="flex -space-x-4 hover:space-x-1 transition-all duration-500 perspective-500">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-black transform transition-transform group-hover:rotate-y-12 hover:!scale-110 hover:!z-10 hover:!rotate-y-0" />
      ))}
    </div>
);

// StoryRingPulse
export const StoryRingPulse = () => (
    <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600 animate-[spin_4s_linear_infinite] group cursor-pointer relative">
      <div className="w-full h-full bg-black rounded-full border-2 border-black overflow-hidden relative z-10">
        <img src="https://picsum.photos/100/100" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full blur opacity-50 animate-pulse z-0" />
    </div>
);

// LiveCountTicker
export const LiveCountTicker = () => (
    <div className="flex items-center gap-2 bg-red-600/20 text-red-500 px-3 py-1 rounded-full text-xs font-bold border border-red-600/50">
      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      LIVE <span className="w-8 text-right font-mono animate-[pulse_0.5s_infinite]">1.2k</span>
    </div>
);

// OnlineStatusDot
export const OnlineStatusDot = () => (
    <div className="relative inline-block">
      <div className="w-12 h-12 bg-zinc-700 rounded-full" />
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-black bg-green-400 animate-[ping_2s_infinite]" />
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-black bg-green-400" />
    </div>
);

// TypingBubbleWave
export const TypingBubbleWave = () => (
    <div className="bg-blue-600 rounded-2xl rounded-bl-none px-4 py-3 w-fit">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-white/70 rounded-full animate-[bounce_1s_infinite_0ms]" />
        <div className="w-2 h-2 bg-white/70 rounded-full animate-[bounce_1s_infinite_200ms]" />
        <div className="w-2 h-2 bg-white/70 rounded-full animate-[bounce_1s_infinite_400ms]" />
      </div>
    </div>
);

// MessageSlideIn
export const MessageSlideIn = () => (
    <div className="flex flex-col gap-2 w-48 overflow-hidden">
      <div className="bg-zinc-800 p-2 rounded-lg rounded-tl-none self-start animate-[slide-in-left_0.3s_ease-out]">Hello!</div>
      <div className="bg-blue-600 p-2 rounded-lg rounded-tr-none self-end animate-[slide-in-right_0.3s_ease-out_delay-200ms]">Hi there 👋</div>
    </div>
);

// PostFadeIn
export const PostFadeIn = () => (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded p-4 space-y-2 animate-[fade-in-up_0.5s_ease-out]">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-zinc-700 rounded-full" />
        <div className="h-2 w-24 bg-zinc-700 rounded" />
      </div>
      <div className="h-24 bg-zinc-800 rounded w-full" />
    </div>
);

// ImageCarouselDots
export const ImageCarouselDots = () => (
    <div className="relative w-full h-32 bg-zinc-800 rounded overflow-hidden group">
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
      </div>
      <div className="absolute top-1/2 left-2 text-white/50 hover:text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">‹</div>
      <div className="absolute top-1/2 right-2 text-white/50 hover:text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">›</div>
    </div>
);

// RetweetCycle
export const RetweetCycle = () => (
    <div className="flex items-center gap-1 text-zinc-500 hover:text-green-500 cursor-pointer group">
      <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      <span className="text-xs group-hover:font-bold">12</span>
    </div>
);

// UserTag
export const UserTag = () => (
    <span className="text-blue-400 hover:bg-blue-400/10 px-1 rounded cursor-pointer transition-colors relative group">
      @username
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-32 h-16 bg-zinc-800 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none p-2 flex gap-2 items-center">
        <div className="w-8 h-8 bg-zinc-600 rounded-full" />
        <div className="text-xs text-white">User Profile</div>
      </div>
    </span>
);

// PollResults
export const PollResults = () => (
    <div className="w-full space-y-2 cursor-pointer group">
      <div className="relative h-8 bg-zinc-800 rounded overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-blue-500/20 w-0 group-hover:w-[70%] transition-all duration-1000 ease-out" />
        <div className="absolute inset-0 flex items-center justify-between px-3 text-sm">
          <span>Option A</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity delay-500">70%</span>
        </div>
      </div>
      <div className="relative h-8 bg-zinc-800 rounded overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-blue-500/20 w-0 group-hover:w-[30%] transition-all duration-1000 ease-out delay-100" />
        <div className="absolute inset-0 flex items-center justify-between px-3 text-sm">
          <span>Option B</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity delay-500">30%</span>
        </div>
      </div>
    </div>
);

// FriendRequest
export const FriendRequest = () => (
    <div className="flex items-center gap-3 bg-zinc-900 p-2 rounded-lg border border-zinc-800 hover:border-blue-500 transition-colors group">
      <div className="w-10 h-10 bg-zinc-700 rounded-full" />
      <div className="flex-1">
        <div className="text-sm font-bold text-white">New Friend</div>
        <div className="flex gap-2 mt-1">
          <button className="text-[10px] bg-blue-600 px-2 py-0.5 rounded text-white hover:bg-blue-500">Confirm</button>
          <button className="text-[10px] bg-zinc-700 px-2 py-0.5 rounded text-zinc-300 hover:bg-zinc-600">Delete</button>
        </div>
      </div>
    </div>
);

// UserOnlineList
export const UserOnlineList = () => (
    <div className="flex -space-x-2 overflow-hidden py-2 pl-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="relative w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-900 hover:z-10 hover:scale-110 transition-transform cursor-pointer">
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-black" />
        </div>
      ))}
    </div>
);

// MentionHighlight
export const MentionHighlight = () => (
    <span className="text-zinc-300">
      Hello <span className="bg-blue-500/20 text-blue-400 px-1 rounded cursor-pointer hover:bg-blue-500/40 transition-colors">@alex</span> check this out
    </span>
);

// StatusUpdate
export const StatusUpdate = () => (
    <div className="w-full flex gap-3 p-3 bg-zinc-900 rounded border border-zinc-800">
      <div className="w-10 h-10 bg-zinc-700 rounded-full" />
      <div className="flex-1">
        <div className="h-8 bg-zinc-800 rounded w-full border border-zinc-700 text-zinc-500 text-sm px-2 py-1 cursor-text hover:bg-zinc-800/80">What's on your mind?</div>
      </div>
    </div>
);

// ReplyThread
export const ReplyThread = () => (
    <div className="flex flex-col gap-2 pl-4 border-l-2 border-zinc-800 hover:border-zinc-600 transition-colors">
      <div className="bg-zinc-800 p-2 rounded text-xs text-zinc-400">Reply 1</div>
      <div className="bg-zinc-800 p-2 rounded text-xs text-zinc-400">Reply 2</div>
    </div>
);

// UserDropdown
export const UserDropdown = () => (
    <div className="relative group w-32">
      <button className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white">
        <span>Account</span>
        <svg className="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div className="absolute top-full right-0 w-40 bg-zinc-800 border border-zinc-700 rounded mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto shadow-lg">
        <div className="p-2 hover:bg-zinc-700 cursor-pointer text-xs">Profile</div>
        <div className="p-2 hover:bg-zinc-700 cursor-pointer text-xs">Settings</div>
      </div>
    </div>
);

// VideoCallRequest
export const VideoCallRequest = () => (
    <div className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg flex flex-col items-center gap-3 animate-pulse">
      <div className="w-16 h-16 bg-zinc-700 rounded-full" />
      <div className="text-center">
        <div className="font-bold text-white">Incoming Call</div>
        <div className="text-xs text-zinc-400">Sarah M.</div>
      </div>
      <div className="flex gap-4">
        <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">✕</button>
        <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">✓</button>
      </div>
    </div>
);

// EventInvite
export const EventInvite = () => (
    <div className="flex gap-0 bg-zinc-800 rounded overflow-hidden w-64 group cursor-pointer hover:shadow-lg transition-shadow">
      <div className="bg-red-600 text-white p-2 flex flex-col items-center justify-center w-16">
        <span className="text-xs">DEC</span>
        <span className="text-xl font-bold">25</span>
      </div>
      <div className="p-2 flex-1">
        <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Holiday Party</h4>
        <p className="text-xs text-zinc-400">6:00 PM</p>
      </div>
    </div>
);

// ChatTypingUser
export const ChatTypingUser = () => (
    <div className="flex items-end gap-2">
      <div className="w-6 h-6 bg-zinc-700 rounded-full" />
      <div className="text-xs text-zinc-500 italic animate-pulse">is typing...</div>
    </div>
);

// UnreadDot
export const UnreadDot = () => (
    <div className="relative inline-block">
      <span className="text-zinc-400">Messages</span>
      <span className="absolute -top-1 -right-2 w-2 h-2 bg-blue-500 rounded-full" />
    </div>
);

// AudioMessagePlayer
export const AudioMessagePlayer = () => (
    <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-3 py-1 w-48">
      <button className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-600">▶</button>
      <div className="flex-1 h-8 flex items-center gap-0.5">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-1 bg-zinc-500 rounded-full" style={{ height: `${Math.random() * 100}%` }} />
        ))}
      </div>
      <span className="text-[10px] text-zinc-400">0:15</span>
    </div>
);

// StoryUpload
export const StoryUpload = () => (
    <div className="w-16 h-24 bg-zinc-800 rounded-lg border-2 border-dashed border-zinc-600 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-blue-500 hover:text-blue-500 transition-colors text-zinc-500">
      <span className="text-2xl">+</span>
      <span className="text-[8px]">Story</span>
    </div>
);
