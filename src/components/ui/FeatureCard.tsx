// src/components/ui/FeatureCard.tsx
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spotlight effect on mouse move
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative max-w-md rounded-2xl border border-surfaceBorder bg-surface p-8 transition-colors hover:border-rafiq-neutral-700"
      onMouseMove={handleMouseMove}
    >
      {/* Hover Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(21, 100, 191, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rafiq-primary-950 border border-rafiq-primary-800 text-rafiq-primary-400">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold text-white tracking-tight">{title}</h3>
        <p className="text-rafiq-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}