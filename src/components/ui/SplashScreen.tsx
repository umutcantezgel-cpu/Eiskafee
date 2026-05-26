"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG Paths for the "Drop" animation
// We animate a path that covers the screen from top to bottom, then retracts upwards.
const paths = {
  initial: "M 0 0 L 100 0 Q 50 0 0 0 Z", // Flat at the top
  dropDown: "M 0 0 L 100 0 L 100 100 Q 50 150 0 100 Z", // Dropping down with a curve
  cover: "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z", // Fully covered
  retractCurve: "M 0 0 L 100 0 L 100 0 Q 50 50 0 0 Z", // Pulling up from the bottom
  done: "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z" // Back to top
};

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if we already showed the splash screen in this session
    const hasShownSplash = sessionStorage.getItem("splash_shown");
    if (!hasShownSplash) {
      setShowSplash(true);
      sessionStorage.setItem("splash_shown", "true");
    }
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.8 }}
          className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center"
        >
          {/* Logo Fade In */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="absolute z-10 flex flex-col items-center"
          >
            <h1 className="font-calistoga text-5xl text-[#fffdd0]">Hey Fedee</h1>
            <p className="font-nunito text-[#fffdd0] font-bold tracking-widest uppercase text-sm mt-2">Premium Waffeln</p>
          </motion.div>

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full block"
            style={{ filter: 'drop-shadow(0 20px 30px rgba(204,98,76,0.3))' }}
          >
            <motion.path
              fill="#CC624C" // Terracotta
              initial={{ d: paths.initial }}
              animate={{
                d: [paths.initial, paths.dropDown, paths.cover, paths.cover, paths.retractCurve, paths.done]
              }}
              transition={{
                duration: 2.0,
                times: [0, 0.2, 0.4, 0.7, 0.9, 1],
                ease: [0.76, 0, 0.24, 1]
              }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
