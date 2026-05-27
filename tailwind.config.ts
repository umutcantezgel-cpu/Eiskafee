import type { Config } from 'tailwindcss';

/**
 * Hey Fede! — Tailwind Design System
 * Source of Truth: MASTER_CONTEXT.md v2.0, §5–§9
 * ─────────────────────────────────────────────────
 * Token naming is FINAL. Do NOT add aliases.
 * Every token maps 1:1 to a MASTER_CONTEXT reference.
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-creme': 'var(--color-bg-creme)', // Main background
        cream: {
          DEFAULT: 'var(--color-bg-creme)', // Fallback for existing components
          pure: '#fefefe',
        },
        beige: {
          DEFAULT: 'var(--color-beige)',
        },
        peach: {
          DEFAULT: 'var(--color-peach)',
          soft: 'var(--color-peach)',
        },
        terracotta: {
          DEFAULT: 'var(--color-terracotta)',
          deep: 'var(--color-terracotta-deep)',
        },
        brown: {
          DEFAULT: 'var(--color-brown)',
          bark: 'var(--color-brown-bark)',
          mid: 'var(--color-brown-mid)',
          muted: 'var(--color-brown-muted)',
        },
        // System Feedback — NEVER as brand accent
        mint:  '#25D366',       // WhatsApp, Success
        ruby:  '#ff4d4d',       // Errors, Destructive
        // Loyalty Coin
        coin: {
          light: '#F5D77B',     // Gold Highlight
          dark:  '#D4A93D',     // Gold Shadow
        },
        // ── Backward compat (TODO: migrate to canonical tokens) ──
        terra: { DEFAULT: '#CC624C', dark: '#B8553F' },
        bark:  { DEFAULT: '#2d1f19', mid: '#5c3d35', soft: '#9a7060' },
      },

      /* ═══ §6 · TYPOGRAPHY ══════════════════════════════════ */
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-heading)', 'serif'], // Backward compat
        sans:    ['var(--font-body)', 'sans-serif'], // Backward compat
      },
      fontWeight: {
        light:    '300',
        regular:  '500',
        semibold: '700',
        bold:     '800',
        black:    '900',
      },
      letterSpacing: {
        eyebrow: '0.07em',      // ~1.4px @ 20px
        stamp:   '0.10em',      // UPPERCASE Stamp Labels
        wide:    '0.25em',      // PromoBanner Marquee
      },

      /* ═══ §7 · BORDER-RADII, SHADOWS, BLURS ═══════════════ */
      borderRadius: {
        'card-xs':  '14px',     // Mini-Info-Cards, Tooltips
        'card':     '22px',     // ProductCard, BoxCard, ReviewBubble
        'card-lg':  '24px',     // Hero Containers, Modals
        'pill':     '100px',    // Primary CTAs — ALWAYS
        'pill-tab': '50px',     // Tab Pills
        'icon-btn': '9999px',   // FAB, Circle Buttons
      },
      boxShadow: {
        // Clay Family — NEVER rgba(0,0,0,*)
        'clay-sm':   '0 4px 12px 0 rgba(204, 98, 76, 0.05)',   // Card Rest (softer)
        'clay':      '0 12px 32px 0 rgba(204, 98, 76, 0.08)',  // Card Hover, FAB (deeper)
        'clay-lg':   '0 24px 60px 0 rgba(204, 98, 76, 0.12)',  // Floating Modal, Header (softer, wider)
        'clay-cta':  '0 12px 28px 0 rgba(204, 98, 76, 0.22)',  // Primary CTA Glow
        'clay-deep': '0 16px 40px 0 rgba(45,  31, 25, 0.04)',  // Soft Card Glow
        // Glass
        'frosted':   'inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
        // Loyalty
        'coin':      '0 0 24px rgba(245, 215, 123, 0.5)',
      },
      backdropBlur: {
        'frosted-soft': '8px',
        'frosted':      '10px',
        'frosted-deep': '16px',
      },

      /* ═══ §8 · SPACING & SIZING ═══════════════════════════ */
      spacing: {
        // Section Rhythms (responsive) - Elevated Warmth
        'hero-y':    'clamp(6rem, 14vw, 12rem)',
        'section-y': 'clamp(5rem, 10vw, 8rem)',
        'section-x': 'clamp(1.5rem, 5vw, 3rem)',
        // Component Heights
        'header':        '68px',
        'header-mobile': '60px',
        'fab':           '60px',
        'fab-lg':        '72px',
        'cta-h':         '48px',
        'cta-lg-h':      '60px',
      },
      maxWidth: {
        'prose':     '65ch',
        'container': '1280px',
        'narrow':    '960px',
      },

      /* ═══ §9 · MOTION TOKENS ═══════════════════════════════ */
      transitionTimingFunction: {
        'fede':     'cubic-bezier(0.22, 1, 0.36, 1)',    // Standard Spring-like
        'fede-out': 'cubic-bezier(0.16, 1, 0.3, 1)',     // Exit
        'fede-in':  'cubic-bezier(0.7, 0, 0.84, 0)',     // Enter
        'bounce':   'cubic-bezier(0.34, 1.56, 0.64, 1)', // Snap-Back
      },
      transitionDuration: {
        '250':   '250ms',     // Hover State
        '450':   '450ms',     // Card Reveal, Bissspur
        '700':   '700ms',     // Blob Float Start
        '1200':  '1200ms',    // Transition Curtain
        '2500':  '2500ms',    // Blob Loop, Logo Pulse
        '12000': '12000ms',   // Marquee Full Cycle
      },
    },
  },
  plugins: [],
};

export default config;
