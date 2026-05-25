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
          style={{
            position: 'absolute', top: 14, right: 14, zIndex: 4,
            background: '#CC624C', color: '#fff',
            fontFamily: 'Nunito,sans-serif', fontWeight: 900, fontSize: '0.63rem',
            padding: '4px 11px', borderRadius: 50, textTransform: 'uppercase', letterSpacing: '.8px',
            transform: 'translateZ(40px)',
          }}
        >
          {item.tag}
        </motion.div>
      )}

      <motion.div
        style={{
          borderRadius: 16, overflow: 'hidden', aspectRatio: '1', marginBottom: 16,
          background: '#E4C0A8', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: 'translateZ(60px)',
        }}
      >
        <LIcon size={52} strokeWidth={1.3} color="#CC624C" style={{ opacity: 0.6 }} />
      </motion.div>

      <motion.div style={{ transform: 'translateZ(30px)' }}>
        <h3 style={{ fontFamily: 'Calistoga,serif', fontSize: '1.05rem', color: '#2d1f19', marginBottom: 5 }}>{item.name}</h3>
        <p style={{ fontFamily: 'Nunito,sans-serif', fontSize: '0.78rem', color: '#9a7060', marginBottom: 16, lineHeight: 1.5 }}>{item.desc}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Calistoga,serif', fontSize: '1.2rem', color: '#CC624C' }}>{item.price}</span>
          <button
            onClick={() => navigate('/menu')}
            aria-label={`${item.name} ansehen`}
            style={{
              width: 33, height: 33, background: '#CC624C', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(204,98,76,.3)', cursor: 'pointer', border: 'none',
            }}
            className="transition-transform hover:scale-110"
          >
            <Plus size={18} color="#fefefe" strokeWidth={2.5} />
          </button>
        </div>
      </motion.div>

      {!isTouch && (
        <motion.div
          aria-hidden
          style={{
            position: 'absolute', inset: 0, borderRadius: 24,
            background: glareBg, mixBlendMode: 'overlay',
            pointerEvents: 'none', zIndex: 5,
          }}
        />
      )}
    </>
  );

  return (
    <div style={{ perspective: 1200 }}>
      {isTouch ? (
        <div
          style={{
            position: 'relative',
            background: '#f5efe8',
            borderRadius: 24,
            padding: '20px 20px 22px',
            overflow: 'hidden',
            boxShadow: '0 3px 16px rgba(45,31,25,.06)',
          }}
        >
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
          whileHover={{ y: -3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            position: 'relative',
            background: '#f5efe8',
            borderRadius: 24,
            padding: '20px 20px 22px',
            overflow: 'hidden',
            transformStyle: 'preserve-3d',
            rotateX: safeRotateX, 
            rotateY: safeRotateY,
            boxShadow: '0 3px 16px rgba(45,31,25,.06)',
            cursor: 'default',
          }}
        >
          {innerContent}
        </motion.div>
      )}
    </div>
  );
}
