'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Activity, Server, Database, Cloud, 
  Battery, Wifi, Sun, Calendar, CheckSquare, MessageSquare,
  DollarSign, ShoppingCart, Eye, Clock, MapPin, Zap, Shield,
  FileText, Music, Image as ImageIcon, Video, Mic, Smartphone,
  Cpu, HardDrive, Layout, CreditCard, BarChart2, PieChart
} from 'lucide-react';

// 1. Total Revenue Card
export const TotalRevenue = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-zinc-400 text-sm">Total Revenue</p>
        <h3 className="text-2xl font-bold text-white">$45,231.89</h3>
      </div>
      <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
        <DollarSign className="w-5 h-5" />
      </div>
    </div>
    <div className="flex items-center gap-2 text-sm">
      <span className="text-green-500 font-medium">+20.1%</span>
      <span className="text-zinc-500">from last month</span>
    </div>
  </div>
);

// 2. Active Users Card
export const ActiveUsers = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-zinc-400 text-sm">Active Users</p>
        <h3 className="text-2xl font-bold text-white">+2350</h3>
      </div>
      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
        <Users className="w-5 h-5" />
      </div>
    </div>
    <div className="flex items-center gap-2 text-sm">
      <span className="text-blue-500 font-medium">+180.1%</span>
      <span className="text-zinc-500">from last month</span>
    </div>
  </div>
);

// 3. Sales Chart (Visual)
export const SalesChart = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full flex flex-col">
    <h3 className="text-white font-bold mb-4">Overview</h3>
    <div className="flex-1 flex items-end justify-between gap-2 h-32">
      {[40, 70, 45, 90, 60, 80, 50, 85].map((h, i) => (
        <div key={i} className="w-full bg-zinc-800 rounded-t-sm hover:bg-primary transition-colors" style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

// 4. Recent Activity Feed
export const RecentActivity = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-4">Activity</h3>
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div>
            <p className="text-sm text-white">New order received</p>
            <p className="text-xs text-zinc-500">2 minutes ago</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 5. Server Status
export const ServerStatus = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-white font-bold">Server Status</h3>
      <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full">Operational</span>
    </div>
    <div className="space-y-3">
      <div>
        <div className="flex justify-between text-xs text-zinc-400 mb-1"><span>CPU Usage</span><span>45%</span></div>
        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden"><div className="h-full w-[45%] bg-blue-500" /></div>
      </div>
      <div>
        <div className="flex justify-between text-xs text-zinc-400 mb-1"><span>Memory</span><span>72%</span></div>
        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden"><div className="h-full w-[72%] bg-purple-500" /></div>
      </div>
    </div>
  </div>
);

// 6. Storage Gauge
export const StorageGauge = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full flex flex-col items-center justify-center">
    <div className="relative w-24 h-24 rounded-full border-8 border-zinc-800 flex items-center justify-center mb-2">
      <div className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent border-r-transparent rotate-45" />
      <span className="text-xl font-bold text-white">75%</span>
    </div>
    <p className="text-zinc-400 text-sm">Storage Used</p>
  </div>
);

// 7. Weather Widget
export const WeatherWidget = () => (
  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl w-full h-full text-white">
    <div className="flex justify-between items-start">
      <Sun className="w-8 h-8 text-yellow-300" />
      <span className="text-sm opacity-80">New York</span>
    </div>
    <div className="mt-4">
      <h3 className="text-4xl font-bold">72°</h3>
      <p className="opacity-80">Sunny</p>
    </div>
  </div>
);

// 8. Calendar Widget
export const CalendarWidget = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-white font-bold">October</h3>
      <Calendar className="w-4 h-4 text-zinc-500" />
    </div>
    <div className="grid grid-cols-7 gap-2 text-center text-xs text-zinc-400">
      {['S','M','T','W','T','F','S'].map(d => <span key={d}>{d}</span>)}
      {[...Array(14)].map((_, i) => (
        <span key={i} className={`p-1 rounded ${i === 5 ? 'bg-primary text-black' : ''}`}>{i + 1}</span>
      ))}
    </div>
  </div>
);

// 9. Task List
export const TaskList = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-4">Tasks</h3>
    <div className="space-y-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer group">
          <div className="w-4 h-4 border border-zinc-600 rounded group-hover:border-primary" />
          <span className="text-sm text-zinc-300 group-hover:text-white group-hover:line-through">Task item {i}</span>
        </div>
      ))}
    </div>
  </div>
);

// 10. Message Inbox
export const MessageInbox = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-4">Messages</h3>
    <div className="space-y-4">
      {[1, 2].map((i) => (
        <div key={i} className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-white">User Name</h4>
            <p className="text-xs text-zinc-500 truncate w-32">Hey, about that design update...</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 11. Profile Summary
export const ProfileSummary = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 mb-4" />
    <h3 className="text-lg font-bold text-white">Alex Morgan</h3>
    <p className="text-zinc-500 text-sm">Product Designer</p>
    <div className="flex gap-4 mt-6">
      <div className="text-center"><div className="font-bold text-white">124</div><div className="text-xs text-zinc-500">Posts</div></div>
      <div className="text-center"><div className="font-bold text-white">12k</div><div className="text-xs text-zinc-500">Followers</div></div>
    </div>
  </div>
);

// 12. Map Location
export const MapLocation = () => (
  <div className="bg-zinc-900 rounded-2xl border border-zinc-800 w-full h-full overflow-hidden relative">
    <div className="absolute inset-0 bg-zinc-800 opacity-50" /> {/* Placeholder for map */}
    <div className="absolute inset-0 flex items-center justify-center">
      <MapPin className="w-8 h-8 text-red-500 animate-bounce" />
    </div>
    <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/90 backdrop-blur p-3 rounded-lg">
      <h4 className="text-sm font-bold text-white">San Francisco</h4>
      <p className="text-xs text-zinc-500">HQ Office</p>
    </div>
  </div>
);

// 13. System Health
export const SystemHealth = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-4">System Health</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-zinc-800 p-3 rounded-lg text-center">
        <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
        <span className="text-xs text-zinc-400">Power</span>
      </div>
      <div className="bg-zinc-800 p-3 rounded-lg text-center">
        <Wifi className="w-6 h-6 text-blue-500 mx-auto mb-2" />
        <span className="text-xs text-zinc-400">Network</span>
      </div>
      <div className="bg-zinc-800 p-3 rounded-lg text-center">
        <Shield className="w-6 h-6 text-green-500 mx-auto mb-2" />
        <span className="text-xs text-zinc-400">Security</span>
      </div>
      <div className="bg-zinc-800 p-3 rounded-lg text-center">
        <Database className="w-6 h-6 text-purple-500 mx-auto mb-2" />
        <span className="text-xs text-zinc-400">Data</span>
      </div>
    </div>
  </div>
);

// 14. File Manager
export const FileManager = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-4">Files</h3>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded"><FileText className="w-4 h-4 text-blue-500" /></div>
          <div><p className="text-sm text-white">Project.pdf</p><p className="text-xs text-zinc-500">2.4 MB</p></div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-500/10 rounded"><Image as="div" className="w-4 h-4 text-yellow-500" ><ImageIcon className="w-4 h-4" /></Image></div>
          <div><p className="text-sm text-white">Design.png</p><p className="text-xs text-zinc-500">5.1 MB</p></div>
        </div>
      </div>
    </div>
  </div>
);

// 15. Music Player Widget
export const MusicPlayerWidget = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 opacity-50" />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 bg-black rounded-lg shadow-lg" />
        <div>
          <h4 className="text-white font-bold">Dreaming</h4>
          <p className="text-zinc-400 text-sm">Neon City</p>
        </div>
      </div>
      <div className="flex justify-center gap-6 text-white mt-4">
        <span className="cursor-pointer">⏮</span>
        <span className="cursor-pointer w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">▶</span>
        <span className="cursor-pointer">⏭</span>
      </div>
    </div>
  </div>
);

// 16. Credit Card Widget
export const CreditCardWidget = () => (
  <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-2xl border border-zinc-700 w-full h-full flex flex-col justify-between">
    <div className="flex justify-between items-center">
      <span className="text-white font-bold tracking-wider">VISA</span>
      <Wifi className="w-6 h-6 text-white/50 rotate-90" />
    </div>
    <div>
      <p className="text-zinc-400 text-xs mb-1">Card Balance</p>
      <h3 className="text-2xl font-bold text-white">$12,450.00</h3>
    </div>
    <div className="flex justify-between items-end">
      <p className="text-white/70 font-mono">**** 4582</p>
      <p className="text-white/70 text-xs">12/25</p>
    </div>
  </div>
);

// 17. Device Usage
export const DeviceUsage = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-4">Device Split</h3>
    <div className="space-y-4">
      <div>
        <div className="flex justify-between text-sm text-zinc-400 mb-1"><span className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> Mobile</span><span>60%</span></div>
        <div className="h-1.5 w-full bg-zinc-800 rounded-full"><div className="h-full w-[60%] bg-indigo-500 rounded-full" /></div>
      </div>
      <div>
        <div className="flex justify-between text-sm text-zinc-400 mb-1"><span className="flex items-center gap-2"><Layout className="w-4 h-4" /> Desktop</span><span>40%</span></div>
        <div className="h-1.5 w-full bg-zinc-800 rounded-full"><div className="h-full w-[40%] bg-pink-500 rounded-full" /></div>
      </div>
    </div>
  </div>
);

// 18. Notification List
export const NotificationList = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-4 flex items-center gap-2">Notifications <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span></h3>
    <div className="space-y-3">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-zinc-800/50 p-3 rounded-lg border-l-2 border-blue-500">
          <p className="text-sm text-white">System update completed</p>
        </div>
      ))}
    </div>
  </div>
);

// 19. Team Members
export const TeamMembers = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-4">Team</h3>
    <div className="flex -space-x-2">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-zinc-900 flex items-center justify-center text-xs text-white">
          U{i}
        </div>
      ))}
      <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs text-zinc-400">
        +5
      </div>
    </div>
  </div>
);

// 20. Quick Actions Grid
export const QuickActions = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-4">Quick Actions</h3>
    <div className="grid grid-cols-2 gap-3">
      <button className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs text-white transition-colors">Add User</button>
      <button className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs text-white transition-colors">Create Post</button>
      <button className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs text-white transition-colors">Upload</button>
      <button className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs text-white transition-colors">Settings</button>
    </div>
  </div>
);

// 21. Analytics Graph (Area)
export const AnalyticsGraph = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full flex flex-col">
    <h3 className="text-white font-bold mb-2">Visits</h3>
    <div className="flex-1 bg-zinc-800/30 rounded-lg relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-primary/20 to-transparent" />
      <svg className="absolute bottom-0 left-0 right-0 h-[60%] w-full" preserveAspectRatio="none">
        <path d="M0,100 Q50,50 100,80 T200,40 T300,100" fill="none" stroke="cyan" strokeWidth="2" />
      </svg>
    </div>
  </div>
);

// 22. Goal Progress
export const GoalProgress = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-2">Weekly Goal</h3>
    <div className="text-3xl font-black text-white mb-4">85%</div>
    <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-green-400 to-emerald-600 w-[85%]" />
    </div>
    <p className="text-xs text-zinc-500 mt-2">15% more to reach target</p>
  </div>
);

// 23. Downloads Counter
export const DownloadsCounter = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full flex items-center gap-4">
    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
      <Cloud className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">45.2k</h3>
      <p className="text-xs text-zinc-500">Total Downloads</p>
    </div>
  </div>
);

// 24. Live Visitor Map (Abstract)
export const LiveVisitorMap = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full relative overflow-hidden">
    <h3 className="text-white font-bold relative z-10">Live Users</h3>
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      <div className="w-32 h-32 border border-white/30 rounded-full animate-ping" />
    </div>
    {[1,2,3,4].map(i => (
      <div key={i} className="absolute w-2 h-2 bg-green-500 rounded-full" 
           style={{ top: `${Math.random()*80 + 10}%`, left: `${Math.random()*80 + 10}%` }} />
    ))}
  </div>
);

// 25. Subscription Status
export const SubscriptionStatus = () => (
  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl w-full h-full text-white">
    <h3 className="font-bold text-lg mb-1">Pro Plan</h3>
    <p className="text-white/70 text-sm mb-4">Active until Dec 2025</p>
    <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold">Manage</button>
  </div>
);

// 26. Memory Usage
export const MemoryUsage = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full flex flex-col justify-between">
    <div className="flex justify-between">
      <span className="text-zinc-400 text-sm">RAM</span>
      <HardDrive className="w-4 h-4 text-zinc-500" />
    </div>
    <div className="flex items-end gap-1 h-16">
      {[20, 40, 60, 30, 80, 50].map((h, i) => (
        <div key={i} className="flex-1 bg-zinc-800 rounded-t" style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

// 27. CPU Temp
export const CPUTemp = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full flex flex-col justify-between">
    <div className="flex justify-between">
      <span className="text-zinc-400 text-sm">Temp</span>
      <Cpu className="w-4 h-4 text-zinc-500" />
    </div>
    <div className="text-3xl font-bold text-white">65°C</div>
    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mt-2">
      <div className="h-full bg-orange-500 w-[65%]" />
    </div>
  </div>
);

// 28. Network Speed
export const NetworkSpeed = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <div className="flex items-center gap-3 mb-2">
      <Activity className="w-5 h-5 text-green-500" />
      <span className="text-white font-bold">Network</span>
    </div>
    <div className="flex justify-between mt-4">
      <div>
        <p className="text-xs text-zinc-500">Download</p>
        <p className="text-lg font-bold text-white">120 <span className="text-xs text-zinc-500">Mb/s</span></p>
      </div>
      <div>
        <p className="text-xs text-zinc-500">Upload</p>
        <p className="text-lg font-bold text-white">45 <span className="text-xs text-zinc-500">Mb/s</span></p>
      </div>
    </div>
  </div>
);

// 29. Project Status
export const ProjectStatus = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full">
    <h3 className="text-white font-bold mb-4">Projects</h3>
    <div className="space-y-3">
      <div className="flex justify-between items-center text-sm">
        <span className="text-white">Website Redesign</span>
        <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-500 text-xs rounded">In Progress</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-white">Mobile App</span>
        <span className="px-2 py-0.5 bg-green-500/20 text-green-500 text-xs rounded">Done</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-white">Dashboard</span>
        <span className="px-2 py-0.5 bg-zinc-700 text-zinc-400 text-xs rounded">Pending</span>
      </div>
    </div>
  </div>
);

// 30. Pie Chart Widget
export const PieChartWidget = () => (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-full h-full flex flex-col items-center justify-center">
    <div className="relative w-24 h-24 rounded-full bg-zinc-800 border-4 border-zinc-900 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[conic-gradient(#3b82f6_0deg_120deg,#a855f7_120deg_240deg,#ef4444_240deg_360deg)]" />
      <div className="w-16 h-16 bg-zinc-900 rounded-full z-10" />
    </div>
    <div className="flex gap-3 mt-4 text-xs">
      <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full" /> A</span>
      <span className="flex items-center gap-1"><div className="w-2 h-2 bg-purple-500 rounded-full" /> B</span>
      <span className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full" /> C</span>
    </div>
  </div>
);

