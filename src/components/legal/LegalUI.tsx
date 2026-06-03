"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ChevronDown, CheckCircle2, Shield } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   Utility Components
   ═══════════════════════════════════════════════════════════ */

export function LegalIcon({
  children,
  color = "#b34832",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: color,
        color: "#fefefe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

/** Collapsible accordion section */
export function AccordionSection({
  icon,
  number,
  title,
  children,
  defaultOpen = false,
}: {
  icon: React.ReactNode;
  number?: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      layout
      style={{
        background: open ? "rgba(245,239,232,0.6)" : "transparent",
        borderRadius: 18,
        border: open
          ? "1px solid rgba(228,192,168,0.4)"
          : "1px solid transparent",
        marginBottom: 8,
        overflow: "hidden",
        transition: "background 0.3s, border 0.3s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "16px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <LegalIcon>{icon}</LegalIcon>
        <div style={{ flex: 1 }}>
          {number && (
            <span
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize: "0.72rem",
                fontWeight: 800,
                color: "#b34832",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {number}
            </span>
          )}
          <div
            style={{
              fontFamily: "var(--font-calistoga), serif",
              fontSize: "1.05rem",
              color: "#2d1f19",
            }}
          >
            {title}
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <ChevronDown size={20} color="#7a584c" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 20px 20px 64px",
                fontFamily: "var(--font-nunito), sans-serif",
                color: "#5c3d35",
                fontSize: "0.9rem",
                lineHeight: 1.72,
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/** Cookie pill badge */
export function CookieBadge({ category }: { category: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    Notwendig: { bg: "#b34832", text: "#fefefe" },
    Funktional: { bg: "#E4C0A8", text: "#2d1f19" },
    Statistik: { bg: "#7a584c", text: "#fefefe" },
    Marketing: { bg: "#5c3d35", text: "#fefefe" },
  };
  const c = colors[category] || colors.Notwendig;
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        padding: "3px 12px",
        borderRadius: 50,
        fontSize: "0.7rem",
        fontWeight: 800,
        letterSpacing: "0.03em",
      }}
    >
      {category}
    </span>
  );
}

/** Right card — one of the Betroffenenrechte */
export function RightCard({
  right,
  article,
}: {
  right: string;
  article: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(204,98,76,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        background: "rgba(238,223,204,0.5)",
        borderRadius: 14,
        padding: "14px 18px",
        cursor: "default",
        border: "1px solid rgba(228,192,168,0.3)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 2,
        }}
      >
        <CheckCircle2 size={14} color="#b34832" />
        <span
          style={{ fontWeight: 800, color: "#2d1f19", fontSize: "0.85rem" }}
        >
          {right}
        </span>
      </div>
      <span style={{ fontSize: "0.72rem", color: "#7a584c", fontWeight: 600 }}>
        {article}
      </span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Legal Page Wrapper
   ═══════════════════════════════════════════════════════════ */
export function LegalPageLayout({
  title,
  subtitle,
  children,
  lastUpdated = "Mai 2026",
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  lastUpdated?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div
      ref={containerRef}
      style={{ minHeight: "100vh", background: "#fefefe" }}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 68,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #b34832, #E4C0A8)",
          transformOrigin: "left",
          scaleX,
          zIndex: 100,
        }}
      />

      {/* Hero Header */}
      <div
        style={{
          background: "linear-gradient(180deg, #eedfcc 0%, #f5efe8 100%)",
          paddingTop: 120,
          paddingBottom: 48,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: 80,
            right: "10%",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(204,98,76,0.06)",
            animation: "blobFloat 9s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "5%",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(228,192,168,0.15)",
            animation: "blobFloat 12s ease-in-out infinite reverse",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(204,98,76,0.1)",
              padding: "6px 16px",
              borderRadius: 50,
              marginBottom: 16,
            }}
          >
            <Shield size={14} color="#b34832" />
            <span
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#b34832",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Rechtlich auf der sicheren Seite
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-calistoga), serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#2d1f19",
              margin: "0 0 8px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              color: "#5c3d35",
              fontSize: "1rem",
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div
        style={{ maxWidth: 820, margin: "0 auto", padding: "48px 24px 96px" }}
      >
        {children}

        {/* Last updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: 56,
            padding: "16px 24px",
            background: "linear-gradient(135deg, #eedfcc 0%, #f5efe8 100%)",
            borderRadius: 16,
            fontFamily: "var(--font-nunito), sans-serif",
            fontSize: "0.78rem",
            color: "#7a584c",
            textAlign: "center",
            border: "1px solid rgba(228,192,168,0.3)",
          }}
        >
          Stand: {lastUpdated} · Diese Seite dient der Information und ersetzt
          keine Rechtsberatung.
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes blobFloat { 0%,100%{transform:translate(0,0)} 33%{transform:translate(6px,-10px)} 66%{transform:translate(-5px,7px)} }
      `,
        }}
      />
    </div>
  );
}
