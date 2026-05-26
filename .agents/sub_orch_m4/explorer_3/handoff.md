# Explorer 3 — Handoff Report: UI Patterns, Routing & Component Structure

**Summary**: The admin section has a fully-built sidebar layout with navigation links already pointing to `/admin/orders`, `/admin/products`, and `/admin/settings` — but **none of those route directories exist yet**. The project uses a consistent design system (Tailwind + CSS custom properties) with lucide-react icons, framer-motion animations, and Zustand state management. The admin dashboard page establishes clear card/layout patterns that sub-pages should follow.

---

## 1. Observation — Routing Structure

### Next.js App Router Layout

```
src/app/
├── layout.tsx              # Root layout (fonts, Header, Footer, CartDrawer, AuthContext, TransitionProvider)
├── template.tsx            # Route transition wrapper (SyrupCursor + LiquidTransition)
├── globals.css             # CSS custom properties + Tailwind
├── page.tsx                # Home page (server component)
├── admin/
│   ├── layout.tsx          # Admin-specific layout with sidebar (client component)
│   └── page.tsx            # Admin dashboard/overview (client component)
├── auth/page.tsx           # Login/Register (client component)
├── menu/page.tsx           # Menu page (server component, delegates to MenuClient)
├── checkout/page.tsx       # Checkout flow (client component)
├── pickup-time/page.tsx    # Pickup time selection (client component)
├── order-hub/page.tsx      # Order landing (server component)
├── order-review/page.tsx
├── order-status/page.tsx   # Order tracking (client component)
├── profile/page.tsx        # User profile (server component, different design theme!)
├── loyalty/page.tsx
├── visit/page.tsx
├── about/page.tsx
├── support/page.tsx
├── legal/page.tsx
└── confirmation/page.tsx
```

### Admin Navigation Already Defined (admin/layout.tsx:8-13)

```typescript
const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];
```

**Key finding**: The sidebar navigation already links to `/admin/orders`, `/admin/products`, and `/admin/settings`, but **these routes don't exist yet**. Clicking them will show Next.js 404 pages.

### Active State Logic (admin/layout.tsx:36)

```typescript
const isActive = pathname === item.href;
```

**Note**: This uses exact match (`===`), not `startsWith()`. If sub-pages like `/admin/orders/[id]` are created, the "Orders" link won't highlight when viewing a specific order detail. Consider changing to `pathname.startsWith(item.href)` (with special handling for `/admin` root).

---

## 2. Observation — Tailwind Theme & Design System

### CSS Custom Properties (globals.css:5-30)

| Token | CSS Variable | Hex Value | Tailwind Class | Usage |
|-------|-------------|-----------|----------------|-------|
| Cream | `--cream` | `#f5efe8` | `bg-cream` / `text-cream` | Page backgrounds, light text |
| Beige | `--soft-beige` | `#eedfcc` | `bg-beige` | Secondary backgrounds, cards |
| Peach | `--waffle-peach` | `#E4C0A8` | `bg-peach` | Hero sections, icon backgrounds |
| Terracotta | `--terracotta` | `#CC624C` | `bg-terra` / `text-terra` | **Primary accent**: buttons, badges, active states |
| Terracotta Dark | `--terracotta-dark` | `#b5523d` | `bg-terra-dark` | Button hover states |
| Dark (Bark) | `--dark` | `#2d1f19` | `bg-bark` / `text-bark` | Main text, sidebar background |
| Dark Mid | `--dark-mid` | `#5c3d35` | `text-bark-mid` | Secondary text |
| Dark Soft | `--dark-soft` | `#9a7060` | `text-bark-soft` | Muted text, labels |
| Mint | `--mint` | `#BBD5C9` | `bg-mint` / `text-mint` | Active nav items, success states |
| Mint Dark | `--mint-dark` | `#8DB5A4` | `text-mint-dark` | Positive change indicators |

### Typography (tailwind.config.ts:23-26, layout.tsx:14-23)

| Font | Variable | Tailwind Class | Usage |
|------|----------|----------------|-------|
| Calistoga 400 | `--font-calistoga` | `font-display` | Headings, titles, prices |
| Nunito (variable) | `--font-nunito` | `font-body` | Body text, labels, buttons |

### Border Radius System (tailwind.config.ts:33-38)

| Token | Value | Tailwind Class |
|-------|-------|----------------|
| sm | 12px | `rounded-sm` |
| md | 20px | `rounded-md` |
| lg | 32px | `rounded-lg` |
| pill | 100px | `rounded-pill` |

**Note**: The admin page primarily uses `rounded-3xl` (24px) for cards and `rounded-xl` (12px) for nav items.

### Shadow System (tailwind.config.ts:27-32)

| Token | Tailwind Class | Usage |
|-------|----------------|-------|
| sm | `shadow-sm` | Subtle card elevation |
| md | `shadow-md` | Hover states |
| lg | `shadow-lg` | Active navigation, modals |
| terra | `shadow-terra` | Terracotta-tinted shadow for CTAs |

### Timing Functions (tailwind.config.ts:39-42)

| Token | Value | Usage |
|-------|-------|-------|
| spring | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bouncy interactions |
| smooth | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Gentle transitions |

---

## 3. Observation — Admin Layout Structure (admin/layout.tsx)

### Sidebar (Desktop)
- Width: `w-72` (288px)
- Background: `bg-bark` (dark #2d1f19)
- Text: `text-cream`
- Hidden on mobile: `hidden md:flex`
- Logo: "Hey Fede" in `text-3xl font-display text-mint`
- Subtitle: "Admin Portal" in `text-cream/60 text-sm`
- Navigation: `space-y-2`, items are `px-4 py-3 rounded-xl`
  - **Active**: `bg-mint text-bark font-medium shadow-lg shadow-mint/20`
  - **Inactive**: `text-cream/70 hover:bg-white/5 hover:text-cream`
- Bottom section: Store status toggle + Sign Out button
- Separated by `border-t border-white/10`

### Main Content Area
- `flex-1 flex flex-col h-screen overflow-hidden`
- Mobile header: `md:hidden bg-bark text-cream p-4`
- Content wrapper: `flex-1 overflow-y-auto p-6 md:p-12 scroll-hide`
  - **This is where `{children}` renders** — important: content gets `p-6 md:p-12` padding already

### Admin Dashboard Page Pattern (admin/page.tsx)
- Outermost: `max-w-6xl mx-auto space-y-10`
- Page header: `<header>` with motion.h1 (`text-4xl md:text-5xl font-display text-bark`) + subtitle (`text-bark/60 mt-2 text-lg`)
- Stats grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- Cards: `bg-white rounded-3xl p-6 shadow-sm border border-bark/5 hover:shadow-md transition-shadow duration-300`
- Stagger animation: `delay: 0.1 + i * 0.1` via framer-motion

---

## 4. Observation — Existing UI Components

### Reusable Components Available

| Component | Path | Purpose | Admin-Suitable? |
|-----------|------|---------|-----------------|
| `FadeUp` | `components/ui/FadeUp.tsx` | IntersectionObserver scroll-reveal | ✅ Good for initial page load |
| `PrimaryButton` (Btn) | `components/ui/Btn.tsx` | Animated terracotta button with particles | ❌ Too playful for admin |
| `SecondaryButton` (Btn) | `components/ui/Btn.tsx` | Outlined terracotta button | ⚠️ Could work for secondary actions |
| `PrimaryButton` (Button) | `components/ui/Button.tsx` | Simpler terracotta button | ⚠️ Simpler, still consumer-facing |
| `SectionTitle` | `components/ui/SectionTitle.tsx` or `LayoutBlocks.tsx` | Calistoga heading + subtitle | ❌ Consumer-facing style |
| `TicketCard` | `components/ui/TicketCard.tsx` | Dashed border card with perforations | ❌ Very specific style |
| `StoreToggle` | `components/admin/StoreToggle.tsx` | Online/Offline toggle switch | ✅ Admin-specific |
| `TransitionLink` | `components/ui/TransitionLink.tsx` | Animated page transitions | ❌ Not needed in admin |

### Component Gaps for Admin Pages

The following common admin components **do not exist yet** and need to be created:

1. **Table component** — No table/list component exists anywhere in the codebase
2. **Form inputs** — Auth page has inline inputs, no reusable form input component
3. **Badge/Status pill** — Used inline in profile page, not componentized
4. **Empty state** — Cart drawer has one, admin dashboard has one, but not a reusable component
5. **Loading spinner** — Auth page uses `Icons.Loader2 className="animate-spin"` inline
6. **Modal/Dialog** — None exists
7. **Tabs component** — Menu page has inline tab implementation, not reusable

---

## 5. Observation — Data Patterns

### State Management
- **Zustand** (`src/store/useStore.ts`): Cart state only (items, open/close)
- **Firebase Firestore** (`src/lib/firebase/config.ts`): Database access
- **AuthContext** (`src/lib/firebase/AuthContext.tsx`): Auth state via React context

### Data Fetching Patterns in 'use client' Pages

| Page | Pattern | Details |
|------|---------|---------|
| `checkout/page.tsx` | `addDoc` + `useState(isSubmitting)` | Direct Firestore write with loading state |
| `auth/page.tsx` | `useAuth()` hook + `useState(isLoading, error)` | Auth context + local state for form |
| `menu/MenuClient.tsx` | `useEffect` + `getDocs` | Load from Firestore in effect, fallback to static data |
| `admin/page.tsx` | Static mock data | No data fetching at all, hardcoded stats |

### Error Handling Patterns

| Page | Error Pattern |
|------|--------------|
| `checkout/page.tsx:33-35` | `catch (err) { console.error(...); alert(...) }` |
| `auth/page.tsx:127-131` | `{error && <div className="p-3 bg-red-50 text-red-600 ...">}` — inline error box |
| `menu/MenuClient.tsx:122` | `catch (err) { console.log("Using fallback...") }` — silent fallback |

### Loading State Patterns

| Page | Loading Pattern |
|------|----------------|
| `auth/page.tsx` | `useState(isLoading)` → disabled button + `Loader2` spinner icon |
| `checkout/page.tsx` | `useState(isSubmitting)` → disabled button + text change |
| `auth/page.tsx:163` | `<Suspense fallback={<Loader2 spinner>}>` for search params |

### Form Input Pattern (from auth/page.tsx:76-89)

```tsx
<div>
  <label className="block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2">
    Name
  </label>
  <div className="relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a7060]">
      <Icons.User size={18} />
    </div>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]"
      placeholder="Max Mustermann"
    />
  </div>
</div>
```

---

## 6. Observation — Icon Library

**lucide-react** (`^1.16.0`) is used universally.

- Imported as `import * as Icons from "lucide-react"` (most pages) or individual named imports
- Admin layout imports: `LayoutDashboard, ShoppingBag, Package, Settings, LogOut`
- Admin dashboard imports: `TrendingUp, Users, ShoppingBag, DollarSign, ArrowUpRight`
- Icons used at sizes: 4-8 (`w-4 h-4` to `w-8 h-8`), most commonly `w-5 h-5` or `w-6 h-6`

---

## 7. Observation — Key Dependencies

| Package | Version | Usage |
|---------|---------|-------|
| next | 16.2.6 | Framework (App Router) |
| react | 19.2.4 | UI |
| firebase | ^12.13.0 | Auth + Firestore |
| framer-motion | ^12.40.0 | Animations (heavy use in admin) |
| lucide-react | ^1.16.0 | Icons |
| zustand | ^5.0.13 | State management (cart only) |
| tailwind-merge | ^3.6.0 | Class merging utility |
| clsx | ^2.1.1 | Conditional class utility |

---

## 8. Logic Chain

1. **Routing gap**: Admin layout defines nav to 4 routes (lines 8-13), only `/admin` (dashboard) has a page file. The 3 sub-routes (`/admin/orders`, `/admin/products`, `/admin/settings`) need page files created.

2. **Layout is ready**: The admin layout wraps all children with sidebar + scrollable content area. New pages just need to export a default component — the layout handles everything else.

3. **Consistent page structure**: The admin dashboard (page.tsx) establishes a clear template:
   - `max-w-6xl mx-auto space-y-10` container
   - Header with `motion.h1` (display font, text-bark) + subtitle (text-bark/60)
   - Content in white cards: `bg-white rounded-3xl p-6/p-8 shadow-sm border border-bark/5`
   - Framer-motion stagger animations

4. **No reusable admin components**: Everything is inline. Each new page will either duplicate card/table patterns or (better) extract shared admin components.

5. **Active nav highlight bug risk**: The `pathname === item.href` exact match means nested routes like `/admin/orders/123` won't highlight the "Orders" nav item.

6. **Data layer**: Firebase Firestore is the backend. The `useMenu` hook (`src/hooks/useMenu.ts`) shows the pattern for fetching collections: `getDocs(collection(db, "collection_name"))`.

7. **Profile page anomaly**: `profile/page.tsx` uses a completely different dark theme (gray-950, orange gradient) — this is inconsistent with the rest of the app. Not relevant for admin but worth noting.

---

## 9. Caveats

- **No admin auth guard**: The admin layout doesn't check if the user is authenticated or has admin privileges. Anyone navigating to `/admin` sees the dashboard.
- **Profile page style inconsistency**: The profile page uses a completely different color scheme (dark gray/orange) from the rest of the app. This was likely a prototype/placeholder.
- **Template.tsx applies to all routes**: The root `template.tsx` wraps all routes (including admin) with `SyrupCursor` and `LiquidTransition`. These consumer-facing effects may be undesirable in the admin panel.
- **Not investigated**: Whether the project has any API routes (`src/app/api/`), testing setup details, or deployment configuration.
- **The admin `layout.tsx` is `"use client"`**: This means all admin pages inherit a client-side layout. Server components could still be used as page components, but they'd be wrapped in a client boundary.

---

## 10. Conclusion — Recommendations for Admin Sub-Pages

### Recommended Page Structure Template

Each new admin sub-page should follow this pattern (matching admin/page.tsx):

```tsx
"use client";

import { motion } from "framer-motion";
import { SomeIcon } from "lucide-react";

export default function AdminOrdersPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Page Header */}
      <header>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display text-bark"
        >
          Orders
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-bark/60 mt-2 text-lg"
        >
          Manage and track customer orders
        </motion.p>
      </header>

      {/* Content Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-8 shadow-sm border border-bark/5"
      >
        {/* Table / Form / Content */}
      </motion.div>
    </div>
  );
}
```

### Admin Card Design Tokens (from dashboard)

| Element | Classes |
|---------|---------|
| Card container | `bg-white rounded-3xl p-6 shadow-sm border border-bark/5 hover:shadow-md transition-shadow duration-300` |
| Card title | `text-2xl font-display text-bark` |
| Stat value | `text-3xl font-display text-bark` |
| Stat label | `text-bark/50 font-medium text-sm` |
| Positive indicator | `text-mint-dark text-sm font-medium bg-mint/10 px-2.5 py-1 rounded-full` |
| Icon container | `bg-cream p-3 rounded-2xl text-bark-mid` |
| Empty state icon bg | `w-16 h-16 bg-cream rounded-full flex items-center justify-center` |
| Empty state text | `text-bark font-medium` + `text-bark/50 text-sm` |
| Action link | `text-sm font-medium text-mint-dark hover:text-mint transition-colors` |

### Files to Create (directories needed)

```
src/app/admin/orders/page.tsx     # Orders list/management
src/app/admin/products/page.tsx   # Products/menu management  
src/app/admin/settings/page.tsx   # Store settings
```

### Component Reuse Opportunities

1. **Extract `AdminPageHeader`** — the header pattern (h1 + subtitle with stagger animation) repeats
2. **Create `AdminCard`** — the white rounded card pattern is the building block
3. **Create `AdminTable`** — no table component exists; needed for orders and products lists
4. **Create `AdminFormInput`** — adapt the auth page input pattern for admin forms (use admin colors: bark/cream vs consumer peach/terra)
5. **Create `StatusBadge`** — reusable status indicator (pending/preparing/ready/completed)
6. **Reuse `StoreToggle`** — already exists in `components/admin/StoreToggle.tsx`

### Active Nav Fix

Consider updating `admin/layout.tsx:36` from:
```typescript
const isActive = pathname === item.href;
```
to:
```typescript
const isActive = item.href === "/admin"
  ? pathname === "/admin"
  : pathname.startsWith(item.href);
```

---

## 11. Verification Method

1. **Routing**: Run `find src/app/admin -type f` — confirm only `layout.tsx` and `page.tsx` exist (no orders/products/settings dirs)
2. **Nav links**: View `src/app/admin/layout.tsx:8-13` — confirm navItems array has 4 entries with hrefs
3. **Theme**: View `src/app/globals.css:5-30` for CSS variables; view `tailwind.config.ts:11-22` for Tailwind mappings
4. **Icons**: `grep -r "lucide-react" src/ --include="*.tsx" -l` — confirms universal usage
5. **Build check**: `npm run build` — verify current project compiles without errors before adding new pages
