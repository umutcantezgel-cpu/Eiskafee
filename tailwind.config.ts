import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === CORE BRAND PALETTE (warm + organisch) ===
        cream: {
          DEFAULT: '#f5efe8',  // Page Background, Card Fills
          pure:    '#fefefe',  // Text auf Terracotta, kontrast-kritische Stellen
        },
        beige: {
          DEFAULT: '#eedfcc',  // Section-Background, Footer-BG, Inactive Tabs
        },
        peach: {
          DEFAULT: '#E4C0A8',  // Hero-Background, Icon-Circles, Decorative Blobs
          soft:    '#E4C0A8',  // Alias zur Vision-Doc "Soft Sand"
        },
        terracotta: {
          DEFAULT: '#CC624C',  // PRIMARY ACTION: CTAs, Stamps, Stroke, Active-States
          deep:    '#B8553F',  // Hover-State (10% deeper)
        },
        brown: {
          DEFAULT: '#2d1f19',  // Deep Warm Brown · Headlines H1
          bark:    '#3a2820',  // Vision-Doc "Bark" · Footer-BG, Tooltip-BG
          mid:     '#5c3d35',  // Standard Body-Text, Card-Description
          muted:   '#9a7060',  // Secondary Text, Captions, Disabled Labels
        },
        // === SYSTEM FEEDBACK COLORS ===
        mint:  '#25D366',      // WhatsApp-Button, Success-States (Order Ready)
        ruby:  '#ff4d4d',      // Validation-Errors, Destructive-Actions
        // === LOYALTY COIN (Spezial-Akzent) ===
        coin: {
          light: '#F5D77B',    // Gold-Highlight des LoyaltyCoin
          dark:  '#D4A93D',    // Gold-Shadow
        },
        // Backward compatibility from previous version
        terra: {
          DEFAULT: '#CC624C',
          dark: '#B8553F',
        },
        bark: {
          DEFAULT: '#2d1f19',
          mid: '#5c3d35',
          soft: '#9a7060',
        },
      },
      fontFamily: {
        display: ['var(--font-calistoga)', 'serif'],
        sans:    ['var(--font-nunito)', 'sans-serif'],
      },
      fontWeight: {
        light:    '300',
        regular:  '500',
        semibold: '700',
        bold:     '800',
        black:    '900',
      },
      letterSpacing: {
        eyebrow:  '0.07em',  // ~1.4px @ 20px font-size
        stamp:    '0.10em',  // für UPPERCASE-Stamp-Labels
        wide:     '0.25em',  // PromoBanner Marquee
      },
      borderRadius: {
        'card-xs':  '14px',
        'card':     '22px',
        'card-lg':  '24px',
        'pill':     '100px',
        'pill-tab': '50px',
        'icon-btn': '9999px',
        // Backward compatibility
        'sm': '14px',
        'md': '22px',
        'lg': '24px',
      },
      boxShadow: {
        'clay-sm':   '0 2px 8px  0 rgba(204, 98, 76, 0.08)',
        'clay':      '0 8px 24px 0 rgba(204, 98, 76, 0.12)',
        'clay-lg':   '0 16px 40px 0 rgba(204, 98, 76, 0.18)',
        'clay-cta':  '0 6px 20px 0 rgba(204, 98, 76, 0.30)',
        'clay-deep': '0 12px 32px 0 rgba(45,  31, 25, 0.06)',
        'frosted':  'inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
        'coin':     '0 0 24px rgba(245, 215, 123, 0.5)',
        // Backward compatibility
        'sm': '0 2px 8px  0 rgba(204, 98, 76, 0.08)',
        'md': '0 8px 24px 0 rgba(204, 98, 76, 0.12)',
        'lg': '0 16px 40px 0 rgba(204, 98, 76, 0.18)',
        'terra': '0 6px 20px 0 rgba(204, 98, 76, 0.30)',
      },
      backdropBlur: {
        'frosted-soft': '8px',
        'frosted':      '10px',
        'frosted-deep': '16px',
      },
      spacing: {
        'hero-y':    'clamp(4rem, 10vw, 8rem)',
        'section-y': 'clamp(3rem, 7vw, 6rem)',
        'section-x': 'clamp(1rem, 4vw, 2rem)',
        'header':    '68px',
        'header-mobile': '60px',
        'fab':       '60px',
        'fab-lg':    '72px',
        'cta-h':     '48px',
        'cta-lg-h':  '60px',
      },
      maxWidth: {
        'prose':     '65ch',
        'container': '1280px',
        'narrow':    '960px',
      },
      transitionTimingFunction: {
        'fede':     'cubic-bezier(0.22, 1, 0.36, 1)',
        'fede-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'fede-in':  'cubic-bezier(0.7, 0, 0.84, 0)',
        'bounce':   'cubic-bezier(0.34, 1.56, 0.64, 1)',
        // Backward compatibility
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '250':  '250ms',
        '450':  '450ms',
        '700':  '700ms',
        '1200': '1200ms',
        '2500': '2500ms',
        '12000': '12000ms',
      },
    },
  },
  plugins: [],
};

export default config;
