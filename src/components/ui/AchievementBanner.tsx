"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import * as Icons from "lucide-react";

export function AchievementBanner() {
  const [unlocked, setUnlocked] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const handleAch = () => setUnlocked(true);
    window.addEventListener('achievement-unlocked', handleAch);
    return () => window.removeEventListener('achievement-unlocked', handleAch);
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    confetti({
      particleCount: reduced ? 30 : 100, spread: 70, origin: { y: 0.15 },
      colors: ['#CC624C', '#E4C0A8', '#eedfcc', '#fff8f1'],
      zIndex: 9999999,
    });
    const t = setTimeout(() => setUnlocked(false), 7000);
    return () => clearTimeout(t);
  }, [unlocked, reduced]);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          key="ach"
          initial={{ y: -180, opacity: 0, x: '-50%', scale: 0.85 }}
          animate={{ y: 0, opacity: 1, x: '-50%', scale: 1 }}
          exit={{ y: -180, opacity: 0, x: '-50%', scale: 0.85 }}
          transition={reduced ? { duration: 0.3 } : { type: 'spring', stiffness: 360, damping: 22, mass: 1 }}
          style={{
            position: 'fixed', top: 20, left: '50%', zIndex: 999999,
            background: 'linear-gradient(140deg, #2d1f19 0%, #3a2820 100%)',
            color: '#fff',
            border: '1.5px solid rgba(228,192,168,0.45)',
            borderRadius: 22,
            padding: '14px 22px 14px 18px',
            display: 'flex', alignItems: 'center', gap: 14,
            boxShadow: '0 18px 60px rgba(204,98,76,0.45), inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 0 4px rgba(204,98,76,0.18)',
            minWidth: 320, maxWidth: 'calc(100vw - 32px)',
            fontFamily: 'var(--font-nunito), sans-serif',
            backdropFilter: 'blur(8px)',
          }}
          role="status" aria-live="polite"
        >
          <motion.div
            animate={reduced ? {} : { scale: [1, 1.08, 1], rotate: [0, -6, 6, 0] }}
            transition={{ duration: 1.4, repeat: 1 }}
            style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, #E4C0A8 0%, #CC624C 75%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 22px rgba(228,192,168,0.6)', flexShrink: 0,
              fontSize: 24,
            }}
          >🏆</motion.div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-nunito), sans-serif', fontSize: '0.66rem', fontWeight: 900, letterSpacing: '2px', color: '#E4C0A8', textTransform: 'uppercase' }}>
              Achievement entsperrt
            </div>
            <div style={{ fontFamily: 'var(--font-calistoga), serif', fontSize: '1.15rem', color: '#fff', marginTop: 2, lineHeight: 1.2 }}>
              Sweet Tooth
            </div>
            <div style={{ fontFamily: 'var(--font-nunito), sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>
              Code: <span style={{ fontFamily: 'monospace', background: 'rgba(228,192,168,0.16)', padding: '2px 8px', borderRadius: 6, color: '#E4C0A8', fontWeight: 700 }}>SECRET-FEDE</span>
            </div>
          </div>

          <button
            onClick={() => setUnlocked(false)}
            aria-label="Schließen"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
              color: '#E4C0A8',
              width: 30, height: 30, borderRadius: '50%',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, padding: 0,
            }}
          >
            <Icons.X size={14} color="#E4C0A8" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
