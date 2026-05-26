'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWizardStore } from '@/store/useWizardStore';
import { COMPONENT_VARIANTS } from '@/data/wizardVariants';
import { PALETTES_LIST } from '@/data/wizardPalettes';
import { ArrowRight, ArrowLeft, Check, Copy, Sparkles, Smartphone, Globe, Layout, CheckCircle2, Compass, Box } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Import all variant components
import * as NavVars from "@/components/motionary/atomic/NavVariants";
import * as ButtonVars from "@/components/motionary/atomic/ButtonVariants";
import * as CardVars from "@/components/motionary/atomic/CardVariants";
import * as InputVars from "@/components/motionary/atomic/InputVariants";
import * as FeedbackVars from "@/components/motionary/atomic/FeedbackVariants";
import * as MicroVars from "@/components/motionary/atomic/MicroVariants";
import * as TypoVars from "@/components/motionary/atomic/TypographyVariants";
import * as DashVars from "@/components/motionary/atomic/DashboardVariants";
import * as BlockVars from "@/components/motionary/atomic/BlockVariants";
import * as EmptyVars from "@/components/motionary/atomic/EmptyVariants";
import * as OnboardVars from "@/components/motionary/atomic/OnboardingVariants";
import * as ModalVars from "@/components/motionary/atomic/ModalVariants";
import * as SkeletonVars from "@/components/motionary/atomic/SkeletonVariants";
import { MagneticButton } from "@/components/motionary/atomic/MagneticButton";
import { LiquidButton } from "@/components/motionary/atomic/LiquidButton";
import { JellyButton } from "@/components/motionary/atomic/JellyButton";

const COMPONENT_MAP: Record<string, React.ReactNode> = {
  // Navigation
  'underline-nav': <NavVars.UnderlineNav />,
  'pill-nav': <NavVars.PillNav />,
  'dock-menu': <NavVars.DockMenu />,
  'mega-menu-slide': <NavVars.MegaMenuSlide />,
  'sidebar-collapsible': <NavVars.SidebarCollapsible />,
  'glasscrumb': <NavVars.Glasscrumb />,
  'sticky-header': <NavVars.StickyHeader />,
  'stagger-dropdown': <NavVars.StaggerDropdown />,
  'tab-indicator': <NavVars.TabIndicator />,
  'morph-burger': <NavVars.MorphingBurger />,
  'bottom-tab-bar': <NavVars.BottomTabBar />,
  'vertical-tabs': <NavVars.VerticalTabs />,
  'circular-menu': <div className="h-full w-full flex items-center justify-center"><NavVars.CircularMenu /></div>,
  'sidebar-expand': <NavVars.SidebarExpand />,
  'gooey-menu': <NavVars.GooeyMenu />,
  'fullscreen-reveal': <NavVars.FullscreenReveal />,
  'magnetic-link': <NavVars.MagneticLink />,
  'step-nav': <NavVars.StepNav />,
  'icon-bar': <NavVars.IconBar />,
  'notification-badge': <NavVars.NotificationBadge />,
  'search-expand': <NavVars.SearchExpand />,
  'lang-switch': <NavVars.LangSwitch />,
  'theme-toggle': <NavVars.ThemeToggle />,
  'dropdown-morph': <NavVars.DropdownMorph />,
  'radial-menu': <NavVars.RadialMenu />,
  'elastic-tab': <NavVars.ElasticTab />,
  'underline-slide': <NavVars.UnderlineSlide />,
  'pill-switch': <NavVars.PillSwitch />,
  'pagination-scale': <NavVars.PaginationScale />,
  'dot-indicator': <NavVars.DotIndicator />,
  'infinite-scroll': <NavVars.InfiniteScroll />,
  'path-reveal': <NavVars.PathReveal />,
  'accordion-nav': <NavVars.AccordionNav />,
  'floating-fab': <NavVars.FloatingFab />,
  'dot-nav': <NavVars.DotNav />,
  'skew-menu': <NavVars.SkewMenu />,
  'spotlight-nav': <NavVars.SpotlightNav />,
  'folder-tabs': <NavVars.FolderTabs />,
  'filter-pills': <NavVars.FilterPills />,
  'context-popup': <NavVars.ContextPopup />,
  'tree-nav': <NavVars.TreeNav />,
  'swipe-tabs': <NavVars.SwipeTabs />,
  'dock-stack': <NavVars.DockStack />,
  'split-menu': <NavVars.SplitMenu />,
  'timeline-nav': <NavVars.TimelineNav />,
  'burger-x': <NavVars.BurgerX />,
  'full-menu-overlay': <NavVars.FullMenuOverlay />,
  'quick-action': <NavVars.QuickAction />,

  // Buttons
  'magnetic-button': <MagneticButton>Hover Me</MagneticButton>,
  'liquid-button': <LiquidButton>Click Me</LiquidButton>,
  'neon-glow': <ButtonVars.NeonButton>Neon Glow</ButtonVars.NeonButton>,
  'cyber-glitch': <ButtonVars.GlitchButton>Glitch</ButtonVars.GlitchButton>,
  'shiny-border': <ButtonVars.LiquidBorderButton>Shiny</ButtonVars.LiquidBorderButton>,
  'jelly-button': <JellyButton>Jelly</JellyButton>,
  'spotlight-button': <ButtonVars.SpotLightButton>Spotlight</ButtonVars.SpotLightButton>,
  'outline-fill': <ButtonVars.GhostOutlineBtn>Outline</ButtonVars.GhostOutlineBtn>,
  'pulse-ring': <ButtonVars.PulseRingBtn>Pulse</ButtonVars.PulseRingBtn>,
  '3d-press': <ButtonVars.ThreeDPressBtn>3D Press</ButtonVars.ThreeDPressBtn>,
  'cyberpunk-btn': <ButtonVars.CyberButton>Cyberpunk</ButtonVars.CyberButton>,
  'elastic-btn': <ButtonVars.ElasticButton>Elastic</ButtonVars.ElasticButton>,
  'shimmer-btn': <ButtonVars.ShimmerButton>Shimmer</ButtonVars.ShimmerButton>,
  'blob-btn': <ButtonVars.BlobButton>Blob</ButtonVars.BlobButton>,
  'ghost-btn': <ButtonVars.GhostButton>Ghost</ButtonVars.GhostButton>,
  'send-btn': <ButtonVars.SendButton />,
  'tilt-btn': <ButtonVars.TiltButton />,
  'ai-sparkle': <ButtonVars.AiSparkleButton />,
  'neural-link': <ButtonVars.NeuralLinkButton />,
  'data-stream': <ButtonVars.DataStreamButton />,
  'holo-ghost': <ButtonVars.HoloGhostButton />,
  'cosmic-dust': <ButtonVars.CosmicDustButton />,
  'frosty-glass': <ButtonVars.FrostyGlassButton />,
  'crystal-prism': <ButtonVars.CrystalPrismButton />,
  'blur-reveal': <ButtonVars.BlurRevealButton />,
  'ice-layer': <ButtonVars.IceLayerButton />,
  'mirror-reflect': <ButtonVars.MirrorReflectButton />,
  'hard-shadow': <ButtonVars.HardShadowButton />,
  'retro-pop': <ButtonVars.RetroPopButton />,
  'offset-border': <ButtonVars.OffsetBorderButton />,
  'brutal-underline': <ButtonVars.BrutalUnderlineButton />,
  'pixel-press': <ButtonVars.PixelPressButton />,
  'dot-indicator-btn': <ButtonVars.DotIndicatorButton />,
  'line-expand': <ButtonVars.LineExpandButton />,
  'icon-morph': <ButtonVars.IconMorphButton />,
  'text-shift': <ButtonVars.TextShiftButton />,
  'status-ring': <ButtonVars.StatusRingButton />,
  'flip-layer': <ButtonVars.FlipLayerButton />,
  'depth-press': <ButtonVars.DepthPressButton />,
  'iso-tilt': <ButtonVars.IsoTiltButton />,
  'layered-shadow': <ButtonVars.LayeredShadowButton />,
  'float-elevation': <ButtonVars.FloatElevationButton />,
  'morph-blob': <ButtonVars.MorphBlobButton />,
  'gooey-trail': <ButtonVars.GooeyTrailButton />,
  'ripple-pulse': <ButtonVars.RipplePulseButton />,
  'liquid-border': <ButtonVars.LiquidBorderButton />,
  'organic-outline': <ButtonVars.OrganicOutlineButton />,
  'neumorphic': <ButtonVars.NeumorphicSoft />,
  'glass-blur': <ButtonVars.GlassmorphismBlur />,
  'retro-pixel-btn': <ButtonVars.RetroPixelBtn />,
  'claymorphism': <ButtonVars.ClaymorphismBtn />,
  'liquid-fill-btn': <ButtonVars.LiquidFillBtn />,
  'magnetic-pull': <ButtonVars.MagneticPullBtn />,
  'border-beam': <ButtonVars.BorderBeamBtn />,
  'loading-spinner': <ButtonVars.LoadingSpinnerBtn />,
  'success-check': <ButtonVars.SuccessCheckBtn />,
  'error-shake': <ButtonVars.ErrorShakeBtn />,
  'disabled-lock': <ButtonVars.DisabledLockBtn />,
  'shine-sweep': <ButtonVars.ShineSweepBtn />,
  'confetti-btn': <ButtonVars.ConfettiBtn />,
  'gradient-run': <ButtonVars.GradientBorderRun />,
  'send-fly': <ButtonVars.SendIconFly />,
  'copy-clipboard': <ButtonVars.CopyClipboardBtn />,

  // Cards
  'glass-card': <CardVars.GlassCard />,
  'hover-tilt': <CardVars.HoloTiltCard />,
  'neon-border': <CardVars.NeonFrameCard />,
  'info-reveal': <CardVars.RevealCard />,
  'bento-grid': <div className="scale-75 origin-top-left"><CardVars.BentoBoxCard /></div>,
  'pattern-card': <CardVars.PatternCard />,
  'gradient-border': <CardVars.GlitchBorderCard />,
  'noise-card': <CardVars.NoiseCard />,
  'expand-card': <CardVars.TileExpandCard />,
  'flip-card': <CardVars.FlipCard />,
  'glow-card': <CardVars.GlowCard />,
  'tilt-card': <CardVars.TiltCard />,
  'curtain-card': <CardVars.CurtainCard />,
  'stack-card': <CardVars.StackCard />,
  'border-beam-card': <CardVars.BorderBeamCard />,
  'float-icon-card': <CardVars.FloatingIconCard />,
  'spotlight-grad': <CardVars.SpotlightGradientCard />,
  'directional-card': <CardVars.DirectionalCard />,
  'zoom-bg': <CardVars.ZoomBgCard />,
  'blob-morph-card': <CardVars.BlobMorphCard />,
  'skew-card': <CardVars.SkewCard />,
  'slide-up-card': <CardVars.SlideUpCard />,
  'magnetic-el-card': <CardVars.MagneticElementCard />,
  'video-hover': <CardVars.VideoHoverCard />,
  'holo-tilt': <CardVars.HoloTiltCard />,
  'depth-map': <CardVars.DepthMapCard />,
  'layered-para': <CardVars.LayeredParallaxCard />,
  'neon-frame': <CardVars.NeonFrameCard />,
  'iso-stack': <CardVars.IsoStackCard />,
  'frosted-pane': <CardVars.FrostedPaneCard />,
  'blur-overlay': <CardVars.BlurOverlayCard />,
  'crystal-edge': <CardVars.CrystalEdgeCard />,
  'glacier-card': <CardVars.GlacierCard />,
  'prism-refract': <CardVars.PrismRefractCard />,
  'bento-box': <CardVars.BentoBoxCard />,
  'grid-reveal': <CardVars.GridRevealCard />,
  'tile-expand': <CardVars.TileExpandCard />,
  'stat-metric': <CardVars.StatCardMetric />,
  'profile-mini': <CardVars.ProfileCardMini />,
  'video-preview': <CardVars.VideoPreviewCard />,
  'album-art': <CardVars.AlbumArtCard />,
  'live-indicator': <CardVars.LiveIndicatorCard />,
  'swipe-action': <CardVars.SwipeActionCard />,
  'expand-detail': <CardVars.ExpandDetailCard />,
  'flip-info': <CardVars.FlipInfoCard />,
  'noise-grad': <CardVars.NoiseGradientCard />,
  'shape-morph': <CardVars.ShapeMorphCard />,
  'glitch-effect': <CardVars.GlitchCardEffect />,
  'hollow-card': <CardVars.HollowCard />,
  'glass-credit': <CardVars.GlassCreditCard />,
  'feature-list': <CardVars.FeatureListCard />,
  'pricing-tier': <CardVars.PricingTierCard />,
  'notification-card': <CardVars.NotificationCard />,
  'code-snippet': <CardVars.CodeSnippetCard />,

  // Inputs
  'floating-label': <div className="w-full"><InputVars.FloatingLabelInput /></div>,
  'shake-error': <div className="w-full"><InputVars.ShakeErrorInput /></div>,
  'otp-input': <div className="w-full"><InputVars.OTPInput /></div>,
  // 'search-expand': <div className="w-full"><InputVars.SearchExpandInput /></div>, // Duplicate key with Nav, but handled by context usually. Renaming in Inputs recommended but sticking to ID map.
  'border-spread': <div className="w-full"><InputVars.BorderSpreadInput /></div>,
  'password-reveal': <div className="w-full"><InputVars.PasswordReveal /></div>,
  'tag-input': <div className="w-full"><InputVars.TagInput /></div>,
  'file-dropzone': <div className="w-full"><InputVars.FileDropzone /></div>,
  'color-picker': <div className="w-full"><InputVars.ColorInput /></div>,
  'slider-input': <div className="w-full"><InputVars.SliderInput /></div>,

  // Feedback
  'success-confetti': <MicroVars.SuccessConfettiBtn />,
  'toast-slide': <MicroVars.InfoToastSlide />,
  // 'error-shake': <MicroVars.ErrorShakeInput />, // Duplicate key with Button
  'loading-pulse': <MicroVars.WarningPulseIcon />,
  'like-explode': <MicroVars.LikeHeartExplode />,
  'trash-shred': <MicroVars.DeleteShred />,
  'rating-stars': <MicroVars.RatingStarsFill />,
  'download-progress': <MicroVars.DownloadProgressBtn />,
  'upload-cloud': <MicroVars.UploadCloudIcon />,
  'save-check': <MicroVars.SaveCheckMark />,

  // Dashboard
  'weather-card': <div className="scale-75 origin-top-left h-full w-full"><DashVars.WeatherWidget /></div>,
  'stats-graph': <div className="scale-75 origin-top-left h-full w-full"><DashVars.SalesChart /></div>,
  'activity-feed': <div className="scale-75 origin-top-left h-full w-full"><DashVars.RecentActivity /></div>,
  'mini-calendar': <div className="scale-75 origin-top-left h-full w-full"><DashVars.CalendarWidget /></div>,
  'total-revenue': <div className="scale-75 origin-top-left h-full w-full"><DashVars.TotalRevenue /></div>,
  'active-users': <div className="scale-75 origin-top-left h-full w-full"><DashVars.ActiveUsers /></div>,
  'sales-chart': <div className="scale-75 origin-top-left h-full w-full"><DashVars.SalesChart /></div>,
  'recent-activity': <div className="scale-75 origin-top-left h-full w-full"><DashVars.RecentActivity /></div>,
  'server-status': <div className="scale-75 origin-top-left h-full w-full"><DashVars.ServerStatus /></div>,
  'storage-gauge': <div className="scale-75 origin-top-left h-full w-full"><DashVars.StorageGauge /></div>,
  'weather-widget': <div className="scale-75 origin-top-left h-full w-full"><DashVars.WeatherWidget /></div>,
  'calendar-widget': <div className="scale-75 origin-top-left h-full w-full"><DashVars.CalendarWidget /></div>,
  'task-list': <div className="scale-75 origin-top-left h-full w-full"><DashVars.TaskList /></div>,
  'message-inbox': <div className="scale-75 origin-top-left h-full w-full"><DashVars.MessageInbox /></div>,
  'profile-summary': <div className="scale-75 origin-top-left h-full w-full"><DashVars.ProfileSummary /></div>,
  'map-location': <div className="scale-75 origin-top-left h-full w-full"><DashVars.MapLocation /></div>,
  'system-health': <div className="scale-75 origin-top-left h-full w-full"><DashVars.SystemHealth /></div>,
  'file-manager': <div className="scale-75 origin-top-left h-full w-full"><DashVars.FileManager /></div>,
  'music-player': <div className="scale-75 origin-top-left h-full w-full"><DashVars.MusicPlayerWidget /></div>,
  'credit-card': <div className="scale-75 origin-top-left h-full w-full"><DashVars.CreditCardWidget /></div>,
  'device-usage': <div className="scale-75 origin-top-left h-full w-full"><DashVars.DeviceUsage /></div>,
  'notification-list': <div className="scale-75 origin-top-left h-full w-full"><DashVars.NotificationList /></div>,
  'team-members': <div className="scale-75 origin-top-left h-full w-full"><DashVars.TeamMembers /></div>,
  'quick-actions': <div className="scale-75 origin-top-left h-full w-full"><DashVars.QuickActions /></div>,
  'analytics-graph': <div className="scale-75 origin-top-left h-full w-full"><DashVars.AnalyticsGraph /></div>,
  'goal-progress': <div className="scale-75 origin-top-left h-full w-full"><DashVars.GoalProgress /></div>,
  'downloads-counter': <div className="scale-75 origin-top-left h-full w-full"><DashVars.DownloadsCounter /></div>,
  'live-visitor': <div className="scale-75 origin-top-left h-full w-full"><DashVars.LiveVisitorMap /></div>,
  'sub-status': <div className="scale-75 origin-top-left h-full w-full"><DashVars.SubscriptionStatus /></div>,
  'memory-usage': <div className="scale-75 origin-top-left h-full w-full"><DashVars.MemoryUsage /></div>,
  'cpu-temp': <div className="scale-75 origin-top-left h-full w-full"><DashVars.CPUTemp /></div>,
  'network-speed': <div className="scale-75 origin-top-left h-full w-full"><DashVars.NetworkSpeed /></div>,
  'project-status': <div className="scale-75 origin-top-left h-full w-full"><DashVars.ProjectStatus /></div>,
  'pie-chart': <div className="scale-75 origin-top-left h-full w-full"><DashVars.PieChartWidget /></div>,

  // Blocks
  'hero-simple': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.HeroSimple /></div>,
  'hero-gradient': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.HeroGradient /></div>,
  'hero-split': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.HeroSplit /></div>,
  'feature-grid-3': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.FeatureGrid3 /></div>,
  'feature-list-side': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.FeatureListSide /></div>,
  'pricing-simple': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.PricingSimple /></div>,
  'testimonial-single': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.TestimonialSingle /></div>,
  'faq-accordion': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.FAQAccordion /></div>,
  'cta-banner': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.CTABanner /></div>,
  'footer-simple': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.FooterSimple /></div>,
  'stats-row': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.StatsRow /></div>,
  'contact-form': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.ContactFormBlock /></div>,
  'team-grid': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.TeamGrid /></div>,
  'logo-cloud': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.LogoCloud /></div>,
  'newsletter-block': <div className="scale-50 origin-top-left w-[200%]"><BlockVars.NewsletterBlock /></div>,

  // Empty States
  'no-data-simple': <EmptyVars.NoDataSimple />,
  'search-not-found': <EmptyVars.SearchNotFound />,
  'empty-cart': <EmptyVars.EmptyCart />,
  'offline-state': <EmptyVars.OfflineState />,
  'file-not-found': <EmptyVars.FileNotFound />,
  'no-messages': <EmptyVars.NoMessages />,
  'no-notifications': <EmptyVars.NoNotifications />,
  'empty-folder': <EmptyVars.EmptyFolder />,
  'no-events': <EmptyVars.NoEvents />,
  'no-users': <EmptyVars.NoUsers />,
  'empty-inbox': <EmptyVars.EmptyInbox />,
  'broken-link': <EmptyVars.BrokenLink />,
  'trash-empty': <EmptyVars.TrashEmpty />,
  'access-denied': <EmptyVars.AccessDenied />,
  'locked-content': <EmptyVars.LockedContent />,

  // Typography
  'kinetic-text': <TypoVars.KineticText />,
  'glitch-text': <TypoVars.GlitchText />,
  'gradient-text': <TypoVars.GradientText />,
  'typewriter-text': <TypoVars.TypewriterText />,
  'masked-text': <TypoVars.MaskedText />,
  'staggered-text': <TypoVars.StaggeredText />,
  'outline-text': <TypoVars.OutlineText />,
  'neon-text': <TypoVars.NeonText />,
  'retro-pixel': <TypoVars.RetroPixelText />,
  '3d-text': <TypoVars.ThreeDText />,
  'fade-reveal': <TypoVars.FadeRevealText />,
  'scramble-text': <TypoVars.ScrambleText />,
  'highlight-text': <TypoVars.HighlightText />,
  'reflection-text': <TypoVars.ReflectionText />,
  'wave-text': <TypoVars.WaveText />,
  'smokey-text': <TypoVars.SmokeyText />,
  'elastic-letter': <TypoVars.ElasticLetter />,
  'spotlight-text': <TypoVars.SpotlightText />,
  'variable-weight': <TypoVars.VariableWeightText />,
  'code-type': <TypoVars.CodeTypeText />,

  // Onboarding
  'dot-carousel': <OnboardVars.SimpleDotCarousel />,
  'progress-walkthrough': <OnboardVars.ProgressWalkthrough />,
  'swipe-cards': <OnboardVars.SwipeCards />,
  'feature-spotlight': <OnboardVars.FeatureSpotlight />,
  'gamified-checklist': <OnboardVars.ChecklistGamified />,
  'tooltip-tour': <OnboardVars.TooltipTour />,
  'welcome-mascot': <OnboardVars.WelcomeMascot />,
  'role-selection': <OnboardVars.RoleSelection />,

  // Modals
  'center-fade': <div className="scale-75 origin-top-left"><ModalVars.CenterFadeModal /></div>,
  'bottom-sheet': <div className="scale-75 origin-top-left"><ModalVars.BottomSheet /></div>,
  'side-drawer': <div className="scale-75 origin-top-left"><ModalVars.SideDrawerRight /></div>,
  'alert-shake': <div className="scale-75 origin-top-left"><ModalVars.AlertErrorShake /></div>,
  'success-toast': <div className="scale-75 origin-top-left"><ModalVars.SuccessToast /></div>,
  'confirm-dialog': <div className="scale-75 origin-top-left"><ModalVars.ConfirmDialog /></div>,
  'cookie-consent': <div className="scale-75 origin-top-left"><ModalVars.CookieConsent /></div>,
  'search-spotlight': <div className="scale-75 origin-top-left"><ModalVars.SearchSpotlight /></div>,

  // Skeletons
  'text-lines': <SkeletonVars.TextLines />,
  'avatar-profile': <SkeletonVars.AvatarProfile />,
  'card-vertical': <SkeletonVars.CardVertical />,
  'dashboard-stats': <SkeletonVars.DashboardStats />,
  'chat-message': <SkeletonVars.ChatMessage />,
  'video-player': <SkeletonVars.VideoPlayer />,
  'table-row': <SkeletonVars.TableRow />,
  'image-gallery': <SkeletonVars.ImageGallery />,
};

const STEPS = ['Platform', 'Theme', 'Layout', 'Components', 'Review'];

export default function WizardPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const { platform, theme, layout, selectedVariants, setPlatform, setTheme, setLayout, selectVariant } = useWizardStore();
  const [copied, setCopied] = useState(false);
  
  // Track which category is active in Step 3
  const [activeCategory, setActiveCategory] = useState<string>('navigation');

  useEffect(() => {
    localStorage.setItem('wizard_seen', 'true');
  }, []);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(c => c + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(c => c - 1);
  };

  const generatePrompt = () => {
    // Generate detailed component list
    const componentList = Object.entries(selectedVariants)
      .flatMap(([catId, variantIds]) => {
        if (!variantIds || variantIds.length === 0) return [];
        // @ts-ignore
        const cat = COMPONENT_VARIANTS[catId];
        return variantIds.map(vid => {
            // @ts-ignore
            const variant = cat?.variants.find(v => v.id === vid);
            return variant ? `- ${cat.label}: ${variant.name} (${variant.desc})` : null;
        });
      })
      .filter(Boolean)
      .join('\n');

    return `Create a ${platform || 'web app'} using React, Tailwind CSS, and Framer Motion.
    
Design System:
- Theme: ${theme || 'Default'}
- Layout Structure: ${layout || 'Standard'}

Selected UI Components & Styles:
${componentList || '- No specific components selected.'}

Requirements:
- Use functional components with hooks.
- Ensure responsive design for mobile and desktop.
- Implement smooth animations for interactions.
- Use Lucide React for icons.
- Follow the design patterns described above.`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatePrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const StepContent = () => {
    switch (currentStep) {
      case 0: // Platform
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'web', label: 'Web Application', icon: Globe, desc: 'SaaS, Dashboards, Tools' },
              { id: 'mobile', label: 'Mobile App', icon: Smartphone, desc: 'iOS/Android style PWA' },
              { id: 'landing', label: 'Landing Page', icon: Layout, desc: 'Marketing, Portfolio' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setPlatform(opt.id as any)}
                className={`p-6 rounded-2xl border transition-all text-left group relative overflow-hidden
                  ${platform === opt.id ? 'bg-primary/10 border-primary shadow-lg shadow-primary/10' : 'bg-surface-50 border-white/10 hover:border-white/20 hover:bg-surface-100'}
                `}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${platform === opt.id ? 'bg-primary text-black' : 'bg-white/5 text-white group-hover:bg-white/10'}`}>
                  <opt.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{opt.label}</h3>
                <p className="text-sm text-white/50">{opt.desc}</p>
                {platform === opt.id && <div className="absolute top-4 right-4 text-primary"><Check className="w-5 h-5" /></div>}
              </button>
            ))}
          </div>
        );
      case 1: // Theme
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] overflow-y-auto pr-2">
            {PALETTES_LIST.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`p-4 rounded-xl border transition-all text-left relative
                  ${theme === t.id ? 'bg-white/10 border-primary' : 'bg-surface-50 border-white/5 hover:border-white/20'}
                `}
              >
                <div className="flex gap-2 mb-3">
                  {t.colors.map(c => (
                    <div key={c} className="w-6 h-6 rounded-full border border-white/10" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <span className="text-sm font-medium text-white">{t.id}</span>
                {theme === t.id && <Check className="absolute top-4 right-4 w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        );
      case 2: // Layout
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'Sidebar Layout', icon: Layout, desc: 'Classic dashboard with collapsible side nav' },
              { id: 'Top Navbar', icon: Compass, desc: 'Horizontal navigation with mega-menu support' },
              { id: 'Split Screen', icon: Box, desc: '50/50 layout ideal for auth or featured content' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setLayout(opt.id)}
                className={`p-6 rounded-2xl border transition-all text-left
                  ${layout === opt.id ? 'bg-primary/10 border-primary' : 'bg-surface-50 border-white/10 hover:border-white/20'}
                `}
              >
                <opt.icon className="w-8 h-8 text-white/70 mb-4" />
                <h3 className="font-bold text-white">{opt.id}</h3>
                <p className="text-sm text-white/50 mt-1">{opt.desc}</p>
              </button>
            ))}
          </div>
        );
      case 3: // Components Visual Selection
        return (
          <div className="flex flex-col lg:flex-row gap-8 h-[600px]">
            {/* Left Col: Categories */}
            <div className="w-full lg:w-64 flex flex-col gap-2 overflow-y-auto pr-2 border-r border-white/5">
              <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2 px-2">Components</h3>
              {Object.entries(COMPONENT_VARIANTS).map(([key, cat]) => {
                const Icon = cat.icon;
                const count = selectedVariants[key]?.length || 0;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all
                      ${activeCategory === key ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      {cat.label}
                    </div>
                    {count > 0 && (
                      <div className="w-5 h-5 rounded-full bg-primary text-black flex items-center justify-center text-[10px] font-bold">
                        {count}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Col: Variants Grid */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  Select {COMPONENT_VARIANTS[activeCategory as keyof typeof COMPONENT_VARIANTS].label} Style
                </h3>
                <span className="text-xs text-white/40">Multi-select enabled</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COMPONENT_VARIANTS[activeCategory as keyof typeof COMPONENT_VARIANTS].variants.map((variant) => {
                  const isSelected = selectedVariants[activeCategory]?.includes(variant.id);
                  const ComponentPreview = COMPONENT_MAP[variant.id];

                  return (
                    <button
                      key={variant.id}
                      onClick={() => selectVariant(activeCategory, variant.id)}
                      className={`p-4 rounded-xl border text-left transition-all relative group flex flex-col h-full
                        ${isSelected ? 'bg-primary/5 border-primary shadow-[0_0_15px_rgba(0,243,255,0.1)]' : 'bg-surface-50 border-white/10 hover:border-white/30'}
                      `}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`font-bold ${isSelected ? 'text-primary' : 'text-white'}`}>{variant.name}</span>
                        {isSelected ? (
                          <div className="bg-primary text-black rounded-full p-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-white/20 group-hover:border-white/50" />
                        )}
                      </div>
                      <p className="text-xs text-white/50 mb-4">{variant.desc}</p>
                      
                      {/* Real Visual Preview */}
                      <div className="mt-auto h-32 bg-black/20 rounded-lg border border-white/5 overflow-hidden relative flex items-center justify-center">
                        <div className="w-full h-full p-4 flex items-center justify-center pointer-events-none transform scale-90">
                           {ComponentPreview || <span className="text-[10px] text-white/20 font-mono">Preview not available</span>}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case 4: // Review
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-zinc-900 p-4 rounded-xl border border-white/10">
                    <h4 className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Platform</h4>
                    <p className="text-white font-bold text-lg capitalize">{platform || 'Not selected'}</p>
                </div>
                <div className="bg-zinc-900 p-4 rounded-xl border border-white/10">
                    <h4 className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Theme</h4>
                    <p className="text-white font-bold text-lg">{theme || 'Not selected'}</p>
                </div>
                <div className="bg-zinc-900 p-4 rounded-xl border border-white/10">
                    <h4 className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Layout</h4>
                    <p className="text-white font-bold text-lg">{layout || 'Not selected'}</p>
                </div>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-6 font-mono text-sm text-white/70 whitespace-pre-wrap max-h-[400px] overflow-y-auto">
              {generatePrompt()}
            </div>
            <div className="flex justify-center">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-xl hover:scale-105 transition-transform"
              >
                {copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? 'Copied to Clipboard!' : 'Copy Prompt'}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      {/* Header */}
      <header className="px-6 py-6 border-b border-white/10 flex items-center justify-between bg-black/50 backdrop-blur fixed top-0 w-full z-50 lg:pl-72">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold">Design Wizard</h1>
        </div>
        <button onClick={() => router.push('/')} className="text-sm text-white/50 hover:text-white">Exit</button>
      </header>

      <div className="flex-1 pt-24 pb-24 px-6 max-w-6xl mx-auto w-full">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {STEPS.map((step, i) => (
              <span key={step} className={`text-xs font-bold uppercase tracking-wider ${i <= currentStep ? 'text-primary' : 'text-white/20'}`}>
                {step}
              </span>
            ))}
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-2">{STEPS[currentStep]} Selection</h2>
            <p className="text-white/50 mb-8">
              {currentStep === 0 && "What kind of project are you building?"}
              {currentStep === 1 && "Choose a visual style for your project."}
              {currentStep === 2 && "Pick a foundational layout structure."}
              {currentStep === 3 && "Browse categories and select multiple component styles to mix and match."}
              {currentStep === 4 && "Review your selection and copy the AI prompt."}
            </p>
            
            <StepContent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Nav */}
      <footer className="fixed bottom-0 right-0 left-0 lg:left-64 p-6 bg-black/80 backdrop-blur border-t border-white/10 flex justify-between z-50">
        <button 
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        
        {currentStep < STEPS.length - 1 && (
          <button 
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </footer>
    </div>
  );
}
