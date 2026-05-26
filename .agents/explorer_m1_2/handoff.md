# Handoff Report — Explorer 2: Existing Code Patterns Analysis

**Date:** 2026-05-26T12:58Z  
**Status:** Hard handoff — investigation complete  
**Summary:** The codebase follows a consistent Next.js 16 App Router pattern with Server Components by default, `"use client"` only when stateful/interactive, Tailwind CSS with a custom Terracotta/Cream design system, and a rich set of reusable UI components.

---

## 1. Observation

### 1.1 Page File Structure Patterns

Four existing pages were analyzed. Two distinct patterns emerge:

#### Pattern A: Server Component (default — preferred for static pages)
Used by: `about/page.tsx`, `menu/page.tsx`, `legal/page.tsx`, `page.tsx` (Home)

```tsx
// about/page.tsx — line 1-8
import React from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SectionTitle, StampBadge } from "@/components/ui/LayoutBlocks";
// ... more imports

export default function AboutPage() {
  // ... direct JSX return, no state
}
```

Key characteristics:
- **No `"use client"` directive** — runs as Server Component
- Imports use `@/` path alias (mapped to `./src/*` in tsconfig.json:21-23)
- **No metadata export** — only `layout.tsx` exports `metadata` (lines 25-28)
- Function name = `PascalCase` matching the page purpose (e.g., `AboutPage`, `HomePage`, `LegalPage`, `MenuPage`)
- `export default function` — named function export (not arrow functions)
- React imported explicitly: `import React from "react"`

#### Pattern B: Client Component (for stateful/interactive pages)
Used by: `support/page.tsx`

```tsx
// support/page.tsx — line 1-7
"use client";
import React, { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import * as Icons from "lucide-react";
import { db } from "@/lib/firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  // ... state management with useState
}
```

Key characteristics:
- `"use client"` at very top (line 1)
- useState hooks for interactivity
- Firebase Firestore imported via `@/lib/firebase/config` for `db`
- `lucide-react` icons imported as namespace: `import * as Icons from "lucide-react"`

#### Pattern C: Thin Server Component delegating to Client Component
Used by: `menu/page.tsx`

```tsx
// menu/page.tsx — all 7 lines
import { HF_DATA } from "@/lib/data";
import { MenuClient } from "@/components/menu/MenuClient";

export default function MenuPage() {
  return <MenuClient categories={HF_DATA.categories} menu={HF_DATA.menu} />;
}
```

### 1.2 Root Layout (`src/app/layout.tsx`)

```tsx
// layout.tsx — lines 1-61
import type { Metadata } from "next";
import { Calistoga, Nunito } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { AuthContextProvider } from "@/lib/firebase/AuthContext";
```

**Critical wrapping structure** (lines 36-58):
```
<html lang="de" className="${calistoga.variable} ${nunito.variable} h-full antialiased">
  <body className="min-h-full flex flex-col m-0 p-0 overflow-x-hidden font-sans">
    <AuthContextProvider>
      <TransitionProvider>
        <SyrupCursor />
        <Header />
        <main className="flex-grow pt-[68px]">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <AchievementBanner />
      </TransitionProvider>
    </AuthContextProvider>
  </body>
</html>
```

**Key takeaways for new pages:**
- Header and Footer are ALREADY rendered by layout — **do NOT add them in page files**
- `<main>` already has `pt-[68px]` to account for fixed header (68px tall)
- Pages render inside `{children}` — they should start with their own hero/header sections
- **ALL pages are wrapped** in `AuthContextProvider` and `TransitionProvider`
- Font CSS variables are available: `--font-calistoga` and `--font-nunito`

### 1.3 Template File (`src/app/template.tsx`)

```tsx
"use client";
import { LiquidTransition } from "@/components/interactive/LiquidTransition";
import { SyrupCursor } from "@/components/interactive/SyrupCursor";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SyrupCursor />
      <LiquidTransition>{children}</LiquidTransition>
    </>
  );
}
```

This wraps all page content in a liquid transition effect. New pages inherit this automatically.

### 1.4 Metadata Pattern

Only the root `layout.tsx` (lines 25-28) defines metadata:
```tsx
export const metadata: Metadata = {
  title: "Hey Fedee | Premium Waffeln & Desserts",
  description: "Entdecke bei Hey Fedee in Wetzlar...",
};
```

No individual pages export their own metadata. For new pages, **adding page-specific metadata is recommended** but follows no existing precedent — the Worker should use the standard Next.js pattern:
```tsx
export const metadata: Metadata = {
  title: "Page Title | Hey Fede",
  description: "...",
};
```
⚠️ Note: metadata exports are only valid in **Server Components** (no `"use client"`).

---

## 2. Available Shared Components

### 2.1 Layout Components (`src/components/layout/`)

| Component | File | Client? | Props | Usage |
|-----------|------|---------|-------|-------|
| `Header` | `Header.tsx` | Yes | none | Auto-included via layout.tsx — **DO NOT import in pages** |
| `Footer` | `Footer.tsx` | No | none | Auto-included via layout.tsx — **DO NOT import in pages** |

### 2.2 UI Components (`src/components/ui/`) — Available for Reuse

| Component | File | Client? | Import | Props | Usage Pattern |
|-----------|------|---------|--------|-------|---------------|
| **FadeUp** | `FadeUp.tsx` | Yes | `@/components/ui/FadeUp` | `children, delay?: number, className?: string` | Wrap sections for scroll-reveal animation. Used in about, home, legal, support pages. |
| **PrimaryButton** | `Btn.tsx` | Yes | `@/components/ui/Btn` | `children, onClick?, href?, large?, sectionBg?, className?, disabled?` | Main CTA button. Terracotta bg (#CC624C), white text, pill shape, particle burst on click. Use `sectionBg` to match surrounding section bg for the bite-notch effect. |
| **SecondaryButton** | `Btn.tsx` | Yes | `@/components/ui/Btn` | `children, onClick?, href?, className?` | Outlined terracotta button, fills on hover. |
| **SectionTitle** | `SectionTitle.tsx` OR `LayoutBlocks.tsx` | No | `@/components/ui/SectionTitle` or `@/components/ui/LayoutBlocks` | `children, sub?: string, center?: boolean, light?: boolean` | Section heading with optional subtitle. **Note:** Duplicated in both files — SectionTitle.tsx is standalone, LayoutBlocks.tsx also exports it. Use `@/components/ui/LayoutBlocks` for consistency with existing pages. |
| **StampBadge** | `StampBadge.tsx` OR `LayoutBlocks.tsx` | No | `@/components/ui/StampBadge` or `@/components/ui/LayoutBlocks` | `text: string, size?: number, rotate?: number, color?: string` | Circular dotted-border badge with curved text. Decorative accent element. |
| **TicketCard** | `LayoutBlocks.tsx` | No | `@/components/ui/LayoutBlocks` | `children, sectionBg?: string, className?: string` | Ticket-shaped card with dashed border and circular cut-outs on sides. |
| **WaveDivider** | `WaveDivider.tsx` | Yes | `@/components/ui/WaveDivider` | `fromColor: string, toColor: string, variant?: 1\|2\|3, flip?: boolean` | Animated SVG wave divider between sections. Responds to scroll velocity. |
| **FoodIcon** | `FoodIcon.tsx` | No | `@/components/ui/FoodIcon` | `icon?: string, label?: string, size?: string, shape?: string, className?: string` | Placeholder/icon component using lucide-react icons. Size options: 'xs', 'sm', 'md', 'lg', 'xl', 'sq', 'circ'. |
| **Logo** | `Logo.tsx` | No | `@/components/ui/Logo` | `size?: number` | SVG logo component. Default size 52. |
| **TransitionLink** | `TransitionLink.tsx` | Yes | `@/components/ui/TransitionLink` | `href: string, children, onClick?, className?, style?` | Wraps Next.js `<Link>` — use for internal navigation instead of raw `<Link>`. |
| **HoloTiltCard** | `HoloTiltCard.tsx` | Yes | `@/components/ui/HoloTiltCard` | item object | Card with holographic tilt effect for menu items. |
| **ScratchCard** | `ScratchCard.tsx` | Yes | `@/components/ui/ScratchCard` | children | Interactive scratch-to-reveal card. |
| **SloshingWave** | `SloshingWave.tsx` | — | `@/components/ui/SloshingWave` | — | Wave animation component. |
| **AchievementBanner** | `AchievementBanner.tsx` | — | `@/components/ui/AchievementBanner` | — | Toast-like achievement notification. Already in layout. |
| **TransitionProvider** | `TransitionProvider.tsx` | Yes | `@/components/ui/TransitionProvider` | children | Already wrapped in layout — DO NOT import in pages. |

### 2.3 Other Component Directories

| Directory | Components | Notes |
|-----------|-----------|-------|
| `src/components/cart/` | `CartDrawer.tsx` | Already in layout — DO NOT import |
| `src/components/menu/` | `MenuClient.tsx`, `WaffleCrafter.tsx` | Menu-specific components |
| `src/components/admin/` | `StoreToggle.tsx` | Admin-specific |
| `src/components/interactive/` | `SyrupCursor`, `LiquidTransition`, `PhysicsPlayground`, `ScratchCard` | Effects — SyrupCursor already in layout+template |
| `src/components/global/` | `Header.tsx`, `Footer.tsx`, `Logo.tsx` | **DEPRECATED — slated for deletion per PROJECT.md R5** |

---

## 3. Styling Conventions

### 3.1 CSS Variables (from `globals.css` lines 5-30)

```css
:root {
  /* Colors */
  --cream: #f5efe8;        /* Primary background */
  --soft-beige: #eedfcc;   /* Secondary background / cards */
  --waffle-peach: #E4C0A8; /* Accent warm — hero sections, icon backgrounds */
  --terracotta: #CC624C;   /* PRIMARY brand color — buttons, links, headings */
  --terracotta-dark: #b5523d;  /* Hover state for terracotta */
  --dark: #2d1f19;         /* Primary text */
  --dark-mid: #5c3d35;     /* Body text */
  --dark-soft: #9a7060;    /* Secondary/muted text */
  --mint: #BBD5C9;         /* Accent cool */
  --mint-dark: #8DB5A4;    /* Accent cool dark */
  --white: #fefefe;        /* White (not pure) */

  /* Border Radius */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 100px;

  /* Shadows */
  --shadow-sm: 0 2px 12px rgba(45,31,25,0.06);
  --shadow-md: 0 6px 28px rgba(45,31,25,0.10);
  --shadow-lg: 0 12px 48px rgba(45,31,25,0.14);
  --shadow-terra: 0 8px 32px rgba(204,98,76,0.22);

  /* Easings */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

### 3.2 Tailwind Custom Tokens (from `tailwind.config.ts`)

```ts
colors: {
  cream: "var(--cream)",        // bg-cream, text-cream
  beige: "var(--soft-beige)",   // bg-beige
  peach: "var(--waffle-peach)", // bg-peach
  terra: "var(--terracotta)",   // bg-terra, text-terra
  "terra-dark": "var(--terracotta-dark)",
  bark: "var(--dark)",          // text-bark
  "bark-mid": "var(--dark-mid)",
  "bark-soft": "var(--dark-soft)",
  mint: "var(--mint)",
  "mint-dark": "var(--mint-dark)",
}

fontFamily: {
  display: ["var(--font-calistoga)"],  // font-display
  body: ["var(--font-nunito)"],         // font-body
}

boxShadow: { sm, md, lg, terra }
borderRadius: { sm: 12px, md: 20px, lg: 32px, pill: 100px }
transitionTimingFunction: { spring, smooth }
```

### 3.3 Actual In-Use Styling Conventions

Despite having Tailwind tokens, **existing pages predominantly use raw hex values and inline styles** rather than the Tailwind token classes. This is a critical observation:

**Typography pattern (from all pages):**
```tsx
// Headings — Calistoga font
className="font-calistoga text-[clamp(2.4rem,6vw,4.2rem)] text-[#2d1f19] leading-[1.05]"

// Body text — Nunito font
className="font-nunito text-[0.97rem] text-[#5c3d35] leading-[1.88]"

// Muted/subtitle text
className="font-nunito text-[0.86rem] text-[#9a7060] leading-[1.7]"

// Bold labels
className="font-nunito font-bold text-[#2d1f19]"
className="font-nunito font-extrabold text-[0.74rem] text-[#CC624C] tracking-wider uppercase"
```

**Common section backgrounds:**
- Main page bg: `bg-[#f5efe8]` (cream)
- Alternate section bg: `bg-[#eedfcc]` (soft beige)
- Hero/accent bg: `bg-[#E4C0A8]` (waffle peach)
- Card bg: `bg-white` or `bg-[#f5efe8]`

**Page hero section pattern:**
```tsx
// Every page starts with a hero-like header section
<div className="bg-[#E4C0A8] pt-[110px] px-6 pb-12 text-center relative overflow-hidden">
  <div className="absolute inset-0 opacity-[0.3] dot-bg" />
  <div className="relative z-10">
    <h1 className="font-calistoga text-4xl text-[#2d1f19] mb-3">Page Title</h1>
    <p className="font-nunito text-[#5c3d35] max-w-sm mx-auto">Subtitle text</p>
  </div>
</div>
```

The `pt-[110px]` accounts for the fixed header (68px) plus spacing.

**Content section pattern:**
```tsx
<div className="max-w-[800px] mx-auto px-6 py-16">
  <FadeUp>
    {/* Page content */}
  </FadeUp>
</div>
```

Or wider sections:
```tsx
<div className="max-w-[1200px] mx-auto px-6">
```

### 3.4 Global CSS Utilities (from `globals.css`)

| Class | Purpose |
|-------|---------|
| `dot-bg` | Terracotta dot pattern overlay: `radial-gradient(circle, rgba(204,98,76,0.13) 1.5px, transparent 1.5px)` at 24px spacing |
| `scroll-hide` | Hides scrollbars (for horizontal scroll containers) |
| `animate-fade-in` | Used on page root divs: opacity 0→1 with translateY |
| `animate-blob-float` | Defined inline via `<style>` tags in pages (NOT global) |

### 3.5 Animation Pattern

Pages define their own keyframe animations via inline `<style dangerouslySetInnerHTML>` tags at the bottom:
```tsx
<style dangerouslySetInnerHTML={{ __html: `
  @keyframes blobFloat{0%,100%{transform:translate(0,0)}33%{transform:translate(6px,-10px)}66%{transform:translate(-5px,7px)}}
  .animate-blob-float { animation: blobFloat 9s ease-in-out infinite; }
  .animate-fade-in { animation: fadeIn 0.4s ease both; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
`}} />
```

---

## 4. TypeScript Patterns

### 4.1 tsconfig.json Configuration
- `strict: true` — full strict mode
- `target: "ES2017"`
- `jsx: "react-jsx"` (automatic JSX transform, so `import React` is technically optional but still used everywhere)
- Path alias: `@/*` → `./src/*`
- `moduleResolution: "bundler"`

### 4.2 Type Definitions (`src/types/index.ts`)

```typescript
export interface Category { id: string; label: string; icon: string; }
export interface MenuItem { id: string; name: string; price: string; desc: string; tag?: string; ticket?: boolean; }
export interface MenuSection { desc: string; note?: string; items: MenuItem[]; }
export interface Bestseller extends MenuItem { icon: string; }
export interface Review { id: string; name: string; stars: number; text: string; }
export interface AppConfig { name: string; tagline: string; address: string; phone: string; whatsapp: string; instagram: string; rating: number; reviewCount: number; }
export interface AppData { config: AppConfig; categories: Category[]; menu: Record<string, MenuSection>; bestsellers: Bestseller[]; reviews: Review[]; }
```

### 4.3 Typing Patterns Observed
- Component props use inline type annotations: `{ children: React.ReactNode, delay?: number }`
- Some components use `interface` declarations for props (e.g., `StampBadge.tsx`, `SectionTitle.tsx`)
- State hooks are typed: `useState<number>(0)`
- Event handlers typed: `(e: React.FormEvent) =>`
- Zustand store fully typed with interfaces
- `any` usage exists despite strict mode (e.g., `Btn.tsx:43` — `useState<any[]>([])`, `Footer.tsx:66` — `const IconComp = Icon as any`)
- Firebase import pattern: `import { db } from "@/lib/firebase/config"` then `import { collection, addDoc } from "firebase/firestore"`

---

## 5. Routing Conventions

### 5.1 App Router Structure
- Each route is a directory under `src/app/` with a `page.tsx` file
- No nested layouts observed (only root layout)
- No `loading.tsx` or `error.tsx` files found
- `template.tsx` exists at root level for transition animations
- Legal page uses hash-based navigation: `/legal#impressum`, `/legal#datenschutz`, `/legal#agb`

### 5.2 Navigation Links (from Header.tsx:44-48 and Footer.tsx:43-53)
**Header nav:**
- `/menu` → "Speisekarte"
- `/about` → "Über Uns"
- `/visit` → "Besuchen & Liefern"

**Footer nav:**
- `/` → "Startseite"
- `/menu` → "Speisekarte"
- `/about` → "Über Uns"
- `/visit` → "Besuchen & Liefern"
- `/legal#impressum` → "Impressum"
- `/legal#datenschutz` → "Datenschutz"
- `/legal#agb` → "AGB"

**Missing (per PROJECT.md line 58):** `/faq`, `/kontakt`, `/gutscheine`, `/reservierung`

### 5.3 Internal Navigation
Use `TransitionLink` (from `@/components/ui/TransitionLink`) instead of raw `next/link` `<Link>`:
```tsx
import { TransitionLink } from "@/components/ui/TransitionLink";
<TransitionLink href="/about">Über Uns</TransitionLink>
```

---

## 6. State Management

### 6.1 Zustand Store (`src/store/useStore.ts`)
```typescript
interface CartItem { id: string; name: string; price: string; quantity: number; desc?: string; }
interface AppState {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart, removeFromCart, updateQuantity, toggleCart, clearCart
}
export const useStore = create<AppState>((set) => ({ ... }));
```

Import pattern: `import { useStore } from "@/store/useStore";`

### 6.2 Firebase Auth
Auth context provided via `AuthContextProvider` in layout — available globally.
Import: `import { db } from "@/lib/firebase/config"` for Firestore access.

---

## 7. Color Scheme Quick Reference

| Name | Hex | CSS Variable | Tailwind Token | Usage |
|------|-----|-------------|----------------|-------|
| Cream | `#f5efe8` | `var(--cream)` | `cream` | Page background |
| Soft Beige | `#eedfcc` | `var(--soft-beige)` | `beige` | Section alt bg, cards, borders |
| Waffle Peach | `#E4C0A8` | `var(--waffle-peach)` | `peach` | Hero bg, icon circles, accent |
| **Terracotta** | `#CC624C` | `var(--terracotta)` | `terra` | **PRIMARY** — buttons, links, accents |
| Terracotta Dark | `#b5523d` | `var(--terracotta-dark)` | `terra-dark` | Hover state |
| Dark | `#2d1f19` | `var(--dark)` | `bark` | Headings, primary text |
| Dark Mid | `#5c3d35` | `var(--dark-mid)` | `bark-mid` | Body text |
| Dark Soft | `#9a7060` | `var(--dark-soft)` | `bark-soft` | Muted text, labels |
| Mint | `#BBD5C9` | `var(--mint)` | `mint` | Cool accent (rarely used) |
| White | `#fefefe` | `var(--white)` | — | Button text, cards |

**Note:** Existing code almost always uses raw hex values (e.g., `text-[#CC624C]`) rather than Tailwind tokens (e.g., `text-terra`). New code should follow this same pattern for consistency.

---

## 8. New Page Template (Copy-Paste Starter)

### For a simple static page (Server Component):
```tsx
import React from "react";
import { FadeUp } from "@/components/ui/FadeUp";

export default function PageNamePage() {
  return (
    <div className="min-h-screen bg-[#f5efe8]">
      {/* Hero Header */}
      <div className="bg-[#eedfcc] pt-[110px] px-6 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.22] dot-bg" />
        <div className="relative z-10">
          <h1 className="font-calistoga text-4xl text-[#2d1f19] mb-3">Seitentitel</h1>
          <p className="font-nunito text-[#5c3d35] max-w-sm mx-auto">Untertitel hier.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <FadeUp>
          {/* Page content goes here */}
        </FadeUp>
      </div>
    </div>
  );
}
```

### For an interactive page (Client Component):
```tsx
"use client";
import React, { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";

export default function PageNamePage() {
  const [state, setState] = useState(initialValue);

  return (
    <div className="min-h-screen bg-[#f5efe8]">
      {/* Hero Header */}
      <div className="bg-[#eedfcc] pt-[110px] px-6 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.22] dot-bg" />
        <div className="relative z-10">
          <h1 className="font-calistoga text-4xl text-[#2d1f19] mb-3">Seitentitel</h1>
          <p className="font-nunito text-[#5c3d35] max-w-sm mx-auto">Untertitel.</p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        <FadeUp>
          {/* Interactive content */}
          <PrimaryButton sectionBg="#f5efe8">
            Aktion →
          </PrimaryButton>
        </FadeUp>
      </div>
    </div>
  );
}
```

---

## Logic Chain

1. Analyzed 5 page files → extracted consistent hero header pattern with `pt-[110px]`, dot-bg overlay, Calistoga h1 + Nunito subtitle.
2. Root layout.tsx wraps all pages in AuthContextProvider + Header + Footer + CartDrawer → new pages must NOT duplicate these.
3. Tailwind config defines semantic tokens (cream, terra, bark, etc.) but actual code uses raw hex values → follow raw hex convention for consistency.
4. Two font families (Calistoga for headings, Nunito for body) loaded in layout.tsx as CSS variables → used via `font-calistoga` and `font-nunito` classes.
5. FadeUp is the most commonly reused component (used in 4/5 pages) → always wrap content sections with it.
6. SectionTitle and StampBadge exist in both `LayoutBlocks.tsx` and standalone files → import from `@/components/ui/LayoutBlocks` as existing pages do.
7. All text is in German, all prices in EUR (€) per PROJECT.md line 72-73.

## Caveats

- `SectionTitle` is duplicated: `LayoutBlocks.tsx` and standalone `SectionTitle.tsx`. The about page imports from `LayoutBlocks`, while `SectionTitle.tsx` exists as a standalone. Both are functionally identical. **Recommendation:** use `@/components/ui/LayoutBlocks` for import consistency.
- `StampBadge` similarly duplicated between `LayoutBlocks.tsx` and standalone `StampBadge.tsx`. Same recommendation.
- The `components/global/` directory (Header, Footer, Logo) is **deprecated** per PROJECT.md — do NOT import from it.
- Some `any` types exist in the codebase despite strict mode — avoid adding new ones.
- No existing page-level metadata exports — Worker should add them for SEO.
- The `LevelMap` component (used in about page) provides a floating side-nav with section anchors — useful for long pages.

## Conclusion

New pages should follow this checklist:
1. Create `src/app/<route>/page.tsx`
2. Use Server Component (no `"use client"`) unless state/hooks are needed
3. Start with `<div className="min-h-screen bg-[#f5efe8]">` as root
4. Include hero header with `pt-[110px]`, dot-bg overlay, Calistoga h1
5. Wrap content in `<FadeUp>` for scroll-reveal animation
6. Use `max-w-[800px]` or `max-w-[1200px]` for content width
7. Use raw hex color values for consistency with existing code
8. All text in German, prices in EUR
9. Import shared components from `@/components/ui/` using `@/` alias
10. Use `TransitionLink` instead of raw `<Link>` for internal navigation
11. Do NOT import Header, Footer, CartDrawer, SyrupCursor, TransitionProvider

## Verification Method

1. Check consistency by viewing any existing page: `cat src/app/about/page.tsx`
2. Verify layout wrapper: `cat src/app/layout.tsx` — confirms Header/Footer/Auth inclusion
3. Verify Tailwind tokens: `cat tailwind.config.ts`
4. Verify CSS variables: `cat src/app/globals.css`
5. Build verification: `npm run build` should pass after adding new pages following these patterns
