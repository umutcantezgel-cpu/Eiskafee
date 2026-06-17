"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";

interface Review {
  id: string;
  name: string;
  stars: number;
  text: string;
}

const AVATAR_COLORS = ["#CC624C", "#5c3d35", "#E4C0A8", "#9a7060", "#3a2820"];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function ReviewCard({
  review,
  index,
  isTouch,
}: {
  review: Review;
  index: number;
  isTouch: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: 26,
        boxShadow: "var(--shadow-sm)",
        maxWidth: 340,
        minWidth: 310,
        flexShrink: 0,
        ...(isTouch ? { scrollSnapAlign: "start" as const } : {}),
      }}
      className="hf-hover-lift"
    >
      <span
        className="hf-stars"
        style={{ fontSize: "1.1rem", letterSpacing: 1, color: "#CC624C" }}
        role="img"
        aria-label={`${review.stars} von 5 Sternen`}
      >
        {"★".repeat(review.stars)}
      </span>
      <p
        style={{
          font: "400 .92rem/1.7 var(--font-body)",
          color: "#5c3d35",
          margin: "12px 0 18px",
          fontStyle: "italic",
        }}
      >
        „{review.text}“
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: avatarColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            font: "800 .9rem var(--font-body)",
            color: "#fff",
          }}
        >
          {getInitials(review.name)}
        </span>
        <b style={{ font: "800 .88rem var(--font-body)", color: "#2d1f19" }}>
          {review.name}
        </b>
      </div>
    </div>
  );
}

export function ReviewsSection({
  reviews,
  config,
}: {
  reviews: Review[];
  config: any;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect touch device
  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // Auto-scroll marquee effect (only on non-touch devices)
  useEffect(() => {
    if (isTouch) return; // No auto-scroll on touch devices

    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5; // pixels per frame

    const scroll = () => {
      if (!isPaused && container) {
        scrollPos += speed;
        // Reset when we've scrolled through the first set of cards
        const halfWidth = container.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isTouch]);

  // Track scroll position for indicator dots (touch only)
  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || !isTouch) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = 330; // minWidth(310) + gap(20)
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, reviews.length - 1));
  }, [isTouch, reviews.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !isTouch) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isTouch, handleScroll]);

  // On touch: use original reviews only (no duplication needed for snap scroll)
  // On desktop: duplicate for infinite marquee
  const displayReviews = isTouch ? reviews : [...reviews, ...reviews];

  // Scroll to a specific dot index
  const scrollToDot = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = 330;
    container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  };

  return (
    <section
      style={{
        background: "#E4C0A8",
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 hf-dot-bg pointer-events-none" />

      <FadeUp className="relative z-10 max-w-[1200px] mx-auto px-6 pt-6">
        <SectionTitle
          sub={`${config.rating}/5 · ${config.reviewCount}+ echte Bewertungen auf Google`}
        >
          Was unsere Gäste sagen
        </SectionTitle>

        {/* Marquee / Scroll-snap container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{
            display: "flex",
            gap: 20,
            overflowX: isTouch ? "auto" : "hidden",
            paddingBottom: 8,
            scrollBehavior: "auto",
            ...(isTouch
              ? {
                  scrollSnapType: "x mandatory" as const,
                  WebkitOverflowScrolling: "touch" as any,
                  // No mask on touch – user needs to see edges clearly
                }
              : {
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%)",
                  maskImage:
                    "linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%)",
                }),
          }}
        >
          {displayReviews.map((r, i) => (
            <ReviewCard
              key={`${r.id}-${i}`}
              review={r}
              index={i}
              isTouch={isTouch}
            />
          ))}
        </div>

        {/* Scroll indicator dots (touch only) */}
        {isTouch && reviews.length > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 16,
            }}
          >
            {reviews.map((_, i) => (
              <button
                key={i}
                aria-label={`Bewertung ${i + 1} anzeigen`}
                onClick={() => scrollToDot(i)}
                style={{
                  width: activeIndex === i ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background:
                    activeIndex === i ? "#CC624C" : "rgba(92,61,53,0.25)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        )}

        {/* Interactive hint + Google CTA */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 24,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.78rem",
              color: "#5c3d35",
              opacity: 0.7,
            }}
          >
            {isTouch
              ? "← Swipe zum Entdecken →"
              : "← Hover um anzuhalten · Swipe zum Entdecken →"}
          </p>

          <motion.a
            href="https://maps.app.goo.gl/heyfede"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#fefefe",
              color: "#2d1f19",
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 800,
              fontSize: "0.85rem",
              padding: "10px 20px",
              borderRadius: 50,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(45,31,25,0.1)",
            }}
          >
            <Star size={16} fill="#CC624C" color="#CC624C" />
            Auf Google bewerten
            <ExternalLink size={14} color="#9a7060" />
          </motion.a>
        </div>
      </FadeUp>
    </section>
  );
}
