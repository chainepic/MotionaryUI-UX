'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Settings, Mail, Bell } from 'lucide-react';

// 1. Underline Nav
export const UnderlineNav = () => {
    const [active, setActive] = React.useState(0);
    const items = ["Home", "About", "Work", "Contact"];
    
    return (
        <div className="flex gap-4">
            {items.map((item, i) => (
                <button 
                    key={i} 
                    onClick={() => setActive(i)}
                    className="relative px-2 py-1 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                    {item}
                    {active === i && (
                        <motion.div 
                            layoutId="underline" 
                            className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary" 
                        />
                    )}
                </button>
            ))}
        </div>
    )
}

// 2. Background Pill Nav
export const PillNav = () => {
    const [active, setActive] = React.useState(0);
    const items = ["All", "Design", "Code"];
    
    return (
        <div className="flex bg-surface-100 p-1 rounded-full gap-1">
            {items.map((item, i) => (
                <button 
                    key={i} 
                    onClick={() => setActive(i)}
                    className={`relative px-4 py-1 text-xs font-medium rounded-full transition-colors z-10 ${active === i ? 'text-black' : 'text-white/60'}`}
                >
                    {item}
                    {active === i && (
                        <motion.div 
                            layoutId="pill" 
                            className="absolute inset-0 bg-white rounded-full -z-10" 
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                </button>
            ))}
        </div>
    )
}

// 3. Dock Icon Effect
export const DockMenu = () => {
    return (
        <div className="flex gap-2 items-end h-12">
            {[1,2,3,4,5].map((i) => (
                <motion.div 
                    key={i}
                    className="w-8 h-8 bg-surface-300 rounded-lg flex items-center justify-center border border-white/10"
                    whileHover={{ scale: 1.5, y: -10, margin: "0 8px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            ))}
        </div>
    )
}

// 4. Sidebar Expand
export const SidebarExpand = () => (
    <motion.div 
        className="w-12 h-32 bg-surface-200 border border-white/10 rounded-r-xl overflow-hidden flex flex-col gap-4 py-4 items-start pl-3"
        whileHover={{ width: 140 }}
    >
        {[1,2,3].map(i => (
             <div key={i} className="flex items-center gap-3 min-w-max">
                <div className="w-6 h-6 bg-white/20 rounded" />
                <span className="text-sm opacity-0 hover:opacity-100 transition-opacity delay-100">Menu Item</span>
            </div>
        ))}
    </motion.div>
)

// 5. Circular Menu (Concept)
export const CircularMenu = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.button
            className="w-10 h-10 bg-primary rounded-full z-20"
            whileTap={{ scale: 0.9 }}
        />
         {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <motion.div
                key={i}
                className="absolute w-8 h-8 bg-surface-300 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
                animate={{ 
                    x: Math.cos(deg * Math.PI / 180) * 40, 
                    y: Math.sin(deg * Math.PI / 180) * 40,
                    scale: 1
                }}
                transition={{ delay: i * 0.05 }}
            />
        ))}
    </div>
)

// 6. Staggered Dropdown
export const StaggerDropdown = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-surface-200 rounded border border-white/10 text-sm">
                Menu {isOpen ? '▲' : '▼'}
            </button>
            <motion.div 
                className="absolute top-full mt-2 left-0 w-32 bg-surface-200 border border-white/10 rounded-lg overflow-hidden flex flex-col"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { height: "auto", opacity: 1, transition: { staggerChildren: 0.05 } },
                    closed: { height: 0, opacity: 0 }
                }}
            >
                {["Profile", "Settings", "Logout"].map((item) => (
                    <motion.button 
                        key={item}
                        className="px-4 py-2 text-left text-sm hover:bg-white/10"
                        variants={{
                            open: { opacity: 1, x: 0 },
                            closed: { opacity: 0, x: -10 }
                        }}
                    >
                        {item}
                    </motion.button>
                ))}
            </motion.div>
        </div>
    )
}

// 7. Tab Indicator
export const TabIndicator = () => {
    const [active, setActive] = React.useState(0);
    return (
        <div className="flex flex-col gap-2 w-full">
            {["Account", "Security", "Notifications"].map((item, i) => (
                <button 
                    key={i}
                    onClick={() => setActive(i)}
                    className={`relative px-4 py-2 text-left text-sm rounded-lg transition-colors ${active === i ? 'bg-white/5 text-white' : 'text-white/50 hover:text-white'}`}
                >
                    {active === i && (
                        <motion.div 
                            layoutId="active-tab"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg" 
                        />
                    )}
                    {item}
                </button>
            ))}
        </div>
    )
}

// 8. Morphing Hamburger
export const MorphingBurger = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2">
            <motion.div animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white origin-center" />
            <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white" />
            <motion.div animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white origin-center" />
        </button>
    )
}

// 9. Gooey Menu (SVG Filter required, simplified here)
export const GooeyMenu = () => (
     <div className="relative flex items-center justify-center">
         <div className="w-10 h-10 bg-primary rounded-full" />
         {/* Real implementation needs SVG filters in global css */}
         <span className="absolute text-[10px] text-black font-bold">GOO</span>
     </div>
)

// 10. Fullscreen Menu Reveal
export const FullscreenReveal = () => (
    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20">
        <span className="text-xs">☰</span>
    </div>
)

// 11. Magnetic Link
export const MagneticLink = () => (
    <motion.a 
        href="#" 
        className="text-lg font-bold relative inline-block"
        whileHover={{ scale: 1.1, x: 5 }}
    >
        Hover Me
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 transition-transform origin-right hover:scale-x-100 hover:origin-left" />
    </motion.a>
)

// 12. Breadcrumb Collapse
export const Breadcrumb = () => (
    <div className="flex items-center gap-2 text-sm text-white/50">
        <span>Home</span>
        <span>/</span>
        <span className="w-4 h-1 bg-white/20 rounded-full" />
        <span>/</span>
        <span className="text-white">Current</span>
    </div>
)

// 13. Step Progress Nav
export const StepNav = () => (
    <div className="flex items-center gap-2">
        {[1,2,3].map(i => (
            <div key={i} className={`w-2 h-2 rounded-full ${i===1 ? 'bg-primary w-6' : 'bg-white/20'}`} />
        ))}
    </div>
)

// 14. Vertical Icon Bar
export const IconBar = () => (
    <div className="flex flex-col gap-4 bg-surface-100 p-2 rounded-full border border-white/5">
        <Home className="w-4 h-4 text-white/50 hover:text-white hover:scale-110 transition-all" />
        <User className="w-4 h-4 text-white/50 hover:text-white hover:scale-110 transition-all" />
        <Settings className="w-4 h-4 text-white/50 hover:text-white hover:scale-110 transition-all" />
    </div>
)

// 15. Notification Badge
export const NotificationBadge = () => (
    <div className="relative">
        <Bell className="w-6 h-6 text-white" />
        <motion.div 
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-black"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
        />
    </div>
)

// 16. Bottom Tab Bar
export const BottomTabBar = () => (
    <div className="w-full bg-surface-200 h-12 rounded-b-xl flex items-center justify-around px-4 border-t border-white/10">
        <div className="w-8 h-1 bg-primary absolute bottom-0 rounded-t-full" />
        <Home className="w-5 h-5 text-primary" />
        <User className="w-5 h-5 text-white/30" />
        <Settings className="w-5 h-5 text-white/30" />
    </div>
)

// 17. Mega Menu Column
export const MegaMenuCol = () => (
    <div className="flex flex-col gap-2 p-2">
        <h4 className="text-xs font-bold text-white/40 uppercase">Products</h4>
        <a href="#" className="text-sm hover:translate-x-2 transition-transform block">Analytics</a>
        <a href="#" className="text-sm hover:translate-x-2 transition-transform block">Marketing</a>
        <a href="#" className="text-sm hover:translate-x-2 transition-transform block">Commerce</a>
    </div>
)

// 18. Search Bar Expand
export const SearchExpand = () => {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <div className={`flex items-center ${expanded ? 'bg-white/10 w-full' : 'bg-transparent w-8'} h-8 rounded transition-all duration-300 overflow-hidden`}>
             <button onClick={() => setExpanded(!expanded)} className="w-8 h-8 flex items-center justify-center min-w-[2rem]">🔍</button>
             <input className="bg-transparent outline-none text-sm px-2 w-full" placeholder="Search..." />
        </div>
    )
}

// 19. Language Switcher
export const LangSwitch = () => (
    <div className="flex items-center gap-1 text-xs font-mono">
        <span className="text-primary">EN</span>
        <span className="text-white/30">/</span>
        <span className="text-white/30 hover:text-white cursor-pointer">CN</span>
    </div>
)

// 20. Dark Mode Toggle
export const ThemeToggle = () => (
    <div className="w-12 h-6 bg-surface-300 rounded-full p-1 flex items-center cursor-pointer">
        <motion.div layout className="w-4 h-4 bg-white rounded-full shadow-sm" />
    </div>
)


// DropdownMorph
export const DropdownMorph = () => (
    <div className="relative group">
      <button className="px-4 py-2 bg-zinc-800 rounded-md text-white hover:bg-zinc-700 transition-colors">Menu</button>
      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-xl overflow-hidden origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300">
        <div className="p-2 space-y-1">
          <a href="#" className="block px-3 py-2 rounded hover:bg-zinc-100 text-zinc-800 text-sm">Profile</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-zinc-100 text-zinc-800 text-sm">Settings</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-zinc-100 text-zinc-800 text-sm">Logout</a>
        </div>
      </div>
    </div>
);

// MegaMenuSlide
export const MegaMenuSlide = () => (
    <div className="relative group">
      <span className="text-zinc-400 hover:text-white cursor-pointer py-4 block">Products</span>
      <div className="fixed left-0 top-16 w-full h-64 bg-zinc-900 border-t border-zinc-800 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-50 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
        <div className="grid grid-cols-3 gap-8 text-white">
          <div><h3 className="font-bold mb-2">Category 1</h3><p className="text-sm text-zinc-500">Item A</p><p className="text-sm text-zinc-500">Item B</p></div>
          <div><h3 className="font-bold mb-2">Category 2</h3><p className="text-sm text-zinc-500">Item C</p><p className="text-sm text-zinc-500">Item D</p></div>
          <div><h3 className="font-bold mb-2">Category 3</h3><p className="text-sm text-zinc-500">Item E</p><p className="text-sm text-zinc-500">Item F</p></div>
        </div>
      </div>
    </div>
);

// SidebarCollapsible
export const SidebarCollapsible = () => (
    <div className="w-16 h-48 bg-zinc-800 rounded-r-xl transition-all duration-300 hover:w-48 overflow-hidden group border border-zinc-700">
      <div className="flex flex-col gap-4 p-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-zinc-700 rounded flex-shrink-0" />
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Item {i}</span>
          </div>
        ))}
      </div>
    </div>
);

// RadialMenu
export const RadialMenu = () => (
    <div className="relative w-32 h-32 flex items-center justify-center group">
      <button className="w-12 h-12 bg-blue-600 rounded-full z-10 text-white relative">
        <span className="absolute inset-0 flex items-center justify-center text-xl">+</span>
      </button>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="absolute w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-xs text-white opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" 
             style={{ 
               transform: `rotate(${i * 90}deg) translate(3rem) rotate(-${i * 90}deg)`,
               transitionDelay: `${i * 50}ms`
             }}>
          {i+1}
        </div>
      ))}
    </div>
);

// ElasticTab
export const ElasticTab = () => (
    <div className="flex bg-zinc-800 rounded-full p-1 relative">
      <div className="absolute inset-y-1 left-1 w-1/3 bg-blue-600 rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:translate-x-[100%]" />
      {['One', 'Two', 'Three'].map((tab) => (
        <button key={tab} className="flex-1 py-1 px-4 rounded-full text-sm z-10 text-white transition-colors">{tab}</button>
      ))}
    </div>
);

// UnderlineSlide
export const UnderlineSlide = () => (
    <div className="flex gap-6 relative group">
      {['Home', 'About', 'Contact'].map((item) => (
        <a key={item} href="#" className="relative py-2 text-zinc-400 hover:text-white transition-colors peer">{item}</a>
      ))}
      <div className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300 w-0 group-hover:w-8 group-hover:left-0 peer-hover:w-full" /> 
      {/* Note: Pure CSS sibling selection for exact width is tricky without JS, this is a visual approximation */}
    </div>
);

// PillSwitch
export const PillSwitch = () => (
    <div className="bg-zinc-900 rounded-lg p-1 inline-flex">
      {['Monthly', 'Yearly'].map((t, i) => (
        <button key={t} className={`px-4 py-1.5 rounded-md text-sm transition-all duration-300 ${i === 0 ? 'bg-zinc-700 text-white shadow' : 'text-zinc-500 hover:text-zinc-300'}`}>{t}</button>
      ))}
    </div>
);

// VerticalTabs
export const VerticalTabs = () => (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 border-l-2 border-zinc-800">
        {['Account', 'Security', 'Billing'].map((t, i) => (
          <button key={t} className={`px-4 py-1 text-left text-sm transition-all border-l-2 -ml-[2px] ${i === 0 ? 'border-blue-500 text-blue-500' : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'}`}>{t}</button>
        ))}
      </div>
    </div>
);

// PaginationScale
export const PaginationScale = () => (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((p) => (
        <button key={p} className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white hover:scale-125 transition-all duration-200">{p}</button>
      ))}
    </div>
);

// DotIndicator
export const DotIndicator = () => (
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? 'w-6 bg-white' : 'bg-zinc-600 hover:bg-zinc-400'}`} />
      ))}
    </div>
);

// InfiniteScroll
export const InfiniteScroll = () => (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full h-8 bg-zinc-800/50 rounded mb-2" />
      <div className="w-full h-8 bg-zinc-800/50 rounded mb-2" />
      <div className="flex gap-1 mt-2">
        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
);

// PathReveal
export const PathReveal = () => (
    <nav className="flex items-center text-sm text-zinc-400">
      <span className="hover:text-white transition-colors cursor-pointer">Home</span>
      <span className="mx-2">/</span>
      <span className="hover:text-white transition-colors cursor-pointer">Products</span>
      <span className="mx-2 opacity-0 animate-[fade-in_0.5s_delay-100ms_forwards]">/</span>
      <span className="text-white opacity-0 animate-[slide-right_0.5s_delay-200ms_forwards]">Details</span>
    </nav>
);

// Glasscrumb
export const Glasscrumb = () => (
    <div className="inline-flex px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm text-zinc-300 gap-2 hover:bg-white/10 transition-colors">
      <span>Home</span>
      <span className="text-zinc-600">&gt;</span>
      <span className="text-white">Profile</span>
    </div>
);

// StickyHeader
export const StickyHeader = () => (
    <div className="w-full h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-4 relative overflow-hidden group">
      <div className="font-bold">Logo</div>
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
    </div>
);

// AccordionNav
export const AccordionNav = () => (
    <div className="w-48 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
      <div className="p-3 bg-zinc-800 hover:bg-zinc-700 cursor-pointer flex justify-between items-center group">
        <span>Menu Item</span>
        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
      <div className="bg-zinc-900/50 p-3 text-sm text-zinc-400 hidden group-hover:block animate-[slide-down_0.2s_ease-out]">
        <p>Sub Item 1</p>
        <p className="mt-2">Sub Item 2</p>
      </div>
    </div>
);

// FloatingFab
export const FloatingFab = () => (
    <button className="w-14 h-14 bg-pink-500 rounded-full shadow-lg flex items-center justify-center text-white text-2xl hover:rotate-90 transition-transform duration-300 hover:bg-pink-400 active:scale-95">
      +
    </button>
);

// DotNav
export const DotNav = () => (
    <div className="flex flex-col gap-4 fixed right-4 top-1/2 -translate-y-1/2">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="w-3 h-3 rounded-full bg-zinc-600 hover:bg-white hover:scale-150 transition-all cursor-pointer relative group">
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black px-2 py-1 rounded">Section {i+1}</span>
        </div>
      ))}
    </div>
);

// SkewMenu
export const SkewMenu = () => (
    <nav className="flex gap-1 transform -skew-x-12">
      {['Home', 'Work', 'Contact'].map((item) => (
        <a key={item} href="#" className="px-6 py-2 bg-zinc-800 hover:bg-yellow-500 hover:text-black transition-colors text-white font-bold uppercase tracking-wider">{item}</a>
      ))}
    </nav>
);

// SpotlightNav
export const SpotlightNav = () => (
    <div className="flex gap-2 p-1 bg-zinc-900 rounded-full border border-zinc-800">
      {['Overview', 'Specs', 'Reviews'].map((item) => (
        <button key={item} className="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all relative overflow-hidden group">
          <span className="relative z-10">{item}</span>
        </button>
      ))}
    </div>
);

// FolderTabs
export const FolderTabs = () => (
    <div className="flex items-end pl-2">
      {['File 1', 'File 2'].map((f, i) => (
        <div key={f} className={`px-4 py-2 bg-zinc-800 rounded-t-lg border-t border-x border-zinc-700 -mb-[1px] relative ${i===0 ? 'z-10 bg-zinc-800' : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'} cursor-pointer transition-colors mr-[-8px]`}>
          {f}
        </div>
      ))}
    </div>
);

// FilterPills
export const FilterPills = () => (
    <div className="flex flex-wrap gap-2">
      {['All', 'Design', 'Code', 'Marketing'].map((f) => (
        <button key={f} className="px-3 py-1 border border-zinc-700 rounded-full text-xs hover:bg-white hover:text-black hover:border-white transition-colors">{f}</button>
      ))}
    </div>
);

// ContextPopup
export const ContextPopup = () => (
    <div className="relative w-32 h-20 bg-zinc-800/50 rounded border border-dashed border-zinc-700 flex items-center justify-center text-xs text-zinc-500 cursor-context-menu group">
      Right Click Me
      <div className="absolute top-1/2 left-1/2 w-32 bg-zinc-900 border border-zinc-700 rounded shadow-lg p-1 hidden group-hover:block animate-[scale-in_0.1s]">
        <div className="px-2 py-1 hover:bg-zinc-800 rounded text-white cursor-pointer">Edit</div>
        <div className="px-2 py-1 hover:bg-zinc-800 rounded text-white cursor-pointer">Delete</div>
      </div>
    </div>
);

// TreeNav
export const TreeNav = () => (
    <div className="text-sm font-mono text-zinc-400">
      <div className="hover:text-white cursor-pointer">src/</div>
      <div className="pl-4 border-l border-zinc-800">
        <div className="hover:text-white cursor-pointer relative hover:before:content-['-'] before:content-[''] before:absolute before:-left-2">components/</div>
        <div className="pl-4 border-l border-zinc-800">
          <div className="hover:text-blue-400 cursor-pointer">Button.tsx</div>
          <div className="hover:text-blue-400 cursor-pointer">Card.tsx</div>
        </div>
      </div>
    </div>
);

// SwipeTabs
export const SwipeTabs = () => (
    <div className="w-64 overflow-hidden relative group">
      <div className="flex transition-transform duration-300 transform translate-x-0 group-hover:-translate-x-1/2">
        <div className="min-w-full bg-zinc-800 p-2 text-center text-sm">Tab 1 Content</div>
        <div className="min-w-full bg-zinc-800 p-2 text-center text-sm">Tab 2 Content</div>
      </div>
      <div className="flex justify-center gap-1 mt-1">
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-zinc-600" />
      </div>
    </div>
);

// DockStack
export const DockStack = () => (
    <div className="flex items-end gap-1 h-12">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-10 h-10 bg-zinc-700 rounded-lg hover:mb-2 hover:bg-indigo-500 transition-all cursor-pointer shadow-lg" />
      ))}
    </div>
);

// SplitMenu
export const SplitMenu = () => (
    <div className="flex w-64 h-12 bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
      <button className="flex-1 hover:bg-zinc-800 hover:text-white text-zinc-400 transition-colors border-r border-zinc-800">Left</button>
      <button className="flex-1 hover:bg-zinc-800 hover:text-white text-zinc-400 transition-colors">Right</button>
    </div>
);

// TimelineNav
export const TimelineNav = () => (
    <div className="flex items-center gap-0">
      {[2020, 2021, 2022].map((y) => (
        <div key={y} className="relative group cursor-pointer">
          <div className="w-3 h-3 bg-zinc-600 rounded-full border-2 border-black group-hover:bg-blue-500 group-hover:scale-125 transition-all z-10 relative" />
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-zinc-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100">{y}</div>
          <div className="absolute top-1.5 left-0 w-16 h-0.5 bg-zinc-800 -z-0" />
        </div>
      ))}
    </div>
);

// BurgerX
export const BurgerX = () => (
    <div className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer group">
      <span className="w-6 h-0.5 bg-white transition-transform group-hover:rotate-45 group-hover:translate-y-2" />
      <span className="w-6 h-0.5 bg-white transition-opacity group-hover:opacity-0" />
      <span className="w-6 h-0.5 bg-white transition-transform group-hover:-rotate-45 group-hover:-translate-y-2" />
    </div>
);

// FullMenuOverlay
export const FullMenuOverlay = () => (
    <div className="relative overflow-hidden w-full h-24 group">
      <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
        <span className="uppercase tracking-widest text-sm">Menu</span>
      </div>
      <div className="absolute inset-0 bg-blue-600 flex flex-col items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span>Home</span>
        <span>Work</span>
      </div>
    </div>
);

// QuickAction
export const QuickAction = () => (
    <div className="relative w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center cursor-pointer overflow-hidden group hover:w-32 transition-all duration-300">
      <span className="absolute left-3">⚡</span>
      <span className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm">Action</span>
    </div>
);
