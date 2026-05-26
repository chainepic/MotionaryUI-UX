'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Loader2, Bone, LayoutGrid, List, Image as ImageIcon } from 'lucide-react';
import { Footer } from '@/components/system/Footer';
import { PlaygroundCard } from "@/components/system/PlaygroundCard";
import * as Skeletons from "@/components/motionary/atomic/SkeletonVariants";

export default function SkeletonsPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-12">
        <header className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hub
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-zinc-500/10 rounded-xl text-zinc-400">
              <Bone className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Skeletons
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            Loading states and placeholders to reduce perceived latency.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           <PlaygroundCard title="Text Lines" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Paragraph placeholder" styleTags={['minimal']}><Skeletons.TextLines /></PlaygroundCard>
           <PlaygroundCard title="Profile Avatar" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="User info loader" styleTags={['ui']}><Skeletons.AvatarProfile /></PlaygroundCard>
           <PlaygroundCard title="Card Vertical" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Blog card loader" styleTags={['layout']}><Skeletons.CardVertical /></PlaygroundCard>
           <PlaygroundCard title="Card Horizontal" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="News item loader" styleTags={['layout']}><Skeletons.CardHorizontal /></PlaygroundCard>
           <PlaygroundCard title="Table Row" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Data row loader" styleTags={['data']}><Skeletons.TableRow /></PlaygroundCard>
           <PlaygroundCard title="Image Gallery" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Grid placeholder" styleTags={['media']}><Skeletons.ImageGallery /></PlaygroundCard>
           <PlaygroundCard title="Dashboard" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Stats loader" styleTags={['data']}><Skeletons.DashboardStats /></PlaygroundCard>
           <PlaygroundCard title="Chat" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Message bubbles" styleTags={['social']}><Skeletons.ChatMessage /></PlaygroundCard>
           <PlaygroundCard title="Video Player" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Media placeholder" styleTags={['media']}><Skeletons.VideoPlayer /></PlaygroundCard>
           <PlaygroundCard title="Comments" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Thread loader" styleTags={['social']}><Skeletons.CommentThread /></PlaygroundCard>
           <PlaygroundCard title="Product Grid" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Ecomm loader" styleTags={['ecom']}><Skeletons.ProductGrid /></PlaygroundCard>
           <PlaygroundCard title="Circle Graph" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Chart placeholder" styleTags={['data']}><Skeletons.CircleGraph /></PlaygroundCard>
           <PlaygroundCard title="Bar Chart" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Graph placeholder" styleTags={['data']}><Skeletons.BarChart /></PlaygroundCard>
           <PlaygroundCard title="Activity Feed" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Timeline loader" styleTags={['social']}><Skeletons.ActivityFeed /></PlaygroundCard>
           <PlaygroundCard title="Search Results" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="List loader" styleTags={['ui']}><Skeletons.SearchResults /></PlaygroundCard>
           <PlaygroundCard title="Form Inputs" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Input fields" styleTags={['form']}><Skeletons.FormInputs /></PlaygroundCard>
           <PlaygroundCard title="Notifications" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Alert list" styleTags={['ui']}><Skeletons.Notifications /></PlaygroundCard>
           <PlaygroundCard title="Calendar" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Month view" styleTags={['ui']}><Skeletons.CalendarDays /></PlaygroundCard>
           <PlaygroundCard title="File List" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Document icons" styleTags={['ui']}><Skeletons.FileList /></PlaygroundCard>
           <PlaygroundCard title="Code Block" trigger="Load" codePath="atomic/SkeletonVariants" promptDescription="Syntax loader" styleTags={['dev']}><Skeletons.CodeBlock /></PlaygroundCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}

