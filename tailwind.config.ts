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
      /* ═══ §5 · COLOR PALETTE ═══════════════════════════════ */
      colors: {
        cream: {
          DEFAULT: '#f5efe8',   // Page BG, Card Fills
          pure:    '#fefefe',   // Text on Terracotta, high-contrast
        },
        beige: {
          DEFAULT: '#eedfcc',   // Section BG, Footer BG, Inactive Tabs
        },
        peach: {
          DEFAULT: '#E4C0A8',   // Hero BG, Icon Circles, Blobs
          soft:    '#E4C0A8',   // Alias "Soft Sand"
        },
        terracotta: {
          DEFAULT: '#CC624C',   // PRIMARY: CTAs, Stamps, Active States
          deep:    '#B8553F',   // Hover State (10% deeper)
        },
        brown: {
          DEFAULT: '#2d1f19',   // Deep Warm Brown · Headlines H1
          bark:    '#3a2820',   // Footer BG, Tooltip BG
          mid:     '#5c3d35',   // Body Text, Card Description
          muted:   '#9a7060',   // Captions, Disabled Labels
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
        display: ['var(--font-calistoga)', 'serif'],
        sans:    ['var(--font-nunito)',    'sans-serif'],
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
        'clay-sm':   '0 2px 8px  0 rgba(204, 98, 76, 0.08)',   // Card Rest
        'clay':      '0 8px 24px 0 rgba(204, 98, 76, 0.12)',   // Card Hover, FAB
        'clay-lg':   '0 16px 40px 0 rgba(204, 98, 76, 0.18)',  // Floating Modal, Header
        'clay-cta':  '0 6px 20px 0 rgba(204, 98, 76, 0.30)',   // Primary CTA Glow
        'clay-deep': '0 12px 32px 0 rgba(45,  31, 25, 0.06)',  // Soft Card Glow
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
        // Section Rhythms (responsive)
        'hero-y':    'clamp(4rem, 10vw, 8rem)',
        'section-y': 'clamp(3rem, 7vw, 6rem)',
        'section-x': 'clamp(1rem, 4vw, 2rem)',
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
