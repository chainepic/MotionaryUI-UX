'use client';

import React, { useMemo, useState } from 'react';
import { RefreshCw, Code, Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useBubbleSound } from '@/hooks/useBubbleSound';
import { useFilterStore, ComponentType } from '@/store/useFilterStore';

interface PlaygroundCardProps {
  title: string;
  trigger: string;
  children: React.ReactNode;
  className?: string;
  codePath?: string;
  styleTags?: string[];
  compType?: ComponentType;
  promptDescription?: string;
}

export const PlaygroundCard = ({
  title,
  trigger,
  children,
  className,
  codePath,
  styleTags = [],
  compType,
  promptDescription,
}: PlaygroundCardProps) => {
  const [key, setKey] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [isCopyPrompt, setIsCopyPrompt] = useState(false);
  const [loadingPrompt, setLoadingPrompt] = useState(false);
  const { activeFilters, styleFilters, componentType } = useFilterStore();

  const playPop = useBubbleSound();

  // Filter: trigger
  if (activeFilters.trigger && activeFilters.trigger !== trigger) {
    return null;
  }
  // Filter: style (if active filter exists, require intersection; if no tags, hide)
  if (styleFilters.length > 0) {
    if (styleTags.length === 0) return null;
    const hasStyle = styleTags.some((s) => styleFilters.includes(s));
    if (!hasStyle) return null;
  }
  // Filter: type (default element)
  const effectiveType: ComponentType = compType ?? 'element';
  if (componentType && componentType !== effectiveType) {
    return null;
  }

  const copyCode = async () => {
    if (!codePath) {
      alert(`Code path not linked for "${title}".\nView repo at github.com/chainepic/MotionaryUI-UX`);
      return;
    }
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/chainepic/MotionaryUI-UX/main/src/components/motionary/${codePath}.tsx`
      );
      if (!response.ok) throw new Error('Failed to fetch code');
      const code = await response.text();
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Error fetching code:', error);
      alert('Failed to load code from GitHub. Please check console or visit the repository.');
    }
  };

  const promptText = useMemo(() => {
    const autoBase = `${title} (${trigger.toLowerCase()}), ${effectiveType} built with React + Tailwind + framer-motion.`;
    const base = promptDescription || autoBase;
    const styleNote = styleTags.length ? `Style: ${styleTags.join(', ')}. ` : '';
    const typeNote = effectiveType ? `Type: ${effectiveType}. ` : '';
    return `${base} ${styleNote}${typeNote}Return a self-contained React component using Tailwind classes and framer-motion for animation.`;
  }, [promptDescription, title, trigger, styleTags, effectiveType]);

  const copyPrompt = async () => {
    try {
      setLoadingPrompt(true);
      await navigator.clipboard.writeText(promptText);
      setIsCopyPrompt(true);
      setTimeout(() => setIsCopyPrompt(false), 2000);
    } catch (e) {
      console.error('Prompt copy failed', e);
      alert('Failed to copy prompt');
    } finally {
      setLoadingPrompt(false);
    }
  };

  return (
    <div
      className="group relative bg-surface-50 border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-500"
      onMouseEnter={playPop}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/[0.02]">
        <div className="flex flex-col">
          <h3 className="text-sm font-medium text-white/90">{title}</h3>
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono mt-1">
            {trigger}
          </span>
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setKey((k) => k + 1);
            }}
            className="p-2 hover:bg-white/10 rounded-md text-white/60 hover:text-primary transition-colors active:scale-90 transform"
            title="Replay"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyCode();
            }}
            className={cn(
              'p-2 hover:bg-white/10 rounded-md transition-colors active:scale-90 transform flex items-center gap-2',
              isCopied ? 'text-green-400' : 'text-white/60 hover:text-white'
            )}
            title={codePath ? 'Copy Code' : 'View Code'}
          >
            {isCopied ? <Check className="w-3.5 h-3.5" /> : <Code className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyPrompt();
            }}
            className={cn(
              'p-2 hover:bg-white/10 rounded-md transition-colors active:scale-90 transform flex items-center gap-2',
              isCopyPrompt ? 'text-green-400' : 'text-white/60 hover:text-white'
            )}
            title="Copy Prompt"
          >
            {loadingPrompt ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : isCopyPrompt ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div
        className={cn(
          "h-64 flex items-center justify-center p-8 relative bg-[url('/grid-small.svg')] bg-center",
          className
        )}
      >
        <React.Fragment key={key}>{children}</React.Fragment>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 pointer-events-none bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10" />
    </div>
  );
};
