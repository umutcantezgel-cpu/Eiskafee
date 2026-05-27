'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

export function ScrollLavaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll for physics-like fluidity
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  // Main Blob Transformations
  const blob1Y = useTransform(smoothProgress, [0, 1], ["0%", "200%"]);
  const blob1X = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "50%", "-20%"]);
  const blob1Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.5, 0.8]);
  const blob1Rotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  const blob2Y = useTransform(smoothProgress, [0, 1], ["100%", "400%"]);
  const blob2X = useTransform(smoothProgress, [0, 0.5, 1], ["-20%", "-60%", "10%"]);
  const blob2Scale = useTransform(smoothProgress, [0, 0.5, 1], [1.2, 0.9, 1.6]);
  const blob2Rotate = useTransform(smoothProgress, [0, 1], [0, -120]);

  const blob3Y = useTransform(smoothProgress, [0, 1], ["-50%", "300%"]);
  const blob3X = useTransform(smoothProgress, [0, 0.5, 1], ["20%", "-30%", "60%"]);
  const blob3Rotate = useTransform(smoothProgress, [0, 1], [45, -45]);

  if (reduced) {
    return (
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-30">
         <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-[#E4C0A8] rounded-full blur-3xl opacity-40" />
         <div className="absolute bottom-[10%] left-[10%] w-[50vw] h-[50vw] bg-[#CC624C] rounded-full blur-3xl opacity-20" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 opacity-[0.22] dot-bg" />

      {/* Blob 1: Terracotta */}
      <motion.div
        style={{
          y: blob1Y,
          x: blob1X,
          scale: blob1Scale,
          rotate: blob1Rotate,
          borderRadius: '58% 42% 52% 48%/48% 58% 42% 52%'
        }}
        className="absolute -top-[10%] -right-[10%] w-[60vw] max-w-[800px] aspect-square bg-[#CC624C] opacity-20 mix-blend-multiply blur-[8px]"
      />

      {/* Blob 2: Peach */}
      <motion.div
        style={{
          y: blob2Y,
          x: blob2X,
          scale: blob2Scale,
          rotate: blob2Rotate,
          borderRadius: '45% 55% 40% 60%/55% 45% 60% 40%'
        }}
        className="absolute top-[20%] -left-[20%] w-[70vw] max-w-[900px] aspect-square bg-[#E4C0A8] opacity-40 mix-blend-multiply blur-[12px]"
      />

      {/* Blob 3: Brown (Subtle depth) */}
      <motion.div
        style={{
          y: blob3Y,
          x: blob3X,
          rotate: blob3Rotate,
          borderRadius: '60% 40% 55% 45%/45% 55% 40% 60%'
        }}
        className="absolute top-[40%] right-[20%] w-[40vw] max-w-[600px] aspect-square bg-[#9a7060] opacity-10 mix-blend-multiply blur-[20px]"
      />
    </div>
  );
}
