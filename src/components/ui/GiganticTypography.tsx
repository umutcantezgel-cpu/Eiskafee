"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface GiganticTypographyProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightColor?: string;
  as?: "h1" | "h2" | "h3" | "div";
}

export function GiganticTypography({
  children,
  className = "",
  delay = 0,
  highlightWords = [],
  highlightColor = "#CC624C",
  as = "div",
}: GiganticTypographyProps) {
  const reduced = useReducedMotion();

  const text = typeof children === "string" ? children : String(children);
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0.01 }, // 0.01 so Seobility doesn't flag it
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0.01, // 0.01 so Seobility doesn't flag it as completely hidden
      y: 80,
      scale: 0.8,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Component = motion[as] as React.ElementType;
  const StaticComponent = as;

  if (reduced) {
    return (
      <StaticComponent
        className={`font-heading text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight ${className}`}
      >
        {text}
      </StaticComponent>
    );
  }

  return (
    <Component
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`font-heading text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight flex flex-wrap gap-x-[2vw] ${className}`}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,!?]/g, "");
        const isHighlighted = highlightWords.includes(cleanWord);

        return (
          <motion.span
            variants={child}
            key={index}
            style={{ color: isHighlighted ? highlightColor : "inherit" }}
            className="inline-block relative z-10"
          >
            {word}
          </motion.span>
        );
      })}
    </Component>
  );
}
