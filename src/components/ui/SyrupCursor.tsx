"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SyrupCursor() {
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [target, setTarget] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  useEffect(() => {
    setEnabled(window.matchMedia('(pointer: fine)').matches);
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [enabled, mouseX, mouseY]);

  useEffect(() => {
    if (!enabled) return;
    const enter = (e: MouseEvent) => {
      const el = (e.target as Element).closest?.('button, a, [role="button"], .octa, .hbtn');
      if (!el) return;
      const r = el.getBoundingClientRect();
      setTarget({ x: r.left + r.width/2, y: r.top + r.height/2, w: r.width, h: r.height });
    };
    const leave = (e: MouseEvent) => {
      if (!(e.target as Element).closest?.('button, a, [role="button"], .octa, .hbtn')) return;
      setTarget(null);
    };
    document.addEventListener('mouseover', enter, true);
    document.addEventListener('mouseout', leave, true);
    return () => {
      document.removeEventListener('mouseover', enter, true);
      document.removeEventListener('mouseout', leave, true);
    };
  }, [enabled]);

  useEffect(() => {
    if (target) {
      mouseX.set(target.x);
      mouseY.set(target.y);
    }
  }, [target, mouseX, mouseY]);

  const stiffness = reduced ? 1500 : 800;
  const tStiffness = reduced ? 1500 : 400;

  const headX = useSpring(mouseX, { stiffness, damping: 30 });
  const headY = useSpring(mouseY, { stiffness, damping: 30 });

  const t1X = useSpring(mouseX, { stiffness: tStiffness, damping: 32 });
  const t1Y = useSpring(mouseY, { stiffness: tStiffness, damping: 32 });

  const t2X = useSpring(mouseX, { stiffness: reduced ? 1500 : 250, damping: 34 });
  const t2Y = useSpring(mouseY, { stiffness: reduced ? 1500 : 250, damping: 34 });

  const t3X = useSpring(mouseX, { stiffness: reduced ? 1500 : 150, damping: 36 });
  const t3Y = useSpring(mouseY, { stiffness: reduced ? 1500 : 150, damping: 36 });

  const t4X = useSpring(mouseX, { stiffness: reduced ? 1500 : 90, damping: 38 });
  const t4Y = useSpring(mouseY, { stiffness: reduced ? 1500 : 90, damping: 38 });

  if (!enabled) return null;

  const headSize = target ? Math.max(target.w, target.h) + 16 : 22;
  const headRadius = target ? 20 : '50%';

  return (
    <>
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="syrup-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999999, filter: 'url(#syrup-goo)' }}>
        <motion.div style={{
          position: 'fixed', top: 0, left: 0, width: 8, height: 8, borderRadius: '50%', background: '#CC624C',
          x: t4X, y: t4Y, translateX: '-50%', translateY: '-50%',
          opacity: target ? 0 : 0.6,
          pointerEvents: 'none'
        }} />
        <motion.div style={{
          position: 'fixed', top: 0, left: 0, width: 10, height: 10, borderRadius: '50%', background: '#CC624C',
          x: t3X, y: t3Y, translateX: '-50%', translateY: '-50%', opacity: target ? 0 : 0.7,
          pointerEvents: 'none'
        }} />
        <motion.div style={{
          position: 'fixed', top: 0, left: 0, width: 12, height: 12, borderRadius: '50%', background: '#CC624C',
          x: t2X, y: t2Y, translateX: '-50%', translateY: '-50%', opacity: target ? 0 : 0.8,
          pointerEvents: 'none'
        }} />
        <motion.div style={{
          position: 'fixed', top: 0, left: 0, width: 14, height: 14, borderRadius: '50%', background: '#CC624C',
          x: t1X, y: t1Y, translateX: '-50%', translateY: '-50%', opacity: target ? 0 : 0.9,
          pointerEvents: 'none'
        }} />

        <motion.div
          animate={{
            width: headSize,
            height: headSize,
            borderRadius: headRadius,
            opacity: target ? 0.25 : 1,
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 26 }}
          style={{
            position: 'fixed', top: 0, left: 0, background: '#CC624C',
            x: headX, y: headY, translateX: '-50%', translateY: '-50%',
            mixBlendMode: 'normal',
            pointerEvents: 'none'
          }}
        />
      </div>
    </>
  );
}
