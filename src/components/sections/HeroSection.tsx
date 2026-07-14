import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FADE_UP_ANIMATION_VARIANTS, STAGGER_CONTAINER } from '../../utils/animations';

interface HeroSectionProps {
  onStartPresentation?: () => void;
}

export default function HeroSection({ onStartPresentation }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] px-6 pt-20 pb-32">
      
      {/* Premium Vercel/Linear Dot Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)',
        }}
      />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-rafiq-primary-400/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto"
      >
        
        {/* THE FIX: Separated the Entrance Fade (Outer) from the Floating Loop (Inner) 
        */}
        {/* Floating Logo Setup */}
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mb-8">
          <motion.div 
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* THE REAL LOGO: Replaced the blue placeholder box with your actual image */}
            <img 
              src="/logo.png" 
              alt="Rafiq Logo" 
              className="h-40 w-auto object-contain drop-shadow-2xl" 
            />
          </motion.div>
        </motion.div>

        {/* Modern Pill Badge */}
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/60 shadow-sm text-sm font-medium text-slate-600 transition-shadow hover:shadow-md cursor-pointer">
            <span className="flex h-2 w-2 rounded-full bg-rafiq-primary-500 animate-pulse"></span>
            <span className="text-slate-900">Rafiq AI Platform</span>
            <span className="text-slate-300 mx-1">|</span>
            <span className="text-rafiq-primary-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Series A Ready
            </span>
          </div>
        </motion.div>

        {/* Hyper-Refined Typography */}
        <motion.h1 
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-[3.5rem] md:text-[5.5rem] font-bold tracking-[-0.04em] text-[#09090B] mb-8 leading-[1.05]"
        >
          The Intelligent Backbone <br className="hidden md:block"/> 
          for <span className="text-transparent bg-clip-text bg-gradient-to-br from-rafiq-primary-500 via-rafiq-primary-400 to-[#7DADFD]">Student Success.</span>
        </motion.h1>

        {/* Elegant, breathable Subtitle */}
        <motion.p 
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-lg md:text-xl text-[#52525B] max-w-2xl mb-12 font-normal leading-relaxed tracking-tight"
        >
          Rafiq leverages advanced AI processing to seamlessly guide students through registration, performance tracking, and career optimization.
        </motion.p>

        {/* Stripe-Level Navigation Links */}
        <motion.div 
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          {/* 1. External Link: Opens actual website in a new tab */}
          <a 
            href="https://rafiq-dashboard.pages.dev/dashboard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-rafiq-primary-500 to-rafiq-primary-600 text-white font-semibold rounded-full transition-all duration-300 ease-out hover:from-rafiq-primary-400 hover:to-rafiq-primary-500 border border-rafiq-primary-700 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.2),_0_8px_20px_rgba(21,100,191,0.25)] hover:shadow-[inset_0px_1px_0px_rgba(255,255,255,0.4),_0_12px_30px_rgba(21,100,191,0.4)] hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Explore the Platform
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          {/* 2. Internal Link: Enters Presentation Mode (Instantly Swaps Pages) */}
          <button 
            onClick={() => {
              if (onStartPresentation) {
                onStartPresentation(); 
              }
            }}
            className="group w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border border-slate-200/80 transition-all duration-300 ease-out hover:bg-slate-50 hover:text-slate-900 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-slate-300 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center cursor-pointer"
          >
            Read the Architecture
          </button>
        </motion.div>
      </motion.div>
      
    </section>
  );
}