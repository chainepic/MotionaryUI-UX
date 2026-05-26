'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    features: ['1 Project', 'Basic Analytics', 'Community Support'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Custom Domain'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    features: ['SSO', 'Dedicated Manager', 'SLA', 'Custom Integrations'],
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 gap-4 overflow-x-auto">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className={cn(
            "relative flex flex-col p-6 rounded-2xl border min-w-[200px] w-[240px]",
            plan.popular 
              ? "bg-white/10 border-primary/50 shadow-2xl shadow-primary/10" 
              : "bg-surface-100 border-white/5"
          )}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-black text-[10px] font-bold uppercase tracking-wider rounded-full">
              Most Popular
            </div>
          )}
          <h3 className="text-lg font-bold text-white">{plan.name}</h3>
          <div className="text-3xl font-bold text-white mt-2 mb-4">{plan.price}<span className="text-sm font-normal text-white/40">/mo</span></div>
          <div className="space-y-3 flex-1">
            {plan.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-xs text-white/60">
                <Check className="w-3 h-3 text-primary" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
          <button className={cn(
            "mt-6 w-full py-2 rounded-lg text-sm font-medium transition-colors",
            plan.popular 
              ? "bg-primary text-black hover:bg-primary/90" 
              : "bg-white/5 text-white hover:bg-white/10"
          )}>
            Choose {plan.name}
          </button>
        </motion.div>
      ))}
    </div>
  );
};

