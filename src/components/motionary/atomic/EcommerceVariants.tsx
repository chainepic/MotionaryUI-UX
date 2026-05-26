'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, Heart, CreditCard, Truck, Package, Star, Tag, Filter } from 'lucide-react';

// 1. Add to Cart (Bounce)
export const AddToCartBounce = () => {
    const [count, setCount] = useState(0);
    return (
        <button 
            onClick={() => setCount(count + 1)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-full font-bold hover:bg-white transition-colors group"
        >
            <motion.div 
                key={count} 
                initial={{ scale: 1 }} 
                animate={{ scale: [1, 1.5, 1] }} 
                transition={{ duration: 0.3 }}
            >
                <ShoppingCart size={18} />
            </motion.div>
            <span>Add {count > 0 && `(${count})`}</span>
        </button>
    )
}

// 2. Product Card Hover (Lift)
export const ProductCardHover = () => (
    <div className="group relative w-40 bg-surface-100 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border border-white/5">
        <div className="h-32 bg-white/10 flex items-center justify-center text-4xl">👟</div>
        <div className="p-3">
            <div className="h-4 w-3/4 bg-white/20 rounded mb-2" />
            <div className="h-3 w-1/2 bg-primary/50 rounded" />
        </div>
        <button className="absolute bottom-2 right-2 bg-white text-black p-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
            <Plus size={14} />
        </button>
    </div>
);

// 3. Quantity Stepper
export const QuantityStepper = () => {
    const [q, setQ] = useState(1);
    return (
        <div className="flex items-center bg-surface-200 rounded-lg border border-white/10">
            <button onClick={() => setQ(Math.max(1, q-1))} className="p-2 hover:text-primary transition-colors"><Minus size={14}/></button>
            <motion.span 
                key={q}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-6 text-center text-sm font-mono"
            >
                {q}
            </motion.span>
            <button onClick={() => setQ(q+1)} className="p-2 hover:text-primary transition-colors"><Plus size={14}/></button>
        </div>
    )
}

// 4. Price Tag Flip
export const PriceTag = () => (
    <div className="group perspective-1000 cursor-default">
        <div className="relative transition-transform duration-500 transform-style-3d group-hover:rotate-x-180">
            <span className="block px-3 py-1 bg-primary text-black font-bold rounded backface-hidden">$99.00</span>
            <span className="block px-3 py-1 bg-red-500 text-white font-bold rounded absolute inset-0 backface-hidden rotate-x-180 flex items-center justify-center">SALE</span>
        </div>
    </div>
);

// 5. Wishlist Toggle
export const WishlistToggle = () => {
    const [saved, setSaved] = useState(false);
    return (
        <button 
            onClick={() => setSaved(!saved)}
            className={`p-2 rounded-full border transition-all ${saved ? 'bg-pink-500 border-pink-500 text-white' : 'border-white/20 text-white/50 hover:text-white hover:border-white'}`}
        >
            <motion.div animate={saved ? { scale: [1, 1.4, 1] } : {}}>
                <Heart size={18} className={saved ? 'fill-white' : ''} />
            </motion.div>
        </button>
    )
}

// 6. Checkout Progress
export const CheckoutProgress = () => (
    <div className="flex items-center gap-2 text-xs">
        <div className="flex flex-col items-center text-primary">
            <div className="w-4 h-4 bg-primary rounded-full mb-1" />
            <span>Cart</span>
        </div>
        <div className="w-8 h-0.5 bg-primary/50" />
        <div className="flex flex-col items-center text-white">
            <div className="w-4 h-4 border-2 border-white rounded-full mb-1" />
            <span>Pay</span>
        </div>
        <div className="w-8 h-0.5 bg-white/20" />
        <div className="flex flex-col items-center text-white/50">
            <div className="w-4 h-4 border-2 border-white/20 rounded-full mb-1" />
            <span>Done</span>
        </div>
    </div>
);

// 7. Size Selector
export const SizeSelector = () => {
    const [size, setSize] = useState("M");
    return (
        <div className="flex gap-2">
            {["S", "M", "L", "XL"].map(s => (
                <button 
                    key={s}
                    onClick={() => setSize(s)}
                    className={`w-8 h-8 rounded border text-xs font-bold transition-all ${size === s ? 'bg-white text-black border-white' : 'border-white/20 text-white/50 hover:border-white hover:text-white'}`}
                >
                    {s}
                </button>
            ))}
        </div>
    )
}

// 8. Color Swatch
export const ColorSwatch = () => {
    const [color, setColor] = useState(0);
    const colors = ["#EF4444", "#3B82F6", "#10B981", "#F59E0B"];
    return (
        <div className="flex gap-2">
            {colors.map((c, i) => (
                <button 
                    key={c}
                    onClick={() => setColor(i)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${color === i ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                    style={{ backgroundColor: c }}
                />
            ))}
        </div>
    )
}

// 9. Shipping Truck
export const ShippingTruck = () => (
    <div className="relative w-full h-8 overflow-hidden bg-surface-100 rounded flex items-center px-2">
        <motion.div 
            animate={{ x: ["-100%", "200%"] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute text-primary"
        >
            <Truck size={20} />
        </motion.div>
        <span className="text-[10px] text-white/30 z-10 ml-1">Free Shipping</span>
    </div>
);

// 10. Coupon Code
export const CouponInput = () => (
    <div className="flex border border-dashed border-white/30 rounded p-1 focus-within:border-primary/50 transition-colors">
        <Tag size={16} className="text-white/50 mt-1.5 ml-1" />
        <input type="text" placeholder="PROMO20" className="bg-transparent outline-none text-sm text-white px-2 w-20 uppercase" />
        <button className="text-xs bg-white/10 hover:bg-white/20 px-2 rounded">Apply</button>
    </div>
);

// 11. Quick View Modal (Trigger)
export const QuickView = () => (
    <div className="group relative w-24 h-24 bg-surface-200 rounded-lg flex items-center justify-center cursor-pointer">
        <div className="text-4xl grayscale group-hover:grayscale-0 transition-all">📦</div>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg backdrop-blur-sm">
            <span className="text-[10px] font-bold bg-white text-black px-2 py-1 rounded-full">VIEW</span>
        </div>
    </div>
);

// 12. Rating Stars Interactive
export const InteractiveRating = () => {
    const [hover, setHover] = useState(0);
    return (
        <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
                <Star 
                    key={i} 
                    size={16} 
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(0)}
                    className={`transition-colors cursor-pointer ${i <= hover ? 'fill-yellow-400 text-yellow-400' : 'text-white/20'}`}
                />
            ))}
        </div>
    )
}

// 13. Cart Fly Animation
export const FlyToCart = () => {
    const [flying, setFlying] = useState(false);
    return (
        <button onClick={() => { setFlying(true); setTimeout(() => setFlying(false), 1000); }} className="relative px-4 py-2 border border-white/20 rounded hover:bg-white/5">
            Buy Now
            {flying && (
                <motion.div 
                    className="absolute top-2 left-4 w-4 h-4 bg-primary rounded-full z-50"
                    initial={{ scale: 1, x: 0, y: 0 }}
                    animate={{ scale: 0.2, x: 100, y: -100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
            )}
        </button>
    )
}

// 14. Stock Meter
export const StockMeter = () => (
    <div className="w-full">
        <div className="flex justify-between text-[10px] mb-1 text-red-400 font-bold">
            <span>Hurry!</span>
            <span>3 left</span>
        </div>
        <div className="h-1.5 bg-surface-100 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 w-[10%] animate-pulse" />
        </div>
    </div>
);

// 15. Payment Method Select
export const PaymentSelect = () => {
    const [selected, setSelected] = useState(0);
    return (
        <div className="flex gap-2">
            {[0, 1].map(i => (
                <div 
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`w-12 h-8 rounded border flex items-center justify-center cursor-pointer transition-all ${selected === i ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 text-white/30'}`}
                >
                    <CreditCard size={16} />
                </div>
            ))}
        </div>
    )
}

// 16. Filter Chip
export const FilterChip = () => {
    const [active, setActive] = useState(false);
    return (
        <button 
            onClick={() => setActive(!active)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs border transition-all ${active ? 'bg-white text-black border-white' : 'bg-transparent border-white/20 text-white/70'}`}
        >
            {active && <Check size={10} />}
            Best Seller
        </button>
    )
}

// 17. Category Pill
export const CategoryPill = () => (
    <div className="flex gap-2 overflow-hidden w-32 mask-image-r">
        {["New", "Men", "Women", "Kids"].map(c => (
            <span key={c} className="px-3 py-1 bg-surface-100 rounded-full text-xs whitespace-nowrap hover:bg-surface-200 cursor-pointer transition-colors">
                {c}
            </span>
        ))}
    </div>
);

// 18. Product Image Gallery
export const MiniGallery = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="flex gap-1">
            {[0,1,2].map(i => (
                <div 
                    key={i}
                    onMouseEnter={() => setActive(i)}
                    className={`w-8 h-8 bg-surface-200 rounded cursor-pointer border-2 transition-colors ${active === i ? 'border-primary' : 'border-transparent'}`}
                />
            ))}
        </div>
    )
}

// 19. Order Status
export const OrderStatus = () => (
    <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs text-white/70 line-through">Confirmed</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs text-white/70 line-through">Shipped</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-bold text-white">Out for Delivery</span>
        </div>
    </div>
);

// 20. Compare Sticky
export const CompareSticky = () => (
    <div className="flex items-center gap-2 p-2 bg-surface-100 rounded border border-white/10 w-full justify-between">
        <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-white/20 border border-black" />
            <div className="w-6 h-6 rounded-full bg-white/40 border border-black" />
        </div>
        <button className="text-[10px] bg-primary text-black px-2 py-1 rounded">Compare (2)</button>
    </div>
);

import { Check } from 'lucide-react';


// QuickViewOverlay
export const QuickViewOverlay = () => (
    <div className="w-full h-64 bg-zinc-800 rounded-lg overflow-hidden relative group">
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">Quick View</button>
      </div>
      <div className="absolute top-2 right-2 p-1.5 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
      </div>
    </div>
);

// ColorSwitch
export const ColorSwitch = () => (
    <div className="w-full bg-zinc-800 rounded-lg p-3 group">
      <div className="w-full h-32 bg-zinc-700 rounded mb-3 transition-colors duration-300 group-hover:bg-blue-900/50" />
      <div className="flex gap-2 justify-center">
        <div className="w-4 h-4 rounded-full bg-red-500 cursor-pointer hover:scale-125 transition-transform ring-2 ring-transparent hover:ring-white/50" />
        <div className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer hover:scale-125 transition-transform ring-2 ring-transparent hover:ring-white/50" />
        <div className="w-4 h-4 rounded-full bg-green-500 cursor-pointer hover:scale-125 transition-transform ring-2 ring-transparent hover:ring-white/50" />
      </div>
    </div>
);

// SizeSelectorRow
export const SizeSelectorRow = () => (
    <div className="flex gap-1">
      {['S', 'M', 'L', 'XL'].map((s) => (
        <button key={s} className="w-8 h-8 rounded border border-zinc-600 flex items-center justify-center text-xs text-zinc-400 hover:border-white hover:text-white hover:bg-zinc-700 transition-all focus:bg-white focus:text-black">{s}</button>
      ))}
    </div>
);

// StockBadgePulse
export const StockBadgePulse = () => (
    <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs border border-red-500/20">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      Only 2 left
    </div>
);

// AddToCartSlide
export const AddToCartSlide = () => (
    <button className="relative overflow-hidden bg-blue-600 text-white px-6 py-2 rounded-full group w-32">
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-8">Add to Cart</span>
      <span className="absolute inset-0 flex items-center justify-center translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
      </span>
    </button>
);

// FlyToCartIcon
export const FlyToCartIcon = () => (
    <div className="relative group cursor-pointer">
      <svg className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">1</div>
    </div>
);

// MiniCartDrop
export const MiniCartDrop = () => (
    <div className="relative group">
      <button className="text-sm font-medium text-zinc-300 hover:text-white">Cart (2)</button>
      <div className="absolute right-0 top-full mt-2 w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
        <div className="space-y-3">
          <div className="flex gap-2"><div className="w-10 h-10 bg-zinc-800 rounded" /><div><p className="text-xs text-white">Item A</p><p className="text-xs text-zinc-500">$20.00</p></div></div>
          <div className="flex gap-2"><div className="w-10 h-10 bg-zinc-800 rounded" /><div><p className="text-xs text-white">Item B</p><p className="text-xs text-zinc-500">$45.00</p></div></div>
        </div>
        <button className="w-full mt-3 bg-white text-black text-xs py-2 rounded hover:bg-zinc-200">Checkout</button>
      </div>
    </div>
);

// QuantitySpin
export const QuantitySpin = () => (
    <div className="flex items-center border border-zinc-700 rounded-md">
      <button className="px-3 py-1 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">-</button>
      <span className="w-8 text-center text-sm">1</span>
      <button className="px-3 py-1 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">+</button>
    </div>
);

// CartShake
export const CartShake = () => (
    <button className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded text-sm hover:bg-zinc-700 active:animate-[shake_0.3s_ease-in-out]">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
      Checkout
    </button>
);

// PricingToggle
export const PricingToggle = () => (
    <div className="flex items-center gap-3">
      <span className="text-sm text-zinc-400">Monthly</span>
      <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer hover:opacity-90 transition-opacity">
         <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all hover:scale-110" />
      </div>
      <span className="text-sm text-white font-bold">Yearly <span className="text-xs text-green-400">-20%</span></span>
    </div>
);

// DiscountStrike
export const DiscountStrike = () => (
    <div className="flex items-baseline gap-2 group cursor-pointer">
      <span className="text-2xl font-bold text-white">$49</span>
      <span className="text-sm text-zinc-500 relative">
        $99
        <span className="absolute left-0 top-1/2 w-full h-[1px] bg-red-500 -rotate-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </span>
    </div>
);

// TagPulse
export const TagPulse = () => (
    <div className="inline-block relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative px-4 py-1 bg-black rounded-lg leading-none flex items-center">
        <span className="text-pink-200 text-xs font-bold uppercase">Pro Plan</span>
      </div>
    </div>
);

// PriceCountUp
export const PriceCountUp = () => (
    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-[pulse_2s_infinite]">
      $1,299
    </div>
);

// NewArrivalBadge
export const NewArrivalBadge = () => (
    <div className="absolute top-2 left-2 overflow-hidden rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider group hover:pr-8 transition-all duration-300">
      New
      <span className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity">!</span>
    </div>
);

// BestSellerRibbon
export const BestSellerRibbon = () => (
    <div className="w-24 h-24 absolute -top-1 -right-1 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-8 bg-yellow-500 rotate-45 transform translate-x-10 translate-y-6 text-center text-[10px] font-bold text-black leading-8 shadow-md">
        BEST SELLER
      </div>
    </div>
);

// LimitedTimer
export const LimitedTimer = () => (
    <div className="flex gap-1 text-xs font-mono text-red-400 bg-red-900/20 px-2 py-1 rounded border border-red-900/50 items-center">
      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      04:23:11
    </div>
);

// FreeShipping
export const FreeShipping = () => (
    <div className="flex items-center gap-2 text-green-400 text-sm group cursor-pointer">
      <svg className="w-5 h-5 group-hover:translate-x-4 transition-transform duration-1000 ease-linear" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
      <span className="group-hover:opacity-50 transition-opacity">Free Shipping</span>
    </div>
);

// SaleSticker
export const SaleSticker = () => (
    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs transform -rotate-12 hover:rotate-0 hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white cursor-pointer">
      -50%
    </div>
);

// VerifiedBuyer
export const VerifiedBuyer = () => (
    <div className="flex items-center gap-1 text-green-500 text-xs font-medium">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
      Verified Buyer
    </div>
);

// CompareStickyBar
export const CompareStickyBar = () => (
    <div className="w-full bg-zinc-800 p-2 rounded flex items-center justify-between border-t-2 border-blue-500">
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-800" />
        <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-800" />
      </div>
      <button className="text-xs text-blue-400 hover:text-white transition-colors">Compare (2)</button>
    </div>
);

// TrustBadges
export const TrustBadges = () => (
    <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
      <div className="w-8 h-5 bg-zinc-600 rounded" />
      <div className="w-8 h-5 bg-zinc-600 rounded" />
      <div className="w-8 h-5 bg-zinc-600 rounded" />
    </div>
);

// ProductVideoThumb
export const ProductVideoThumb = () => (
    <div className="w-16 h-16 bg-zinc-800 rounded relative group cursor-pointer overflow-hidden">
      <img src="https://picsum.photos/100/100" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
      </div>
    </div>
);

// PromoCodeCopy
export const PromoCodeCopy = () => (
    <div className="bg-zinc-900 border border-dashed border-zinc-600 rounded p-2 flex justify-between items-center group cursor-pointer active:bg-zinc-800 transition-colors">
      <code className="text-sm font-mono text-zinc-300">SUMMER25</code>
      <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
    </div>
);

// CategoryCircle
export const CategoryCircle = () => (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className="w-16 h-16 rounded-full bg-zinc-800 overflow-hidden ring-2 ring-transparent group-hover:ring-blue-500 transition-all group-hover:scale-105">
        <img src="https://picsum.photos/100/100?random=1" className="w-full h-full object-cover" />
      </div>
      <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">Shoes</span>
    </div>
);

// BundleSave
export const BundleSave = () => (
    <div className="p-3 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-lg hover:border-indigo-500/60 transition-colors cursor-pointer group">
      <div className="flex justify-between items-center mb-1">
         <span className="text-xs font-bold text-indigo-300">Bundle & Save</span>
         <span className="bg-indigo-500 text-white text-[10px] px-1.5 rounded group-hover:scale-110 transition-transform">-15%</span>
      </div>
      <p className="text-sm text-zinc-300">Buy 2, Get 1 Free</p>
    </div>
);

// NotifyMe
export const NotifyMe = () => (
    <div className="flex gap-2">
      <input type="email" placeholder="Email me when available" className="bg-zinc-900 border border-zinc-700 rounded px-3 py-1 text-sm w-48 focus:border-blue-500 focus:outline-none transition-colors" />
      <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1 rounded text-sm transition-colors">Notify</button>
    </div>
);

// StoreLocator
export const StoreLocator = () => (
    <div className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white cursor-pointer group">
      <svg className="w-4 h-4 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <span>Find in Store</span>
    </div>
);

// PaymentMethods
export const PaymentMethods = () => (
    <div className="flex -space-x-2 hover:space-x-1 transition-all duration-300 cursor-pointer">
       <div className="w-8 h-5 bg-blue-900 rounded border border-blue-800 shadow-sm" />
       <div className="w-8 h-5 bg-indigo-900 rounded border border-indigo-800 shadow-sm" />
       <div className="w-8 h-5 bg-purple-900 rounded border border-purple-800 shadow-sm" />
    </div>
);

// FilterSortDropdown
export const FilterSortDropdown = () => (
    <div className="flex items-center gap-1 text-sm cursor-pointer group hover:text-white text-zinc-400">
      <span>Sort by: Featured</span>
      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
    </div>
);

// WishlistHeart
export const WishlistHeart = () => (
    <button className="w-10 h-10 rounded-full bg-white text-zinc-400 hover:text-red-500 shadow-lg flex items-center justify-center transition-colors group">
      <svg className="w-6 h-6 group-hover:fill-current transition-all duration-300 group-active:scale-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    </button>
);
