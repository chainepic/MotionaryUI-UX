'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, LayoutDashboard, Calendar, BarChart3, CloudSun, Activity } from 'lucide-react';
import { Footer } from '@/components/system/Footer';
import { WeatherCard } from '@/components/dashboard/WeatherCard';
import { StatsGraph } from '@/components/dashboard/StatsGraph';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { CalendarWidget } from '@/components/dashboard/CalendarWidget';

export default function DashboardPage() {
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
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
              <LayoutDashboard className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Dashboard Widgets
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">
            Data-rich components for analytics and overview screens.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {/* Weather */}
          <section className="bg-surface-50 border border-white/5 rounded-3xl p-6 flex flex-col gap-4">
             <div className="flex items-center gap-2 mb-2">
                <CloudSun className="w-5 h-5 text-yellow-300" />
                <h2 className="text-lg font-bold">Weather Card</h2>
             </div>
             <div className="h-[280px]">
                <WeatherCard />
             </div>
          </section>

          {/* Stats */}
          <section className="bg-surface-50 border border-white/5 rounded-3xl p-6 flex flex-col gap-4">
             <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-bold">Metric Graph</h2>
             </div>
             <div className="h-[280px]">
                <StatsGraph />
             </div>
          </section>

          {/* Activity */}
          <section className="bg-surface-50 border border-white/5 rounded-3xl p-6 flex flex-col gap-4">
             <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-green-400" />
                <h2 className="text-lg font-bold">Activity Feed</h2>
             </div>
             <div className="h-[280px]">
                <ActivityFeed />
             </div>
          </section>

          {/* Calendar */}
          <section className="bg-surface-50 border border-white/5 rounded-3xl p-6 flex flex-col gap-4">
             <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-red-400" />
                <h2 className="text-lg font-bold">Mini Calendar</h2>
             </div>
             <div className="h-[320px]">
                <CalendarWidget />
             </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}

