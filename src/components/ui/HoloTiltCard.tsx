"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { Plus } from "lucide-react";
import * as Icons from "lucide-react";
import { useTransition } from "@/components/ui/TransitionProvider";

export function HoloTiltCard({ item }: { item: any }) {
  const { navigate } = useTransition();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 30 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  
  const glareX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(springY, [-0.5, 0.5], [0, 100]);
  const glareBg = useMotionTemplate`radial-gradient(farthest-corner circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 60%)`;

  const [isTouch, setIsTouch] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const safeRotateX = reduced || isTouch ? 0 : rotateX;
  const safeRotateY = reduced || isTouch ? 0 : rotateY;

  const LIcon = (Icons as any)[item.icon] || Icons.Sparkles;

  const innerContent = (
    <>
      {item.tag && (
        <motion.div
          className="absolute z-10 top-3 right-3 bg-terracotta text-cream-pure font-sans font-black text-[10px] px-3 py-1 rounded-pill uppercase tracking-stamp"
          style={{ transform: 'translateZ(40px)' }}
        >
          {item.tag}
        </motion.div>
      )}

      <motion.div
        className="w-full aspect-square rounded-[16px] mb-4 bg-peach flex items-center justify-center overflow-hidden"
        style={{ transform: 'translateZ(60px)' }}
      >
        <LIcon size={52} strokeWidth={1.3} className="text-terracotta opacity-60" />
      </motion.div>

      <motion.div style={{ transform: 'translateZ(30px)' }}>
        <h3 className="font-display text-[1.1rem] text-brown leading-tight mb-1">{item.name}</h3>
        <p className="font-sans text-sm text-brown-muted leading-relaxed mb-4">{item.desc}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="font-display text-xl text-terracotta">{item.price}</span>
          <button
            onClick={() => navigate('/menu')}
            aria-label={`${item.name} ansehen`}
            className="w-9 h-9 bg-terracotta rounded-full flex items-center justify-center shadow-clay-sm transition-transform hover:scale-110 active:scale-95"
          >
            <Plus size={18} className="text-cream-pure" strokeWidth={2.5} />
          </button>
        </div>
      </motion.div>

      {!isTouch && (
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-card pointer-events-none z-10"
          style={{
            background: glareBg,
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </>
  );

  const containerClasses = "relative bg-cream rounded-card p-5 overflow-hidden shadow-clay-sm cursor-pointer";

  // Wir nutzen den BitemarkMask nur beim Hover für den Juicy-UI-Effekt
  const hoverProps = {
    whileHover: { 
      y: -3,
      boxShadow: "0 8px 24px 0 rgba(204, 98, 76, 0.12)",
    },
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
  };

  return (
    <div style={{ perspective: 1200 }}>
      {isTouch ? (
        <div className={containerClasses}>
          {innerContent}
        </div>
      ) : (
        <motion.div
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mouseX.set((e.clientX - r.left) / r.width - 0.5);
            mouseY.set((e.clientY - r.top) / r.height - 0.5);
          }}
          onPointerLeave={() => { mouseX.set(0); mouseY.set(0); }}
          {...hoverProps}
          style={{
            transformStyle: 'preserve-3d',
            rotateX: safeRotateX, 
            rotateY: safeRotateY,
            maskImage: 'url(#bitemark-card)',
            WebkitMaskImage: 'url(#bitemark-card)',
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
          }}
          className={containerClasses}
        >
          {innerContent}
        </motion.div>
      )}
    </div>
  );
}
