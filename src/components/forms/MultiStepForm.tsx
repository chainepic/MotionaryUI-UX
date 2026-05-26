'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, User, CreditCard, CheckCircle } from 'lucide-react';

const steps = [
  { id: 1, title: 'Account', icon: User },
  { id: 2, title: 'Payment', icon: CreditCard },
  { id: 3, title: 'Confirm', icon: CheckCircle },
];

export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    if (currentStep < 3) {
      setDirection(1);
      setCurrentStep(c => c + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(c => c - 1);
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden text-slate-900">
      {/* Progress Bar */}
      <div className="bg-slate-50 p-6 border-b border-slate-100">
        <div className="flex justify-between relative">
          {/* Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2" />
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-blue-600 -z-10 -translate-y-1/2 transition-all duration-500 ease-in-out" 
            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          />

          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <div key={step.id} className="flex flex-col items-center gap-2 bg-slate-50 px-2">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10
                    ${isActive || isCompleted ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white text-slate-400'}
                  `}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                </div>
                <span className={`text-xs font-semibold ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 h-[300px] relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="w-full h-full flex flex-col"
          >
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Account Information</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Payment Details</h3>
                <div className="p-4 border border-blue-100 bg-blue-50 rounded-lg text-blue-700 text-sm mb-4">
                  Secure encrypted connection
                </div>
                <input type="text" placeholder="Card Number" className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="MM/YY" className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                   <input type="text" placeholder="CVC" className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="text-center h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">All Set!</h3>
                <p className="text-slate-500">Your account has been created successfully.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between">
        <button 
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
            ${currentStep === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-200'}
          `}
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        
        {currentStep < 3 ? (
          <button 
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg shadow-green-500/30">
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

