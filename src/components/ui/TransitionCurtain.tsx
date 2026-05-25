"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionCurtainProps {
  isBusy: boolean;
}

export const TransitionCurtain: React.FC<TransitionCurtainProps> = ({ isBusy }) => {
  return (
    <AnimatePresence>
      {isBusy && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "var(--terracotta, #CC624C)",
            transformOrigin: "top",
            zIndex: 99999,
            pointerEvents: "auto",
          }}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
};
