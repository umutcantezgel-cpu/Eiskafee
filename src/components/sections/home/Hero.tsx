"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { FloatingBlob } from "@/components/atoms/FloatingBlob";
import { EyebrowPill } from "@/components/atoms/EyebrowPill";
import { RatingPill } from "@/components/atoms/RatingPill";
import { PrimaryCTA, SecondaryCTA } from "@/components/atoms/buttons";
import { ScallopBadge } from "@/components/atoms/ScallopBadge";
import { StampBadge } from "@/components/atoms/StampBadge";

import PhysicsPlayground from "@/components/ui/PhysicsPlayground";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="relative w-full min-h-[100svh] flex items-start lg:items-center bg-peach pt-32 lg:pt-28 pb-32 overflow-hidden">
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 hf-dot-bg pointer-events-none" />

      {/* Decorative Background Blobs */}
      <FloatingBlob
        variant="organic1"
        color="cream"
        size={360}
        opacity={0.4}
        className="-top-[10%] -right-[5%]"
      />
      <FloatingBlob
        variant="organic3"
        color="terracotta"
        size={220}
        opacity={0.12}
        reverse
        delay={1.5}
        className="-bottom-[5%] -left-[5%]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content Stack */}
          <motion.div
            variants={prefersReducedMotion ? undefined : containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <EyebrowPill
                label="DESSERTBAR & CAFÉ · WETZLAR"
                statusColor="bg-terracotta"
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-6"
            >
              Süße Momente,
              <br />
              <span className="text-terracotta">frisch gemacht.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-bold text-charcoal/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            >
              Bubble Waffeln, Pancake Boxen, Special Shakes und mehr - alles
              selbstgemacht mit Liebe. Dein gemütlicher Treffpunkt in der
              Wetzlarer Langgasse.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <TransitionLink href="/menu">
                <span
                  className="hf-btn-wrap"
                  style={{ "--bite": "#E4C0A8" } as React.CSSProperties}
                >
                  <span className="hf-btn-primary inline-block text-center">
                    Zur Speisekarte →
                  </span>
                </span>
              </TransitionLink>
              <TransitionLink href="/visit">
                <span className="hf-btn-secondary bg-cream/50 backdrop-blur-sm border-terracotta text-terracotta hover:bg-terracotta hover:text-cream inline-block text-center">
                  Uns besuchen
                </span>
              </TransitionLink>
            </motion.div>

            <motion.div variants={itemVariants}>
              <RatingPill score={4.8} reviewCount={84} />
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="hidden md:flex justify-center items-center relative"
          >
            {/* Background Blob */}
            <div
              className="absolute w-[88%] aspect-square bg-cream/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ borderRadius: "56% 44% 52% 48% / 48% 56% 44% 52%" }}
            ></div>

            {/* Interactive Physics Playground Container */}
            <div
              className="relative z-10 w-[76%] max-w-[360px] aspect-square shadow-2xl"
              style={{ borderRadius: "54% 46% 56% 44% / 50% 54% 46% 50%" }}
            >
              <PhysicsPlayground size={360} />
            </div>

            {/* Floating Stamps */}
            <div className="absolute top-[4%] -right-[2%] z-20 pointer-events-none">
              <StampBadge
                label="HAUSGEMACHT"
                size={86}
                rotate={14}
                variant="terracotta"
              />
            </div>
            <div className="absolute bottom-[5%] left-[0%] z-20 pointer-events-none">
              <StampBadge
                label="FRISCH & LECKER"
                size={78}
                rotate={-9}
                variant="brown"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
