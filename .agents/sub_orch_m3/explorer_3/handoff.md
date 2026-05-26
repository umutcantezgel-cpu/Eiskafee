# Handoff Report — Explorer 3: App Patterns, Components & Auth Analysis

**Milestone 3: Profile & Loyalty Redesign**

## Observation

### 1. Auth Context API

**File:** `src/lib/firebase/AuthContext.tsx` (61 lines)

The auth system exposes a React context with the following interface:

```typescript
interface AuthContextType {
  user: User | null;        // Firebase User object (from firebase/auth)
  loading: boolean;          // true during initial auth state resolution
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}
```

**Hook:** `useAuth()` — exported from `@/lib/firebase/AuthContext`

**Usage pattern** (from `src/app/auth/page.tsx:20`):
```typescript
const { user, loading, login, register } = useAuth();
```

**Auth state checking** (from `src/app/auth/page.tsx:22-26`):
```typescript
useEffect(() => {
  if (user && !loading) {
    const redirect = searchParams.get("redirect");
    router.push(redirect || "/");
  }
}, [user, loading, router, searchParams]);
```

**Guard pattern** (from `src/app/auth/page.tsx:52`):
```typescript
if (loading || user) return null; // Show nothing while resolving or already logged in
```

**Firebase config safety check** (from `src/app/auth/page.tsx:31`):
```typescript
if (!auth.app.options.apiKey || auth.app.options.apiKey === "dummy" || auth.app.options.apiKey === "DEIN_API_KEY") {
  setError("Firebase Konfiguration fehlt. Bitte API-Keys eintragen.");
  return;
}
```

**Provider hierarchy** (from `src/app/layout.tsx:44-56`):
```
<AuthContextProvider>
  <TransitionProvider>
    <SyrupCursor />
    <Header />
    <main>{children}</main>
    <Footer />
    <CartDrawer />
    <AchievementBanner />
  </TransitionProvider>
</AuthContextProvider>
```

**Firebase config** (`src/lib/firebase/config.ts`) exports: `app`, `auth`, `db` (Firestore)

**User object shape:** Firebase `User` from `firebase/auth`. Key properties:
- `user.email` — user's email
- `user.displayName` — display name (may be null)
- `user.uid` — unique user ID
- `user.photoURL` — profile photo URL (may be null)

---

### 2. Import Conventions

**Path alias:** `@/` maps to `./src/*` (tsconfig.json line 22)

**Observed import patterns:**

| Source | Import Style | Example |
|--------|-------------|---------|
| UI components | Named import from `@/components/ui/` | `import { FadeUp } from "@/components/ui/FadeUp"` |
| Layout components | Named import from `@/components/layout/` | `import { Header } from "@/components/layout/Header"` |
| LayoutBlocks (barrel) | Named imports, multiple from one file | `import { SectionTitle, StampBadge } from "@/components/ui/LayoutBlocks"` |
| Lucide icons | Namespace import | `import * as Icons from "lucide-react"` |
| Lucide icons (alt) | Named destructured | `import { Menu as MenuIcon, X as XIcon, ... } from "lucide-react"` |
| Firebase auth | Named import | `import { useAuth } from "@/lib/firebase/AuthContext"` |
| Firebase config | Named import | `import { auth } from "@/lib/firebase/config"` |
| Zustand store | Named import | `import { useStore } from "@/store/useStore"` |
| Next.js | Standard imports | `import Link from "next/link"`, `import { useRouter } from "next/navigation"` |
| Framer Motion | Named import | `import { motion, AnimatePresence } from "framer-motion"` |
| Data | Named import | `import { HF_DATA } from "@/lib/data"` |
| Types | From centralized file | `src/types/index.ts` |

**Note:** Components use **named exports** (not default), e.g. `export function FadeUp(...)`. Pages use **default exports**: `export default function MenuPage()`.

---

### 3. `"use client"` Patterns

**When `"use client"` IS needed:**
- Components using React hooks (useState, useEffect, useRef): `Header.tsx`, `FadeUp.tsx`, `Btn.tsx`, `Button.tsx`
- Components using browser APIs (IntersectionObserver, window, localStorage): `FadeUp.tsx`, `Header.tsx`
- Components using Framer Motion: `WaveDivider.tsx`, `Btn.tsx`
- Components using Next.js client hooks: `useRouter`, `usePathname`, `useSearchParams`
- Auth context provider and consumers: `AuthContext.tsx`
- Pages with interactive forms/state: `src/app/auth/page.tsx`

**When `"use client"` is NOT needed:**
- Server Component pages that only render data: `src/app/menu/page.tsx` (7 lines, no directive)
- Server Component pages with static JSX: `src/app/about/page.tsx` (no directive! — 159 lines)
- Pure data-display components without state: `SectionTitle.tsx`, `LayoutBlocks.tsx`, `FoodIcon.tsx`
- Root layout: `src/app/layout.tsx` (no directive)

**Key pattern:** Pages that need auth state or form interaction use `"use client"`. Pages that compose server-compatible components stay as Server Components. The about page is an important reference — it's a **Server Component** that uses `FadeUp` (a client component) as a child without needing `"use client"` itself.

**`Suspense` wrapping pattern** (from auth page):
```tsx
export default function AuthPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AuthForm />  {/* Client component with useSearchParams */}
    </Suspense>
  );
}
```
Use `Suspense` when a client component uses `useSearchParams()`.

---

### 4. Tailwind CSS & Theme Patterns

#### CSS Custom Properties (globals.css)

| Variable | Hex | Semantic Use |
|----------|-----|-------------|
| `--cream` | `#f5efe8` | Page background |
| `--soft-beige` | `#eedfcc` | Section backgrounds, card backgrounds |
| `--waffle-peach` | `#E4C0A8` | Accent backgrounds, icon backgrounds |
| `--terracotta` | `#CC624C` | **Primary brand color** — CTAs, links, accents |
| `--terracotta-dark` | `#b5523d` | Hover state for terracotta |
| `--dark` | `#2d1f19` | Primary text color (bark) |
| `--dark-mid` | `#5c3d35` | Secondary text |
| `--dark-soft` | `#9a7060` | Tertiary/muted text, labels |
| `--mint` | `#BBD5C9` | Success/accent |
| `--mint-dark` | `#8DB5A4` | Dark mint accent |
| `--white` | `#fefefe` | Clean white |

#### Tailwind Extended Theme (tailwind.config.ts)

| Tailwind Class | Maps To |
|---------------|---------|
| `bg-cream`, `text-cream` | `var(--cream)` |
| `bg-terra`, `text-terra` | `var(--terracotta)` |
| `bg-bark`, `text-bark` | `var(--dark)` |
| `font-display` | `var(--font-calistoga)` — headings |
| `font-body` | `var(--font-nunito)` — body text |
| `shadow-terra` | `0 8px 32px rgba(204,98,76,0.22)` |
| `rounded-pill` | `100px` |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

#### Common Tailwind Class Patterns (from about page, auth page)

**Page wrapper:**
```html
<div className="min-h-screen bg-[#f5efe8]">
```

**Hero section:**
```html
<section className="bg-[#eedfcc] pt-[110px] px-6 pb-[88px] relative overflow-hidden">
```

**Content container:**
```html
<div className="max-w-[1200px] mx-auto px-6">
```

**Section padding:**
```html
<section className="py-20">
```

**Card styling:**
```html
<div className="bg-[#f5efe8] rounded-[22px] p-[30px_24px] shadow-[0_3px_14px_rgba(45,31,25,0.05)]">
```

**Typography — Headings (Calistoga):**
```html
<h1 className="font-calistoga text-[clamp(2.4rem,6vw,4.2rem)] text-[#2d1f19] leading-[1.05]">
<h2 className="font-calistoga text-[clamp(1.6rem,3vw,2.4rem)] text-[#2d1f19] leading-[1.12]">
```

**Typography — Body (Nunito):**
```html
<p className="font-nunito text-[0.97rem] text-[#5c3d35] leading-[1.88]">
```

**Label styling:**
```html
<label className="block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2">
```

**Input styling:**
```html
<input className="w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]">
```

**Terracotta accent span:**
```html
<span className="text-[#CC624C]">highlighted text</span>
```

**Decorative blob (background):**
```html
<div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-[rgba(204,98,76,0.1)] rounded-full blur-3xl pointer-events-none" />
```

**Note:** The app uses a **mix** of Tailwind utility classes and inline `style={{}}` objects. Inline styles are common for dynamic values and complex styling. Both patterns are acceptable.

---

### 5. Existing Component APIs

#### `SectionTitle` (two versions exist!)

**Version A:** `src/components/ui/SectionTitle.tsx` — uses hardcoded `fontFamily: "Calistoga,serif"`
**Version B:** `src/components/ui/LayoutBlocks.tsx` — uses CSS var `fontFamily: 'var(--font-calistoga), serif'`

Both have the same API:
```typescript
interface SectionTitleProps {
  children: React.ReactNode;  // Heading text
  sub?: string;               // Subtitle text below heading
  center?: boolean;           // Center alignment (default: true)
  light?: boolean;            // Light color scheme for dark backgrounds (default: false)
}
```
**Import preference:** Use `LayoutBlocks.tsx` version (uses CSS vars properly). Import: `import { SectionTitle } from "@/components/ui/LayoutBlocks"` — this is what the about page uses.

#### `StampBadge` (from LayoutBlocks.tsx)

```typescript
{ text: string, size?: number, rotate?: number, color?: string }
// Defaults: size=88, rotate=-12, color='#CC624C'
```

#### `TicketCard` (from LayoutBlocks.tsx)

```typescript
{ children: React.ReactNode, sectionBg?: string, className?: string }
// Default sectionBg='#f5efe8'
```

#### `FadeUp` (src/components/ui/FadeUp.tsx) — `"use client"`

```typescript
{ children: React.ReactNode, delay?: number, className?: string }
// Default: delay=0, className=''
```
Uses IntersectionObserver. Animates opacity 0→1 and translateY 20px→0.

#### `PrimaryButton` — TWO VERSIONS EXIST

**Button.tsx** (simpler):
```typescript
interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  large?: boolean;         // default: false
  sectionBg?: string;      // default: "#f5efe8"
  className?: string;
}
```

**Btn.tsx** (enhanced, with Framer Motion + particle burst):
```typescript
{
  children: React.ReactNode;
  onClick?: (e?: any) => void;
  href?: string;           // Optional — wraps in TransitionLink
  large?: boolean;         // default: false
  sectionBg?: string;      // default: '#f5efe8'
  className?: string;
  disabled?: boolean;      // default: false
}
```

**Import preference:** The auth page uses `import { PrimaryButton } from "@/components/ui/Btn"` — prefer the enhanced `Btn.tsx` version.

#### `SecondaryButton`

**Button.tsx:** Basic outline button
**Btn.tsx:** With Framer Motion spring animation + href support

Both share: terracotta border, hover fills with terracotta, pill shape.

#### `WaveDivider` — `"use client"` (Framer Motion)

```typescript
{ fromColor: string, toColor: string, variant?: 1|2|3, flip?: boolean }
```

#### `FoodIcon` (Server Component)

```typescript
{ icon?: string, label?: string, size?: string, shape?: string, className?: string }
// Sizes: 'xs'|'sm'|'md'|'lg'|'xl'|'sq'|'circ'
```

#### `TransitionLink` — `"use client"` (wraps Next.js Link)

```typescript
React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
```

---

### 6. Design System Colors & Spacing (from design-v2.jsx)

The blueprint defines these as the canonical system:

#### Colors (HF_C palette referenced in blueprints)

| Name | Hex | Usage |
|------|-----|-------|
| `cream` | `#f5efe8` | Page backgrounds |
| `beige` | `#eedfcc` | Section bg, subtle card bg, inactive stamps |
| `peach` | `#E4C0A8` | Icon backgrounds, decorative accents |
| `terra` | `#CC624C` | Primary CTAs, active states, brand accent |
| `terra-dark` | `#b5523d` | Hover/active CTA |
| `bark` | `#2d1f19` | Primary heading text |
| `bark-mid` / `barkM` | `#5c3d35` | Secondary body text |
| `bark-soft` / `barkS` | `#9a7060` | Tertiary text, labels, placeholders |
| `mint` | `#BBD5C9` | Success accents |
| `white` | `#fefefe` | Card backgrounds, button text |

#### Spacing Conventions

| Element | Spacing |
|---------|---------|
| Section vertical padding | `py-20` (80px) |
| Section horizontal padding | `px-6` (24px) |
| Content max-width | `max-w-[1200px]` or `max-w-[840px]` (hero) |
| Content centering | `mx-auto` |
| Card padding | `24px 28px` or `p-8` |
| Card border-radius | `rounded-[22px]` (cards), `rounded-3xl` (large cards), `rounded-xl` (inputs) |
| Grid gaps | `gap-6` (cards), `gap-[60px]` (hero grid) |
| Section bottom margin | `mb-10 md:mb-12` (section titles) |
| Header height | `68px`, main content `pt-[68px]` |

#### Typography System

| Use | Font | Size | Weight | Color |
|-----|------|------|--------|-------|
| Page title (h1) | Calistoga | `clamp(2.4rem,6vw,4.2rem)` | 400 (default) | `#2d1f19` |
| Section title (h2) | Calistoga | `clamp(1.7rem,4vw,2.8rem)` | 400 | `#2d1f19` |
| Card title (h3) | Calistoga | `1.22rem` | 400 | `#2d1f19` |
| Body text | Nunito | `0.92rem–0.97rem` | 400–600 | `#5c3d35` |
| Subtitle | Nunito | `0.92rem` | 400 | `#9a7060` |
| Labels | Nunito | `0.73rem–0.85rem` | 700–800 | `#9a7060` |
| Buttons | Nunito | `0.84rem–0.96rem` | 800 (extrabold) | `#fefefe` |
| Overline/badge | Nunito | `10px` | 900 | `#CC624C` |

#### Design Signature Elements

- **Bissspur (bite-mark):** 18×18 circle notch on bottom-left of primary buttons on hover
- **Dot background pattern:** `dot-bg` CSS class — radial gradient dots
- **Organic blob shapes:** Using border-radius like `58% 42% 52% 48%/48% 58% 42% 52%`
- **Wave dividers:** SVG organic waves between sections
- **Stamp badges:** Circular SVG with dashed border and curved text

---

### 7. TypeScript Patterns

**Strict mode:** `"strict": true` in tsconfig.json

**Interface patterns observed:**

1. **Props interfaces** — inline type annotations preferred over separate interfaces for small components:
   ```typescript
   // Simple props — inline (FadeUp, FoodIcon)
   export function FadeUp({ children, delay = 0 }: { children: React.ReactNode, delay?: number })
   
   // Complex props — named interface (Button.tsx)
   interface PrimaryButtonProps {
     children: React.ReactNode;
     onClick?: () => void;
     large?: boolean;
   }
   export function PrimaryButton({ children, onClick, large = false }: PrimaryButtonProps)
   ```

2. **Type exports** — centralized in `src/types/index.ts` for domain models
3. **Firebase types** — `User` imported from `firebase/auth`
4. **Event handlers** — `React.FormEvent`, `React.MouseEvent`
5. **`any` usage** — present in a few places (FoodIcon line 5-6, Btn line 43) despite strict mode. **Avoid** in new code.
6. **React.ReactNode** for children props
7. **Omit utility** — used in store: `Omit<CartItem, 'quantity'>`

---

### 8. Current Profile & Loyalty Pages — Problems to Fix

**Profile page (`src/app/profile/page.tsx`):**
- ❌ Uses **dark gray theme** (`bg-gray-950 text-white`) — not Terracotta/Cream
- ❌ All text in **English** — must be German
- ❌ Prices in **USD** (`$45.00`) — must be EUR
- ❌ Hardcoded data (no auth integration)
- ❌ No `useAuth()` hook usage
- ❌ Uses raw SVG icons instead of Lucide
- ❌ No shared component usage (FadeUp, SectionTitle, etc.)

**Loyalty page (`src/app/loyalty/page.tsx`):**
- ❌ Same dark theme issues
- ❌ English text throughout
- ❌ USD pricing
- ❌ Rewards in English with USD
- ❌ No auth integration
- ❌ No shared components

---

## Logic Chain

1. **Auth integration is straightforward**: The `useAuth()` hook provides all needed state. Profile/loyalty pages must be client components (need auth state). Pattern: check `loading` → show skeleton; check `!user` → redirect to `/auth?redirect=/profile`.

2. **Import the enhanced components from Btn.tsx**: The auth page (latest implemented page) imports from `@/components/ui/Btn`, not `Button.tsx`. Use `Btn.tsx` for consistency.

3. **Follow the about page pattern for structure**: Server Component page wrapper → client sub-components where needed. However, since profile/loyalty need auth state, the main page component must be `"use client"` OR wrap a client component in a server page (like the auth page's `Suspense` pattern).

4. **Use LayoutBlocks imports**: The about page imports `SectionTitle` and `StampBadge` from `@/components/ui/LayoutBlocks` — this is the canonical source.

5. **Colors must match**: Replace all `gray-*`, `orange-*`, gradient classes with the Terracotta/Cream palette. Background: `bg-[#f5efe8]`, cards: `bg-white` or `bg-[#eedfcc]`, accents: `text-[#CC624C]`.

6. **The blueprint `pages-account.jsx`** shows the canonical profile design: hero with peach background, stamp card, menu list items with icons, German text throughout.

---

## Caveats

- **Duplicate components exist**: `SectionTitle` in both `SectionTitle.tsx` and `LayoutBlocks.tsx`; `PrimaryButton` in both `Button.tsx` and `Btn.tsx`. Prefer the versions used by the most recent/well-implemented pages (LayoutBlocks, Btn).
- **No Firestore user profile schema exists yet**: The auth context only has Firebase Auth `User`. If profile needs additional data (address, phone, preferences), a Firestore user document schema will need to be defined.
- **No loyalty/points Firestore schema exists**: The blueprint shows stamp cards and points but no backend implementation exists. Profile/loyalty pages may need to be implemented with placeholder/mock data initially.
- **`any` usage**: Some existing components use `any` despite strict TypeScript. New implementations should avoid this.

---

## Conclusion

### Recommendations for Consistent Implementation

#### Profile Page Implementation:

1. **Structure:** Use `"use client"` directive. Import `useAuth` from `@/lib/firebase/AuthContext`.
2. **Auth guard pattern:**
   ```tsx
   const { user, loading, logout } = useAuth();
   if (loading) return <LoadingSkeleton />;
   if (!user) { router.push('/auth?redirect=/profile'); return null; }
   ```
3. **Layout:** Follow blueprint `PageAccount` structure:
   - Hero header with peach background (`bg-[#E4C0A8]`), user avatar circle (terracotta), user info
   - Stamp card section (white card, terracotta-filled dots)
   - Menu list items with icon circles (`bg-[#eedfcc]`, lucide icons in terracotta)
   - Logout button (terracotta outline)
4. **Typography:** `font-calistoga` for headings, `font-nunito` for body. All text in German.
5. **Components to use:** `FadeUp`, `SectionTitle` (from LayoutBlocks), `PrimaryButton` (from Btn)

#### Loyalty Page Implementation:

1. **Same auth guard pattern** as profile
2. **Background:** `bg-[#f5efe8]` (cream), NOT dark gray
3. **Stamp card visualization:** Terracotta filled stamps, beige empty stamps (from blueprint: 10 circles, filled with Cookie icon)
4. **Rewards section:** Cards with `bg-white rounded-[22px]` and `shadow-sm`, prices in EUR
5. **Navigation:** Use `TransitionLink` for back-to-profile link
6. **Components to use:** `FadeUp`, `SectionTitle`, `WaveDivider`, `StampBadge`, `TicketCard`

#### Import Template for New Pages:
```tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as Icons from "lucide-react";
import { useAuth } from "@/lib/firebase/AuthContext";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Btn";
import { WaveDivider } from "@/components/ui/WaveDivider";
```

#### Color Cheat Sheet for Implementers:
```
Background:     bg-[#f5efe8]  (cream)
Section alt:    bg-[#eedfcc]  (soft beige)
Cards:          bg-white rounded-[22px] shadow-[0_3px_14px_rgba(45,31,25,0.05)]
Primary CTA:    bg-[#CC624C] text-white hover:bg-[#b5523d]
Heading text:   text-[#2d1f19] font-calistoga
Body text:      text-[#5c3d35] font-nunito
Label text:     text-[#9a7060] font-nunito font-bold text-xs uppercase tracking-wider
Accent/link:    text-[#CC624C]
Icon bg circle: bg-[#eedfcc] or bg-[#E4C0A8], icon color: #CC624C
```

---

## Verification Method

1. **Check auth integration:** Run `grep -r "useAuth" src/app/profile/ src/app/loyalty/` after implementation
2. **Check language:** `grep -rn "[A-Z][a-z]*\b" src/app/profile/page.tsx` — verify no English text remains
3. **Check theme colors:** `grep -n "gray-" src/app/profile/page.tsx src/app/loyalty/page.tsx` — should return zero results
4. **Check imports:** Verify `@/components/ui/Btn` (not `Button`) and `@/components/ui/LayoutBlocks` (not `SectionTitle.tsx`) are used
5. **Build test:** `npm run build` — should compile without TypeScript errors
6. **Visual verification:** Pages should match Terracotta/Cream palette, German text, EUR currency
