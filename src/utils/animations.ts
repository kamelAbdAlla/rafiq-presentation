// src/utils/animations.ts
import type { Variants } from "framer-motion";

export const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const GLOW_VARIANTS: Variants = {
  initial: { opacity: 0.5, scale: 0.8 },
  animate: { 
    opacity: [0.5, 0.8, 0.5], 
    scale: [0.8, 1.2, 0.8],
    transition: { repeat: Infinity, duration: 8, ease: "easeInOut" }
  }
};