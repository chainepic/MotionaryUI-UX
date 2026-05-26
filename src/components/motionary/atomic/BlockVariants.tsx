'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Shield, Zap, Box, Layout, Smartphone, Globe, Mail, Phone, MapPin, Play } from 'lucide-react';

// 1. Hero Simple
export const HeroSimple = () => (
  <div className="bg-zinc-900 p-8 text-center rounded-xl border border-zinc-800">
    <h1 className="text-3xl font-bold text-white mb-4">Build Faster</h1>
    <p className="text-zinc-400 mb-6">The ultimate tool for modern web development.</p>
    <button className="bg-white text-black px-6 py-2 rounded-full font-bold">Get Started</button>
  </div>
);

// 2. Hero Gradient
export const HeroGradient = () => (
  <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 text-center rounded-xl overflow-hidden relative">
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
    <div className="relative z-10">
      <span className="text-indigo-300 text-sm font-bold uppercase tracking-widest">New Release</span>
      <h1 className="text-3xl font-black text-white my-4">Future UI</h1>
      <p className="text-indigo-200 mb-6">Experience the next generation.</p>
      <div className="flex justify-center gap-4">
        <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg">Try Now</button>
        <button className="bg-white/10 text-white px-6 py-2 rounded-lg backdrop-blur-sm">Learn More</button>
      </div>
    </div>
  </div>
);

// 3. Hero Split
export const HeroSplit = () => (
  <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 grid grid-cols-2 gap-6 items-center">
    <div className="text-left">
      <h1 className="text-2xl font-bold text-white mb-2">Design System</h1>
      <p className="text-zinc-500 text-sm mb-4">Scalable and consistent.</p>
      <button className="text-white border-b border-white pb-1 text-sm hover:text-primary hover:border-primary transition-colors">Explore Docs &rarr;</button>
    </div>
    <div className="bg-zinc-900 h-32 rounded-lg flex items-center justify-center text-zinc-700">
      Visual Placeholder
    </div>
  </div>
);

// 4. Feature Grid 3x1
export const FeatureGrid3 = () => (
  <div className="grid grid-cols-3 gap-4 bg-zinc-950 p-6 rounded-xl">
    {[Zap, Shield, Star].map((Icon, i) => (
      <div key={i} className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 text-center">
        <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-white font-bold text-sm mb-1">Feature {i+1}</h3>
        <p className="text-zinc-500 text-xs">Description text here.</p>
      </div>
    ))}
  </div>
);

// 5. Feature List Side
export const FeatureListSide = () => (
  <div className="flex gap-6 bg-zinc-950 p-6 rounded-xl items-center border border-zinc-800">
    <div className="w-1/3 bg-zinc-900 h-32 rounded-lg" />
    <div className="flex-1 space-y-4">
      <h3 className="text-white font-bold">Why Choose Us</h3>
      <ul className="space-y-2">
        {['Fast Performance', 'Secure by Default', '24/7 Support'].map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
            <Check className="w-4 h-4 text-green-500" /> {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// 6. Pricing Simple
export const PricingSimple = () => (
  <div className="grid grid-cols-3 gap-4 bg-zinc-950 p-6 rounded-xl">
    {['Basic', 'Pro', 'Enterprise'].map((plan, i) => (
      <div key={i} className={`p-4 rounded-lg border ${i===1 ? 'bg-zinc-900 border-primary' : 'bg-zinc-950 border-zinc-800'} flex flex-col`}>
        <h3 className="text-white font-bold">{plan}</h3>
        <div className="text-2xl font-bold text-white my-2">${(i+1)*10}</div>
        <ul className="space-y-1 mb-4 flex-1">
          <li className="text-xs text-zinc-500">Feature A</li>
          <li className="text-xs text-zinc-500">Feature B</li>
        </ul>
        <button className={`w-full py-1.5 rounded text-xs font-bold ${i===1 ? 'bg-primary text-black' : 'bg-zinc-800 text-white'}`}>Select</button>
      </div>
    ))}
  </div>
);

// 7. Testimonial Slider
export const TestimonialSingle = () => (
  <div className="bg-zinc-900 p-8 rounded-xl text-center border border-zinc-800 relative">
    <div className="text-4xl text-zinc-700 absolute top-4 left-6">"</div>
    <p className="text-lg text-zinc-300 italic mb-6 relative z-10">This product completely transformed how we work. Highly recommended!</p>
    <div className="flex items-center justify-center gap-3">
      <div className="w-10 h-10 bg-zinc-700 rounded-full" />
      <div className="text-left">
        <h4 className="text-white font-bold text-sm">Jane Doe</h4>
        <p className="text-zinc-500 text-xs">CEO, TechCorp</p>
      </div>
    </div>
  </div>
);

// 8. FAQ Accordion
export const FAQAccordion = () => (
  <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 space-y-3">
    {[1, 2, 3].map((i) => (
      <div key={i} className="border-b border-zinc-800 pb-3 last:border-0">
        <div className="flex justify-between items-center text-white cursor-pointer hover:text-primary">
          <span className="text-sm font-medium">Common Question {i}?</span>
          <span className="text-zinc-500">+</span>
        </div>
      </div>
    ))}
  </div>
);

// 9. CTA Banner
export const CTABanner = () => (
  <div className="bg-gradient-to-r from-pink-600 to-orange-500 p-8 rounded-xl flex justify-between items-center text-white">
    <div>
      <h2 className="text-2xl font-bold mb-1">Ready to launch?</h2>
      <p className="opacity-90 text-sm">Get started in minutes.</p>
    </div>
    <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-shadow">
      Start Now
    </button>
  </div>
);

// 10. Footer Simple
export const FooterSimple = () => (
  <div className="bg-zinc-900 p-8 rounded-xl border-t border-zinc-800 grid grid-cols-4 gap-8">
    <div className="col-span-1">
      <h4 className="text-white font-bold mb-4">Logo</h4>
      <p className="text-zinc-500 text-xs">© 2024</p>
    </div>
    {[1, 2, 3].map((col) => (
      <div key={col}>
        <h5 className="text-white font-bold text-sm mb-3">Column {col}</h5>
        <ul className="space-y-2 text-xs text-zinc-400">
          <li className="hover:text-white cursor-pointer">Link 1</li>
          <li className="hover:text-white cursor-pointer">Link 2</li>
          <li className="hover:text-white cursor-pointer">Link 3</li>
        </ul>
      </div>
    ))}
  </div>
);

// 11. Stats Row
export const StatsRow = () => (
  <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex justify-around">
    {[
      { label: 'Users', val: '10K+' },
      { label: 'Revenue', val: '$2M' },
      { label: 'Countries', val: '50+' }
    ].map((stat, i) => (
      <div key={i} className="text-center">
        <div className="text-3xl font-black text-white mb-1">{stat.val}</div>
        <div className="text-zinc-500 text-xs uppercase tracking-wider">{stat.label}</div>
      </div>
    ))}
  </div>
);

// 12. Contact Form Block
export const ContactFormBlock = () => (
  <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 max-w-md mx-auto">
    <h3 className="text-white font-bold mb-4">Contact Us</h3>
    <div className="space-y-3">
      <input className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-sm text-white" placeholder="Name" />
      <input className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-sm text-white" placeholder="Email" />
      <textarea className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-sm text-white h-24" placeholder="Message" />
      <button className="w-full bg-primary text-black font-bold py-2 rounded">Send Message</button>
    </div>
  </div>
);

// 13. Team Grid
export const TeamGrid = () => (
  <div className="grid grid-cols-4 gap-4 bg-zinc-950 p-6 rounded-xl">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="text-center">
        <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto mb-2" />
        <h4 className="text-white text-sm font-bold">Member {i}</h4>
        <p className="text-zinc-500 text-[10px]">Role</p>
      </div>
    ))}
  </div>
);

// 14. Logo Cloud
export const LogoCloud = () => (
  <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
    <p className="text-center text-zinc-500 text-xs uppercase tracking-widest mb-6">Trusted By</p>
    <div className="flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
      <div className="w-20 h-8 bg-zinc-700 rounded" />
      <div className="w-20 h-8 bg-zinc-700 rounded" />
      <div className="w-20 h-8 bg-zinc-700 rounded" />
      <div className="w-20 h-8 bg-zinc-700 rounded" />
    </div>
  </div>
);

// 15. Newsletter Signup
export const NewsletterBlock = () => (
  <div className="bg-zinc-900 p-8 rounded-xl text-center border border-zinc-800">
    <Mail className="w-8 h-8 text-white mx-auto mb-4" />
    <h3 className="text-white font-bold mb-2">Subscribe</h3>
    <p className="text-zinc-400 text-sm mb-6">Get the latest updates directly to your inbox.</p>
    <div className="flex gap-2 max-w-sm mx-auto">
      <input className="flex-1 bg-zinc-950 border border-zinc-800 rounded p-2 text-sm text-white" placeholder="you@example.com" />
      <button className="bg-white text-black px-4 py-2 rounded font-bold text-sm">Subscribe</button>
    </div>
  </div>
);

