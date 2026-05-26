# Handoff Report — Explorer 1 (Milestone 4: Admin Subroutes)

**Summary**: The admin section has a sidebar layout with 4 nav links (Dashboard, Orders, Products, Settings) but **only the Dashboard page exists** — no subroute directories (`orders/`, `products/`, `settings/`) are present yet. All admin code uses `"use client"`, Framer Motion animations, Tailwind with the project's custom color palette (bark, cream, mint, terra), and lucide-react icons. Firestore is used via `db` imported from `@/lib/firebase/config`.

---

## 1. Observation

### 1.1 Admin Directory Contents
- **Path**: `src/app/admin/`
- **Files**: `layout.tsx` (91 lines), `page.tsx` (92 lines)
- **Subdirectories**: **NONE** — no `orders/`, `products/`, `menu/`, or `settings/` directories exist
- **Note**: Layout nav already references `/admin/orders`, `/admin/products`, `/admin/settings` — these are dead links

### 1.2 Admin Layout (`src/app/admin/layout.tsx`)

**Structure**: Sidebar + Main content area

```
┌────────────────────────────────────────────────┐
│ ┌──────────┐ ┌──────────────────────────────┐  │
│ │ Sidebar  │ │ Main Content                 │  │
│ │ w-72     │ │ flex-1                       │  │
│ │ bg-bark  │ │ p-6 md:p-12                  │  │
│ │ text-cream│ │ overflow-y-auto              │  │
│ │          │ │ {children}                   │  │
│ └──────────┘ └──────────────────────────────┘  │
│                bg-cream                         │
└────────────────────────────────────────────────┘
```

**Key patterns**:
- Line 1: `"use client";` — uses `usePathname()` hook
- Line 3–6: Imports: `Link` from next/link, `usePathname` from next/navigation, icons from `lucide-react`, `StoreToggle` from `@/components/admin/StoreToggle`
- Line 8–13: Navigation defined as array of `{ name, href, icon }` objects
- Line 20: `const pathname = usePathname();` for active-route detection
- Line 36: Active state: `pathname === item.href` (exact match, not startsWith!)
- Line 43–47: Active nav style: `bg-mint text-bark font-medium shadow-lg shadow-mint/20`
- Line 46: Inactive nav style: `text-cream/70 hover:bg-white/5 hover:text-cream`
- Line 57–72: Bottom section: Store Status toggle + Sign Out button
- Line 76–86: Main area: `flex-1 flex flex-col h-screen overflow-hidden` with scrollable content area
- Line 78–81: Mobile header (shown `md:hidden`), no mobile menu toggle implemented yet
- **Sidebar hidden on mobile**: `hidden md:flex` on aside (line 25)

**Nav items already defined** (lines 8–13):
| Name | Href | Icon |
|---|---|---|
| Dashboard | `/admin` | `LayoutDashboard` |
| Orders | `/admin/orders` | `ShoppingBag` |
| Products | `/admin/products` | `Package` |
| Settings | `/admin/settings` | `Settings` |

> ⚠️ **Important**: The nav references `/admin/products` (not `/admin/menu`). The task description says to create `/admin/menu`. This is a **conflict** that needs resolution.

### 1.3 Admin Dashboard Page (`src/app/admin/page.tsx`)

**Key patterns**:
- Line 1: `"use client";`
- Line 3–4: Imports `motion` from `framer-motion`, icons from `lucide-react`
- Lines 6–11: Static mock data array (`stats`) with hardcoded values (no Firestore)
- Line 13: Default export named `AdminOverview`
- Lines 17–23: Header with `motion.h1` animation: `initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}`
- Line 20: Heading style: `text-4xl md:text-5xl font-display text-bark`
- Line 29: Subtitle style: `text-bark/60 mt-2 text-lg`
- Line 35: Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- Line 44: Card style: `bg-white rounded-3xl p-6 shadow-sm border border-bark/5 hover:shadow-md transition-shadow duration-300`
- Lines 39–43: Staggered animations: `transition={{ delay: 0.1 + i * 0.1 }}`
- Line 47: Icon container: `bg-cream p-3 rounded-2xl text-bark-mid`
- Line 50: Badge/change indicator: `text-mint-dark text-sm font-medium bg-mint/10 px-2.5 py-1 rounded-full`
- Line 57: Label style: `text-bark/50 font-medium text-sm`
- Line 58: Value style: `text-3xl font-display text-bark`
- Line 70: Section card: `bg-white rounded-3xl p-8 shadow-sm border border-bark/5`
- Line 73: Section heading: `text-2xl font-display text-bark`
- Line 80: Empty-state icon container: `w-16 h-16 bg-cream rounded-full flex items-center justify-center`
- **Language**: Currently English ("Overview", "Welcome back!", "Recent Orders", etc.) — PROJECT.md says ALL text should be in German

### 1.4 StoreToggle Component (`src/components/admin/StoreToggle.tsx`)

- Line 1: `"use client";`
- Line 3–4: Imports `useState` from React, `motion` from framer-motion
- Line 7: Local state: `const [isOnline, setIsOnline] = useState(false);`
- **No Firestore integration** — toggle state is local only, not persisted
- Line 10: Container style: `bg-white/80 backdrop-blur-md px-6 py-4 rounded-pill border border-bark/10 shadow-sm`
- Lines 20–22: Toggle uses mint color when on (`bg-mint`), dark when off (`bg-bark/20`)
- Lines 25–36: Uses `motion.span` with spring animation for toggle knob
- Labels: "Offline" / "Online"

### 1.5 Firebase Configuration & Patterns

**`src/lib/firebase/config.ts`** (lines 1–20):
- Exports: `app`, `auth`, `db`
- Pattern: `import { db } from "@/lib/firebase/config";`
- Firestore instance via `getFirestore(app)`

**Firestore collection patterns observed in codebase**:

| File | Collection | Operation | Import |
|---|---|---|---|
| `checkout/page.tsx:26` | `"orders"` | `addDoc(collection(db, "orders"), {...})` | `collection, addDoc` from `firebase/firestore` |
| `support/page.tsx:37` | `"support_messages"` | `addDoc(collection(db, "support_messages"), {...})` | `collection, addDoc` from `firebase/firestore` |
| `components/menu/MenuClient.tsx:104` | `"categories"` | `getDocs(collection(db, "categories"))` | `collection, getDocs` from `firebase/firestore` |
| `components/menu/MenuClient.tsx:110` | `"menuItems"` | `getDocs(collection(db, "menuItems"))` | `collection, getDocs` from `firebase/firestore` |
| `hooks/useMenu.ts:20` | `"menu_items"` | `getDocs(collection(db, "menu_items"))` | `collection, getDocs` from `firebase/firestore` |

> ⚠️ **Naming inconsistency**: `"menuItems"` (camelCase in MenuClient.tsx) vs `"menu_items"` (snake_case in useMenu.ts)

**No `onSnapshot` (realtime listeners) used anywhere in the codebase** — all reads are one-time `getDocs`.

**AuthContext** (`src/lib/firebase/AuthContext.tsx`):
- Provides `useAuth()` hook with `user`, `loading`, `login`, `register`, `logout`
- Pattern: `import { useAuth } from "@/lib/firebase/AuthContext";`

### 1.6 Project Architecture (from PROJECT.md)

| Aspect | Detail |
|---|---|
| Framework | Next.js 16 App Router, React 19, TypeScript |
| Styling | Tailwind CSS with custom CSS variables palette |
| State | Zustand (`useStore`) for cart |
| Backend | Firebase Auth + Firestore |
| Language | **ALL text must be in German** |
| Currency | **ALL prices in EUR (€)** |
| Type safety | Strict TypeScript (no `any`) |
| Animations | Framer Motion for client components |

**Milestone 4 scope** (from PROJECT.md line 51): "R6: Create /admin/orders, /admin/menu, /admin/settings"

### 1.7 Design System (from `tailwind.config.ts` + `globals.css`)

**Colors** (CSS variables → Tailwind tokens):
| Token | CSS Variable | Hex |
|---|---|---|
| `cream` | `--cream` | `#f5efe8` |
| `beige` | `--soft-beige` | `#eedfcc` |
| `peach` | `--waffle-peach` | `#E4C0A8` |
| `terra` | `--terracotta` | `#CC624C` |
| `terra-dark` | `--terracotta-dark` | `#b5523d` |
| `bark` | `--dark` | `#2d1f19` |
| `bark-mid` | `--dark-mid` | `#5c3d35` |
| `bark-soft` | `--dark-soft` | `#9a7060` |
| `mint` | `--mint` | `#BBD5C9` |
| `mint-dark` | `--mint-dark` | `#8DB5A4` |

**Border Radius**: `sm` (12px), `md` (20px), `lg` (32px), `pill` (100px)

**Fonts**: `font-display` = Calistoga (headings), `font-body` = Nunito (body)

### 1.8 Existing Types (`src/types/index.ts`)

Types defined: `Category`, `MenuItem`, `MenuSection`, `Bestseller`, `Review`, `AppConfig`, `AppData`. No admin-specific types (Order, AdminSettings, etc.) exist.

### 1.9 Menu Data (`src/lib/data.ts`)

Static menu data exported as `HF_DATA` with structure:
- `config` — store info (name, address, phone, etc.)
- `categories` — 10 categories with id/label/icon
- `menu` — `Record<string, MenuSection>` with items per category
- `bestsellers`, `reviews`

Exported aliases: `CATEGORIES`, `MENU`, `BESTSELLERS`, `REVIEWS`

---

## 2. Logic Chain

1. **Layout already supports subroutes**: The sidebar nav (layout.tsx:8–13) already defines links to `/admin/orders`, `/admin/products`, `/admin/settings`. The layout wraps `{children}`, so any new `page.tsx` inside `admin/orders/`, `admin/products/` (or `admin/menu/`), `admin/settings/` will automatically render inside the existing sidebar layout.

2. **Active route detection needs attention**: Layout uses `pathname === item.href` (exact match). This works for `/admin` but would NOT mark "Orders" as active when on `/admin/orders/123`. If sub-pages exist under orders, a `startsWith` check would be better.

3. **Nav naming conflict**: Layout says "Products" with href `/admin/products` (line 11), but PROJECT.md milestone says `/admin/menu`. The implementer needs to decide:
   - Option A: Change the layout's nav to say "Menu" and link to `/admin/menu` (matches PROJECT.md)
   - Option B: Create `/admin/products` directory (matches current layout)
   - **Recommendation**: Use `/admin/menu` per PROJECT.md, update layout nav to match

4. **Pattern to follow for new pages**: Each page should:
   - Start with `"use client";`
   - Import `motion` from `framer-motion` for animations
   - Import icons from `lucide-react`
   - Use the card pattern: `bg-white rounded-3xl p-6 shadow-sm border border-bark/5`
   - Use page header pattern: `motion.h1` with `text-4xl md:text-5xl font-display text-bark`
   - Wrap in `max-w-6xl mx-auto space-y-10`
   - Use staggered fade-in animations
   - Use German text

5. **Firestore access pattern**: Import `{ db } from "@/lib/firebase/config"`, then use `collection(db, "collectionName")` with Firestore SDK methods (`getDocs`, `addDoc`, `doc`, `updateDoc`, `deleteDoc`, `onSnapshot`).

6. **No existing admin component library**: Only `StoreToggle` exists in `src/components/admin/`. New admin pages will likely need additional reusable components (tables, modals, forms).

7. **StoreToggle needs Firestore**: Currently local state only. The Settings page should persist store status to Firestore.

---

## 3. Caveats

- **No admin blueprint JSX**: Unlike other pages (profile, checkout, etc.) there are no blueprint `.jsx` files for admin subroutes in the reference directory. Designs will need to be created from scratch following the existing admin aesthetic.
- **English text on current admin page**: The existing Dashboard page uses English text, conflicting with PROJECT.md's "ALL text must be German" requirement. New pages should use German, and the dashboard should be updated too (but that's outside M4 scope).
- **No auth guard on admin routes**: There's no middleware or route guard checking if the user is authenticated or has admin privileges. This is a security gap but likely outside M4 scope.
- **Firestore collection name inconsistency**: `"menuItems"` vs `"menu_items"` exists in the codebase already. The admin pages should use consistent naming.
- **useMenu hook has `[key: string]: any`** (line 9 of useMenu.ts) — violates the strict TypeScript rule.

---

## 4. Conclusion

### Files to Create

| Route | Directory | File |
|---|---|---|
| `/admin/orders` | `src/app/admin/orders/` | `page.tsx` |
| `/admin/menu` | `src/app/admin/menu/` | `page.tsx` |
| `/admin/settings` | `src/app/admin/settings/` | `page.tsx` |

### Layout Update Required

The `src/app/admin/layout.tsx` nav items array (lines 8–13) needs updating:
- Change `{ name: "Products", href: "/admin/products", icon: Package }` → `{ name: "Speisekarte", href: "/admin/menu", icon: Package }` (or keep English "Menu" depending on style preference for admin — the sidebar uses English currently)

### Pattern Template for Each New Page

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SomeIcon } from "lucide-react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export default function AdminPageName() {
  // State
  const [data, setData] = useState<Type[]>([]);
  const [loading, setLoading] = useState(true);

  // Firestore fetch
  useEffect(() => {
    // ... getDocs or onSnapshot
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <header>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display text-bark"
        >
          Page Title
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-bark/60 mt-2 text-lg"
        >
          Subtitle text
        </motion.p>
      </header>

      {/* Content cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-6 shadow-sm border border-bark/5"
      >
        {/* ... */}
      </motion.div>
    </div>
  );
}
```

### Styling Quick Reference

| Element | Tailwind Classes |
|---|---|
| Page wrapper | `max-w-6xl mx-auto space-y-10` |
| Page heading | `text-4xl md:text-5xl font-display text-bark` |
| Subtitle | `text-bark/60 mt-2 text-lg` |
| Content card | `bg-white rounded-3xl p-6 shadow-sm border border-bark/5` |
| Section heading | `text-2xl font-display text-bark` |
| Label text | `text-bark/50 font-medium text-sm` |
| Large value | `text-3xl font-display text-bark` |
| Icon container | `bg-cream p-3 rounded-2xl text-bark-mid` |
| Badge (positive) | `text-mint-dark text-sm font-medium bg-mint/10 px-2.5 py-1 rounded-full` |
| Empty state icon | `w-16 h-16 bg-cream rounded-full flex items-center justify-center` |
| Empty state text | `text-bark font-medium` + `text-bark/50 text-sm` |
| Toggle on | `bg-mint` |
| Toggle off | `bg-bark/20` |
| Grid layout | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` |
| Button text link | `text-sm font-medium text-mint-dark hover:text-mint transition-colors` |

### Firestore Collections for Admin Pages

| Page | Collection(s) | Operations Needed |
|---|---|---|
| Orders | `"orders"` | Read all, update status, real-time subscribe |
| Menu | `"menuItems"` or `"menu_items"` | CRUD operations |
| Settings | New: `"settings"` or `"store_config"` | Read/write store status, hours, info |

### Recommended New Types (for `src/types/index.ts`)

```typescript
export interface Order {
  id: string;
  items: { name: string; variant: string; quantity: number; price: number }[];
  total: number;
  status: "pending" | "preparing" | "ready" | "completed" | "cancelled";
  createdAt: string;
  customerName?: string;
}

export interface StoreSettings {
  isOnline: boolean;
  openingHours?: Record<string, { open: string; close: string }>;
  // ...
}
```

---

## 5. Verification Method

1. **Confirm no subroutes exist**: `ls src/app/admin/` — should show only `layout.tsx` and `page.tsx`
2. **Confirm nav links**: `grep "href" src/app/admin/layout.tsx` — shows `/admin`, `/admin/orders`, `/admin/products`, `/admin/settings`
3. **Confirm layout wraps children**: `grep "children" src/app/admin/layout.tsx` — shows `{children}` rendered inside main area
4. **Confirm Firestore export**: `grep "export" src/lib/firebase/config.ts` — shows `export { app, auth, db }`
5. **After implementation**: Navigate to `/admin/orders`, `/admin/menu`, `/admin/settings` in browser — pages should render inside the sidebar layout
